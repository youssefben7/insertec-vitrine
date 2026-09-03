"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CatalogueSection() {
  return (
    <section id="catalogue-section" className="relative py-20 sm:py-28 bg-[#0a1628] overflow-hidden border-t border-b border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#3b6abf]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
            Documentation Officielle 2025/2026
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Catalogue officiel de <span className="gradient-text">pièces de rechange</span>
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
            Consultez notre documentation technique et téléchargez notre catalogue général complet au format PDF pour équiper et dépanner vos installations.
          </p>
        </ScrollReveal>

        {/* Interactive Banner Card */}
        <ScrollReveal className="bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
          {/* Subtle accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#3b6abf]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: 3D Book Graphic Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group perspective-1000">
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#f97316]/30 to-[#3b6abf]/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* 3D Book Container */}
                <div className="relative w-64 sm:w-72 h-88 sm:h-96 rounded-r-2xl rounded-l-md bg-gradient-to-br from-[#0f2044] via-[#152d5e] to-[#0a1628] border-t border-r border-b border-white/20 p-6 flex flex-col justify-between shadow-[20px_20px_40px_rgba(0,0,0,0.7),inset_10px_0_20px_rgba(0,0,0,0.6)] transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 cursor-pointer">
                  {/* Book spine shadow overlay */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/60 via-black/20 to-transparent rounded-l-md border-r border-white/10" />

                  {/* Book pages edge effect (bottom & right) */}
                  <div className="absolute right-[-8px] top-3 bottom-3 w-2 bg-gradient-to-r from-gray-200 to-gray-400 rounded-r-sm shadow-inner" />
                  <div className="absolute bottom-[-8px] left-6 right-2 h-2 bg-gradient-to-b from-gray-300 to-gray-500 rounded-b-sm shadow-inner" />

                  {/* Top Book Header */}
                  <div className="relative z-10 pl-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#f97316] flex items-center justify-center font-black text-white text-xs shadow-md">
                        IN
                      </div>
                      <div>
                        <div className="text-white font-extrabold text-sm tracking-wider uppercase">INSERTEC</div>
                        <div className="text-[10px] text-[#f97316] font-semibold tracking-widest uppercase">MAROC</div>
                      </div>
                    </div>
                    <div className="inline-block px-2 py-0.5 rounded bg-white/10 text-white/90 text-[10px] font-bold uppercase tracking-wider mb-2">
                      Édition 2025/2026
                    </div>
                  </div>

                  {/* Book Center Content */}
                  <div className="relative z-10 pl-4 my-auto">
                    <div className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      Catalogue <br />
                      <span className="text-[#f97316]">Général</span>
                    </div>
                    <p className="text-xs text-white/70 mt-2 font-medium">
                      Pièces de Rechange d&apos;Origine & Équipements Professionnels
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Format PDF • 43 MB
                    </div>
                  </div>

                  {/* Bottom Book Footer */}
                  <div className="relative z-10 pl-4 border-t border-white/10 pt-3 flex items-center justify-between">
                    <span className="text-[10px] text-white/60 tracking-wider">www.insertec.pro</span>
                    <span className="text-[10px] font-bold text-[#f97316] uppercase bg-[#f97316]/10 px-2 py-0.5 rounded">PDF</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Information & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="text-sm font-semibold text-[#f97316] uppercase tracking-wider mb-2">
                Chères clientes, chers clients
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                Accédez à notre catalogue complet de pièces d&apos;origine constructeurs
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
                Conformément à nos engagements de réactivité et d&apos;excellence technique, nous mettons à votre disposition notre catalogue officiel téléchargeable. Retrouvez plus de <strong>10 000 pièces détachées certifiées</strong> pour fours mixtes, lave-vaisselle à capot, machines à laver industrielles, séchoirs et équipements thermiques.
              </p>

              {/* Feature bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5">
                  <svg className="w-4 h-4 text-[#f97316] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Téléchargement PDF immédiat (43 MB)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5">
                  <svg className="w-4 h-4 text-[#f97316] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Pièces d&apos;origine certifiées</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5">
                  <svg className="w-4 h-4 text-[#f97316] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Fiches techniques & compatibilités</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80 bg-white/5 px-3.5 py-2.5 rounded-xl border border-white/5">
                  <svg className="w-4 h-4 text-[#f97316] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Devis express & disponibilité immédiate</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
                <Link
                  href="/catalogue"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl shadow-[0_8px_25px_rgba(249,115,22,0.4)] hover:shadow-[0_12px_30px_rgba(249,115,22,0.6)] hover:brightness-110 active:scale-95 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Consulter le catalogue</span>
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <a
                  href="/catalogue-insertec-maroc.pdf"
                  download="Catalogue-General-INSERTEC-MAROC.pdf"
                  className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-5 py-4 rounded-xl border border-white/15 hover:border-white/30 active:scale-95 transition-all duration-300"
                  title="Télécharger directement le catalogue PDF"
                >
                  <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Télécharger PDF (43 MB)</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
