"use client";
import { darkModeCode } from "@/data/code";
import { PageProps } from "@/interfaces";
import { Editor, Monaco } from "@monaco-editor/react";

import { useState } from "react";

export default function FilePage({ params: { file, project } }: PageProps) {
  const [value, setvalue] = useState("");

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

  return (
    <div className="flex h-full w-full max-w-[99%] mx-auto">
      <Editor
        theme="my-theme"
        language="javascript"
        defaultValue={darkModeCode}
        options={{
          fontSize: 20,
          mouseWheelZoom: true,
          automaticLayout: true,
        }}
        beforeMount={beforeMount}
        onMount={(editor, monaco) => {
          // editor.layout();
        }}
        onChange={(value) => {
          setvalue(value || "");
        }}
      />
    </div>
  );
}
