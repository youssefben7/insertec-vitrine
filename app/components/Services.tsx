"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    id: "service-pieces",
    title: "Pièces de Rechange",
    badge: "Disponibilité immédiate",
    description:
      "Plus de 2000 références en stock permanent pour équipements de cuisson, froid, lavage industriel et buanderie. Pièces d'origine constructeur certifiées avec livraison express sur tout le Maroc.",
    points: [
      "Pièces 100% d'origine certifiées",
      "Compatibilité multi-marques",
      "Livraison rapide partout au Maroc"
    ]
  },
  {
    id: "service-depannage",
    title: "Dépannage 24/7 & Réparation",
    badge: "Intervention rapide",
    description:
      "Équipe technique qualifiée disponible 24h/24 et 7j/7 pour intervenir sur site. Diagnostic précis, remplacement immédiat des pièces défectueuses et remise en service garantie.",
    points: [
      "Techniciens qualifiés",
      "Assistance d'urgence 24h/24",
      "Garantie sur chaque intervention"
    ]
  },
  {
    id: "service-maintenance",
    title: "Maintenance Préventive & Contrats",
    badge: "Sur-mesure",
    description:
      "Programmes d'entretien périodique pour hôtels, restaurants, collectivités et blanchisseries. Prévention des pannes, prolongation de la durée de vie des équipements et rapports détaillés.",
    points: [
      "Visites régulières planifiées",
      "Rapports techniques d'inspection",
      "Optimisation de la longévité machines"
    ]
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 bg-[#050d1f] text-white overflow-hidden"
      aria-label="Services INSERTEC MAROC"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean Corporate */}
        <ScrollReveal className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/5 border border-white/10 text-white/70 text-xs font-semibold tracking-wider uppercase mb-4">
            Services & Expertise Technique
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Une expertise globale à votre service
          </h2>

          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Fourniture de pièces de rechange, maintenance préventive et dépannage d'urgence pour le matériel professionnel de cuisine et de blanchisserie au Maroc.
          </p>
        </ScrollReveal>

        {/* Services Grid - Clean, Corporate & Structured */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 80}>
              <article
                id={service.id}
                className="h-full rounded-2xl bg-[#09152e] border border-white/10 p-7 lg:p-8 flex flex-col justify-between hover:border-[#f97316]/50 hover:bg-[#0c1b3a] transition-all duration-300 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-[#f97316] bg-[#f97316]/10 px-3 py-1 rounded-md uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10 space-y-2">
                  {service.points.map((pt) => (
                    <div key={pt} className="text-xs text-white/80 font-medium flex items-center gap-2">
                      <span className="text-[#f97316] font-bold">—</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
