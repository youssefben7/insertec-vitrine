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
      className="relative py-24 lg:py-32 bg-[#050d1f] overflow-hidden"
      aria-label="Nos services"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/25 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span className="text-[#f97316] text-sm font-semibold tracking-widest uppercase">Nos Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Une expertise complète à votre service
          </h2>
          <p className="text-white/55 text-lg max-w-3xl mx-auto leading-relaxed">
            Spécialiste dans la vente de pièces de rechange, dépannage, réparation et maintenance de matériel de cuisine professionnelle, grandes cuisines, chaudronnier inox, chambres froides, pâtisserie et buanderie. Plus de 10 ans d'expertise au service des hôtels, restaurants et institutions au Maroc.
          </p>
        </ScrollReveal>

        {/* Services grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ScrollReveal key={service.id} variant={service.variant} delay={service.delay}>
              <article
                id={service.id}
                className={`group relative h-full bg-gradient-to-b ${service.bg} border ${service.border} rounded-3xl p-8 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl cursor-default`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}20`, color: service.color, border: `1px solid ${service.color}30` }}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="mb-2">
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: service.color }}>
                    {service.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{service.description}</p>

                {/* Feature list */}
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                      <span
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: `${service.color}20` }}
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" style={{ color: service.color }}>
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Bottom number decoration */}
                <div className="absolute bottom-6 right-8 text-6xl font-black opacity-5 text-white select-none">
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
