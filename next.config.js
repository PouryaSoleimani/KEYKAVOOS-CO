/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true, },
  eslint: { ignoreDuringBuilds: true, },
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "back.keykavoos.co", port: "", pathname: "back.keykavoos.co/storage", },
      { protocol: "http", port: "3000", hostname: "***" },
    ],
  },
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true', })

module.exports = { productionSourceMaps: true, };
module.exports = nextConfig;
module.exports = withBundleAnalyzer(nextConfig)
module.exports = { experimental: { turbo: { resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json',], }, }, }
module.exports = { images: { domains: ['back.keykavoos.co'], }, }