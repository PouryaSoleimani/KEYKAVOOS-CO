/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true, },
  eslint: { ignoreDuringBuilds: false, },
  productionBrowserSourceMaps: true,
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true', })
module.exports = { productionSourceMaps: true, nextConfig };
module.exports = withBundleAnalyzer(nextConfig)
module.exports = {
  images: { remotePatterns: [{ protocol: 'https', hostname: 'back.keykavoos.co', port: "" , pathname: "/" }], },
}