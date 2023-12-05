use crate::pb;
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
        _req: tonic::Request<pb::BenchReq>,
    ) -> Result<tonic::Response<pb::BenchRes>, tonic::Status> {
        let req = _req.into_inner();
        let len = req.len;

        let mut counter: u64 = 0;
        for _i in 0..len {
            counter += 1;
            if counter % 100000000 == 0 {
                println!("counter: {}", counter);
            }
        }
        let reply = pb::BenchRes {
            message: format!("Executed {} iterations in rust", counter),
        };
        Ok(tonic::Response::new(reply))
    }
}
