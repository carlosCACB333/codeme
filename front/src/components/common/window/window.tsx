import clsx from "clsx";
import { PropsWithChildren } from "react";
import { WindowActions } from "./window-actions";

export interface CodeWindowProps extends PropsWithChildren {
  showCopy?: boolean;
  showWindowIcons?: boolean;
  title?: string;
  className?: string;
  hiddeScroll?: boolean;
}

export const Window: React.FC<CodeWindowProps> = ({
  showWindowIcons,
  title,
  children,
  className,
  hiddeScroll,
}) => {
  return (
    <div
      className={clsx(
        "grid rounded-xl shadow-lg bg-content1 w-full",
        className
      )}
    >
      <div className="overflow-hidden rounded-xl">
        {showWindowIcons && <WindowActions title={title} />}
      </div>

      <div
        className={clsx("p-4 max-w-full ", {
          "overflow-auto scroll": !hiddeScroll,
          "overflow-hidden": hiddeScroll,
        })}
      >
        {children}
      </div>
    </div>
  );
};
