"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  PhoneCall, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck,
  Maximize2
} from "lucide-react";

const stats = [
  { value: "10+", label: "Ans d'expertise B2B" },
  { value: "500+", label: "Clients satisfaits" },
  { value: "24/7", label: "Support d'urgence" },
  { value: "2000+", label: "Pièces en stock" },
];

export default function Hero() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Counter animation on scroll
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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden hero-bg grid-pattern pt-28 pb-16 lg:pt-36 lg:pb-24"
      aria-label="Section d'accueil INSERTEC MAROC"
    >
      {/* Background ambient glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[650px] h-[650px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #f97316 0%, transparent 70%)",
            top: "-150px",
            right: "-100px",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #3b6abf 0%, transparent 70%)",
            bottom: "-100px",
            left: "-100px",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main 2-Column Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Welcome Message & 2 Buttons (7 cols on lg) */}
          <div className="lg:col-span-6 space-y-7 sm:space-y-8">
            
            {/* Welcome Badge */}
            <div
              className="inline-flex items-center gap-2.5 bg-[#f97316]/15 border border-[#f97316]/30 rounded-full px-4 sm:px-5 py-2 shadow-[0_0_20px_rgba(249,115,22,0.15)]"
              style={{ animation: "fadeInUp 0.6s ease forwards" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#f97316]" />
              <span className="text-[#f97316] text-xs sm:text-sm font-bold tracking-wider uppercase">
                Bienvenue chez INSERTEC MAROC
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight drop-shadow-sm"
              style={{ animation: "fadeInUp 0.7s ease 0.1s both" }}
            >
              Votre Partenaire Expert en{" "}
              <span className="gradient-text">Maintenance</span>,{" "}
              <span className="gradient-text">Pièces Pro</span> &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#3b82f6]">
                Conteneurs Aménagés
              </span>
            </h1>

            {/* Welcome Description */}
            <p
              className="text-white/75 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-2xl"
              style={{ animation: "fadeInUp 0.7s ease 0.2s both" }}
            >
              Depuis plus de 10 ans, nous accompagnons les professionnels de l'hôtellerie, de la restauration et de l'industrie au Maroc. De la fourniture de pièces de rechange d'origine certifiées au dépannage 24/7 et à l'aménagement de conteneurs sur-mesure.
            </p>

            {/* The 2 Main Action Buttons */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              style={{ animation: "fadeInUp 0.7s ease 0.35s both" }}
            >
              {/* Button 1: Demander une intervention */}
              <button
                onClick={() => scrollTo("contact")}
                id="hero-cta-intervention"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold text-base px-8 py-4 rounded-full shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] active:scale-95 focus:ring-4 focus:ring-[#f97316]/40 transition-all duration-300 cursor-pointer min-h-[56px]"
              >
                <PhoneCall className="w-5 h-5 text-white" />
                <span>Demander une intervention</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              {/* Button 2: Consulter le catalogue */}
              <button
                onClick={() => scrollTo("products")}
                id="hero-cta-catalogue"
                className="group flex items-center justify-center gap-3 glass-panel text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/40 active:scale-95 focus:ring-4 focus:ring-white/20 transition-all duration-300 cursor-pointer min-h-[56px] border border-white/20"
              >
                <BookOpen className="w-5 h-5 text-[#f97316] group-hover:scale-110 transition-transform duration-300" />
                <span>Consulter le catalogue</span>
              </button>
            </div>

            {/* Reassurance Trust Badges */}
            <div
              className="flex flex-wrap items-center gap-6 pt-2 text-white/60 text-xs sm:text-sm font-medium"
              style={{ animation: "fadeInUp 0.7s ease 0.45s both" }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f97316]" />
                <span>Intervention sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#f97316]" />
                <span>Pièces 100% d'origine certifiées</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f97316]" />
                <span>SAV & Garantie au Maroc</span>
              </div>
            </div>
          </div>

          {/* Right Column: Promotional Video & Stats Grid (6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col gap-6" style={{ animation: "fadeInRight 0.8s ease 0.25s both" }}>
            
            {/* Video Showcase Card */}
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              
              {/* Glowing top line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#3b82f6] z-20" />

              {/* Video Player Container */}
              <div className="relative h-[260px] sm:h-[340px] md:h-[380px] w-full bg-black overflow-hidden">
                <video
                  ref={videoRef}
                  src="/images/Insertec Promo 1.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Video Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-transparent to-black/30 pointer-events-none" />

                {/* Top Overlay Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>Présentation Vidéo INSERTEC</span>
                </div>

                {/* Video Custom Floating Control Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-3 p-2.5 rounded-2xl bg-[#060e20]/80 backdrop-blur-md border border-white/15">
                  <div className="flex items-center gap-2">
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Mettre en pause" : "Lire la vidéo"}
                      className="w-9 h-9 rounded-xl bg-[#f97316] text-white flex items-center justify-center hover:bg-[#ea580c] active:scale-95 transition-all cursor-pointer shadow-lg"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                    </button>

                    {/* Mute/Unmute Button */}
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Activer le son" : "Couper le son"}
                      className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-white/70" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    </button>
                  </div>

                  <span className="text-white/70 text-xs font-medium truncate hidden sm:inline">
                    {isMuted ? "Cliquez pour activer le son 🔊" : "Son activé 🔊"}
                  </span>

                  {/* Fullscreen Button */}
                  <button
                    onClick={handleFullscreen}
                    aria-label="Plein écran"
                    className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* 4 Stats Numbers Grid directly integrated */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="glass-panel rounded-2xl p-4 sm:p-5 text-center hover:bg-white/10 hover:border-[#f97316]/50 hover:-translate-y-1 transition-all duration-300 group cursor-default shadow-md"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#f97316] mb-1 group-hover:scale-105 transition-transform duration-300">
                    <span
                      ref={(el) => {
                        counterRefs.current[i] = el;
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-white/75 text-[11px] sm:text-xs font-semibold tracking-wider uppercase leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-white/35 text-[10px] tracking-widest uppercase font-bold">Défiler</span>
        <svg className="w-4 h-4 text-[#f97316]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
