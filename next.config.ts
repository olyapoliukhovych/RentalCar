import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ac.goit.global',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    removeConsole:
      process.env.NEXT_PUBLIC_RENTALCAR_TOKEN === 'production' ? { exclude: ['error'] } : false,
  },
};

export default nextConfig;
