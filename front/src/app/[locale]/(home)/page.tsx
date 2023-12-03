import { subtitle, title } from "@/components/assets/primitives";
import { CodeWindow } from "@/components/common/code/code-window";
import { darkModeCode } from "@/data/code";
import { PageProps } from "@/interfaces";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("HomePage");
  const [first, second, ...rest] = t("welcome").split(" ");

  return (
    <section className="flex gap-8 py-8 md:py-10">
      <div className="flex-1 flex flex-col items-center max-w-xl justify-center">
        <div className="inline-block text-center justify-center">
          <h1 className={title()}>{first}&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>{second}&nbsp;</h1>
          <h1 className={title()}>{rest.join(" ")}</h1>
          <h2 className={subtitle({ class: "mt-4" })}>{t("welcome")}</h2>
        </div>
        <div className="flex gap-3">
          <Button size="lg" color="primary">
            Click me
          </Button>
          <Button size="lg" color="secondary">
            Secondary
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <CodeWindow
          showCopy
          showWindowIcons
          title="DarkMode.tsx"
          highlightLines="7-9"
          className="min-h-[520px] h-auto"
          language="jsx"
          value={darkModeCode}
        />
      </div>
    </section>
  );
}
