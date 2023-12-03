"use client";

import CodeBlock, { CodeBlockProps } from "./code-block";
import { CopyButton } from "./copy-button";

export interface CodeWindowProps extends CodeBlockProps {
  showCopy?: boolean;
}

export const CodeWindow = ({
  highlightLines,
  showCopy,
  ...props
}: CodeWindowProps) => {
  return (
    <div className="relative">
      <CodeBlock {...props} />
      {showCopy && <CopyButton value={props.value} />}
    </div>
  );
};
