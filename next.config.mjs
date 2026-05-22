/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/Portfolio-bts',
  assetPrefix: '/Portfolio-bts',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Portfolio-bts',
  },
}

export default nextConfig
