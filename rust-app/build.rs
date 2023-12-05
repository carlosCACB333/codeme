use std::{env, path::PathBuf};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let original_out_dir = PathBuf::from(env::var("OUT_DIR")?);
    tonic_build::configure()
        .out_dir("src/pb")
        .build_client(false)
        .file_descriptor_set_path(original_out_dir.join("common_descriptor.bin"))
        .compile(
            &[
                "protos/benchmark.proto",
                "protos/common.proto",
                "protos/user.proto",
                "protos/auth.proto",
                "protos/docker.proto",
            ],
            &["protos/"],
        )?;
    Ok(())
}
