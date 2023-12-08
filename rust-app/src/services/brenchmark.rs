use crate::pb;
use futures_util::Future;
use tokio::select;
use tokio_util::sync::CancellationToken;
use tonic::{Request, Response, Status};

#[derive(Debug, Default)]
pub struct BrenchSvc {}

impl BrenchSvc {
    pub fn get_svc() -> pb::bench_mark_svc_server::BenchMarkSvcServer<BrenchSvc> {
        pb::bench_mark_svc_server::BenchMarkSvcServer::new(BrenchSvc::default())
    }
}

#[tonic::async_trait]
impl pb::bench_mark_svc_server::BenchMarkSvc for BrenchSvc {
    async fn execute_bench_mark(
        &self,
        _req: Request<pb::BenchReq>,
    ) -> Result<Response<pb::BenchRes>, Status> {
        let req_future = async move {
            let req = _req.into_inner();
            let len = req.len;

            let start_time = std::time::Instant::now();

            let mut counter: u64 = 0;
            for _i in 0..len {
                counter += 1;
                if counter % 100000000 == 0 {
                    println!("Iteration Rust: {}", counter);
                }
            }

            let elapsed = start_time.elapsed();

            let reply = pb::BenchRes {
                status: pb::Status::Ok as i32,
                message: format!("Executed {} iterations in {:?} in Rust", counter, elapsed),
            };

            Ok(Response::new(reply))
        };

        let cancel_future = async move {
            println!("Cancel future");
            Err(tonic::Status::cancelled("Cancelled"))
        };

        with_cancelation_handler(req_future, cancel_future).await
    }
}

async fn with_cancelation_handler<F, G>(
    req_future: F,
    cancel_future: G,
) -> Result<Response<pb::BenchRes>, Status>
where
    F: Future<Output = Result<Response<pb::BenchRes>, Status>> + Send + 'static,
    G: Future<Output = Result<Response<pb::BenchRes>, Status>> + Send + 'static,
{
    let token = CancellationToken::new();
    let _drop_guard = token.clone().drop_guard();

    let select_task = tokio::spawn(async move {
        select! {
            res = req_future => res,
            _ = token.cancelled() => cancel_future.await,
        }
    });

    select_task.await.unwrap()
}
