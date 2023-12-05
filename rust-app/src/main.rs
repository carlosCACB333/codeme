use app::libs::db;
use app::services::auth::AuthSvc;
use app::services::brenchmark::BrenchSvc;
use app::services::docker::DockerSvc;
use app::COMMON_DESCRIPTOR_SET;
use std::env;
use tonic::transport::Server;

#[tokio::main(flavor = "multi_thread", worker_threads = 10)]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let port = env::var("RUST_APP_PORT").expect("RUST_APP_PORT must be set");
    let addr = format!("[::]:{}", port).parse().unwrap();
    let pool = db::create_pool();

    // services
    let reflection_svc = tonic_reflection::server::Builder::configure()
        .register_encoded_file_descriptor_set(COMMON_DESCRIPTOR_SET)
        .build()?;
    let bren_svc = BrenchSvc::get_svc();
    let auth_svc = AuthSvc::new(pool.clone()).get_svc();
    let docker_svc = DockerSvc::get_svc();

    println!("🦀 Rust server running on {}", addr);

    Server::builder()
        .add_service(reflection_svc)
        .add_service(auth_svc)
        .add_service(bren_svc)
        .add_service(docker_svc)
        .serve(addr)
        .await?;

    Ok(())
}
