"use client";
import { executeCode } from "@/actions/docker";
import { EditorHeader } from "@/components/navigation/editor";
import { pythonCode } from "@/data/code";
import { PageProps } from "@/interfaces";
import { STATUS } from "@/pb/common_pb";
import { ExecuteCodeResp } from "@/pb/docker_pb";
import { Editor, Monaco } from "@monaco-editor/react";

import { useRef, useState } from "react";
import toast from "react-hot-toast";

const beforeMount = (monaco: Monaco) => {
  monaco.editor.defineTheme("my-theme", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#000000",
    },
  });
};

export const revalidate = 0;

export default function FilePage({ params: { file, project } }: PageProps) {
  const [result, setResult] = useState<ExecuteCodeResp.AsObject[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const editorRef = useRef<any>(null);

  return (
    <div className="flex flex-col h-full w-full max-w-[99%] mx-auto">
      <EditorHeader
        isLoading={isRunning}
        onClick={async () => {
          setIsRunning(true);
          const result = await executeCode(
            editorRef.current.getValue(),
            "python"
          );
          setIsRunning(false);
          if (result.status === STATUS.ERROR) {
            toast.error(result.message);
            return;
          }
          setResult(result.data!);
          toast.success(result.message);
        }}
      />
      <Editor
        theme="my-theme"
        language="python"
        defaultValue={pythonCode}
        options={{
          fontSize: 20,
          mouseWheelZoom: true,
          automaticLayout: true,
        }}
        beforeMount={beforeMount}
        onMount={(editor, monaco) => {
          console.log(monaco.editor);
          editorRef.current = editor;
        }}
      />

      <div className="flex flex-col gap-2 h-[200px] border-t-1 border-gray-800 overflow-y-auto scroll">
        {result.map((item, index) => (
          <div key={index} className="flex gap-2">
            <span className="text-sm">{item.output}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
