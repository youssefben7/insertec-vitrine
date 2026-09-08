import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FagorSection from "./components/FagorSection";
import Products from "./components/Products";
import ContainerSection from "./components/ContainerSection";
import CatalogueSection from "./components/CatalogueSection";
import About from "./components/About";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Pièces de Rechange Cuisine Professionnelle Maroc & Blanchisserie | Fagor Pro | INSERTEC",
  description:
    "Vente de pièces de rechange d'origine pour cuisines professionnelles et buanderies industrielles au Maroc. Distributeur officiel Fagor Professional, dépannage 24/7 et conteneurs aménagés à Casablanca.",
  keywords: [
    "pièces de rechange cuisine professionnelle maroc",
    "pièces détachées cuisine pro casablanca",
    "pièces de rechange machine a laver industrielle maroc",
    "fagor professional maroc",
    "fagor maroc",
    "distributeur fagor professional casablanca",
    "laveuse industrielle fagor maroc",
    "sechoir rotatif fagor maroc",
    "calandre repasseuse fagor",
    "table de repassage professionnelle maroc",
    "mannequin de finition maroc",
    "conteneur aménagé maroc",
    "maintenance cuisine professionnelle Casablanca",
    "pièces de rechange cuisine professionnelle Maroc",
    "maintenance machine à laver industrielle Maroc",
    "dépannage buanderie hôtel Casablanca",
    "sav cuisine professionnelle maroc",
    "dépannage 24/7 cuisine maroc",
    "INSERTEC MAROC"
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FagorSection />
        <Products />
        <ContainerSection />
        <CatalogueSection />
        <About />
      </main>
      <Footer />
    </>
  );
}
