const withNextIntl = require("next-intl/plugin");
const withNextPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [],
  },
};

const withPWA = withNextPWA({
  dest: "public",
  mode: "production",
  disable: process.env.NODE_ENV === "development",
});

const withIntl = withNextIntl();

module.exports = withPWA(withIntl(nextConfig));
