import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Note: 'export' is incompatible with async redirects in Next.js. Vercel handles deployments perfectly without it.
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).(ico|png|svg|jpg|jpeg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Service pages redirects
      {
        source: '/service',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/service.php',
        destination: '/services',
        permanent: true,
      },
      // Product pages redirects
      {
        source: '/produit',
        destination: '/produits',
        permanent: true,
      },
      {
        source: '/produit.html',
        destination: '/produits',
        permanent: true,
      },
      {
        source: '/produits.html',
        destination: '/produits',
        permanent: true,
      },
      {
        source: '/produit.php',
        destination: '/produits',
        permanent: true,
      },
      {
        source: '/produits.php',
        destination: '/produits',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
