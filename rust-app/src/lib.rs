pub mod interceptors;
pub mod libs;
pub mod models;
pub mod schema;
pub mod services;

#[path = "pb/pb.rs"]
pub mod pb;

pub const COMMON_DESCRIPTOR_SET: &[u8] = tonic::include_file_descriptor_set!("common_descriptor");
