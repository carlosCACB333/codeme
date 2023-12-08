use crate::pb;
use bollard::container::LogOutput;
use bollard::Docker;
use futures_util::TryStreamExt;
use tonic::{Response, Status};

#[derive(Debug, Default)]
pub struct DockerSvc {}

impl DockerSvc {
    pub fn get_svc() -> pb::docker_svc_server::DockerSvcServer<DockerSvc> {
        pb::docker_svc_server::DockerSvcServer::new(DockerSvc::default())
    }
}

const PY_IMAGE: &str = "python:3.12";

#[tonic::async_trait]
impl pb::docker_svc_server::DockerSvc for DockerSvc {
    type ExecuteCodeStream =
        tokio_stream::wrappers::ReceiverStream<Result<pb::ExecuteCodeResp, Status>>;

    async fn execute_code(
        &self,
        _req: tonic::Request<pb::ExecuteCodeReq>,
    ) -> std::result::Result<tonic::Response<Self::ExecuteCodeStream>, tonic::Status> {
        let req = _req.into_inner();
        let code = req.code;
        let lang = req.lang;

        if lang != "python" {
            return Err(Status::invalid_argument("Language not supported"));
        }

        let docker = Docker::connect_with_socket_defaults();
        if docker.is_err() {
            return Err(Status::internal("Failed to connect to docker"));
        }

        let docker = docker.unwrap();

        let container_cfg = bollard::container::Config {
            image: Some(PY_IMAGE),
            cmd: Some(vec!["python", "-c", &code]),
            network_disabled: Some(true),
            tty: Some(true),

            host_config: Some(bollard::service::HostConfig {
                auto_remove: Some(true),
                cpu_shares: Some(100),
                restart_policy: Some(bollard::service::RestartPolicy {
                    maximum_retry_count: Some(0),
                    name: Some(bollard::service::RestartPolicyNameEnum::NO),
                }),
                ..Default::default()
            }),
            ..Default::default()
        };

        let container = docker
            .create_container::<&str, &str>(None, container_cfg)
            .await;

        if let Err(e) = container {
            return Err(Status::internal(format!(
                "Failed to create container: {}",
                e
            )));
        }

        let container_id = container.unwrap().id;

        if docker
            .start_container::<&str>(&container_id, None)
            .await
            .is_err()
        {
            return Err(Status::internal("Failed to start container"));
        }

        let logs_option = bollard::container::LogsOptions {
            stdout: true,
            stderr: true,
            follow: true,
            ..Default::default()
        };
        let output = docker
            .logs::<&str>(&container_id, Some(logs_option))
            .try_collect::<Vec<_>>()
            .await;

        if let Err(e) = output {
            return Err(Status::internal(format!("Failed to get logs: {}", e)));
        }

        let (tx, rx) = tokio::sync::mpsc::channel(4);

        tokio::spawn(async move {
            for line in output.unwrap() {
                match line {
                    LogOutput::Console { message } => {
                        tx.send(Ok(pb::ExecuteCodeResp {
                            status: pb::Status::Ok.into(),
                            output: String::from_utf8(message.to_vec()).unwrap(),
                        }))
                        .await
                        .unwrap();
                    }

                    _ => {
                        println!("Unknown log output");
                    }
                }
            }
        });

        Ok(Response::new(tokio_stream::wrappers::ReceiverStream::new(
            rx,
        )))
    }
}
