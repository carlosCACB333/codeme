import { Footer } from "@/components/common/footer";
import { HomeNavbar } from "@/components/navigation/homepage/home-navbar";
import { LOCALES } from "@/config";
import { LayoutProps } from "@/interfaces";
import "@/styles/globals.css";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const Cmdk = dynamic(() => import("@/components/common/cmdk/cmdk"), {
  ssr: false,
});

export default function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  if (!LOCALES.includes(locale)) notFound();
  unstable_setRequestLocale(locale);

  return (
    <>
      <div className="relative flex flex-col h-screen">
        <HomeNavbar />
        <main className="container mx-auto flex-grow">{children}</main>
        <Footer />
      </div>
      <Cmdk />
    </>
  );
}

export const metadata: Metadata = {};
