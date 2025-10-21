/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/tome-archives',
  assetPrefix: '/tome-archives/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
