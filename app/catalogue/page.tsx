"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allProductData } from "../data/products";
import Image from "next/image";

const ITEMS_PER_PAGE = 16;

export default function CataloguePage() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(allProductData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = allProductData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#f0f6ff] min-h-screen pt-24 pb-16">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-12">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-[#0f2044] mb-6">
              Notre Catalogue de <span className="text-[#f97316]">Pièces</span>
            </h1>
            <p className="text-lg text-[#152d5e]/70 max-w-2xl mx-auto">
              Découvrez notre large sélection de pièces de rechange d'origine pour vos équipements de cuisine professionnelle et buanderie.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl p-4 shadow-sm border border-[#b8cef0]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-full h-48 sm:h-56 bg-gray-50 rounded-xl mb-4 overflow-hidden flex items-center justify-center p-2 border border-gray-100 relative">
                  <Image
                    src={product.image}
                    alt={`${product.name} - INSERTEC MAROC`}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#3b6abf] bg-[#3b6abf]/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <h3 className="text-[#0f2044] font-bold mt-3 text-sm sm:text-base leading-snug">
                      {product.name}
                    </h3>
                  </div>
                  <a
                    href="mailto:insertecinfo@gmail.com"
                    className="mt-4 w-full text-center text-sm font-semibold py-2.5 rounded-lg border border-[#f97316]/30 text-[#f97316] hover:bg-[#f97316] hover:text-white hover:shadow-[0_4px_15px_rgba(249,115,22,0.3)] active:scale-95 focus:ring-4 focus:ring-[#f97316]/30 focus:outline-none transition-all duration-300"
                  >
                    Demander le prix
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Section */}
        {totalPages > 1 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-[#b8cef0]/40 text-[#0f2044] hover:bg-[#f97316] hover:text-white hover:border-[#f97316] hover:shadow-md active:scale-95 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-[#0f2044] disabled:hover:border-[#b8cef0]/40 disabled:active:scale-100 disabled:shadow-none transition-all duration-300 cursor-pointer disabled:cursor-default"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <span className="text-[#0f2044] font-semibold">
              Page {currentPage} sur {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-[#b8cef0]/40 text-[#0f2044] hover:bg-[#f97316] hover:text-white hover:border-[#f97316] hover:shadow-md active:scale-95 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-[#0f2044] disabled:hover:border-[#b8cef0]/40 disabled:active:scale-100 disabled:shadow-none transition-all duration-300 cursor-pointer disabled:cursor-default"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
