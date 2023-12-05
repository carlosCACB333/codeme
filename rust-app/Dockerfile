FROM rust:1.74.0 as base
RUN rustup component add rustfmt
RUN apt-get update
RUN apt-get install -y protobuf-compiler libprotobuf-dev
# install only docker cli
RUN apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release
RUN curl -fsSL https://download.docker.com/linux/debian/gpg |  apt-key add -
RUN echo "deb [arch=amd64] https://download.docker.com/linux/debian buster stable" |  tee /etc/apt/sources.list.d/docker.list
RUN apt-get update
RUN apt-get install -y docker-ce-cli
RUN apt-get clean



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


