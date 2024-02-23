/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['pages', 'components', 'app'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging.politzek.org',
        port: '',
      },
    ],
  },
  experimental: { scrollRestoration: true },
};

module.exports = nextConfig;
