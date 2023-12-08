"use client";

import { useRouter } from "@/utils/navigation";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider, useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export interface ProvidersProps extends PropsWithChildren {
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const { push } = useRouter();
  return (
    <NextUIProvider navigate={push as any}>
      <ThemeProvider {...themeProps}>
        <ChildrenProvider>{children}</ChildrenProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}

const ChildrenProvider = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: isDark ? "#333" : "#fff",
            color: isDark ? "#fff" : "#333",
          },
        }}
      />
    </>
  );
};
