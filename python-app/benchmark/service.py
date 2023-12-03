from benchmark_pb2_grpc import (
    BenchMarkServiceServicer,
    add_BenchMarkServiceServicer_to_server,
)
from common_pb2 import GenericRes, Status


class BenchMarkService(BenchMarkServiceServicer):
    def ExecuteBenchMark(self, request, context):
        num = int(request.id)
        counter = 0
        for i in range(1, num + 1):
            counter += i
            if i % 100000000 == 0:
                print(f"Executed {i} iterations in python")

        response = GenericRes(
            status=Status.OK,
            message=f"Executed {counter} iterations in python",
            value=None,
        )
        return response


def add_benchmark_service(server):
    add_BenchMarkServiceServicer_to_server(BenchMarkService(), server)
