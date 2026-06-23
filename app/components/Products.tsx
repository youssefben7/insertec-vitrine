import ScrollReveal from "./ScrollReveal";
import ProductCarousel from "./ProductCarousel";

const products = [
  {
    id: "product-resistances",
    category: "Cuisine professionnelle",
    name: "Résistances & éléments chauffants",
    description: "Résistances de four, plaques électriques, éléments tubulaires et Thermostats EGO de régulation et sécurité.",
    tags: ["Four", "Grill", "Salamandre", "Plaques électriques", "Thermostats EGO"],
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
  {
    id: "product-pompes",
    category: "Machines à laver",
    name: "Pompes & moteurs de lavage",
    description: "Pompes de vidange, moteurs de tambour et circulateurs pour machines à laver industrielles et buanderies.",
    tags: ["Lavage", "Séchage", "Industriel", "Moto-ventilateurs pour fours", "Laverie industrielle"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    stock: "En stock",
    stockColor: "text-green-400",
    accentColor: "#3b6abf",
  },
  {
    id: "product-cartes",
    category: "Électronique",
    name: "Cartes électroniques & PCB",
    description: "Cartes de contrôle, modules d'affichage et cartes mères pour équipements de cuisine et lavage professionnels.",
    tags: ["Contrôle", "Affichage", "Capteurs"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    stock: "Sur commande",
    stockColor: "text-yellow-400",
    accentColor: "#f97316",
  },
  {
    id: "product-joints",
    category: "Étanchéité",
    name: "Joints & garnitures d'étanchéité",
    description: "Joints de porte frigo magnétiques, garnitures de hublot et thermostats digitaux de régulation.",
    tags: ["Porte", "Hublot", "Étanchéité", "Frigo", "Thermostats digitaux"],
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
    category: "Plomberie industrielle",
    name: "Vannes & électrovannes",
    description: "Vannes de gaz de sécurité SIT, robinetterie PEL et électrovannes de régulation.",
    tags: ["Eau", "Vapeur", "Régulation", "SIT", "PEL", "Vannes Gaz", "Thermocouples", "Gicleurs", "Veilleuses", "Briquets d'allumage"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    stock: "En stock",
    stockColor: "text-green-400",
    accentColor: "#f97316",
  },
  {
    id: "product-roulements",
    category: "Mécanique",
    name: "Roulements & courroies",
    description: "Roulements à billes, courroies de transmission, paliers et bagues pour tambours et mécanismes d'entraînement.",
    tags: ["Transmission", "Tambour", "Drive"],
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
  return (
    <section
      id="products"
      className="relative py-24 lg:py-32 bg-[#f0f6ff] overflow-hidden"
      aria-label="Catalogue pièces de rechange"
    >
      {/* Subtle top wave */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-[#050d1f]" style={{ clipPath: "ellipse(55% 100% at 50% 0%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f97316]/15 border border-[#f97316]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#f97316]" />
                <span className="text-[#f97316] text-sm font-semibold tracking-widest uppercase">Catalogue Produits</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2044] mb-5 leading-tight">
                Pièces de rechange{" "}
                <span className="relative inline-block">
                  <span className="gradient-text">disponibles</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M0 6 Q50 0 100 5 Q150 10 200 4" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h2>
              <p className="text-[#152d5e]/65 text-lg max-w-xl leading-relaxed mt-4">
                Plus de 2000 références en stock permanent. Trouvez la pièce dont vous avez besoin pour tous vos équipements professionnels.
              </p>
            </div>
            <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img src="/images/rechange.jpg" alt="Pièces de rechange INSERTEC" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2044]/40 to-transparent mix-blend-overlay" />
            </div>
          </div>
        </ScrollReveal>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} variant="scale" delay={index * 80}>
              <article
                id={product.id}
                className="group h-full bg-white rounded-3xl border border-[#b8cef0]/40 shadow-sm overflow-hidden card-glow transition-all duration-400 hover:-translate-y-2 cursor-pointer"
              >
                {/* Card top accent */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${product.accentColor}, ${product.accentColor}80)` }}
                />

                <div className="p-6">
                  {/* Category + Stock */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-semibold text-[#3b6abf] bg-[#3b6abf]/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className={`text-xs font-semibold ${product.stockColor} flex items-center gap-1.5`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {product.stock}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: `linear-gradient(135deg, ${product.accentColor}15, ${product.accentColor}05)`,
                      color: product.accentColor,
                      border: `1px solid ${product.accentColor}25`,
                    }}
                  >
                    {product.icon}
                  </div>

                  {/* Text */}
                  <h3 className="text-[#0f2044] font-bold text-base mb-2 text-center leading-snug group-hover:text-[#f97316] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-[#152d5e]/55 text-sm text-center leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-5">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#f0f6ff] text-[#2a5298] font-medium border border-[#b8cef0]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA button */}
                  <button
                    id={`${product.id}-btn`}
                    className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 border cursor-pointer
                    border-[#f97316]/30 text-[#f97316] hover:bg-[#f97316] hover:text-white hover:shadow-[0_4px_20px_rgba(249,115,22,0.3)]"
                  >
                    Demander un devis
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
            Vous ne trouvez pas votre référence ? Contactez-nous directement.
          </p>
          <a
            href="mailto:insertecinfo@gmail.com"
            id="products-email-cta"
            className="inline-flex items-center gap-3 bg-[#0f2044] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#152d5e] hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Envoyer une demande spéciale
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
