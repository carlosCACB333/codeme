import sys

sys.path.insert(1, "./pb")
import grpc
from concurrent import futures
from benchmark.service import add_benchmark_service
from grpc_reflection.v1alpha import reflection
from reflection import enable_reflection


def main():
    try:
        server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
        add_benchmark_service(server)
        server.add_insecure_port("[::]:8082")
        server.start()
        print("🚀 Server started")

        enable_reflection(server)

        server.wait_for_termination()

    except:
        server.stop(0)
        print("⛔ Server stopped")


if __name__ == "__main__":
    main()
