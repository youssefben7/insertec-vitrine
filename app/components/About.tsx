"use client";

import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    id: "reason-expertise",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "10+ ans d'expertise",
    desc: "Une expérience terrain accumulée auprès des plus grandes enseignes hôtelières et de restauration collective au Maroc.",
  },
  {
    id: "reason-stock",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
      </svg>
    ),
    title: "Stock permanent",
    desc: "Plus de 2000 références disponibles immédiatement. Zéro attente, zéro temps d'arrêt pour vos équipements.",
  },
  {
    id: "reason-multimarque",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "Compatibilité multi-marques",
    desc: "Miele, Electrolux, Primus, Hobart, Rational, Unox… nous couvrons toutes les grandes marques du marché professionnel.",
  },
  {
    id: "reason-support",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Support 24/7",
    desc: "Une ligne dédiée et une équipe technique réactive pour répondre à toutes vos urgences, même les nuits et week-ends.",
  },
];

const brands = ["Miele", "Electrolux", "Primus", "Hobart", "Rational", "Unox", "Girbau", "Speed Queen"];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      aria-label="À propos d'INSERTEC MAROC"
    >
      {/* Decorative blob */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #0f2044 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left – text content */}
          <div className="space-y-8">
            <ScrollReveal variant="left">
              <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/25 rounded-full px-4 py-1.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#f97316]" />
                <span className="text-[#f97316] text-sm font-semibold tracking-widest uppercase">À propos</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2044] leading-tight mt-4">
                Votre partenaire de confiance depuis plus de{" "}
                <span className="gradient-text">10 ans</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="left" delay={100}>
              <p className="text-[#152d5e]/65 text-lg leading-relaxed">
                Fondée à Casablanca en 2014, **INSERTEC** (marque commerciale **INSERTEC MAROC**) s'est imposée comme le spécialiste incontournable dans la vente de pièces de rechange, dépannage, réparation et maintenance de matériel de cuisine professionnelle, grandes cuisines, chaudronnier inox, chambres froides, pâtisserie et buanderie au Maroc.
              </p>
              <p className="text-[#152d5e]/65 text-lg leading-relaxed mt-4">
                Nous assurons plus de 10 ans d'expertise technique de haut niveau au service des hôtels, restaurants, collectivités, pâtisseries, et blanchisseries industrielles à travers tout le Royaume.
              </p>
            </ScrollReveal>

            {/* Reasons grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <ScrollReveal key={reason.id} variant="left" delay={i * 80}>
                  <div
                    id={reason.id}
                    className="group flex gap-4 p-4 rounded-2xl border border-[#b8cef0]/40 bg-[#f0f6ff]/50 hover:border-[#f97316]/30 hover:bg-[#fff7ed]/60 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#0f2044] text-[#f97316] flex items-center justify-center flex-shrink-0 group-hover:bg-[#f97316] group-hover:text-white transition-all duration-300">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-[#0f2044] font-bold text-sm mb-1">{reason.title}</h3>
                      <p className="text-[#152d5e]/55 text-xs leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right – visual panel */}
          <ScrollReveal variant="right">
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-[#0f2044] rounded-3xl p-8 lg:p-10 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f97316] to-[#3b6abf]" />
                <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

                {/* Header line */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#f97316] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">INSERTEC MAROC</div>
                    <div className="text-white/40 text-xs">Casablanca, Maroc</div>
                  </div>
                </div>

                {/* Progress bars for expertise */}
                <div className="space-y-5">
                  {[
                    { label: "Cuisine professionnelle", value: 95 },
                    { label: "Machines à laver industrielles", value: 90 },
                    { label: "Réfrigération professionnelle", value: 85 },
                    { label: "Électronique de contrôle", value: 80 },
                  ].map((item, i) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white/70 text-sm font-medium">{item.label}</span>
                        <span className="text-[#f97316] text-sm font-bold">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${item.value}%`,
                            background: i % 2 === 0
                              ? "linear-gradient(90deg, #f97316, #fb923c)"
                              : "linear-gradient(90deg, #3b6abf, #5b87d4)",
                            transition: "width 1.5s ease",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom badge */}
                <div className="mt-8 flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="text-white text-sm font-semibold">Référence nationale</div>
                    <div className="text-white/45 text-xs">Partenaire de +500 établissements</div>
                  </div>
                </div>
              </div>

              {/* Floating mini card */}
              <div
                className="absolute -bottom-6 -left-6 bg-white border border-[#b8cef0]/50 rounded-2xl p-4 shadow-xl flex items-center gap-3"
                style={{ animation: "float 5s ease-in-out infinite" }}
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#0f2044] font-bold text-sm">Garantie qualité</div>
                  <div className="text-[#0f2044]/45 text-xs">Pièces certifiées</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Brands marquee */}
        <ScrollReveal className="mt-20">
          <p className="text-center text-[#152d5e]/45 text-sm font-semibold tracking-widest uppercase mb-8">
            Marques compatibles
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-none">
              <div className="flex gap-8 flex-shrink-0" style={{ animation: "none" }}>
                {[...brands, ...brands].map((brand, i) => (
                  <div
                    key={`${brand}-${i}`}
                    className="flex-shrink-0 px-6 py-3 bg-[#f0f6ff] border border-[#b8cef0]/50 rounded-xl text-[#2a5298] font-bold text-sm hover:border-[#f97316]/40 hover:text-[#f97316] transition-colors duration-200 cursor-default"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
            {/* Scrolling row */}
            <div className="flex gap-6 mt-4 overflow-hidden">
              <div className="flex gap-6 flex-shrink-0 marquee-scroll">
                {[...brands, ...brands].map((brand, i) => (
                  <span
                    key={`brand2-${i}`}
                    className="flex-shrink-0 px-5 py-2.5 bg-white border border-[#b8cef0]/40 rounded-lg text-[#2a5298] font-semibold text-sm"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
