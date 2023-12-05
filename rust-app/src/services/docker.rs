use crate::pb;
use bollard::Docker;
use bollard::{container::LogOutput, image::CreateImageOptions};
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

        let docker = Docker::connect_with_socket_defaults().unwrap();

        let options = Some(CreateImageOptions {
            from_image: PY_IMAGE,
            ..Default::default()
        });

        docker
            .create_image(options, None, None)
            .try_collect::<Vec<_>>()
            .await
            .unwrap();

        let options = bollard::container::Config {
            image: Some(PY_IMAGE),
            cmd: Some(vec!["python", "-c", &code]),
            tty: Some(true),
            attach_stdin: Some(true),
            attach_stdout: Some(true),
            attach_stderr: Some(true),
            open_stdin: Some(true),
            ..Default::default()
        };

        let container_id = docker
            .create_container::<&str, &str>(None, options)
            .await
            .unwrap()
            .id;

        docker
            .start_container::<&str>(&container_id, None)
            .await
            .unwrap();

        let logs_option = bollard::container::LogsOptions {
            stdout: true,
            stderr: true,
            follow: true,
            ..Default::default()
        };
        let output: Vec<LogOutput> = docker
            .logs::<&str>(&container_id, Some(logs_option))
            .try_collect::<Vec<_>>()
            .await
            .unwrap();

        docker.stop_container(&container_id, None).await.unwrap();

        docker.remove_container(&container_id, None).await.unwrap();

        let (tx, rx) = tokio::sync::mpsc::channel(4);

        tokio::spawn(async move {
            for line in output {
                match line {
                    LogOutput::Console { message } => {
                        tx.send(Ok(pb::ExecuteCodeResp {
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
