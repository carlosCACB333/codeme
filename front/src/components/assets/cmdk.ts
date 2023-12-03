import { tv } from "tailwind-variants";

export const cmdk = tv({
  slots: {
    base: "max-h-full overflow-y-auto",
    header: [
      "flex",
      "items-center",
      "w-full",
      "border-b",
      "border-default-400/50",
      "px-4",
    ],
    input: [
      "w-full",
      "px-2",
      "h-14",
      "text-lg",
      "outline-none",
      "rounded-none",
      "bg-transparent",
      "placeholder-foreground/80",
    ],
    list: ["scroll", "px-4", "mt-2", "pb-4", "overflow-y-auto", "max-h-[50vh]"],
    itemWrapper: [
      "px-4",
      "mt-2",
      "group",
      "flex",
      "h-16",
      "justify-between",
      "items-center",
      "rounded-lg",
      "shadow",
      "bg-content2/50",
      "active:opacity-70",
      "cursor-pointer",
      "transition-opacity",
      "data-[active=true]:bg-primary",
      "data-[active=true]:text-primary-foreground",
    ],
    leftWrapper: ["flex", "gap-3", "items-center", "w-full", "max-w-full"],
    leftIcon: [
      "text-default-500 dark:text-default-300",
      "group-data-[active=true]:text-primary-foreground",
    ],
    itemContent: ["flex", "flex-col", "gap-0", "justify-center", "max-w-[80%]"],
    itemParentTitle: [
      "text-default-400",
      "text-xs",
      "group-data-[active=true]:text-primary-foreground",
      "select-none",
    ],
    itemTitle: [
      "truncate",
      "text-default-500",
      "group-data-[active=true]:text-primary-foreground",
      "select-none",
    ],
    emptyWrapper: [
      "flex",
      "flex-col",
      "text-center",
      "items-center",
      "justify-center",
      "text-foreground/90",
      "h-32",
    ],
  },
});