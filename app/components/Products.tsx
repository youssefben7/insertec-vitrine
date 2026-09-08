"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ProductCarousel from "./ProductCarousel";
import Image from "next/image";
import { Sparkles, ArrowRight, CheckCircle2, Container } from "lucide-react";

type Product = {
  id: string;
  category: string;
  filterCategory: string;
  name: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  stock: string;
  stockColor: string;
  accentColor: string;
  isNew?: boolean;
};

const filterCategories = [
  { id: "all", label: "Tous les produits" },
  { id: "conteneurs", label: "Conteneurs Aménagés" },
  { id: "cuisine", label: "Cuisine Pro" },
  { id: "lavage", label: "Machines à laver" },
  { id: "electronique", label: "Électronique" },
  { id: "plomberie-meca", label: "Plomberie & Mécanique" },
];

const products: Product[] = [
  // NOUVEAUX PRODUITS : CONTENEURS
  {
    id: "product-container-snack",
    category: "Conteneurs",
    filterCategory: "conteneurs",
    name: "Conteneur Snack & Fast-Food",
    description: "Aménagement 20ft/40ft clé en main avec planchas, friteuses, hottes et réseau électrique.",
    tags: ["20ft / 40ft", "Cuisine Mobile", "Plug & Play"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    stock: "Sur-mesure",
    stockColor: "text-amber-400",
    accentColor: "#f97316",
    isNew: true,
  },
  {
    id: "product-container-cuisine",
    category: "Conteneurs",
    filterCategory: "conteneurs",
    name: "Conteneur Cuisine Professionnelle",
    description: "Laboratoire de cuisine aux normes HACCP avec sol résine, ventilation et fours.",
    tags: ["Normes HACCP", "Inox Alimentaire", "Fours & Cuisson"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    stock: "Sur-mesure",
    stockColor: "text-amber-400",
    accentColor: "#f97316",
    isNew: true,
  },
  {
    id: "product-container-laverie",
    category: "Conteneurs",
    filterCategory: "conteneurs",
    name: "Conteneur Buanderie & Laverie",
    description: "Module de blanchisserie autonome pour bases-vie, hôtels et chantiers avec machines INSERTEC.",
    tags: ["Buanderie Mobile", "Lavage Industriel", "Autonome"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    stock: "Sur-mesure",
    stockColor: "text-amber-400",
    accentColor: "#3b6abf",
    isNew: true,
  },

  // PIÈCES CUISINE PROFESSIONNELLE
  {
    id: "product-resistances",
    category: "Cuisine Pro",
    filterCategory: "cuisine",
    name: "Résistances & Thermostats",
    description: "Résistances de four, plaques chauffantes tubulaires et thermostats EGO de régulation.",
    tags: ["Four", "Grill", "Thermostats EGO"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    stock: "En stock",
    stockColor: "text-green-400",
    accentColor: "#f97316",
  },

  // MACHINES À LAVER
  {
    id: "product-pompes",
    category: "Lavage & Séchage",
    filterCategory: "lavage",
    name: "Pompes & Moteurs de Lavage",
    description: "Pompes de vidange, moteurs de tambour et moto-ventilateurs industriels.",
    tags: ["Lavage", "Moteurs", "Vidange"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    stock: "En stock",
    stockColor: "text-green-400",
    accentColor: "#3b6abf",
  },

  // ÉLECTRONIQUE
  {
    id: "product-cartes",
    category: "Électronique",
    filterCategory: "electronique",
    name: "Cartes Électroniques & PCB",
    description: "Cartes mères de contrôle, modules d'affichage et cartes de puissance.",
    tags: ["Contrôle", "Affichage", "Puissance"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    stock: "Sur commande",
    stockColor: "text-yellow-400",
    accentColor: "#f97316",
  },

  // ÉTANCHÉITÉ & PLOMBERIE
  {
    id: "product-joints",
    category: "Étanchéité",
    filterCategory: "plomberie-meca",
    name: "Joints & Garnitures",
    description: "Joints magnétiques de porte frigo, garnitures de hublot et étanchéité thermique.",
    tags: ["Porte", "Hublot", "Frigo"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    stock: "En stock",
    stockColor: "text-green-400",
    accentColor: "#3b6abf",
  },
  {
    id: "product-vannes",
    category: "Plomberie & Gaz",
    filterCategory: "plomberie-meca",
    name: "Vannes & Électrovannes",
    description: "Vannes gaz SIT, robinetterie PEL, électrovannes eau et thermocouples.",
    tags: ["SIT", "PEL", "Vannes Gaz"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    stock: "En stock",
    stockColor: "text-green-400",
    accentColor: "#f97316",
  },

  // MÉCANIQUE
  {
    id: "product-roulements",
    category: "Mécanique",
    filterCategory: "plomberie-meca",
    name: "Roulements & Courroies",
    description: "Roulements à billes, courroies de transmission et paliers de tambour.",
    tags: ["Transmission", "Tambour", "Paliers"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    stock: "En stock",
    stockColor: "text-green-400",
    accentColor: "#3b6abf",
  },
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.filterCategory === activeFilter);

  const handleQuoteClick = (productName: string) => {
    const text = encodeURIComponent(
      `Bonjour INSERTEC, je souhaite obtenir un devis / des informations pour : ${productName}`
    );
    window.open(`https://wa.me/212608926620?text=${text}`, "_blank");
  };

  return (
    <section
      id="products"
      className="relative py-16 sm:py-24 lg:py-32 bg-[#f0f6ff] overflow-hidden"
      aria-label="Catalogue pièces de rechange et conteneurs"
    >
      {/* Subtle top wave */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-[#050d1f]"
        style={{ clipPath: "ellipse(55% 100% at 50% 0%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="mb-12 lg:mb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-md bg-[#f97316]/10 border border-[#f97316]/25 mb-4">
                <span className="text-[#f97316] text-xs font-bold tracking-wider uppercase">
                  Catalogue & Solutions Clé en Main
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2044] mb-4 leading-tight tracking-tight">
                Pièces de rechange & Conteneurs
              </h2>
              <p className="text-[#152d5e]/70 text-base sm:text-lg max-w-xl leading-relaxed">
                Plus de 2000 références en stock permanent et nos solutions d'aménagement de conteneurs professionnels pour tous vos projets au Maroc.
              </p>
            </div>
            <div className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl border border-[#b8cef0]/40 group">
              <Image
                src="/images/rechange.jpg"
                alt="Pièces de rechange & Équipements INSERTEC MAROC"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2044]/30 to-transparent" />
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filters Tabs */}
        <ScrollReveal className="mb-10">
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-xl border border-[#b8cef0]/50 shadow-sm max-w-4xl">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0f2044] text-white shadow-sm"
                      : "text-[#152d5e]/70 hover:text-[#0f2044] hover:bg-[#0f2044]/5"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Featured Banner for Containers when in 'all' or 'conteneurs' filter */}
        {(activeFilter === "all" || activeFilter === "conteneurs") && (
          <ScrollReveal className="mb-10">
            <div className="relative rounded-2xl overflow-hidden bg-[#0a1730] text-white p-6 sm:p-8 lg:p-10 border border-white/10 shadow-xl">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#f97316] text-white text-xs font-bold uppercase tracking-wider mb-4">
                    Nouveauté 2026
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight">
                    Vente & Aménagement de Conteneurs Maritimes Sur-Mesure
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                    Snacks, Cuisines professionnelles mobiles, Buanderies ou Bureaux. Nous livrons votre conteneur clé en main avec l'ensemble des équipements INSERTEC installés et garantis.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-white/80">
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#f97316] font-bold">—</span>
                      Isolation & Électricité aux normes
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#f97316] font-bold">—</span>
                      Équipements Pro Inclus
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-[#f97316] font-bold">—</span>
                      Livraison partout au Maroc
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
                  <a
                    href="#conteneurs"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#f97316] text-white font-bold text-xs sm:text-sm hover:bg-[#ea580c] transition-all"
                  >
                    <span>Découvrir la Galerie & Options</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleQuoteClick("Projet Conteneur Personnalisé")}
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    Demander une Étude 3D
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filteredProducts.map((product, index) => (
            <ScrollReveal key={product.id} variant="scale" delay={index * 60}>
              <article
                id={product.id}
                className="group h-full bg-white rounded-2xl border border-[#b8cef0]/40 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category + Stock */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#3b6abf] bg-[#3b6abf]/10 px-2.5 py-0.5 rounded">
                        {product.category}
                      </span>
                      <span className={`text-xs font-semibold ${product.stockColor} bg-[#0f2044]/5 px-2.5 py-0.5 rounded`}>
                        {product.stock}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto"
                      style={{
                        background: `linear-gradient(135deg, ${product.accentColor}15, ${product.accentColor}05)`,
                        color: product.accentColor,
                        border: `1px solid ${product.accentColor}25`,
                      }}
                    >
                      {product.icon}
                    </div>

                    {/* Text */}
                    <h3 className="text-[#0f2044] font-bold text-base mb-2 text-center leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-[#152d5e]/60 text-xs text-center leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 justify-center mb-5">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-0.5 rounded bg-[#f0f6ff] text-[#2a5298] font-medium border border-[#b8cef0]/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA button */}
                  <button
                    id={`${product.id}-btn`}
                    onClick={() => handleQuoteClick(product.name)}
                    className="w-full py-3 rounded-xl text-xs font-bold transition-all duration-200 border cursor-pointer border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white"
                  >
                    Demander un devis WhatsApp
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Carousel of actual product images */}
        <ScrollReveal className="mt-16 sm:mt-24">
          <ProductCarousel />
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal className="text-center mt-14">
          <p className="text-[#152d5e]/60 text-base mb-6">
            Vous souhaitez voir plus de pièces ou vous avez un projet spécifique ?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="/catalogue"
              className="inline-flex items-center justify-center gap-3 bg-[#f97316] text-white font-semibold px-8 py-4 min-h-[56px] rounded-full hover:bg-[#ea580c] hover:shadow-[0_10px_30px_rgba(249,115,22,0.4)] active:scale-95 focus:ring-4 focus:ring-[#f97316]/40 transition-all duration-300 w-full sm:w-auto"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Voir le catalogue complet
            </a>
            <a
              href="mailto:insertecinfo@gmail.com"
              id="products-email-cta"
              className="inline-flex items-center justify-center gap-3 bg-[#0f2044] text-white font-semibold px-8 py-4 min-h-[56px] rounded-full hover:bg-[#152d5e] hover:shadow-[0_10px_30px_rgba(15,32,68,0.3)] active:scale-95 focus:ring-4 focus:ring-[#0f2044]/40 transition-all duration-300 w-full sm:w-auto"
            >
              <svg
                className="w-5 h-5 text-[#f97316]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Envoyer une demande
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
