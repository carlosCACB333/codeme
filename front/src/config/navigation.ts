import { Locale } from "@/interfaces";
import { Pathnames } from "next-intl/navigation";

export const LOCALES: Locale[] = ["en", "es"];

export const PATHNAMES = {
  "/": "/",
  "/benchmark": "/benchmark",
  "/blog": "/blog",
  "/editor": "/editor",
} satisfies Pathnames<typeof LOCALES>;

export type AppPathnames = keyof typeof PATHNAMES;
