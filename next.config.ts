import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/planetary-deep-sea-survival-website',
  assetPrefix: '/planetary-deep-sea-survival-website/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Add this for proper client-side routing
  skipTrailingSlashRedirect: true
}

export default nextConfig