import { Response } from "@/interfaces";
import { GenericReq, GenericRes } from "@/pb/common_pb";
import {
  pythonBenchmarkService,
  rustBenchmarkService,
} from "@/utils/grpc-client";

export const grpcRustExecuteBench = async (
  id: string
): Promise<Response<GenericRes.AsObject>> => {
  return new Promise((resolve, reject) => {
    const req = new GenericReq();
    req.setId(id);
    rustBenchmarkService.executeBenchMark(req, (err, res) => {
      if (err) {
        resolve({
          message: err.details,
          status: err.code,
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

export const grpcPythonExecuteBench = async (
  id: string
): Promise<Response<GenericRes.AsObject>> => {
  return new Promise((resolve, reject) => {
    const req = new GenericReq();
    req.setId(id);
    pythonBenchmarkService.executeBenchMark(req, (err, res) => {
      if (err) {
        resolve({
          message: err.details,
          status: err.code,
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
