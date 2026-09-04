"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { 
  CheckCircle2, 
  Sparkles, 
  Flame, 
  UtensilsCrossed, 
  Waves, 
  Building2, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  PhoneCall,
  ShieldCheck,
  Zap,
  Truck
} from "lucide-react";

// Curated list of container project photos
const containerImages = [
  {
    src: "/images/Contenaire Insertec/WhatsApp Image 2026-09-03 at 17.50.58.jpeg",
    title: "Conteneur Snack & Kiosque Restaurant",
    category: "Restauration",
    desc: "Aménagement complet avec ouvertures panoramiques, comptoir de service et éclairage LED moderne."
  },
  {
    src: "/images/Contenaire Insertec/WhatsApp Image 2026-09-03 at 17.50.59.jpeg",
    title: "Cuisine Mobile Professionnelle",
    category: "Cuisine Pro",
    desc: "Intégration d'équipements de cuisson en inox, hotte d'extraction et plan de travail aux normes d'hygiène."
  },
  {
    src: "/images/Contenaire Insertec/WhatsApp Image 2026-09-03 at 17.51.00.jpeg",
    title: "Kiosque Commercial Design & Café",
    category: "Coffee Shop",
    desc: "Habillage extérieur moderne, volets roulants sécurisés et agencement intérieur optimisé."
  },
  {
    src: "/images/Contenaire Insertec/WhatsApp Image 2026-09-03 at 17.51.01.jpeg",
    title: "Module Bureau & Espace de Vente",
    category: "Espace Pro",
    desc: "Isolation thermique de haute performance, climatisation et raccordements électriques renforcés."
  },
  {
    src: "/images/Contenaire Insertec/WhatsApp Image 2026-09-03 at 17.51.02.jpeg",
    title: "Conteneur Snack Fast-Food Clé en Main",
    category: "Fast Food",
    desc: "Zone de friture, plancha, réfrigération et poste d'encaissement tout-en-un."
  },
  {
    src: "/images/Contenaire Insertec/WhatsApp Image 2026-09-03 at 17.51.03.jpeg",
    title: "Agencement Intérieur Inox Alimentaire",
    category: "Cuisine Pro",
    desc: "Murs lavables conformes HACCP, sol antidérapant et évacuation des eaux intégrée."
  },
  {
    src: "/images/Contenaire Insertec/WhatsApp Image 2026-09-03 at 17.51.04.jpeg",
    title: "Finitions & Personnalisation Extérieure",
    category: "Sur Mesure",
    desc: "Peinture industrielle anticorrosion aux couleurs de votre marque et auvents sur vérins."
  },
  {
    src: "/images/Contenaire Insertec/WhatsApp Image 2026-09-03 at 17.51.07.jpeg",
    title: "Conteneur Buanderie & Laverie Mobile",
    category: "Buanderie",
    desc: "Emplacement pré-équipé pour lave-linge et sèche-linge industriels avec plomberie gros débit."
  },
  {
    src: "/images/Contenaire Insertec/WhatsApp Image 2026-09-03 at 17.51.08.jpeg",
    title: "Structure Modulaire 20ft / 40ft",
    category: "Structure",
    desc: "Conteneur maritime premier choix étanche et robuste, prêt à être transporté partout au Maroc."
  }
];

const containerTypes = [
  {
    id: "snack",
    title: "Snack & Restauration Rapide",
    icon: <UtensilsCrossed className="w-6 h-6 text-[#f97316]" />,
    features: [
      "Comptoir de service & auvent à vérins hydrauliques",
      "Équipements de cuisson (friteuses, planchas, hottes)",
      "Vitrine réfrigérée et plans de travail inox",
      "Réseau électrique étanche 220V/380V"
    ],
    popular: true
  },
  {
    id: "cuisine",
    title: "Cuisine Professionnelle Mobile",
    icon: <Flame className="w-6 h-6 text-[#f97316]" />,
    features: [
      "Conception 100% conforme aux normes HACCP",
      "Système de hotte à extraction puissante avec variateur",
      "Arrivées et évacuations d'eau avec bac à graisse",
      "Revêtement mural inox et sol résine antidérapant"
    ]
  },
  {
    id: "laverie",
    title: "Laverie & Buanderie Conteneurisée",
    icon: <Waves className="w-6 h-6 text-[#3b6abf]" />,
    features: [
      "Prévu pour machines industrielles INSERTEC",
      "Réseau d'alimentation d'eau renforcé gros débit",
      "Évacuation des buées et ventilation thermique",
      "Idéal pour bases-vie, hôtels temporaires et chantiers"
    ]
  },
  {
    id: "bureau",
    title: "Kiosque, Bureau & Projet Spécial",
    icon: <Building2 className="w-6 h-6 text-[#f97316]" />,
    features: [
      "Isolation thermique laine de roche & panneaux sandwich",
      "Baies vitrées double vitrage et sécurité anti-intrusion",
      "Éclairage LED basse consommation et prises réseau",
      "Agencement personnalisé selon vos plans 3D"
    ]
  }
];

