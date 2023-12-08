from benchmark_pb2_grpc import (
    BenchMarkSvcServicer,
    add_BenchMarkSvcServicer_to_server,
)
from benchmark_pb2 import BenchRes, BenchReq
from common_pb2 import STATUS
import time


class BenchMarkService(BenchMarkSvcServicer):
    def ExecuteBenchMark(self, req: BenchReq, context):
        num = int(req.len)

        start_time = time.time()

        counter = 0
        for i in range(1, num + 1):
            counter += 1
            if counter % 100000000 == 0:
                print(f"Iteration Python: {counter}")

        end_time = time.time()

        response = BenchRes(
            status=STATUS.OK,
            message=f"Executed {counter} iterations in {end_time - start_time} seconds in python",
        )
        return response


def add_benchmark_service(server):
    add_BenchMarkSvcServicer_to_server(BenchMarkService(), server)
