"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allProductData } from "../data/products";
import Image from "next/image";

const ITEMS_PER_PAGE = 16;

export default function CataloguePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(allProductData.map((p) => p.category)))];

  const filteredProducts = allProductData.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] text-xs font-bold uppercase tracking-wider mb-4">
              Documentation Officielle & Téléchargement
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2044] mb-4 tracking-tight">
              Catalogue de <span className="text-[#f97316]">Pièces de Rechange</span>
            </h1>
            <p className="text-base sm:text-lg text-[#152d5e]/70 leading-relaxed">
              Téléchargez directement notre catalogue officiel complet en format PDF ou explorez nos pièces détachées en ligne ci-dessous.
            </p>
          </div>
        </div>

        {/* Download Cards Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Card 1: Catalogue PDF Download (Featured) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#b8cef0]/60 shadow-[0_10px_30px_rgba(15,32,68,0.06)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.12)] transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* 3D Mockup Visual Header */}
                <div className="w-full h-64 bg-gradient-to-br from-[#fff7ed] via-[#ffedd5]/50 to-[#fed7aa]/30 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden border border-[#fed7aa]/50 mb-6">
                  <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-[#f97316]/15 rounded-full blur-2xl" />
                  
                  {/* Mockup Book Graphic */}
                  <div className="relative w-40 h-52 bg-gradient-to-br from-[#f97316] via-[#ea580c] to-[#c2410c] rounded-r-xl rounded-l-xs p-4 shadow-2xl transform group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-300 flex flex-col justify-between border-t border-r border-b border-white/30 text-white">
                    <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-black/25 rounded-l-xs" />
                    <div className="absolute right-[-5px] top-2 bottom-2 w-1.5 bg-gray-300 rounded-r-xs" />
                    
                    <div className="pl-2">
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/95">INSERTEC</div>
                      <div className="text-[8px] text-white/75 font-semibold">MAROC</div>
                    </div>
                    
                    <div className="pl-2">
                      <div className="text-sm font-black leading-tight">CATALOGUE<br />GÉNÉRAL</div>
                      <div className="text-[9px] text-white/85 mt-1 font-medium">Pièces & Équipements</div>
                    </div>
                    
                    <div className="pl-2 text-[8px] text-white/70 border-t border-white/20 pt-1 flex justify-between items-center">
                      <span>www.insertec.pro</span>
                      <span className="font-bold text-white bg-black/20 px-1 rounded">PDF</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#f97316]/10 text-[#f97316]">
                    Édition 2025/2026
                  </span>
                  <span className="text-xs text-[#152d5e]/60 font-medium">Format PDF • 43 MB</span>
                  <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    +10 000 Références
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#0f2044] mb-3">
                  Catalogue Général INSERTEC
                </h2>
                <p className="text-sm sm:text-base text-[#152d5e]/75 leading-relaxed mb-6">
                  Téléchargez ici notre <strong>catalogue officiel complet (43.4 MB)</strong>. Retrouvez toutes les pièces de rechange d&apos;origine pour fours professionnels, lave-vaisselle industriels, machines à laver, séchoirs et appareils de cuisson.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href="/catalogue-insertec-maroc.pdf"
                  download="Catalogue-General-INSERTEC-MAROC.pdf"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 bg-[#f97316] text-white font-bold text-base px-6 py-4 rounded-xl hover:bg-[#ea580c] shadow-[0_8px_20px_rgba(249,115,22,0.3)] hover:shadow-[0_12px_25px_rgba(249,115,22,0.4)] active:scale-95 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Télécharger le Catalogue PDF (43 MB)</span>
                </a>
                
                <a
                  href="/catalogue-insertec-maroc.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-4 inline-flex items-center justify-center gap-2 rounded-xl bg-[#f0f6ff] text-[#0f2044] hover:bg-[#0f2044] hover:text-white border border-[#b8cef0]/60 font-semibold text-sm transition-all duration-300"
                  title="Ouvrir dans un nouvel onglet"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span>Ouvrir en ligne</span>
                </a>
              </div>
            </div>

            {/* Card 2: Demande Spécifique & Devis Direct */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0f2044] via-[#152d5e] to-[#0a1628] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_10px_30px_rgba(15,32,68,0.2)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)] transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-full h-64 bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden border border-white/10 mb-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.101-2.884-6.963C16.59 1.916 14.116.892 11.488.892 6.05 10.428 5.626 5.626 5.626v.012c0 1.706.452 3.376 1.311 4.848l.515.87-.323 1.182-.33 1.206 1.24-.325 1.282-.336.56.944z"/>
                    </svg>
                  </div>
                  <div className="text-base font-bold text-white">Recherche & Devis Immédiat</div>
                  <div className="text-xs text-white/70 mt-1">Identification rapide en moins de 15 min</div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-400">
                    Assistance Technique 24/7
                  </span>
                  <span className="text-xs text-white/50 font-medium">WhatsApp / GSM</span>
                </div>

                <h2 className="text-2xl font-black text-white mb-3">
                  Une référence introuvable ?
                </h2>
                <p className="text-sm text-white/75 leading-relaxed mb-6">
                  Envoyez-nous directement la photo de votre pièce ou de la plaque signalétique de votre équipement par WhatsApp pour un devis et délai de livraison instantanés.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://wa.me/212608926620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-500 text-white font-bold text-sm sm:text-base px-5 py-4 rounded-xl hover:bg-emerald-600 shadow-[0_4px_20px_rgba(16,185,129,0.3)] active:scale-95 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.101-2.884-6.963C16.59 1.916 14.116.892 11.488.892 6.05 10.428 5.626 5.626v.012c0 1.706.452 3.376 1.311 4.848l.515.87-.323 1.182-.33 1.206 1.24-.325 1.282-.336.56.944z"/>
                  </svg>
                  <span>Demander sur WhatsApp : 0608 92 66 20</span>
                </a>

                <a
                  href="mailto:insertecinfo@gmail.com"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-3 rounded-xl border border-white/10 transition-all duration-300"
                >
                  <svg className="w-4 h-4 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Demande par email : insertecinfo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Consultation Interactive en Ligne */}
        <div id="product-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-[#b8cef0]/40 pb-6">
            <div>
              <span className="text-xs font-bold text-[#f97316] uppercase tracking-wider">
                Consultation En Ligne
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0f2044] mt-1">
                Explorer les pièces de rechange
              </h2>
            </div>

            {/* Search & Category filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher une pièce..."
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
                <option value="all">Toutes les catégories</option>
                {categories.filter((c) => c !== "all").map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid Section */}
          {currentItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {currentItems.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl p-4 shadow-sm border border-[#b8cef0]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="w-full h-48 sm:h-56 bg-gray-50 rounded-xl mb-4 overflow-hidden flex items-center justify-center p-2 border border-gray-100 relative">
                    <Image
                      src={product.image}
                      alt={`${product.name} - INSERTEC MAROC`}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[#3b6abf] bg-[#3b6abf]/10 px-2.5 py-1 rounded-full">
                        {product.category}
                      </span>
                      <h3 className="text-[#0f2044] font-bold mt-3 text-sm sm:text-base leading-snug">
                        {product.name}
                      </h3>
                    </div>
                    <a
                      href={`https://wa.me/212608926620?text=Bonjour,%20je%20souhaite%20demander%20le%20prix%20et%20la%20disponibilit%C3%A9%20de%20:%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full text-center text-sm font-semibold py-2.5 rounded-lg border border-[#f97316]/30 text-[#f97316] hover:bg-[#f97316] hover:text-white hover:shadow-[0_4px_15px_rgba(249,115,22,0.3)] active:scale-95 focus:ring-4 focus:ring-[#f97316]/30 focus:outline-none transition-all duration-300"
                    >
                      Demander le prix
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-[#b8cef0]/50 mb-16">
              <p className="text-[#0f2044] font-bold text-lg mb-2">Aucun produit ne correspond à votre recherche.</p>
              <p className="text-sm text-[#152d5e]/70 mb-4">Contactez-nous directement pour commander cette référence sur mesure.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-5 py-2.5 bg-[#f97316] text-white rounded-xl text-sm font-semibold hover:bg-[#ea580c] transition-all"
              >
                Réinitialiser la recherche
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
                Page {currentPage} sur {totalPages} ({filteredProducts.length} pièces)
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
