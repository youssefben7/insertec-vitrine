import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalogue Pièces de Rechange Cuisine Pro & Fagor Professional Maroc | INSERTEC",
  description:
    "Consultez notre catalogue complet de pièces de rechange certifiées (cuisson, froid, lavage) et équipements de buanderie industrielle Fagor Professional au Maroc. Devis immédiat.",
  keywords: [
    "catalogue pièces de rechange maroc",
    "pièces détachées cuisine pro casablanca",
    "catalogue fagor professional maroc",
    "laveuses industrielles fagor maroc",
    "séchoirs rotatifs maroc",
    "pièces rechange froid cuisson buanderie maroc",
    "INSERTEC MAROC"
  ],
  alternates: {
    canonical: "https://www.insertec.pro/catalogue",
  },
};

export default function CatalogueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
