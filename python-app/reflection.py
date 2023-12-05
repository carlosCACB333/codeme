from grpc_reflection.v1alpha import reflection
import benchmark_pb2


def enable_reflection(server):
    reflection.enable_server_reflection(
        (
            reflection.SERVICE_NAME,
            benchmark_pb2.DESCRIPTOR.services_by_name.get("BenchMarkSvc").full_name,
        ),
        server,
    )
