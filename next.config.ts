import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.launchuicomponents.com",
      },
      {
        protocol: "https",
        hostname: "components.work",
      },
    ],
  },
};

export default nextConfig;
