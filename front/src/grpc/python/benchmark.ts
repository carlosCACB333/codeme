import { Response } from "@/interfaces";
import { BenchReq, BenchRes } from "@/pb/benchmark_pb";
import { benchmarkSvc } from "@/services/python";

export const grpcExecuteBench = async (
  len: number
): Promise<Response<BenchRes.AsObject>> => {
  return new Promise((resolve, reject) => {
    const req = new BenchReq();
    req.setLen(len);
    benchmarkSvc.executeBenchMark(req, (err, res) => {
      if (err) {
        resolve({
          message: err.details,
          status: "error",
        });
      } else {
        resolve({
          message: res.getMessage(),
          status: "success",
          data: res.toObject(),
        });
      }
    });
  });
};
