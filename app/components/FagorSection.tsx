"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { 
  fagorProducts, 
  fagorCategories, 
  FagorProduct 
} from "../data/fagorProducts";
import { 
  ShieldCheck, 
  Wrench, 
  ExternalLink, 
  X,
  MessageCircle,
  Info
} from "lucide-react";

// Official Fagor Professional Emblem & Logo
export function FagorOfficialLogo({ className = "h-9" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <div className="flex flex-col text-left">
        <span className="text-white font-black text-2xl sm:text-3xl tracking-wider leading-none font-sans">
          FAGOR
        </span>
        <span className="text-[#9ca3af] text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase leading-none mt-1">
          PROFESSIONAL
        </span>
      </div>
      <svg
        viewBox="0 0 100 100"
        className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="48" fill="#e5e7eb" />
        <path
          d="M 16 38 L 86 38 L 72 47 L 16 47 Z"
          fill="#0c1933"
        />
        <path
          d="M 16 56 L 72 56 L 60 65 L 16 65 Z"
          fill="#0c1933"
        />
      </svg>
    </div>
  );
}

export default function FagorSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<FagorProduct | null>(null);

  const filteredProducts =
    activeCategory === "all"
      ? fagorProducts
      : fagorProducts.filter((p) => p.category === activeCategory);

  const handleQuoteClick = (productName: string) => {
    const text = encodeURIComponent(
      `Bonjour INSERTEC, je souhaite obtenir un devis pour l'équipement Fagor Professional : ${productName}`
    );
    window.open(`https://wa.me/212608926620?text=${text}`, "_blank");
  };

  return (
    <section
      id="fagor"
      className="relative py-20 sm:py-28 bg-[#050d1f] text-white overflow-hidden"
      aria-label="Gamme Fagor Professional Maroc - INSERTEC"
    >
      {/* Top subtle divider for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Seamless Subtle Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(15,32,68,0.8) 0%, rgba(229,0,39,0.06) 50%, transparent 80%)" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Official Brand Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex justify-center mb-6">
            <div className="p-3.5 px-6 rounded-2xl bg-[#0c1933] border border-white/10 shadow-lg inline-flex items-center gap-3">
              <FagorOfficialLogo />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            Équipements de Blanchisserie & Finition
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Distributeur officiel au Maroc. Laveuses essoreuses industrielles, séchoirs Touch Plus, calandres repasseuses et tables de finition avec garantie et SAV certifiés.
          </p>

          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-white/60 font-semibold flex-wrap">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Garantie Constructeur
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-[#e50027]" />
              Installation & SAV Agréé INSERTEC
            </span>
            <span className="text-white/20">•</span>
            <a
              href="https://www.fagorprofessional.com/fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white underline underline-offset-4 inline-flex items-center gap-1"
            >
              <span>fagorprofessional.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </ScrollReveal>

        {/* Category Tabs - Harmonized with theme */}
        <ScrollReveal className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#0c1933] rounded-xl border border-white/10 max-w-4xl mx-auto">
            {fagorCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white text-[#050d1f] shadow-md"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ScrollReveal key={product.id} variant="scale" delay={index * 30}>
              <article className="group h-full bg-[#0a1730] rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/25 hover:bg-[#0d1d3d] hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
                
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Row: Category & Capacity */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">
                        {product.categoryLabel}
                      </span>
                      {product.capacity && (
                        <span className="text-[10px] font-bold text-white bg-white/10 px-2 py-0.5 rounded border border-white/10">
                          {product.capacity}
                        </span>
                      )}
                    </div>

                    {/* Image Box */}
                    <div className="relative w-full h-48 bg-[#050d1f] rounded-xl overflow-hidden mb-4 p-3 flex items-center justify-center border border-white/5 group-hover:border-white/15 transition-all">
                      <Image
                        src={product.image}
                        alt={`${product.name} - Fagor Professional`}
                        fill
                        style={{ objectFit: "contain" }}
                        className="p-2 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      {product.badge && (
                        <span className="absolute bottom-2 left-2 text-[9px] font-bold bg-[#050d1f]/90 text-white/90 px-2 py-0.5 rounded border border-white/10">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Model Name */}
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1.5 leading-snug group-hover:text-white transition-colors">
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-white/60 text-xs leading-relaxed line-clamp-2 mb-4">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                    <button
                      onClick={() => handleQuoteClick(product.name)}
                      className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-[#e50027] hover:bg-[#c80022] text-white active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Demander un devis</span>
                    </button>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      aria-label="Fiche technique"
                      title="Voir la fiche technique"
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Modal for Technical Specs */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg bg-[#0c1933] border border-white/20 rounded-2xl p-6 text-white shadow-2xl overflow-hidden max-h-[85vh] flex flex-col justify-between">
              
              <button
                onClick={() => setSelectedProduct(null)}
                aria-label="Fermer"
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto pr-2 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-white text-[#050d1f] uppercase">
                    {selectedProduct.categoryLabel}
                  </span>
                  {selectedProduct.capacity && (
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-white/10 text-white border border-white/15">
                      {selectedProduct.capacity}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-black text-white mb-1">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-white/75 text-xs leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Specs Table */}
                <div className="bg-[#050d1f] rounded-xl p-3 border border-white/10 text-xs">
                  <div className="font-bold text-white/60 uppercase mb-2 text-[10px]">
                    Spécifications Techniques
                  </div>
                  <div className="space-y-1.5">
                    {Object.entries(selectedProduct.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between py-1 border-b border-white/5 last:border-0">
                        <span className="text-white/50">{k}</span>
                        <span className="text-white font-semibold text-right">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs cursor-pointer"
                >
                  Fermer
                </button>
                <button
                  onClick={() => {
                    const prodName = selectedProduct.name;
                    setSelectedProduct(null);
                    handleQuoteClick(prodName);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-[#e50027] hover:bg-[#c80022] text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Demander un devis WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
