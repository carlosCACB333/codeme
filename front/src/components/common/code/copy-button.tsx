"use client";
import { CheckLinearIcon, CopyLinearIcon } from "@/components/assets/icons";
import { Button, ButtonProps } from "@nextui-org/button";
import { useClipboard } from "@nextui-org/use-clipboard";
import { FC } from "react";

export interface CopyButtonProps extends ButtonProps {
  value?: string;
}

export const CopyButton: FC<CopyButtonProps> = ({ value, ...buttonProps }) => {
  const { copy, copied } = useClipboard();

  const handleCopy = () => {
    copy(value);
  };

  return (
    <Button
      isIconOnly
      className="absolute z-50 right-0 top-0 border-1 border-transparent bg-transparent before:bg-white/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-100 before:rounded-lg"
      size="sm"
      variant="bordered"
      aria-label="Copy"
      onPress={handleCopy}
      {...buttonProps}
    >
      <CheckLinearIcon
        className="absolute opacity-0 scale-50 text-zinc-300 data-[visible=true]:opacity-100 data-[visible=true]:scale-100 transition-transform-opacity"
        data-visible={copied}
        size={16}
      />
      <CopyLinearIcon
        className="absolute opacity-0 scale-50 text-zinc-300 data-[visible=true]:opacity-100 data-[visible=true]:scale-100 transition-transform-opacity"
        data-visible={!copied}
        size={16}
      />
    </Button>
  );
};
