"use client";

import { useState, useEffect } from "react";
import { Music, Menu, X } from "lucide-react";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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
      className="sticky top-4 z-50 mx-auto w-[95%] rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex flex-wrap items-center justify-between px-6 py-3 transition-all duration-500"
    >
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
          <div className="hidden md:flex items-center gap-1">
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
              href="tel:+212522614414"
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-orange-500/30 bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white transition-all"
              title="Appeler le fixe"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>0522 61 44 14</span>
            </a>
            
            <a
              href="https://wa.me/212660121144"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
              title="Contacter sur WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.101-2.884-6.963C16.59 1.916 14.116.892 11.488.892 6.05 10.428 5.626 5.626 5.626v.012c0 1.706.452 3.376 1.311 4.848l.515.87-.323 1.182-.33 1.206 1.24-.325 1.282-.336.56.944z"/>
              </svg>
              <span>0660 12 11 44</span>
            </a>

            <div className="hidden md:flex items-center gap-4 ml-4">
              <a href="https://www.facebook.com/profile.php?id=61591242990810" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="text-gray-300 hover:text-orange-500 transition-colors duration-200 h-5 w-5 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/insertecmaroc?igsh=MTB1NWdicnBoeTFn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="text-gray-300 hover:text-orange-500 transition-colors duration-200 h-5 w-5 cursor-pointer" />
              </a>
              <a href="https://www.tiktok.com/@insertec.maroc2?_r=1&_t=ZS-97SEUmF4Che" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <Music className="text-gray-300 hover:text-orange-500 transition-colors duration-200 h-5 w-5 cursor-pointer" />
              </a>
            </div>

            {/* Hamburger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-white"
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        {/* Mobile menu */}
        <div
          className={`w-full md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-lg rounded-3xl border border-white/10 flex flex-col gap-6 p-6 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left px-5 py-4 rounded-xl text-base font-semibold transition-all duration-200 cursor-pointer ${
                    activeLink === link.href
                      ? "bg-[#f97316]/20 text-[#f97316] border border-[#f97316]/30"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="tel:+212522614414"
                className="flex-1 min-w-[200px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border border-orange-500/30 bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Appeler: 0522 61 44 14</span>
              </a>
              
              <a
                href="https://wa.me/212660121144"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.101-2.884-6.963C16.59 1.916 14.116.892 11.488.892 6.05 10.428 5.626 5.626 5.626v.012c0 1.706.452 3.376 1.311 4.848l.515.87-.323 1.182-.33 1.206 1.24-.325 1.282-.336.56.944z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
            <button
              onClick={() => handleNavClick("#contact")}
              className="w-full mt-2 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold text-sm px-5 py-4 rounded-xl cursor-pointer shadow-lg hover:scale-[1.02] transition-transform"
            >
              Demander une intervention rapide
            </button>
          </div>
        </div>
    </header>
  );
}
