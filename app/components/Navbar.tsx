"use client";

import { useState, useEffect } from "react";
import { Music, Menu, X, Phone, MessageCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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
    width="20"
    height="20"
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
  isNew?: boolean;
  sublinks?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  {
    label: "Produits",
    href: "#products",
    sublinks: [
      { label: "Vue d'ensemble", href: "#products" },
      { label: "✨ Conteneurs Personnalisés", href: "#conteneurs" },
      { label: "Explorer les pièces", href: "/catalogue#product-grid" },
    ],
  },
  { label: "Conteneurs", href: "#conteneurs", isNew: true },
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
    if (pathname === "/catalogue") {
      setActiveLink("/catalogue");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      if (pathname === "/") {
        const sections = [
          "hero",
          "services",
          "products",
          "conteneurs",
          "catalogue-section",
          "about",
          "contact",
        ];
        for (const section of sections.reverse()) {
          const el = document.getElementById(section);
          if (el && window.scrollY >= el.offsetTop - 140) {
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
    <header className="sticky top-3 sm:top-4 z-50 mx-auto w-[98%] max-w-[1560px]">
      {/* Main Navbar Pill */}
      <div
        className={`glass-nav rounded-full px-5 sm:px-8 py-3 sm:py-3.5 transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? "shadow-[0_15px_40px_rgba(0,0,0,0.65)] border-white/25 bg-[#060e20]/92 backdrop-blur-xl"
            : "bg-[#060e20]/80 backdrop-blur-lg border-white/15"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-3 sm:gap-4 group cursor-pointer active:scale-95 transition-transform flex-shrink-0"
          aria-label="INSERTEC MAROC - Accueil"
        >
          <Image
            src="/images/logo.png"
            alt="INSERTEC MAROC"
            width={125}
            height={42}
            priority
            className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col text-left">
            <span className="text-white font-black text-lg sm:text-xl leading-none tracking-tight">
              INSERTEC
            </span>
            <span className="text-[#f97316] text-[11px] font-bold tracking-widest uppercase leading-none mt-1">
              MAROC
            </span>
          </div>
        </button>

        {/* Desktop Links (Visible from lg: 1024px upwards) */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3" aria-label="Navigation principale">
          {navLinks.map((link) => {
            const isActive =
              activeLink === link.href ||
              (link.sublinks && link.sublinks.some((sub) => activeLink === sub.href));
            return (
              <div key={link.label} className="relative group">
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3.5 xl:px-4 py-2 text-[13px] xl:text-[14.5px] font-semibold rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 active:scale-95 whitespace-nowrap ${
                    isActive
                      ? "text-[#f97316] bg-white/10 shadow-[inset_0_0_10px_rgba(249,115,22,0.1)]"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.isNew && (
                    <span className="text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.7)] animate-pulse">
                      NEW
                    </span>
                  )}
                  {link.sublinks && (
                    <svg
                      className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#f97316] rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {link.sublinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="glass-panel rounded-2xl p-2 shadow-2xl border border-white/15 overflow-hidden flex flex-col bg-[#060e20]/95 backdrop-blur-xl">
                      {link.sublinks.map((sublink) => (
                        <button
                          key={sublink.label}
                          onClick={() => handleNavClick(sublink.href)}
                          className="text-left px-4 py-3 text-sm font-medium text-white/85 hover:text-white hover:bg-[#f97316]/20 hover:text-[#f97316] rounded-xl transition-all cursor-pointer"
                        >
                          {sublink.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/212608926620"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs xl:text-sm font-semibold border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95 transition-all duration-300"
            title="Contacter sur WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-white" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>

          {/* Phone Call Button */}
          <a
            href="tel:+212660121144"
            className="hidden md:inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs xl:text-sm font-semibold border border-[#f97316]/40 bg-[#f97316]/10 text-[#f97316] hover:bg-[#f97316] hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] active:scale-95 transition-all duration-300"
            title="Appeler INSERTEC"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">+212 660-121144</span>
          </a>

          {/* Social Icons for large screens */}
          <div className="hidden 2xl:flex items-center gap-3 pl-3 border-l border-white/15">
            <a
              href="https://www.facebook.com/profile.php?id=61591242990810"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook INSERTEC"
              className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-[#f97316] transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/insertecmaroc?igsh=MTB1NWdicnBoeTFn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram INSERTEC"
              className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-[#f97316] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.tiktok.com/@insertec.maroc2?_r=1&_t=ZS-97SEUmF4Che"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok INSERTEC"
              className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-[#f97316] transition-colors"
            >
              <Music className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile / Tablet Menu Button (Visible on < lg) */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2.5 rounded-2xl bg-white/5 border border-white/15 text-white hover:bg-white/10 active:scale-90 transition-all cursor-pointer flex items-center justify-center"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6 text-[#f97316]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-[650px] opacity-100 mt-3" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="glass-panel rounded-3xl p-6 border border-white/15 bg-[#060e20]/95 backdrop-blur-2xl shadow-2xl flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive =
                activeLink === link.href ||
                (link.sublinks && link.sublinks.some((sub) => activeLink === sub.href));
              return (
                <div key={link.label} className="flex flex-col">
                  <button
                    onClick={() => {
                      if (!link.sublinks) {
                        handleNavClick(link.href);
                      }
                    }}
                    className={`w-full text-left px-5 py-3.5 rounded-2xl text-base font-semibold transition-all flex items-center justify-between ${
                      !link.sublinks && isActive
                        ? "bg-[#f97316]/20 text-[#f97316] border border-[#f97316]/30"
                        : link.sublinks
                        ? "text-white/90 font-bold"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    } ${!link.sublinks ? "cursor-pointer active:scale-98" : ""}`}
                  >
                    <span className="flex items-center gap-2.5">
                      {link.label}
                      {link.isNew && (
                        <span className="text-[10px] font-black uppercase bg-[#f97316] text-white px-2 py-0.5 rounded-full">
                          NEW
                        </span>
                      )}
                    </span>
                  </button>

                  {/* Sublinks if any */}
                  {link.sublinks && (
                    <div className="flex flex-col pl-5 gap-1.5 mt-1.5 mb-1.5 border-l-2 border-white/10 ml-5">
                      {link.sublinks.map((sublink) => (
                        <button
                          key={sublink.label}
                          onClick={() => handleNavClick(sublink.href)}
                          className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-white/75 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                        >
                          {sublink.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Drawer Quick Contact CTAs */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
            <a
              href="tel:+212660121144"
              className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-bold bg-[#f97316] text-white hover:bg-[#ea580c] active:scale-95 transition-all text-center shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Appeler</span>
            </a>

            <a
              href="https://wa.me/212608926620"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-bold bg-emerald-500 text-white hover:bg-emerald-600 active:scale-95 transition-all text-center shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Socials */}
          <div className="flex items-center justify-center gap-6 pt-2 border-t border-white/5 text-white/60">
            <a
              href="https://www.facebook.com/profile.php?id=61591242990810"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#f97316] transition-colors p-2"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/insertecmaroc?igsh=MTB1NWdicnBoeTFn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#f97316] transition-colors p-2"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@insertec.maroc2?_r=1&_t=ZS-97SEUmF4Che"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-[#f97316] transition-colors p-2"
            >
              <Music className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
