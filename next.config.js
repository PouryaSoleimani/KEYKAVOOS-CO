
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true, },
  eslint: { ignoreDuringBuilds: true, },
  productionBrowserSourceMaps: true,
  images: { domains: ["localhost", "back.keykavoos.co/storage", "localhost:3000","back.keykavoos.co"], },
  images: { remotePatterns: [{ protocol: "https", hostname: "back.keykavoos.co", }, { protocol: "http", port: "3000", hostname: "***" }], },
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true', })
module.exports = { productionSourceMaps: true, };
module.exports = nextConfig;