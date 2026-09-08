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
  title: "INSERTEC MAROC – Distributeur Fagor Professional, Maintenance Cuisine Pro, Buanderie & Conteneurs",
  description:
    "INSERTEC MAROC : Distributeur officiel Fagor Professional au Maroc. Vente de laveuses industrielles, séchoirs rotatifs, calandres repasseuses, pièces de rechange d'origine certifiées, dépannage 24/7 et conteneurs aménagés sur-mesure à Casablanca et partout au Maroc.",
  keywords: [
    "INSERTEC MAROC",
    "fagor professional maroc",
    "fagor maroc",
    "distributeur fagor professional casablanca",
    "laveuse industrielle fagor maroc",
    "sechoir rotatif fagor maroc",
    "calandre repasseuse fagor",
    "table de repassage professionnelle maroc",
    "mannequin de finition maroc",
    "conteneur aménagé maroc",
    "vente conteneur maritime casablanca",
    "maintenance cuisine professionnelle Casablanca",
    "pièces de rechange cuisine professionnelle Maroc",
    "maintenance machine à laver industrielle Maroc",
    "dépannage buanderie hôtel Casablanca",
    "sav cuisine professionnelle maroc",
    "dépannage 24/7 cuisine maroc"
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
