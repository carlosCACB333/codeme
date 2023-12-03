export const GRPC_RUST_HOST = process.env.RUST_APP_HOST || "localhost";
export const GRPC_RUST_PORT = process.env.RUST_APP_PORT || "8081";
export const GRPC_RUST_URL = `${GRPC_RUST_HOST}:${GRPC_RUST_PORT}`;

export const GRPC_PYTHON_HOST = process.env.PYTHON_APP_HOST || "localhost";
export const GRPC_PYTHON_PORT = process.env.PYTHON_APP_PORT || "8082";
export const GRPC_PYTHON_URL = `${GRPC_PYTHON_HOST}:${GRPC_PYTHON_PORT}`;
