import { grpcExecuteBench } from "@/grpc/go";

interface Props {
  count: number;
}
export const GoBench = async ({ count }: Props) => {
  const { data } = await grpcExecuteBench(count);
  return (
    <div>
      <p className="text-lg">{data?.message}</p>
    </div>
  );
};
