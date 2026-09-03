"use client";

import { useState, useEffect } from "react";
import { Music, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

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

type NavLink = {
  label: string;
  href: string;
  sublinks?: { label: string; href: string; }[];
};

const navLinks: NavLink[] = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { 
    label: "Produits", 
    href: "#products",
    sublinks: [
      { label: "Vue d'ensemble", href: "#products" },
      { label: "Explorer les pièces", href: "/catalogue#product-grid" }
    ]
  },
  { label: "Catalogue", href: "/catalogue" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");
  
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // If we're on the catalogue page, set active link to catalogue
    if (pathname === "/catalogue") {
      setActiveLink("/catalogue");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      if (pathname === "/") {
        // Update active section
        const sections = ["hero", "services", "products", "catalogue-section", "about", "contact"];
        for (const section of sections.reverse()) {
          const el = document.getElementById(section);
          if (el && window.scrollY >= el.offsetTop - 120) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);

    if (href.startsWith("/")) {
      router.push(href);
      return;
    }

    if (pathname !== "/") {
      router.push("/" + href);
      return;
    }

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="sticky top-4 z-50 mx-auto w-[96%] max-w-7xl rounded-full glass-nav flex flex-wrap items-center justify-between px-6 py-3 transition-all duration-500"
    >
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-3 group cursor-pointer active:scale-95 transition-transform"
            aria-label="INSERTEC MAROC - Retour à l'accueil"
          >
            <Image 
              src="/images/logo.png" 
              alt="INSERTEC MAROC Logo" 
              width={120}
              height={40}
              priority
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
              <div key={link.label} className="relative group">
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer flex items-center gap-1 active:scale-95 ${
                    activeLink === link.href || (link.sublinks && link.sublinks.some(sub => activeLink === sub.href))
                      ? "text-[#f97316] bg-white/5"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {link.sublinks && (
                    <svg className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {(activeLink === link.href || (link.sublinks && link.sublinks.some(sub => activeLink === sub.href))) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#f97316] rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                {link.sublinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 glass-panel rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden transform group-hover:translate-y-0 translate-y-2">
                    {link.sublinks.map((sublink) => (
                      <button
                        key={sublink.label}
                        onClick={() => handleNavClick(sublink.href)}
                        className="text-left px-5 py-3.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 hover:pl-6 transition-all duration-300 cursor-pointer"
                      >
                        {sublink.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-4">
            {/* Phone Quick Link for Desktop */}
            <a
              href="tel:+212522614414"
              className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] hover:bg-[#f97316] hover:text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] active:scale-95 transition-all duration-300"
              title="Appeler le fixe"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>0522 61 44 14</span>
            </a>
            
            <a
              href="https://wa.me/212608926620"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] active:scale-95 transition-all duration-300"
              title="Contacter sur WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.101-2.884-6.963C16.59 1.916 14.116.892 11.488.892 6.05 10.428 5.626 5.626 5.626v.012c0 1.706.452 3.376 1.311 4.848l.515.87-.323 1.182-.33 1.206 1.24-.325 1.282-.336.56.944z"/>
              </svg>
              <span>0608 92 66 20</span>
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
              className="md:hidden p-2 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-xl hover:bg-white/10 active:scale-90 transition-all cursor-pointer text-white"
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        {/* Mobile menu */}
        <div
          className={`w-full md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-panel rounded-3xl flex flex-col gap-6 p-6 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col gap-1">
                  <button
                    onClick={() => {
                      if (!link.sublinks) {
                        handleNavClick(link.href);
                      }
                    }}
                    className={`w-full text-left px-5 py-4 min-h-[48px] rounded-xl text-base font-semibold transition-all duration-300 ${
                      !link.sublinks && activeLink === link.href
                        ? "bg-[#f97316]/20 text-[#f97316] border border-[#f97316]/30 shadow-[inset_0_0_10px_rgba(249,115,22,0.1)]"
                        : link.sublinks
                        ? "text-[#f97316]"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    } ${!link.sublinks ? 'cursor-pointer active:scale-95' : 'cursor-default opacity-90'}`}
                  >
                    {link.label}
                  </button>
                  {link.sublinks && (
                    <div className="flex flex-col pl-6 pr-2 gap-2 mt-2 border-l-2 border-white/10 ml-5">
                      {link.sublinks.map((sublink) => (
                        <button
                          key={sublink.label}
                          onClick={() => handleNavClick(sublink.href)}
                          className="w-full text-left px-4 py-3 min-h-[48px] rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer active:scale-95 hover:pl-5"
                        >
                          {sublink.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="tel:+212522614414"
                className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-4 py-3.5 min-h-[48px] rounded-xl text-sm font-semibold border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] hover:bg-[#f97316] hover:text-white transition-all shadow-lg active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Appeler: 0522 61 44 14</span>
              </a>
              
              <a
                href="https://wa.me/212608926620"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] flex items-center justify-center gap-3 px-4 py-3.5 min-h-[48px] rounded-xl text-sm font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all shadow-lg active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.101-2.884-6.963C16.59 1.916 14.116.892 11.488.892 6.05 10.428 5.626 5.626 5.626v.012c0 1.706.452 3.376 1.311 4.848l.515.87-.323 1.182-.33 1.206 1.24-.325 1.282-.336.56.944z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
            <button
              onClick={() => handleNavClick("#contact")}
              className="w-full mt-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold text-sm px-5 py-4 min-h-[48px] rounded-xl cursor-pointer shadow-lg hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Demander une intervention rapide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
    </header>
  );
}
