import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["linguahub-backend.fra1.digitaloceanspaces.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'url-shortener.me',
      },
    ],
  },
};

export default nextConfig;
