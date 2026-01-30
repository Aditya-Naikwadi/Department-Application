import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // any other experimental features
  },

  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
