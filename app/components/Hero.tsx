"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2
} from "lucide-react";

const stats = [
  { value: "10+", label: "Ans d'expertise" },
  { value: "500+", label: "Clients B2B" },
  { value: "24/7", label: "Assistance technique" },
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
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#071329] pt-28 pb-16 lg:pt-36 lg:pb-24"
      aria-label="Section d'accueil INSERTEC MAROC"
    >
      {/* Subtle Corporate Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #f97316 0%, transparent 70%)",
            top: "-150px",
            right: "-50px",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            bottom: "-100px",
            left: "-50px",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-10" />
      </div>

      <div className="relative z-10 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main 2-Column Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Corporate Pitch & Direct CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            {/* Clean Professional Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/5 border border-white/15 text-white/80 text-xs font-semibold tracking-wide uppercase">
              <span>INSERTEC MAROC</span>
              <span className="text-white/30">•</span>
              <span className="text-[#f97316]">Distributeur Fagor Professional</span>
            </div>

            {/* Clean, Strong Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight">
              Maintenance, Équipements Pro &{" "}
              <span className="text-[#f97316]">Pièces de Rechange</span>
            </h1>

            {/* Corporate Description */}
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Spécialiste au Maroc de la fourniture d'équipements de blanchisserie et cuisine professionnelle <strong>Fagor Professional</strong>, de pièces de rechange d'origine, de maintenance technique 24/7 et d'aménagement de conteneurs professionnels.
            </p>

            {/* Action Buttons - Clean & Corporate */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              {/* Button 1: Demander une intervention */}
              <button
                onClick={() => scrollTo("contact")}
                id="hero-cta-intervention"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-[0_4px_20px_rgba(249,115,22,0.35)] active:scale-95 transition-all duration-200 cursor-pointer min-h-[50px]"
              >
                Demander une intervention
              </button>

              {/* Button 2: Gamme Fagor Pro */}
              <button
                onClick={() => scrollTo("fagor")}
                id="hero-cta-fagor"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm sm:text-base active:scale-95 transition-all duration-200 cursor-pointer min-h-[50px]"
              >
                Gamme Fagor Professional
              </button>

              {/* Button 3: Catalogue */}
              <button
                onClick={() => scrollTo("products")}
                id="hero-cta-catalogue"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-white/80 hover:text-white hover:bg-white/5 font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer min-h-[50px]"
              >
                Catalogue Pièces
              </button>
            </div>

            {/* Professional Reassurance Text */}
            <div className="pt-2 text-white/50 text-xs sm:text-sm font-medium flex flex-wrap items-center gap-y-2 gap-x-4">
              <span>Garantie constructeur officielle</span>
              <span className="text-white/20">•</span>
              <span>Intervention sous 24h</span>
              <span className="text-white/20">•</span>
              <span>Pièces 100% d'origine</span>
            </div>
          </div>

          {/* Right Column: Promotional Video & Clean Stats */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            
            {/* Video Showcase Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black group">
              
              <div className="relative h-[250px] sm:h-[320px] md:h-[350px] w-full bg-black overflow-hidden">
                <video
                  ref={videoRef}
                  src="https://bk7y5ps1oidxyo7e.public.blob.vercel-storage.com/Insertec%20Promo%201.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  poster="/images/rechange.jpg"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-transparent to-black/20 pointer-events-none" />

                {/* Video Top Label */}
                <div className="absolute top-3.5 left-3.5 z-20 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-white/90 text-xs font-semibold">
                  Présentation INSERTEC
                </div>

                {/* Video Custom Floating Control Bar */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between gap-3 p-2 rounded-xl bg-[#060e20]/85 backdrop-blur-md border border-white/15">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Mettre en pause" : "Lire la vidéo"}
                      className="w-8 h-8 rounded-lg bg-[#f97316] text-white flex items-center justify-center hover:bg-[#ea580c] active:scale-95 transition-all cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Activer le son" : "Couper le son"}
                      className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/70" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                    </button>
                  </div>

                  <span className="text-white/60 text-xs font-medium truncate hidden sm:inline">
                    {isMuted ? "Activer le son" : "Son activé"}
                  </span>

                  <button
                    onClick={handleFullscreen}
                    aria-label="Plein écran"
                    className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* 4 Clean Stats Numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4 bg-white/5 border border-white/10 text-center hover:border-white/20 transition-all duration-200"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#f97316] mb-0.5">
                    <span
                      ref={(el) => {
                        counterRefs.current[i] = el;
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-white/60 text-xs font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
