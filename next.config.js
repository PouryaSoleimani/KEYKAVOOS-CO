/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true, },
  eslint: { ignoreDuringBuilds: true, },
  productionBrowserSourceMaps: true,
  images: {
    domains: ['back.keykavoos.co', "localhost:3000",],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "back.keykavoos.co", },
      { protocol: "http", port: "3000", hostname: "***" },
    ],

  },
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true', })

module.exports = { productionSourceMaps: true, };
module.exports = nextConfig;
module.exports = withBundleAnalyzer(nextConfig)