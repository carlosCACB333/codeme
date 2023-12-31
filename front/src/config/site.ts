import { AppPathnames } from ".";

export type SiteConfig = typeof siteConfig;

interface NavItem {
  label: string;
  href: AppPathnames;
}

const navItems: NavItem[] = [
  {
    label: "Editor",
    href: "/editor",
  },
  {
    label: "benchmark",
    href: "/benchmark",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export const siteConfig = {
  name: "CodeMe",
  description: "CodeMe is a platform for learning to code",
  url: "https://codeme.org",
  authors: [
    {
      name: "Carlos Castillo",
      email: "carloscb8080@gmail.com",
      url: "",
    },
    {
      name: "Jason Solano",
      email: "jason@gmail.com",
      url: "",
    },
  ],
  navItems: navItems,
  navMenuItems: navItems,
  links: {
    github: "https://github.com/carloscacb333",
    twitter: "https://twitter.com/carloscacb333",
    discord: "https://discord.gg/",
  },
};
