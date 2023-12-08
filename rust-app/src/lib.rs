pub mod interceptors;
pub mod libs;
pub mod models;
pub mod schema;
pub mod services;
pub mod utils;

#[path = "pb/pb.rs"]
pub mod pb;

pub const DESCRIPTOR_SET: &[u8] = tonic::include_file_descriptor_set!("descriptor");
