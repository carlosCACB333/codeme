pub mod libs;
pub mod models;
pub mod schema;
pub mod services;

#[path = "pb/pb.rs"]
pub mod pb;

pub const DIR_DESCRIPTOR_SET: &[u8] = tonic::include_file_descriptor_set!("directory_descriptor");
