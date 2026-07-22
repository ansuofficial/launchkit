import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iconicbrands.vercel.app",
        pathname: "/icons/**",
      },
    ],
  },
};

export default nextConfig;