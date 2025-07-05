import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arganiatol.com",
      },
      {
        protocol: "https",
        hostname: "store.arganiatol.com",
      },
      {
        protocol: "https",
        hostname: "dev.arganiatol.com",
      },
    ],
  },

  trailingSlash: true,
};

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: [
      "./src/messages/en.json",
      "./src/messages/it.json",
      "./src/messages/fr.json",
    ],
  },
});
export default withNextIntl(nextConfig);
