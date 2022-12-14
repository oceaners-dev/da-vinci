/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true, // might runs codes twice
  // swcMinify: true,
  typescript: {
    ignoreBuildErrors: true, // ignore build errors
  },
  experimental: {
    // Required:
    // appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  // allow https://admin.socket.io cors
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://admin.socket.io',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http://localhost:3001',
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
