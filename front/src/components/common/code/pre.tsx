import { clsx } from "@nextui-org/shared-utils";
import { forwardRef } from "react";

export interface PreProps {
  className?: string;
  isScrollable?: boolean;
  children?: React.ReactNode;
}

export const Pre = forwardRef<HTMLPreElement, PreProps>(
  (
    { className = "", children, isScrollable = true, ...props },
    forwardedRef
  ) => {
    const scrollClass = isScrollable
      ? "overflow-auto scroll"
      : "overflow-hidden";

    return (
      <pre
        ref={forwardedRef}
        className={clsx(
          "relative  w-full h-full box-border shadow-md text-white/80 leading-5 whitespace-pre text-sm  bg-content2 rounded-xl [&>code]:transition-transform",
          scrollClass,
          className
        )}
        {...props}
      >
        {children}
      </pre>
    );
  }
);

Pre.displayName = "CodeBlock.Pre";
