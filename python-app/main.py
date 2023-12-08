import sys
import os

sys.path.insert(1, "./pb")
import grpc
from concurrent import futures
from benchmark.service import add_benchmark_service
from reflection import enable_reflection


def main():
    try:
        port = os.environ.get("PYTHON_APP_PORT")
        addr = f"[::]:{port}"
        server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
        add_benchmark_service(server)
        server.add_insecure_port(addr)
        server.start()
        print(f"🐍Python server started on port {addr}")

        enable_reflection(server)

        server.wait_for_termination()

    except:
        server.stop(0)
        print("⛔Python server stopped")


if __name__ == "__main__":
    main()
