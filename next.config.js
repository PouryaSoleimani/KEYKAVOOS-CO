/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["keykavoos.liara.run", "localhost", "localhost:8000/storage", "localhost:3000"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "http",
        port: "3000",
        hostname: "***"
      }
    ],
  },
};

module.exports = nextConfig;
