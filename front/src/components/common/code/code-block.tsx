"use client";
import { codeTheme } from "@/libs/prisma-theme";
import { clsx, getUniqueID } from "@nextui-org/shared-utils";
import { Highlight, Language } from "prism-react-renderer";
import { forwardRef } from "react";
import { CopyButton } from "./copy-button";

export interface CodeblockProps {
  language: Language;
  codeString: string;
  showLines?: boolean;
  className?: string;
  showCopy?: boolean;
}

export const Codeblock = forwardRef<HTMLPreElement, CodeblockProps>(
  (
    { codeString, language, showLines, showCopy, className: classNameProp },
    ref
  ) => {
    const isMultiLine = codeString.split("\n").length > 2;

    return (
      <Highlight code={codeString} language={language} theme={codeTheme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            data-language={language}
            ref={ref}
            className={clsx(
              className,
              classNameProp,
              "relative flex w-full h-full max-w-full max-h-full",
              {
                "flex-col": isMultiLine,
              }
            )}
            style={style}
          >
            {tokens.map((line, i) => {
              const { key, ...lineProps } = getLineProps({ line, key: i });

              return (
                <div
                  key={`${i}-${getUniqueID("line-wrapper")}`}
                  {...lineProps}
                  className={clsx(lineProps.className)}
                >
                  {showLines && (
                    <span className="text-xs select-none mr-2 opacity-30">
                      {i + 1}
                    </span>
                  )}
                  {line.map((token, k) => {
                    const { key, ...tokens } = getTokenProps({
                      token,
                      key: k,
                    });
                    return (
                      <span
                        key={`${k}-${getUniqueID("line")}`}
                        {...tokens}
                        className={className}
                      />
                    );
                  })}
                </div>
              );
            })}

            {showCopy && <CopyButton value={codeString} />}
          </pre>
        )}
      </Highlight>
    );
  }
);

Codeblock.displayName = "CodeBlock";
