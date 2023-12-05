import { grpcExecuteBench } from "@/grpc/python";

interface Props {
  count: number;
}
export const PythonBench = async ({ count }: Props) => {
  const { data } = await grpcExecuteBench(count);

  return (
    <div>
      <p className="text-lg">{data?.message}</p>
    </div>
  );
};
