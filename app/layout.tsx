import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "INSERTEC MAROC – Pièces de rechange & Maintenance équipements professionnels",
  description:
    "INSERTEC MAROC est votre partenaire de confiance pour la vente de pièces de rechange et la maintenance de matériel de cuisine professionnelle et de grandes machines à laver pour hôtels au Maroc.",
  keywords: [
    "pièces de rechange",
    "maintenance cuisine professionnelle",
    "machines à laver hôtels",
    "dépannage 24/7",
    "INSERTEC MAROC",
    "équipements hôteliers",
  ],
  openGraph: {
    title: "INSERTEC MAROC – Expert en équipements professionnels",
    description:
      "Vente de pièces de rechange et maintenance de matériel de cuisine professionnelle et de machines à laver pour hôtels.",
    type: "website",
    locale: "fr_MA",
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
