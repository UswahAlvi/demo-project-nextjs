import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [new URL('https://frontend-test-api.digitalcreative.cn/**')],
  },
};

export default nextConfig;
