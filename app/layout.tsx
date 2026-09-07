import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#050d1f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.insertec.pro"),
  title: {
    default: "INSERTEC MAROC – Pièces de rechange & Maintenance Cuisine Pro",
    template: "%s | INSERTEC MAROC",
  },
  description:
    "INSERTEC MAROC est votre partenaire de confiance pour la vente de pièces de rechange et la maintenance de matériel de cuisine professionnelle et de grandes machines à laver pour hôtels au Maroc.",
  keywords: [
    "pièces de rechange",
    "maintenance cuisine professionnelle",
    "machines à laver hôtels",
    "dépannage 24/7",
    "INSERTEC MAROC",
    "équipements hôteliers",
    "B2B CHR Maroc",
  ],
  openGraph: {
    title: "INSERTEC MAROC – Expert en équipements professionnels & Maintenance",
    description:
      "Vente de pièces de rechange certifiées, dépannage 24/7 et conteneurs aménagés au Maroc.",
    url: "https://www.insertec.pro",
    siteName: "INSERTEC MAROC",
    images: [
      {
        url: "https://www.insertec.pro/images/rechange.jpg",
        width: 1200,
        height: 630,
        alt: "INSERTEC MAROC Pièces de rechange",
      },
    ],
    type: "website",
    locale: "fr_MA",
  },
  twitter: {
    card: "summary_large_image",
    title: "INSERTEC MAROC – Expert en équipements professionnels",
    description:
      "Vente de pièces de rechange et maintenance de matériel de cuisine professionnelle au Maroc.",
    images: ["https://www.insertec.pro/images/rechange.jpg"],
  },
  alternates: {
    canonical: "https://www.insertec.pro",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "INSERTEC MAROC",
    image: "https://www.insertec.pro/icon.png",
    logo: "https://www.insertec.pro/images/logo.png",
    description: "Vente de pièces de rechange, dépannage, réparation et maintenance de matériel de cuisine professionnelle au Maroc.",
    url: "https://www.insertec.pro",
    telephone: "+212522614414",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 rue zine ishak n° 7, angle bd ibn tachfine, RDC MAG N° 505",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    areaServed: "MA",
    sameAs: [
      "https://www.insertec.pro"
    ]
  };

  return (
    <html lang="fr" className={`${geistSans.variable} h-full scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://bk7y5ps1oidxyo7e.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://bk7y5ps1oidxyo7e.public.blob.vercel-storage.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
