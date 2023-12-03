import { LayoutProps } from "@/interfaces";

export default function EditorLayout({
  children,
  params: { file },
}: LayoutProps) {
  return <>{children}</>;
}
