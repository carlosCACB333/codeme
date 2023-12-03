import { grpcPythonExecuteBench } from "@/grpc/benchmark";

interface Props {
  count: number;
}
export const PythonBench = async ({ count }: Props) => {
  const { data } = await grpcPythonExecuteBench(count.toString());

  return (
    <div>
      <p className="text-lg">{data?.message}</p>
    </div>
  );
};
