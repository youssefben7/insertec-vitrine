import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import ContainerSection from "./components/ContainerSection";
import CatalogueSection from "./components/CatalogueSection";
import About from "./components/About";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "INSERTEC MAROC – Maintenance Cuisine Pro, Buanderie & Conteneurs Aménagés à Casablanca",
  description:
    "INSERTEC MAROC : Vente de pièces de rechange d'origine, maintenance d'équipements de cuisine professionnelle, machines à laver industrielles et vente/aménagement sur-mesure de conteneurs maritimes (snacks, cuisines mobiles, laveries, bureaux) au Maroc. Dépannage 24/7.",
  keywords: [
    "INSERTEC MAROC",
    "conteneur aménagé maroc",
    "vente conteneur maritime casablanca",
    "conteneur snack maroc",
    "conteneur cuisine professionnelle mobile",
    "conteneur buanderie laverie maroc",
    "maintenance cuisine professionnelle Casablanca",
    "pièces de rechange cuisine professionnelle Maroc",
    "maintenance machine à laver industrielle Maroc",
    "dépannage buanderie hôtel Casablanca",
    "rational maroc",
    "electrolux maroc",
    "miele professional maroc",
    "sav cuisine professionnelle maroc",
    "pièces détachées cuisine pro maroc",
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
        <Products />
        <ContainerSection />
        <CatalogueSection />
        <About />
      </main>
      <Footer />
    </>
  );
}
