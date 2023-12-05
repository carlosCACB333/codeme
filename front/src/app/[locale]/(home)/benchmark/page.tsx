import { Suspense } from "react";
import { PythonBench } from "./python-bench";
import { RustBench } from "./rust-bench";

export const revalidate = 0;

export default function Benchmark() {
  const count = 100000000;
  return (
    <div className="">
      <p className="text-center text-3xl my-4">Rust vs Python</p>
      <div className="flex gap-4 justify-center w-full">
        <div className="bg-content1 p-4 rounded-lg">
          <Suspense fallback="Feching Rust benchmark...">
            <RustBench count={count} />
          </Suspense>
        </div>
        <div className="bg-content1 p-4 rounded-lg">
          <Suspense fallback="Feching Python benchmark...">
            <PythonBench count={count} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
