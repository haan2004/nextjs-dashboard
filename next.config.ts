import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    cacheComponents: true, // ✅ replaces experimental.ppr
  },
};

export default nextConfig;
