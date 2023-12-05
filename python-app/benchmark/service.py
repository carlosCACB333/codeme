from benchmark_pb2_grpc import (
    BenchMarkSvcServicer,
    add_BenchMarkSvcServicer_to_server,
)
from benchmark_pb2 import BenchRes, BenchReq


class BenchMarkService(BenchMarkSvcServicer):
    def ExecuteBenchMark(self, req: BenchReq, context):
        num = int(req.len)
        counter = 0
        for i in range(1, num + 1):
            counter += 1
            if i % 100000000 == 0:
                print(f"Executed {i} iterations in python")

        response = BenchRes(
            message=f"Executed {counter} iterations in python",
        )
        return response


def add_benchmark_service(server):
    add_BenchMarkSvcServicer_to_server(BenchMarkService(), server)
