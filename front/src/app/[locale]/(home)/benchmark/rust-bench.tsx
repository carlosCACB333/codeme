import { grpcRustExecuteBench } from "@/grpc/benchmark";

interface Props {
  count: number;
}

export const RustBench = async ({ count }: Props) => {
  const { data } = await grpcRustExecuteBench(count.toString());

  return (
    <div>
      <p className="text-lg">{data?.message}</p>
    </div>
  );
};
