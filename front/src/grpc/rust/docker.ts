import { Response } from "@/interfaces";
import { STATUS } from "@/pb/common_pb";
import { ExecuteCodeReq, ExecuteCodeResp } from "@/pb/docker_pb";
import { dockerSvc } from "@/services/rust";

export const grpcExecuteCode = async (
  code: string,
  lang: string
): Promise<Response<ExecuteCodeResp.AsObject[]>> => {
  return new Promise((resolve, reject) => {
    const req = new ExecuteCodeReq();
    req.setCode(code);
    req.setLang(lang);

    const stream = dockerSvc.executeCode(req, {});
    const result: ExecuteCodeResp.AsObject[] = [];
    stream.on("data", (resp: ExecuteCodeResp) => {
      result.push(resp.toObject());
    });
    stream.on("error", (err) => {
      resolve({
        status: STATUS.ERROR,
        message: err.message,
      });
    });

    stream.on("end", () => {
      resolve({
        message: "Ejecución finalizada",
        status: STATUS.OK,
        data: result,
      });
    });
  });
};
