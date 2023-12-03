FROM rust:1.74.0 as base
RUN rustup component add rustfmt
RUN apt-get update && apt-get install -y protobuf-compiler libprotobuf-dev

FROM base as development
ENV STAGE=development
WORKDIR /app
RUN cargo install cargo-watch
RUN cargo install diesel_cli
COPY . .
CMD ["cargo", "watch", "-x", "run"]

FROM base as builder
WORKDIR /app
COPY ./rust-app .
COPY ./protos ./protos
RUN cargo build --release

FROM debian:12.2 as production
RUN apt-get update && apt-get install -y libpq5
ENV STAGE=production
WORKDIR /app
COPY --from=builder /app/target/release/app .
CMD ["./app"]


