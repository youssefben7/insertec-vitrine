"use client";

import { allProductData } from "../data/products";
import Image from "next/image";

// Take a subset for the home page carousel so it's not too long
const marqueeImages = allProductData.slice(0, 20);

export default function ProductCarousel() {
  const handleQuoteRequest = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      
      const selectEl = document.getElementById("contact-type") as HTMLSelectElement | null;
      if (selectEl) {
        selectEl.value = "devis";
      }

      const nameInput = document.getElementById("contact-name") as HTMLInputElement | null;
      if (nameInput) {
        setTimeout(() => {
          nameInput.focus();
        }, 800);
      }
    }
  };

  return (
    <div className="w-full max-w-[100vw] mx-auto mt-16 overflow-hidden">
      {/* Title / Decorative Header */}
      <div className="text-center mb-10 px-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[#0f2044] mb-2">
          Un aperçu de nos pièces de rechange
        </h3>
        <p className="text-sm text-[#152d5e]/60">
          Nous disposons d'un large catalogue de pièces. En voici quelques-unes.
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group bg-[#0f2044]/5 border-y border-[#b8cef0]/40 py-10">
        
        {/* Track 1 */}
        <div className="flex w-max animate-[marquee_40s_linear_infinite] space-x-6 px-3 group-hover:[animation-play-state:paused]">
          {marqueeImages.map((product) => (
            <a 
              href="/catalogue"
              key={product.id} 
              className="relative w-80 h-64 sm:w-[450px] sm:h-[350px] flex-shrink-0 bg-white rounded-3xl shadow-md border border-white/50 overflow-hidden flex items-center justify-center p-4 hover:shadow-xl hover:border-[#f97316]/30 transition-all duration-300 group/item cursor-pointer active:scale-95"
            >
              <Image
                src={product.image}
                alt={`${product.name} - Pièce de rechange INSERTEC MAROC`}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 320px, 450px"
                className="p-4 group-hover/item:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0f2044]/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* Track 2 (duplicate for seamless loop) */}
        <div className="flex w-max animate-[marquee_40s_linear_infinite] space-x-6 px-3 group-hover:[animation-play-state:paused]" aria-hidden="true">
          {marqueeImages.map((product) => (
            <a 
              href="/catalogue"
              key={`dup-${product.id}`} 
              className="relative w-80 h-64 sm:w-[450px] sm:h-[350px] flex-shrink-0 bg-white rounded-3xl shadow-md border border-white/50 overflow-hidden flex items-center justify-center p-4 hover:shadow-xl hover:border-[#f97316]/30 transition-all duration-300 group/item cursor-pointer active:scale-95"
            >
              <Image
                src={product.image}
                alt={`${product.name} - Pièce de rechange INSERTEC MAROC`}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 320px, 450px"
                className="p-4 group-hover/item:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0f2044]/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>
      </div>
      
      {/* We need to define the marquee keyframes in global CSS. For now, inline it */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}} />
    </div>
  );
}
