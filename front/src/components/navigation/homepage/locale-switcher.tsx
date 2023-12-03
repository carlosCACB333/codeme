"use client";
import { LanguageIcon } from "@/components/assets/icons";
import { Locale } from "@/interfaces";
import { usePathname, useRouter } from "@/utils/navigation";
import { Button } from "@nextui-org/button";
import { useLocale } from "next-intl";
import { useTransition } from "react";

export const LocaleSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = () => {
    const newLocale = locale === "es" ? "en" : "es";
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <Button
      size="sm"
      isIconOnly
      onClick={handleLocaleChange}
      disabled={isPending}
      color="primary"
      className="p-0"
      variant={locale === "es" ? "solid" : "light"}
    >
      <LanguageIcon size={18} />
    </Button>
  );
};
