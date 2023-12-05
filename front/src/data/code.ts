export const darkModeCode = `import React from "react";
import {NextUIProvider} from "@nextui-org/react";

const Application = ({Component, pageProps}) => {
  return (
    <NextUIProvider>
      <main className={isDark ? "dark" : "light"}>
        <Component {...pageProps} />
      </main>
      <div className="flex-1">
        <CodeWindow
          showWindowIcons
          title="DarkMode.tsx"
          className="min-h-[320px] h-auto"
          language="jsx"
          value={darkModeCode}
        />
      </div>
    </NextUIProvider>
  );
};
`;

export const pythonCode = `def print_numbers(limit):
    for i in range(limit):
        print(i)

print_numbers(10)
`;
