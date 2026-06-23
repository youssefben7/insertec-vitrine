import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Note: 'export' is incompatible with async redirects in Next.js. Vercel handles deployments perfectly without it.
  images: {
    unoptimized: true,
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
