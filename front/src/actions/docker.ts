"use server";

import { grpcExecuteCode } from "@/grpc/rust";

export const executeCode = (code: string, lang: string) => {
  return grpcExecuteCode(code, lang);
};
