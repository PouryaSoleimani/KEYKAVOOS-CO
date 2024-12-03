
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true, },
  eslint: { ignoreDuringBuilds: true, },
  productionBrowserSourceMaps: true,
  images: { domains: ["localhost", "back.keykavoos.co/storage", "localhost:3000",], },
  images: { remotePatterns: [{ protocol: 'https', hostname: 'back.keykavoos.co', },] },
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true', })
module.exports = { productionSourceMaps: true, nextConfig; };
module.exports = withBundleAnalyzer(nextConfig)
module.exports = {
  images: { remotePatterns: [{ protocol: 'https', hostname: 'back.keykavoos.co' }], },
}