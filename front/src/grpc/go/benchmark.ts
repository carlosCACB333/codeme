import { Response } from "@/interfaces";
import { BenchReq, BenchRes } from "@/pb/benchmark_pb";
import { STATUS } from "@/pb/common_pb";
import { benchmarkSvc } from "@/services/go";

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
          status: STATUS.ERROR,
        });
      } else {
        resolve({
          message: res.getMessage(),
          status: res.getStatus(),
          data: res.toObject(),
        });
      }
    });
  });
};
