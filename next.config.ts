import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.mitutoyo.com',
      },
      {
        protocol: 'https',
        hostname: 'www.mahr.com',
      },
      {
        protocol: 'https',
        hostname: 'www.starrett.com',
      }
    ],
  },
};

export default nextConfig;
