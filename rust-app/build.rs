use std::{env, path::PathBuf};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let original_out_dir = PathBuf::from(env::var("OUT_DIR")?);
    tonic_build::configure()
        .out_dir("src/pb")
        .build_client(false)
        .file_descriptor_set_path(original_out_dir.join("directory_descriptor.bin"))
        .compile(
            &["protos/directory.proto", "protos/benchmark.proto"],
            &["protos/"],
        )?;
    Ok(())
}
