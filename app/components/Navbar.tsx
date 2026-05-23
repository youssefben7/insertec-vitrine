"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Produits", href: "#products" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Update active section
      const sections = ["hero", "services", "products", "about", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050d1f]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(249,115,22,0.1)] border-b border-white/5"
          : "bg-[#050d1f]/60 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-3 group cursor-pointer"
            aria-label="INSERTEC MAROC - Retour à l'accueil"
          >
            <img 
              src="/images/logo.png" 
              alt="INSERTEC Logo" 
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="text-white font-bold text-lg leading-tight tracking-wide">INSERTEC</span>
              <span className="text-white text-xs font-semibold tracking-widest uppercase leading-tight">MAROC</span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                  activeLink === link.href
                    ? "text-[#f97316]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#f97316] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-4">
            {/* Phone Quick Link for Desktop */}
            <a
              href="tel:0522614414"
              className="hidden xl:flex items-center gap-2 text-white/80 hover:text-[#f97316] transition-colors duration-200 text-sm font-semibold"
              title="Appeler le fixe"
            >
              <svg className="w-4 h-4 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>0522 61 44 14</span>
            </a>
            
            <a
              href="https://wa.me/212660121144"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 text-white/80 hover:text-[#f97316] transition-colors duration-200 text-sm font-semibold"
              title="Contacter sur WhatsApp"
            >
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.101-2.884-6.963C16.59 1.916 14.116.892 11.488.892 6.05 10.428 5.626 5.626 5.626v.012c0 1.706.452 3.376 1.311 4.848l.515.87-.323 1.182-.33 1.206 1.24-.325 1.282-.336.56.944z"/>
              </svg>
              <span>0660 12 11 44</span>
            </a>

            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
              id="nav-cta-contact"
            >
              <span>Intervention rapide</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Hamburger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
            >
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0f2044]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeLink === link.href
                    ? "bg-[#f97316]/20 text-[#f97316] border border-[#f97316]/30"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 space-y-2">
              <a
                href="tel:0522614414"
                className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 text-white font-semibold text-sm px-5 py-3 rounded-xl cursor-pointer hover:bg-white/10"
              >
                <svg className="w-4 h-4 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler Fixe: 0522 61 44 14
              </a>
              <a
                href="tel:0661618945"
                className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 text-white font-semibold text-sm px-5 py-3 rounded-xl cursor-pointer hover:bg-white/10"
              >
                <svg className="w-4 h-4 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler GSM 1: 0661 61 89 45
              </a>
              <a
                href="https://wa.me/212660121144"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500/10 border border-green-500/20 text-white font-semibold text-sm px-5 py-3 rounded-xl cursor-pointer hover:bg-green-500/20"
              >
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.101-2.884-6.963C16.59 1.916 14.116.892 11.488.892 6.05 10.428 5.626 5.626 5.626v.012c0 1.706.452 3.376 1.311 4.848l.515.87-.323 1.182-.33 1.206 1.24-.325 1.282-.336.56.944z"/>
                </svg>
                WhatsApp: 0660 12 11 44
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-semibold text-sm px-5 py-3 rounded-xl cursor-pointer font-bold"
                id="mobile-cta-contact"
              >
                Demander une intervention
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
