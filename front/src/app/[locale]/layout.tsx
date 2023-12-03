import { LOCALES } from "@/config";
import { fontRoboto } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { LayoutProps } from "@/interfaces";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Providers } from "./providers";

export default function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  if (!LOCALES.includes(locale)) notFound();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
          fontRoboto.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "system" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
  authors: siteConfig.authors,
  keywords: ["codeme", "learn"],
  creator: "",
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-32x32.png",
    // apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/banner.png",
        width: 1540,
        height: 806,
        alt: siteConfig.name,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fbff" },
    { media: "(prefers-color-scheme: dark)", color: "#07090e" },
  ],
};
