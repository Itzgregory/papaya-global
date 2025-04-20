/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.papayaglobal.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.papayaglobal.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.papayaglobal.com',
        pathname: '/wp-content/themes/**',
      },
    ],
  },
};

module.exports = nextConfig;
