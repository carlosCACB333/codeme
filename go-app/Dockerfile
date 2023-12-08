FROM golang:1.21.4 as base


FROM base as development
WORKDIR /app
ENV STAGE=development
RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin


#PROTOBUF COMPILER
RUN apt-get update && apt-get install -y protobuf-compiler
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

# DEVTOOLS
RUN go install -v golang.org/x/tools/gopls@latest
RUN go install -v github.com/ramya-rao-a/go-outline@latest
RUN go install -v github.com/go-delve/delve/cmd/dlv@latest
RUN go install -v honnef.co/go/tools/cmd/staticcheck@latest
RUN go install -v github.com/uudashr/gopkgs/v2/cmd/gopkgs@latest
RUN go install -v golang.org/x/lint/golint@latest
COPY go.mod go.sum ./
RUN go mod download
COPY . .
CMD [ "air"]


FROM base as builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .


FROM alpine:3.18.3 as production
RUN apk --no-cache add ca-certificates
WORKDIR /app
ENV STAGE=production
COPY --from=builder /app/main .
CMD ["./main"]
