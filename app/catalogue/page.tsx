"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allProductData } from "../data/products";
import { fagorProducts } from "../data/fagorProducts";
import Image from "next/image";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Wrench, Zap } from "lucide-react";

type CombinedItem = {
  id: string;
  name: string;
  category: string;
  image: string;
  isFagor?: boolean;
  series?: string;
  badge?: string;
  capacity?: string;
  description?: string;
};

const ITEMS_PER_PAGE = 16;

export default function CataloguePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [catalogType, setCatalogType] = useState<"all" | "fagor" | "pieces">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Adapt Fagor products to combined format
  const fagorItems: CombinedItem[] = fagorProducts.map((p) => ({
    id: p.id,
    name: p.name,
    category: `Fagor : ${p.categoryLabel}`,
    image: p.image,
    isFagor: true,
    series: p.series,
    badge: p.badge,
    capacity: p.capacity,
    description: p.shortDesc,
  }));

  const sparePartsItems: CombinedItem[] = allProductData.map((p) => ({
    id: p.id,
    name: p.name,
    category: p.category,
    image: p.image,
    isFagor: false,
  }));

  const allItems: CombinedItem[] = [...fagorItems, ...sparePartsItems];

  // Derive categories list based on active catalogType
  const relevantItemsForCategories =
    catalogType === "all"
      ? allItems
      : catalogType === "fagor"
      ? fagorItems
      : sparePartsItems;

  const categories = [
    "all",
    ...Array.from(new Set(relevantItemsForCategories.map((p) => p.category))),
  ];

  const filteredProducts = allItems.filter((p) => {
    if (catalogType === "fagor" && !p.isFagor) return false;
    if (catalogType === "pieces" && p.isFagor) return false;

    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.series && p.series.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    const gridEl = document.getElementById("product-grid");
    if (gridEl) gridEl.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    const gridEl = document.getElementById("product-grid");
    if (gridEl) gridEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#f0f6ff] min-h-screen pt-24 pb-20">
        {/* Top Breadcrumb & Back button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#b8cef0]/50 text-[#0f2044] font-semibold text-sm hover:bg-[#f97316] hover:text-white hover:border-[#f97316] shadow-sm active:scale-95 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Retour à l&apos;accueil</span>
            </Link>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#152d5e]/60">
              <Link href="/" className="hover:text-[#f97316]">Accueil</Link>
              <span>/</span>
              <span className="text-[#f97316]">Catalogue</span>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Nouveau Partenariat FAGOR PROFESSIONAL & Pièces d'origine</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2044] mb-4 tracking-tight">
              Catalogue <span className="text-[#f97316]">Équipements</span> & <span className="text-red-600">Fagor Pro</span>
            </h1>
            <p className="text-base sm:text-lg text-[#152d5e]/70 leading-relaxed">
              Consultez notre sélection d'équipements de blanchisserie et finition <strong>Fagor Professional</strong>, téléchargez notre catalogue général officiel en PDF ou recherchez vos pièces détachées en ligne.
            </p>
          </div>
        </div>

        {/* Download & Partner Cards Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Card 1: Fagor Professional Spotlight */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#101f3d] via-[#0b162c] to-[#180a14] text-white rounded-3xl p-6 sm:p-8 border border-red-500/30 shadow-[0_10px_30px_rgba(225,29,72,0.15)] flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-red-600 to-rose-600 text-white uppercase tracking-wider shadow-md">
                    Partenariat Officiel Maroc
                  </span>
                  <span className="text-xs text-rose-300 font-semibold bg-rose-950/60 border border-rose-500/30 px-2.5 py-0.5 rounded-full">
                    Gamme Blanchisserie Complète
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight">
                  Machines & Équipements Fagor Professional
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                  INSERTEC distribue officiellement au Maroc la gamme complète <strong>Fagor Professional</strong> : laveuses essoreuses super-essorage de 11 à 120 kg, séchoirs rotatifs Touch Plus, calandres repasseuses pliantes et tables de finition haute précision.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6 text-xs text-white/90">
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg p-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                    <span>Laveuses 11-120kg</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg p-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                    <span>Séchoirs Touch Plus</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg p-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                    <span>Calandres Ø200-650</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg p-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Garantie Maroc</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg p-2">
                    <Wrench className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                    <span>Installation Insertec</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg p-2">
                    <Zap className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                    <span>SAV 24/7</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    setCatalogType("fagor");
                    setSelectedCategory("all");
                    document.getElementById("product-grid")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm shadow-[0_4px_20px_rgba(225,29,72,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explorer les machines Fagor ({fagorItems.length} modèles)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Catalogue Général PDF Download */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#b8cef0]/60 shadow-[0_10px_30px_rgba(15,32,68,0.06)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.12)] transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#f97316]/10 text-[#f97316]">
                    Édition 2025/2026
                  </span>
                  <span className="text-xs text-[#152d5e]/60 font-medium">Format PDF • 43 MB</span>
                </div>

                <h2 className="text-2xl font-black text-[#0f2044] mb-3">
                  Catalogue Pièces INSERTEC
                </h2>
                <p className="text-sm text-[#152d5e]/75 leading-relaxed mb-6">
                  Téléchargez notre catalogue officiel de pièces de rechange (43.4 MB) avec plus de 10 000 références en stock permanent pour fours, lave-vaisselle, brûleurs et moteurs.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href="/catalogue-insertec-maroc.pdf"
                  download="Catalogue-General-INSERTEC-MAROC.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#f97316] text-white font-bold text-sm px-5 py-3.5 rounded-xl hover:bg-[#ea580c] shadow-[0_4px_15px_rgba(249,115,22,0.3)] active:scale-95 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Télécharger le Catalogue PDF (43 MB)</span>
                </a>
                
                <a
                  href="https://wa.me/212608926620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-sm transition-all"
                >
                  <span>Devis WhatsApp immédiat : 0608 92 66 20</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Section: Consultation Interactive en Ligne */}
        <div id="product-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          
          {/* Main 3-Way Catalog Filter Switcher */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 p-1.5 bg-white/80 backdrop-blur-md rounded-2xl border border-[#b8cef0]/60 shadow-sm max-w-2xl">
            <button
              onClick={() => {
                setCatalogType("all");
                setSelectedCategory("all");
                setCurrentPage(1);
              }}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                catalogType === "all"
                  ? "bg-[#0f2044] text-white shadow-md"
                  : "text-[#152d5e]/70 hover:text-[#0f2044] hover:bg-black/5"
              }`}
            >
              Tous les articles ({allItems.length})
            </button>

            <button
              onClick={() => {
                setCatalogType("fagor");
                setSelectedCategory("all");
                setCurrentPage(1);
              }}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                catalogType === "fagor"
                  ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-[0_4px_15px_rgba(225,29,72,0.4)]"
                  : "text-red-600 bg-red-50 hover:bg-red-100 border border-red-200"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>Fagor Pro ({fagorItems.length})</span>
            </button>

            <button
              onClick={() => {
                setCatalogType("pieces");
                setSelectedCategory("all");
                setCurrentPage(1);
              }}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                catalogType === "pieces"
                  ? "bg-[#f97316] text-white shadow-[0_4px_15px_rgba(249,115,22,0.35)]"
                  : "text-[#152d5e]/70 hover:text-[#0f2044] hover:bg-black/5"
              }`}
            >
              Pièces Rechange ({sparePartsItems.length})
            </button>
          </div>

          {/* Search & Category Filter Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-[#b8cef0]/40 pb-6">
            <div>
              <span className="text-xs font-bold text-[#f97316] uppercase tracking-wider">
                {catalogType === "fagor" ? "Machines Fagor Professional" : catalogType === "pieces" ? "Pièces Détachées" : "Vue Complète"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0f2044] mt-1">
                {filteredProducts.length} référence{filteredProducts.length > 1 ? "s" : ""} disponible{filteredProducts.length > 1 ? "s" : ""}
              </h2>
            </div>

            {/* Search & Category filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher par nom, modèle..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full sm:w-64 px-4 py-2.5 pl-10 rounded-xl bg-white border border-[#b8cef0]/60 text-sm text-[#0f2044] focus:outline-none focus:border-[#f97316] shadow-sm"
                />
                <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-4 py-2.5 rounded-xl bg-white border border-[#b8cef0]/60 text-sm font-medium text-[#0f2044] focus:outline-none focus:border-[#f97316] shadow-sm"
              >
                <option value="all">Toutes les sous-catégories</option>
                {categories.filter((c) => c !== "all").map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid Section */}
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {currentItems.map((product) => (
                <div
                  key={product.id}
                  className={`group bg-white rounded-2xl p-4 shadow-sm border transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
                    product.isFagor
                      ? "border-red-500/30 hover:border-red-500/60"
                      : "border-[#b8cef0]/40 hover:border-[#f97316]/50"
                  }`}
                >
                  <div>
                    {/* Image Box */}
                    <div className="w-full h-48 sm:h-56 bg-gray-50 rounded-xl mb-4 overflow-hidden flex items-center justify-center p-2 border border-gray-100 relative">
                      <Image
                        src={product.image}
                        alt={`${product.name} - INSERTEC MAROC`}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="p-2 group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.isFagor && (
                        <div className="absolute top-2 left-2 bg-gradient-to-r from-red-600 to-rose-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-md">
                          FAGOR PRO
                        </div>
                      )}
                      {product.capacity && (
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[9px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                          {product.capacity}
                        </div>
                      )}
                    </div>

                    <div>
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        product.isFagor 
                          ? "text-red-700 bg-red-100 border border-red-200" 
                          : "text-[#3b6abf] bg-[#3b6abf]/10"
                      }`}>
                        {product.category}
                      </span>

                      <h3 className="text-[#0f2044] font-bold mt-2.5 text-sm sm:text-base leading-snug group-hover:text-[#f97316] transition-colors">
                        {product.name}
                      </h3>

                      {product.description && (
                        <p className="text-xs text-[#152d5e]/60 mt-1.5 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/212608926620?text=Bonjour,%20je%20souhaite%20demander%20le%20prix%20et%20la%20disponibilit%C3%A9%20de%20:%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 w-full text-center text-xs sm:text-sm font-semibold py-2.5 rounded-xl border active:scale-95 transition-all duration-300 ${
                      product.isFagor
                        ? "border-red-500 text-red-600 hover:bg-red-600 hover:text-white shadow-[0_2px_10px_rgba(225,29,72,0.2)]"
                        : "border-[#f97316]/30 text-[#f97316] hover:bg-[#f97316] hover:text-white shadow-[0_2px_10px_rgba(249,115,22,0.2)]"
                    }`}
                  >
                    Demander le prix / devis
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-[#b8cef0]/50 mb-16">
              <p className="text-[#0f2044] font-bold text-lg mb-2">Aucun produit ne correspond à votre sélection.</p>
              <p className="text-sm text-[#152d5e]/70 mb-4">Contactez-nous directement pour commander ou obtenir la fiche technique de cette référence.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setCatalogType("all");
                  setSelectedCategory("all");
                }}
                className="px-5 py-2.5 bg-[#f97316] text-white rounded-xl text-sm font-semibold hover:bg-[#ea580c] transition-all cursor-pointer"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}

          {/* Pagination Section */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mb-12">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-[#b8cef0]/40 text-[#0f2044] hover:bg-[#f97316] hover:text-white hover:border-[#f97316] hover:shadow-md active:scale-95 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-[#0f2044] disabled:hover:border-[#b8cef0]/40 disabled:active:scale-100 disabled:shadow-none transition-all duration-300 cursor-pointer disabled:cursor-default"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <span className="text-[#0f2044] font-semibold text-sm">
                Page {currentPage} sur {totalPages} ({filteredProducts.length} articles)
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-[#b8cef0]/40 text-[#0f2044] hover:bg-[#f97316] hover:text-white hover:border-[#f97316] hover:shadow-md active:scale-95 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-[#0f2044] disabled:hover:border-[#b8cef0]/40 disabled:active:scale-100 disabled:shadow-none transition-all duration-300 cursor-pointer disabled:cursor-default"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
