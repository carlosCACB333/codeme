use app::libs::db;
use app::pb::bench_mark_service_server::BenchMarkServiceServer;
use app::pb::dir_service_server::DirServiceServer;
use app::services::brenchmark::MyBrenchMarkService;
use app::services::directory::MyDirService;
use app::DIR_DESCRIPTOR_SET;
use std::env;
use tonic::transport::Server;

#[tokio::main(flavor = "multi_thread", worker_threads = 10)]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let port = env::var("RUST_APP_PORT").expect("RUST_APP_PORT must be set");
    let addr = format!("[::]:{}", port).parse().unwrap();
    let pool = db::create_pool();
    let dir_service = MyDirService::new(pool.clone());
    let brenchmark_service = MyBrenchMarkService::default();

    println!("🚀 Server running on {}", addr);

    let reflection_server = tonic_reflection::server::Builder::configure()
        .register_encoded_file_descriptor_set(DIR_DESCRIPTOR_SET)
        .build()?;

    Server::builder()
        .add_service(reflection_server)
        .add_service(DirServiceServer::new(dir_service))
        .add_service(BenchMarkServiceServer::new(brenchmark_service))
        .serve(addr)
        .await?;

    Ok(())
}
