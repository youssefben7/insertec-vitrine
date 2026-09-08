"use client";

import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    id: "reason-expertise",
    title: "10+ ans d'expertise",
    desc: "Une expérience terrain acquise auprès des plus grandes enseignes hôtelières et de restauration collective au Maroc.",
  },
  {
    id: "reason-stock",
    title: "Stock permanent",
    desc: "Plus de 2 000 références de pièces d'origine disponibles immédiatement pour réduire tout temps d'arrêt machine.",
  },
  {
    id: "reason-multimarque",
    title: "Partenariats certifiés",
    desc: "Distributeur officiel Fagor Professional et spécialiste multimarques reconnu (Miele, Electrolux, Primus, Rational, Unox).",
  },
  {
    id: "reason-support",
    title: "Assistance technique 24/7",
    desc: "Équipe technique d'urgence réactive sur tout le Maroc pour interventions immédiates sur site.",
  },
];

const keyStats = [
  { value: "+2 000", label: "Références en stock", sub: "Pièces certifiées d'origine" },
  { value: "10+", label: "Années d'expérience", sub: "Depuis 2014 à Casablanca" },
  { value: "+500", label: "Clients professionnels", sub: "Hôtels, restaurants & cliniques" },
  { value: "24/7", label: "Support & Dépannage", sub: "Intervention rapide au Maroc" },
];

const brands = [
  "FAGOR PROFESSIONAL",
  "Miele",
  "Electrolux Professional",
  "Primus",
  "Hobart",
  "Rational",
  "Unox",
  "Girbau",
  "Speed Queen"
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-white overflow-hidden text-[#0f2044]"
      aria-label="À propos d'INSERTEC MAROC"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Corporate Story & Pillars */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-md bg-[#0f2044]/5 border border-[#0f2044]/10 text-[#0f2044] text-xs font-semibold tracking-wider uppercase mb-4">
                À propos d'INSERTEC
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2044] leading-tight tracking-tight mb-6">
                Votre partenaire de confiance depuis plus de 10 ans
              </h2>

              <p className="text-[#152d5e]/75 text-base sm:text-lg leading-relaxed mb-4">
                Fondée à Casablanca en 2014, <strong className="text-[#0f2044]">INSERTEC MAROC</strong> s'est imposée comme une référence nationale dans la fourniture de matériel de blanchisserie industrielle, de pièces de rechange d'origine et la maintenance technique pour les cuisines professionnelles et buanderies.
              </p>

              <p className="text-[#152d5e]/75 text-base sm:text-lg leading-relaxed mb-8">
                Distributeur officiel Fagor Professional au Maroc, nous accompagnons les groupes hôteliers, collectivités, établissements de santé et restaurateurs avec un service après-vente réactif et des équipements certifiés constructeur.
              </p>
            </ScrollReveal>

            {/* Clean Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <ScrollReveal key={reason.id} delay={i * 50}>
                  <div className="h-full p-5 rounded-xl bg-[#f8fafc] border border-gray-200/80 hover:border-[#0f2044]/30 transition-all duration-200">
                    <h3 className="text-[#0f2044] font-bold text-sm sm:text-base mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-[#152d5e]/65 text-xs sm:text-sm leading-relaxed font-normal">
                      {reason.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Corporate Key Figures Panel */}
          <ScrollReveal variant="scale">
            <div className="rounded-2xl bg-[#09152e] border border-white/10 p-8 sm:p-10 text-white shadow-xl">
              
              <div className="border-b border-white/10 pb-6 mb-8">
                <div className="text-xs font-semibold text-white/60 tracking-wider uppercase mb-1">
                  Présence & Réputation
                </div>
                <h3 className="text-2xl font-bold text-white">
                  INSERTEC MAROC en chiffres
                </h3>
              </div>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {keyStats.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold text-white/90 mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-xs text-white/50">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Official Partnership Box */}
              <div className="mt-8 p-4 rounded-xl bg-[#050d1f] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                    Partenaire Constructeur
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Distributeur Officiel Fagor Professional
                  </div>
                </div>
                <div className="px-3 py-1 rounded bg-[#e50027] text-white text-[11px] font-bold">
                  Agréé Maroc
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* Brands Section */}
        <ScrollReveal className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-center text-[#152d5e]/60 text-xs font-bold tracking-widest uppercase mb-8">
            Marques et Fabricants pris en charge
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand}
                className="px-4 py-2 bg-[#f8fafc] border border-gray-200 rounded-lg text-[#0f2044] text-xs sm:text-sm font-semibold hover:border-[#0f2044]/40 transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

