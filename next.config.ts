import type { NextConfig } from "next";

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
};

export default nextConfig;
