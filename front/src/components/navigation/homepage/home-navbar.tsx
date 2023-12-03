"use client";
import {
  DiscordIcon,
  GithubIcon,
  Logo,
  SearchIcon,
  TwitterIcon,
} from "@/components/assets/icons";

import { siteConfig } from "@/config/site";
import { useCmdkStore } from "@/stores/cmdk.store";
import { Link as IntlLink } from "@/utils/navigation";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link } from "@nextui-org/theme";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeSwitch } from "./theme-switch";

const SearchInput = ({ onClick }: { onClick: () => void }) => (
  <Button
    aria-label="Search"
    className="text-sm font-normal"
    endContent={
      <Kbd className="py-0.5 px-2 bg-background" keys="command">
        K
      </Kbd>
    }
    startContent={<SearchIcon className="pointer-events-none" size={18} />}
    onPress={onClick}
  >
    Search...
  </Button>
);

const includes = (pathname: string, path: string) => {
  if (path === "/") return pathname === path;
  return pathname.includes(path);
};

export const HomeNavbar = () => {
  const onToggleCmdk = useCmdkStore((state) => state.onToggle);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinkClasses = clsx(
    link({ color: "foreground" }),
    "data-[active=true]:text-primary"
  );
  return (
    <NextUINavbar
      maxWidth="2xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand className="gap-3 max-w-fit">
        <IntlLink
          aria-label="Home"
          className="flex justify-start items-center gap-2 tap-highlight-transparent transition-opacity active:opacity-50"
          href="/"
        >
          <Logo name="logo" className="fill-primary" height={40} width={40} />
          <p className="text-2xl">CODE-ME</p>
        </IntlLink>
      </NavbarBrand>

      <NavbarContent
        className=" hidden sm:flex basis-1/5 sm:basis-full"
        justify="start"
      >
        {siteConfig.navItems.map((route) => (
          <NavbarItem key={route.href}>
            <IntlLink
              className={navLinkClasses}
              color="foreground"
              data-active={includes(pathname, route.href)}
              href={route.href}
              aria-label={route.label}
            >
              {route.label}
            </IntlLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="flex w-full gap-2" justify="end">
        <NavbarItem>
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <LocaleSwitcher />
        </NavbarItem>

        <NavbarItem className="sm:hidden">
          <Button
            size="sm"
            isIconOnly
            className="bg-transparent"
            aria-label="Buscar"
            onClick={onToggleCmdk}
          >
            <SearchIcon className="text-default-500" size={22} />
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex">
          <SearchInput onClick={onToggleCmdk} />
        </NavbarItem>
        <NavbarItem className="sm:hidden">
          <NavbarMenuToggle className="w-6 h-6" />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button
            size="md"
            color="primary"
            className="text-sm"
            aria-label="sign in"
          >
            Sign in
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <IntlLink
                href={item.href}
                data-active={includes(pathname, item.href)}
                className={clsx(
                  link({ color: "foreground" }),
                  "data-[active=true]:text-primary"
                )}
                aria-label={item.label}
              >
                {item.label}
              </IntlLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
