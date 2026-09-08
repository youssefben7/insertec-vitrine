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
    default: "Pièces de Rechange Cuisine Pro Maroc & Blanchisserie Industrielle | Distributeur Fagor Pro | INSERTEC MAROC",
    template: "%s | INSERTEC MAROC",
  },
  description:
    "INSERTEC MAROC : N°1 de la vente de pièces de rechange d'origine pour cuisine professionnelle, grandes cuisines, buanderies et distributeur officiel Fagor Professional au Maroc. Stock permanent de +2000 références et dépannage 24/7 à Casablanca et partout au Maroc.",
  keywords: [
    "pièces de rechange cuisine professionnelle maroc",
    "pièces détachées cuisine pro casablanca",
    "pièces de rechange machine a laver industrielle maroc",
    "fagor professional maroc",
    "distributeur fagor maroc",
    "pièces buanderie industrielle",
    "maintenance cuisine pro maroc",
    "dépannage cuisine restaurant maroc",
    "pièces détachées four rational unox maroc",
    "laveuse industrielle fagor maroc",
    "séchoir rotatif fagor maroc",
    "calandre repasseuse maroc",
    "conteneur aménagé snack cuisine maroc",
    "INSERTEC MAROC"
  ],
  authors: [{ name: "INSERTEC MAROC" }],
  creator: "INSERTEC MAROC",
  publisher: "INSERTEC MAROC",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Pièces de Rechange Cuisine Pro & Blanchisserie Industrielle Maroc | INSERTEC",
    description:
      "Plus de 2000 pièces de rechange en stock permanent, distributeur officiel Fagor Professional, dépannage 24/7 et conteneurs sur-mesure au Maroc.",
    url: "https://www.insertec.pro",
    siteName: "INSERTEC MAROC",
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: "https://www.insertec.pro/images/rechange.jpg",
        width: 1200,
        height: 630,
        alt: "INSERTEC MAROC - Pièces de rechange et équipements professionnels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INSERTEC MAROC – Pièces de Rechange & Fagor Professional Maroc",
    description:
      "Vente de pièces de rechange d'origine, distributeur Fagor Pro, dépannage 24/7 et maintenance de cuisines pros au Maroc.",
    images: ["https://www.insertec.pro/images/rechange.jpg"],
  },
  alternates: {
    canonical: "https://www.insertec.pro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.insertec.pro/#business",
        name: "INSERTEC MAROC",
        alternateName: "INSERTEC - Pièces de Rechange & Maintenance Cuisine Professionnelle Maroc",
        url: "https://www.insertec.pro",
        logo: "https://www.insertec.pro/images/logo.png",
        image: "https://www.insertec.pro/images/rechange.jpg",
        description: "Fournisseur leader de pièces de rechange pour cuisine professionnelle, grandes cuisines, buanderies et distributeur officiel agréé Fagor Professional au Maroc.",
        telephone: "+212522614414",
        priceRange: "$$",
        currenciesAccepted: "MAD",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        address: {
          "@type": "PostalAddress",
          streetAddress: "6 rue zine ishak n° 7, angle bd ibn tachfine, RDC MAG N° 505",
          addressLocality: "Casablanca",
          addressRegion: "Casablanca-Settat",
          postalCode: "20300",
          addressCountry: "MA"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "33.589886",
          longitude: "-7.579628"
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Casablanca" },
          { "@type": "AdministrativeArea", name: "Rabat" },
          { "@type": "AdministrativeArea", name: "Marrakech" },
          { "@type": "AdministrativeArea", name: "Tanger" },
          { "@type": "AdministrativeArea", name: "Agadir" },
          { "@type": "AdministrativeArea", name: "Fès" },
          { "@type": "Country", name: "Maroc" }
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:30",
            closes: "18:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
            description: "Service d'urgence et dépannage technique 24h/24 et 7j/7"
          }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Catalogue Pièces de Rechange & Équipements Professionnels",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Vente de Pièces de Rechange pour Cuisine Professionnelle",
                description: "Stock permanent de +2000 références pour fours, friteuses, sauteuses, brûleurs gaz, thermostats et résistances."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pièces Détachées pour Buanderie & Machines à Laver Industrielles",
                description: "Pièces d'origine pour laveuses, séchoirs, essoreuses et calandres repasseuses (Fagor, Miele, Primus, Electrolux)."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Gamme Complète Fagor Professional Maroc",
                description: "Laveuses industrielles Touch Plus, séchoirs rotatifs, calandres murales et tables de repassage avec garantie constructeur."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dépannage 24/7 & Maintenance Préventive CHR",
                description: "Intervention rapide sur site dans tout le Maroc pour hôtels, restaurants, collectivités et blanchisseries."
              }
            }
          ]
        },
        sameAs: [
          "https://www.insertec.pro"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.insertec.pro/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Où acheter des pièces de rechange pour cuisine professionnelle au Maroc ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "INSERTEC MAROC est le spécialiste incontournable à Casablanca et partout au Maroc, avec un stock de plus de 2000 pièces de rechange certifiées d'origine constructeur disponibles immédiatement."
            }
          },
          {
            "@type": "Question",
            name: "Qui est le distributeur officiel de Fagor Professional au Maroc ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "INSERTEC MAROC est distributeur officiel agréé de la marque Fagor Professional au Maroc, fournissant laveuses industrielles, séchoirs Touch Plus, calandres repasseuses et SAV garanti."
            }
          },
          {
            "@type": "Question",
            name: "Quels sont les délais de livraison des pièces de rechange au Maroc ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Grâce à un stock permanent à Casablanca, INSERTEC assure une expédition express en moins de 24h à 48h dans toutes les villes du Maroc (Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir, etc.)."
            }
          }
        ]
      }
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
