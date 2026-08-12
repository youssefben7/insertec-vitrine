import ScrollReveal from "./ScrollReveal";

const services = [
  {
    id: "service-pieces",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Pièces de Rechange",
    subtitle: "Stock disponible immédiatement",
    description:
      "Plus de 2000 références de pièces d'origine et compatibles pour fours professionnels, lave-vaisselle, machines à laver industrielles, réfrigérateurs et tout équipement de cuisine professionnelle.",
    features: [
      "Pièces certifiées d'origine",
      "Compatibilité multi-marques",
      "Livraison express au Maroc",
      "Stock permanent garanti",
    ],
    color: "#f97316",
    bg: "from-[#f97316]/10 to-[#f97316]/5",
    border: "border-[#f97316]/20 hover:border-[#f97316]/50",
    delay: 0,
    variant: "left" as const,
  },
  {
    id: "service-depannage",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Dépannage 24/7",
    subtitle: "Intervention en moins de 2h",
    description:
      "Notre équipe de techniciens certifiés est disponible 24h/24, 7j/7 pour intervenir rapidement en cas de panne. Diagnostic précis, réparation efficace, remise en service garantie.",
    features: [
      "Disponibilité permanente",
      "Techniciens certifiés",
      "Devis gratuit et rapide",
      "Garantie sur intervention",
    ],
    color: "#3b6abf",
    bg: "from-[#3b6abf]/10 to-[#3b6abf]/5",
    border: "border-[#3b6abf]/20 hover:border-[#3b6abf]/50",
    delay: 100,
    variant: "up" as const,
  },
  {
    id: "service-maintenance",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Maintenance Hôtelière & Lavage",
    subtitle: "Contrats de maintenance préventive",
    description:
      "Programme de maintenance préventive sur mesure pour hôtels et collectivités. Inspection régulière, entretien planifié et suivi de performance de vos machines à laver industrielles et équipements de buanderie.",
    features: [
      "Contrats personnalisés",
      "Rapports d'inspection",
      "Maintenance préventive",
      "Suivi des équipements",
    ],
    color: "#f97316",
    bg: "from-[#f97316]/10 to-[#f97316]/5",
    border: "border-[#f97316]/20 hover:border-[#f97316]/50",
    delay: 200,
    variant: "right" as const,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-24 lg:py-32 bg-[#050d1f] overflow-hidden"
      aria-label="Nos services"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 glass-panel border border-[#f97316]/25 rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" style={{ animation: "pulse-glow 2s infinite" }} />
            <span className="text-[#f97316] text-sm font-semibold tracking-widest uppercase">Nos Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Une expertise complète à votre service
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Spécialiste dans la vente de pièces de rechange, dépannage, réparation et maintenance de matériel de cuisine professionnelle, grandes cuisines, chambres froides et buanderie. 
            Plus de 10 ans d'expertise au Maroc.
          </p>
        </ScrollReveal>

        {/* Services grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ScrollReveal key={service.id} variant={service.variant} delay={service.delay}>
              <article
                id={service.id}
                className={`group relative h-full glass-panel border border-white/5 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-white/10 cursor-default overflow-hidden`}
              >
                {/* Background ambient glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${service.color}, transparent)` }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                  style={{ background: `${service.color}15`, color: service.color, border: `1px solid ${service.color}30` }}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="mb-2 relative z-10">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: service.color }}>
                    {service.subtitle}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight relative z-10">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 relative z-10 font-medium">{service.description}</p>

                {/* Feature list */}
                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/80 font-medium">
                      <span
                        className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center shadow-inner"
                        style={{ background: `${service.color}20`, border: `1px solid ${service.color}40` }}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: service.color }}>
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Bottom number decoration */}
                <div className="absolute -bottom-4 -right-2 text-8xl font-black opacity-[0.03] text-white select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                  {String(services.indexOf(service) + 1).padStart(2, "0")}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
