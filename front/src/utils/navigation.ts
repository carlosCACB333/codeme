import { LOCALES, PATHNAMES } from "@/config";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: LOCALES,
    pathnames: PATHNAMES,
  });