const advantages = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#f97316]" />,
    title: "Structure 100% Robuste & Étanche",
    desc: "Conteneurs maritimes en acier Corten haute résistance avec traitement anticorrosion et isolation de pointe."
  },
  {
    icon: <Zap className="w-7 h-7 text-[#f97316]" />,
    title: "Réseaux Électricité & Eau Conformes",
    desc: "Tableaux étanches aux normes de sécurité, prises 380V/220V, plomberie haute pression et évacuations intégrées."
  },
  {
    icon: <Sparkles className="w-7 h-7 text-[#f97316]" />,
    title: "Équipements INSERTEC Intégrés",
    desc: "Profitez de notre catalogue de matériel professionnel (cuisson, froid, lavage) installé et garanti sur place."
  },
  {
    icon: <Truck className="w-7 h-7 text-[#f97316]" />,
    title: "Livraison & Installation Partout au Maroc",
    desc: "Prêt à brancher ('Plug & Play'). Nous assurons l'acheminement et la mise en service à Casablanca et dans tout le Royaume."
  }
];

export default function ContainerSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeType, setActiveType] = useState("snack");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Bonjour INSERTEC, je suis intéressé par votre service d'aménagement de conteneurs sur-mesure (Snack / Cuisine / Laverie / Bureau). Pouvez-vous me renseigner ?"
  );

  return (
    <section
      id="conteneurs"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#040916] text-white overflow-hidden"
      aria-label="Vente et Aménagement de Conteneurs sur mesure INSERTEC"
    >
      {/* Background ambient glowing elements */}
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{ background: "radial-gradient(circle, #f97316 0%, #3b6abf 70%, transparent 100%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f97316]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 bg-[#f97316]/15 border border-[#f97316]/40 rounded-full px-5 py-2 mb-6 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f97316] animate-pulse" />
            <span className="text-[#f97316] text-xs sm:text-sm font-bold tracking-widest uppercase">
              Nouveau Service 2026 • Sur Mesure
            </span>
            <Sparkles className="w-4 h-4 text-[#f97316]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] mb-6">
            Vente & Personnalisation de{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#3b82f6]">
              Conteneurs Maritimes
            </span>
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Donnez vie à votre projet commercial sans les contraintes d'un local traditionnel ! 
            INSERTEC transforme des conteneurs 20ft & 40ft en espaces fonctionnels, design et 
            <strong className="text-white font-semibold"> 100% équipés avec notre matériel professionnel garanti.</strong>
          </p>
        </ScrollReveal>

        {/* Interactive Gallery Showcase */}
        <ScrollReveal className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>Nos Réalisations Récentes</span>
                <span className="text-xs font-semibold bg-[#f97316]/20 text-[#f97316] border border-[#f97316]/30 px-2.5 py-0.5 rounded-full">
                  Photos Réelles
                </span>
              </h3>
              <p className="text-white/50 text-sm mt-1">
                Cliquez sur une photo pour l'agrandir en haute définition.
              </p>
            </div>

            {/* Carousel navigation controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollGallery("left")}
                aria-label="Image précédente"
                className="w-11 h-11 rounded-full glass-panel border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-[#f97316] hover:bg-[#f97316]/20 transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollGallery("right")}
                aria-label="Image suivante"
                className="w-11 h-11 rounded-full glass-panel border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-[#f97316] hover:bg-[#f97316]/20 transition-all cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {containerImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#f97316]/60 transition-all duration-500 cursor-pointer snap-start shadow-xl hover:shadow-[0_15px_35px_rgba(249,115,22,0.2)]"
              >
                <div className="relative h-[240px] sm:h-[270px] w-full overflow-hidden bg-black/40">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 380px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040916] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                      {img.category}
                    </span>
                  </div>

                  {/* Zoom icon on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 rounded-full bg-[#f97316] text-white flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="font-bold text-white text-base sm:text-lg mb-1.5 group-hover:text-[#f97316] transition-colors">
                    {img.title}
                  </h4>
                  <p className="text-white/60 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Types of Solutions Tabs & Details */}
        <ScrollReveal className="mb-20">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#f97316] uppercase tracking-wider">
                Solutions Sur-Mesure
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Quel est votre projet d'aménagement ?
              </h3>
            </div>

            {/* Type selector buttons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {containerTypes.map((type) => {
                const isActive = activeType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setActiveType(type.id)}
                    className={`flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#f97316]/20 border-[#f97316] text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] scale-[1.02]"
                        : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <div className="mb-3 p-3 rounded-xl bg-white/10">
                      {type.icon}
                    </div>
                    <span className="font-bold text-sm sm:text-base leading-snug">
                      {type.title}
                    </span>
                    {type.popular && (
                      <span className="mt-2 text-[10px] font-bold uppercase tracking-wider bg-[#f97316] text-white px-2 py-0.5 rounded-full">
                        Très demandé
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Type Features Breakdown */}
            {containerTypes.map((type) => {
              if (type.id !== activeType) return null;
              return (
                <div key={type.id} className="pt-6 border-t border-white/10">
                  <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                    {type.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-white/90 leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#f97316]/20 via-transparent to-white/5 border border-[#f97316]/30">
                    <div>
                      <h5 className="font-bold text-white text-base">
                        Besoin d'un devis pour {type.title} ?
                      </h5>
                      <p className="text-white/60 text-xs sm:text-sm mt-0.5">
                        Nous configurons les dimensions, les ouvertures et vos appareils selon votre budget.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/212608926620?text=${encodeURIComponent(
                        `Bonjour INSERTEC, je souhaite un devis pour un projet de ${type.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#f97316] text-white font-bold text-sm hover:bg-[#ea580c] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] active:scale-95 transition-all"
                    >
                      <span>Configurer sur WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* 4 Pillars / Advantages */}
        <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-[#f97316]/40 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f97316]/15 border border-[#f97316]/30 flex items-center justify-center mb-5">
                {adv.icon}
              </div>
              <h4 className="font-bold text-white text-lg mb-2 leading-snug">
                {adv.title}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {adv.desc}
              </p>
            </div>
          ))}
        </ScrollReveal>

        {/* Bottom Mega Call-to-Action */}
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden border border-[#f97316]/40 p-8 sm:p-12 lg:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(249,115,22,0.2) 0%, rgba(15,32,68,0.9) 60%, rgba(4,9,22,0.95) 100%)"
              }}
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-white mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#f97316]" />
                <span>Étude de projet & Devis sans engagement</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
                Vous avez une idée ?<br />
                <span className="text-[#f97316]">Nous la réalisons sur mesure.</span>
              </h3>

              <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
                Discutez directement avec nos ingénieurs et techniciens pour modéliser votre conteneur avec vos plans, dimensions et équipements de prédilection.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/212608926620?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 text-white font-bold px-8 py-4 rounded-full hover:bg-emerald-600 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95 transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.101-2.884-6.963C16.59 1.916 14.116.892 11.488.892 6.05 10.428 5.626 5.626 5.626v.012c0 1.706.452 3.376 1.311 4.848l.515.87-.323 1.182-.33 1.206 1.24-.325 1.282-.336.56.944z"/>
                  </svg>
                  <span>Demander un Devis WhatsApp</span>
                </a>

                <a
                  href="tel:+212660121144"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-full active:scale-95 transition-all duration-300"
                >
                  <PhoneCall className="w-5 h-5 text-[#f97316]" />
                  <span>Appeler: +212 660-121144</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Full-screen Lightbox Modal */}
      {selectedImage !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0a1224] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#f97316] flex items-center justify-center transition-all cursor-pointer"
              aria-label="Fermer la vue"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-[350px] sm:h-[480px] w-full bg-black">
              <Image
                src={containerImages[selectedImage].src}
                alt={containerImages[selectedImage].title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-6 bg-[#060e20] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-[#f97316] uppercase tracking-wide">
                  {containerImages[selectedImage].category}
                </span>
                <h4 className="text-xl font-bold text-white mt-0.5">
                  {containerImages[selectedImage].title}
                </h4>
                <p className="text-white/60 text-sm mt-1">
                  {containerImages[selectedImage].desc}
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev === null ? null : (prev - 1 + containerImages.length) % containerImages.length
                    )
                  }
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all"
                >
                  Précédent
                </button>
                <button
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev === null ? null : (prev + 1) % containerImages.length
                    )
                  }
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all"
                >
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
