"use client";

import { useState, useEffect, useRef } from "react";

const carouselImages = [
  { src: "/images/1.jpg", alt: "Pièce de rechange INSERTEC 1" },
  { src: "/images/2.jpg", alt: "Pièce de rechange INSERTEC 2" },
  { src: "/images/3.jpg", alt: "Pièce de rechange INSERTEC 3" },
  { src: "/images/4.jpg", alt: "Pièce de rechange INSERTEC 4" },
  { src: "/images/5.jpg", alt: "Pièce de rechange INSERTEC 5" },
  { src: "/images/6.jpg", alt: "Pièce de rechange INSERTEC 6" },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
  };

  // Setup auto-swipe interval
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 3500); // auto-swipe every 3.5 seconds
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, currentIndex]);

  const handleQuoteRequest = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      
      // Attempt to select the 'devis' option in the form select dropdown
      const selectEl = document.getElementById("contact-type") as HTMLSelectElement | null;
      if (selectEl) {
        selectEl.value = "devis";
      }

      // Focus on the name input after scroll finishes
      const nameInput = document.getElementById("contact-name") as HTMLInputElement | null;
      if (nameInput) {
        setTimeout(() => {
          nameInput.focus();
        }, 800);
      }
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-16 px-4">
      {/* Title / Decorative Header for the Carousel */}
      <div className="text-center mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-[#0f2044] mb-2">
          Nos pièces en haute résolution
        </h3>
        <p className="text-sm text-[#152d5e]/60">
          Visualisez des exemples réels de nos pièces de rechange d'origine. Survolez le carrousel pour mettre en pause.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative group bg-[#0f2044]/5 border border-[#b8cef0]/40 rounded-3xl p-6 sm:p-8 backdrop-blur-sm overflow-hidden flex items-center justify-center min-h-[350px] sm:min-h-[450px] md:min-h-[550px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
          {carouselImages.map((image, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={image.src}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 scale-100 translate-x-0 z-10 pointer-events-auto"
                    : "opacity-0 scale-95 translate-x-8 -z-10 pointer-events-none"
                }`}
              >
                {/* Image wrapper to keep natural (real) dimensions */}
                <div className="relative max-w-full max-h-full flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] w-auto h-auto object-contain rounded-2xl shadow-xl border border-white/50 bg-white"
                  />
                  {/* Subtle caption overlay */}
                  <div className="absolute bottom-4 left-4 bg-[#0f2044]/80 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full font-semibold border border-white/10">
                    {image.alt}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Manual navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-md text-[#0f2044] hover:bg-[#f97316] hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer z-20 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100"
          aria-label="Image précédente"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-md text-[#0f2044] hover:bg-[#f97316] hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer z-20 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100"
          aria-label="Image suivante"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Counter Overlay */}
        <div className="absolute top-4 right-4 bg-[#0f2044]/10 backdrop-blur-sm text-[#0f2044]/75 text-xs font-bold px-3 py-1 rounded-full border border-[#0f2044]/10 z-20">
          {currentIndex + 1} / {carouselImages.length}
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "bg-[#f97316] w-6"
                  : "bg-[#0f2044]/25 hover:bg-[#0f2044]/40"
              }`}
              aria-label={`Aller à la diapositive ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Quote request button underneath */}
      <div className="text-center mt-8">
        <button
          onClick={handleQuoteRequest}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold px-10 py-4 rounded-2xl hover:shadow-[0_10px_30px_rgba(249,115,22,0.4)] hover:scale-105 active:scale-98 transition-all duration-300 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Demander un devis
        </button>
      </div>
    </div>
  );
}
