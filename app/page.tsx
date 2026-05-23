import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "INSERTEC MAROC – Maintenance Cuisine Professionnelle & Buanderie à Casablanca",
  description:
    "INSERTEC MAROC : Vente de pièces de rechange d'origine et maintenance d'équipements de cuisine professionnelle et machines à laver industrielles pour hôtels et restaurants au Maroc. Dépannage d'urgence 24/7.",
  keywords: [
    "INSERTEC MAROC",
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
        <About />
      </main>
      <Footer />
    </>
  );
}
