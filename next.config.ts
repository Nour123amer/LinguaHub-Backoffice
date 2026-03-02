import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/graphql-proxy/:path*', 
        destination: 'https://api.linguahub.net/:path*', 
      },
    ];
  },
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
