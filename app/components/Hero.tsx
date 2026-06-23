"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "10+", label: "Ans d'expertise B2B" },
  { value: "500+", label: "Clients satisfaits" },
  { value: "24/7", label: "Support disponible" },
  { value: "2000+", label: "Pièces en stock" },
];

export default function Hero() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    counterRefs.current.forEach((el, i) => {
      if (!el) return;
      const raw = stats[i].value;
      const numMatch = raw.match(/\d+/);
      if (!numMatch) return;

      const target = parseInt(numMatch[0], 10);
      const suffix = raw.replace(/\d+/, "");
      const duration = 1500;
      const startTime = { current: 0 };

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          obs.unobserve(entry.target);

          const step = (timestamp: number) => {
            if (!startTime.current) startTime.current = timestamp;
            const progress = Math.min((timestamp - startTime.current) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            if (el) el.textContent = Math.floor(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        },
        { threshold: 0.5 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden hero-bg grid-pattern"
      aria-label="Section héro INSERTEC MAROC"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #f97316 0%, transparent 70%)",
            top: "-100px",
            right: "-100px",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, #3b6abf 0%, transparent 70%)",
            bottom: "-80px",
            left: "-80px",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
        {/* Industrial lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="200" x2="1200" y2="200" stroke="#f97316" strokeWidth="1" strokeDasharray="20 40" />
          <line x1="0" y1="600" x2="1200" y2="600" stroke="#f97316" strokeWidth="1" strokeDasharray="20 40" />
          <line x1="300" y1="0" x2="300" y2="800" stroke="#3b6abf" strokeWidth="1" strokeDasharray="20 40" />
          <line x1="900" y1="0" x2="900" y2="800" stroke="#3b6abf" strokeWidth="1" strokeDasharray="20 40" />
          <circle cx="300" cy="200" r="4" fill="#f97316" />
          <circle cx="900" cy="200" r="4" fill="#f97316" />
          <circle cx="300" cy="600" r="4" fill="#f97316" />
          <circle cx="900" cy="600" r="4" fill="#f97316" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-[#f97316]/15 border border-[#f97316]/30 rounded-full px-4 py-2"
              style={{ animation: "fadeInUp 0.6s ease forwards" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#f97316] inline-block" style={{ animation: "pulse-glow 2s infinite" }} />
              <span className="text-[#f97316] text-sm font-semibold tracking-wide uppercase">
                Expert en équipements professionnels
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight"
              style={{ animation: "fadeInUp 0.7s ease 0.1s both" }}
            >
              Votre expert en{" "}
              <span className="gradient-text">maintenance</span>{" "}
              &{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">pièces de rechange</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-white/65 text-lg sm:text-xl leading-relaxed max-w-lg"
              style={{ animation: "fadeInUp 0.7s ease 0.2s both" }}
            >
              Avec plus de 10 ans d'expertise au service des professionnels du Maroc, INSERTEC MAROC est votre partenaire de confiance pour l'installation, la maintenance technique et le négoce de pièces de rechange d'origine.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: "fadeInUp 0.7s ease 0.35s both" }}
            >
              <button
                onClick={() => scrollTo("contact")}
                id="hero-cta-primary"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold text-base px-8 py-4 rounded-full hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Demander une intervention
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                onClick={() => scrollTo("products")}
                id="hero-cta-catalogue"
                className="group flex items-center justify-center gap-3 bg-white/10 border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer backdrop-blur-sm"
              >
                <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Consulter le catalogue
              </button>
            </div>

            {/* Trust strip */}
            <div
              className="flex flex-wrap gap-4 pt-2"
              style={{ animation: "fadeInUp 0.7s ease 0.5s both" }}
            >
              {["Livraison rapide", "SAV garanti", "Pièces d'origine"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 text-white/50 text-sm">
                  <svg className="w-4 h-4 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — stats + visual */}
          <div className="flex flex-col gap-6" style={{ animation: "fadeInRight 0.8s ease 0.3s both" }}>
            {/* Visual industrial card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f97316] to-[#3b6abf] z-10" />
              <div className="w-full h-48 sm:h-56 relative overflow-hidden group">
                <img 
                  src="/images/tech.png" 
                  alt="Technicien certifié" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1f] to-transparent opacity-90" />
              </div>
              <div className="p-8 pt-4">
                <p className="text-center text-white/70 text-sm leading-relaxed">
                  Des techniciens certifiés interviennent sur vos équipements <strong className="text-white">sous 24h</strong> dans tout le Maroc.
                </p>
                {/* Mini status bar */}
                <div className="mt-6 flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                  <span className="w-3 h-3 rounded-full bg-green-400 flex-shrink-0" style={{ animation: "pulse-glow 2s infinite" }} />
                  <span className="text-green-400 text-xs font-semibold">Techniciens disponibles maintenant</span>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-[#f97316]/30 transition-all duration-300"
                >
                  <div className="text-3xl font-black text-[#f97316] mb-1">
                    <span
                      ref={(el) => {
                        counterRefs.current[i] = el;
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-white/55 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase">Défiler</span>
        <svg className="w-5 h-5 text-[#f97316]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
