/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true, },
  eslint: { ignoreDuringBuilds: true, },
  productionBrowserSourceMaps: true,
  images: { domains: ["keykavoos.liara.run", "localhost" , "back.keykavoos.co/storage" , "localhost:3000",], },
  images: { remotePatterns: [{ protocol: "https", hostname: "**", }, { protocol: "http", port: "3000", hostname: "***" }], },
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true', })

module.exports = { productionSourceMaps: true, };
module.exports = nextConfig;
module.exports = withBundleAnalyzer(nextConfig)