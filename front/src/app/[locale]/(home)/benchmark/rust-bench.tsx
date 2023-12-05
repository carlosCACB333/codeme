import { grpcExecuteBench } from "@/grpc/rust";

interface Props {
  count: number;
}

export const RustBench = async ({ count }: Props) => {
  const { data } = await grpcExecuteBench(count);

  return (
    <div>
      <p className="text-lg">{data?.message}</p>
    </div>
  );
};
