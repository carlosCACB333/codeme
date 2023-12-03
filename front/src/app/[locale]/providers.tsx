"use client";

import { useRouter } from "@/utils/navigation";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { type ReactNode } from "react";

export interface ProvidersProps {
  children: ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const { push } = useRouter();
  return (
    <NextUIProvider navigate={push as any}>
      <ThemeProvider {...themeProps}>{children}</ThemeProvider>
    </NextUIProvider>
  );
}
