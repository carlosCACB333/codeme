use crate::pb::bench_mark_service_server::BenchMarkService;
use crate::pb::{GenericReq, GenericRes, Status};
#[derive(Debug, Default)]
pub struct MyBrenchMarkService {}

#[tonic::async_trait]
impl BenchMarkService for MyBrenchMarkService {
    async fn execute_bench_mark(
        &self,
        _req: tonic::Request<GenericReq>,
    ) -> Result<tonic::Response<GenericRes>, tonic::Status> {
        let val = _req.get_ref().id.clone();
        let num = val.parse::<u64>().unwrap();
        let mut counter: u64 = 0;
        for _i in 0..num {
            counter += 1;
            if counter % 100000000 == 0 {
                println!("counter: {}", counter);
            }
        }
        let reply = GenericRes {
            status: Status::Ok.into(),
            message: format!("Executed {} iterations in rust", counter),
            value: None,
        };
        Ok(tonic::Response::new(reply))
    }
}
