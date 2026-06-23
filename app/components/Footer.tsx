"use client";

import ScrollReveal from "./ScrollReveal";

const contactItems = [
  {
    id: "footer-phone",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Téléphone Fixe",
    value: "0522 61 44 14",
    href: "tel:0522614414",
  },
  {
    id: "footer-gsm1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "GSM 1 (Bannière / Page)",
    value: "0661 61 89 45",
    href: "tel:0661618945",
  },
  {
    id: "footer-gsm2",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.101-2.884-6.963C16.59 1.916 14.116.892 11.488.892 6.05 10.428 5.626 5.626 5.626v.012c0 1.706.452 3.376 1.311 4.848l.515.87-.323 1.182-.33 1.206 1.24-.325 1.282-.336.56.944z"/>
      </svg>
    ),
    label: "GSM 2 (Technique / WhatsApp)",
    value: "0660 12 11 44",
    href: "https://wa.me/212660121144",
  },
  {
    id: "footer-fax",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: "Fax",
    value: "0520 77 42 74",
    href: "tel:0520774274",
  },
  {
    id: "footer-email",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "insertecinfo@gmail.com",
    href: "mailto:insertecinfo@gmail.com",
  },
  {
    id: "footer-location",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Adresse Commerciale & Siège",
    value: "6 rue zine ishak n° 7, angle bd ibn tachfine, RDC MAG N° 505, Casablanca",
    href: "https://maps.google.com/?q=6+rue+zine+ishak+n%C2%B0+7+angle+bd+ibn+tachfine+Casablanca",
  },
];

const footerLinks = {
  Services: [
    { label: "Pièces de rechange", href: "#products" },
    { label: "Dépannage 24/7", href: "#services" },
    { label: "Maintenance préventive", href: "#services" },
    { label: "Contrats entreprises", href: "#contact" },
  ],
  Équipements: [
    { label: "Cuisine professionnelle", href: "#products" },
    { label: "Machines à laver industrielles", href: "#products" },
    { label: "Réfrigération", href: "#products" },
    { label: "Buanderie hôtelière", href: "#services" },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Contact CTA Band */}
      <section
        id="contact"
        className="relative py-20 lg:py-28 bg-[#050d1f] overflow-hidden"
        aria-label="Section contact INSERTEC MAROC"
      >
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.1) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left – CTA text */}
            <ScrollReveal variant="left">
              <div className="inline-flex items-center gap-2 bg-[#f97316]/15 border border-[#f97316]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#f97316]" style={{ animation: "pulse-glow 2s infinite" }} />
                <span className="text-[#f97316] text-sm font-semibold tracking-widest uppercase">Contact & Intervention</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                Une panne ?<br />
                <span className="gradient-text">On intervient maintenant.</span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                Appelez-nous directement ou envoyez-nous un message. Nos techniciens se déplacent dans tout le Maroc sous 24h.
              </p>

              {/* Contact items */}
              <div className="space-y-4">
                {contactItems.map((item) => (
                  <a
                    key={item.id}
                    id={item.id}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#f97316]/15 border border-[#f97316]/25 text-[#f97316] flex items-center justify-center flex-shrink-0 group-hover:bg-[#f97316] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white/40 text-xs font-semibold uppercase tracking-wide">{item.label}</div>
                      <div className="text-white font-semibold text-sm group-hover:text-[#f97316] transition-colors duration-200">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Right – Contact form */}
            <ScrollReveal variant="right">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#f97316]/50 to-transparent rounded-full" />
                <h3 className="text-white font-bold text-xl mb-6">Envoyer un message</h3>
                <form
                  id="contact-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const name = (document.getElementById("contact-name") as HTMLInputElement)?.value || "";
                    const phone = (document.getElementById("contact-phone") as HTMLInputElement)?.value || "";
                    const email = (document.getElementById("contact-email") as HTMLInputElement)?.value || "";
                    const type = (document.getElementById("contact-type") as HTMLSelectElement)?.value || "";
                    const message = (document.getElementById("contact-message") as HTMLTextAreaElement)?.value || "";

                    const subject = encodeURIComponent(`[INSERTEC MAROC] Demande d'intervention / Devis`);
                    const body = encodeURIComponent(
                      `Bonjour,\n\n` +
                      `Vous avez reçu une nouvelle demande depuis le site web :\n\n` +
                      `• Nom complet : ${name}\n` +
                      `• Téléphone : ${phone}\n` +
                      `• Email : ${email || "Non renseigné"}\n` +
                      `• Type de demande : ${type || "Non renseigné"}\n\n` +
                      `• Message :\n${message}\n\n` +
                      `Cordialement.`
                    );

                    window.location.href = `mailto:insertecinfo@gmail.com?subject=${subject}&body=${body}`;
                  }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-white/50 text-xs font-semibold uppercase tracking-wide block mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Votre nom"
                        className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#f97316]/60 focus:bg-white/10 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="text-white/50 text-xs font-semibold uppercase tracking-wide block mb-1.5">
                        Téléphone *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="+212 6XX XXX XXX"
                        className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#f97316]/60 focus:bg-white/10 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-white/50 text-xs font-semibold uppercase tracking-wide block mb-1.5">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#f97316]/60 focus:bg-white/10 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-type" className="text-white/50 text-xs font-semibold uppercase tracking-wide block mb-1.5">
                      Type de demande
                    </label>
                    <select
                      id="contact-type"
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f97316]/60 transition-all duration-200"
                      style={{ backgroundColor: "#0f2044" }}
                    >
                      <option value="">Sélectionner…</option>
                      <option value="piece">Pièce de rechange</option>
                      <option value="depannage">Dépannage urgent</option>
                      <option value="maintenance">Contrat de maintenance</option>
                      <option value="devis">Demande de devis</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-white/50 text-xs font-semibold uppercase tracking-wide block mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Décrivez votre équipement et la nature de la panne ou du besoin…"
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#f97316]/60 focus:bg-white/10 transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    id="contact-submit"
                    className="w-full bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Envoyer la demande
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030a17] border-t border-white/5" aria-label="Pied de page INSERTEC MAROC">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/logo.png" 
                  alt="INSERTEC Logo" 
                  className="h-12 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg leading-tight">INSERTEC</span>
                  <span className="text-white text-xs font-semibold tracking-widest uppercase">MAROC</span>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                Votre partenaire expert en pièces de rechange et maintenance d'équipements professionnels de cuisine et de lavage industriel au Maroc.
              </p>
              {/* Quick contact */}
              <div className="space-y-2.5">
                <a
                  href="tel:0522614414"
                  id="footer-tel-link"
                  className="flex items-center gap-3 text-white/50 hover:text-[#f97316] transition-colors duration-200 text-sm group font-semibold"
                >
                  <svg className="w-4 h-4 text-[#f97316] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Fixe: 0522 61 44 14
                </a>
                <a
                  href="tel:0661618945"
                  id="footer-gsm1-link"
                  className="flex items-center gap-3 text-white/50 hover:text-[#f97316] transition-colors duration-200 text-sm group font-semibold"
                >
                  <svg className="w-4 h-4 text-[#f97316] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  GSM 1: 0661 61 89 45
                </a>
                <a
                  href="https://wa.me/212660121144"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-gsm2-link"
                  className="flex items-center gap-3 text-white/50 hover:text-[#f97316] transition-colors duration-200 text-sm group font-semibold"
                >
                  <svg className="w-4 h-4 text-[#f97316] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.101-2.884-6.963C16.59 1.916 14.116.892 11.488.892 6.05 10.428 5.626 5.626 5.626v.012c0 1.706.452 3.376 1.311 4.848l.515.87-.323 1.182-.33 1.206 1.24-.325 1.282-.336.56.944z"/>
                  </svg>
                  GSM 2 / WhatsApp: 0660 12 11 44
                </a>
                <a
                  href="mailto:insertecinfo@gmail.com"
                  id="footer-email-link"
                  className="flex items-center gap-3 text-white/50 hover:text-[#f97316] transition-colors duration-200 text-sm font-semibold"
                >
                  <svg className="w-4 h-4 text-[#f97316] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  insertecinfo@gmail.com
                </a>
                <div className="flex items-start gap-3 text-white/40 text-xs leading-relaxed max-w-xs mt-2">
                  <svg className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>6 rue zine ishak n° 7, angle bd ibn tachfine, RDC MAG N° 505, Casablanca</span>
                </div>
              </div>
            </div>

            {/* Links columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-bold text-sm mb-5 tracking-wide">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-white/40 hover:text-[#f97316] text-sm transition-colors duration-200 cursor-pointer text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-white/8 space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/25 text-xs text-center md:text-left">
                © {new Date().getFullYear()} INSERTEC MAROC. Tous droits réservés.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" style={{ animation: "pulse-glow 2s infinite" }} />
                <span className="text-white/25 text-xs">Techniciens disponibles 24/7</span>
              </div>
            </div>
            
            {/* Legal Disclosures Sub-bar */}
            <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
              <p className="text-[10px] sm:text-xs text-white/40 tracking-wide leading-relaxed">
                <strong>INSERTEC SARL AU</strong> — RC: 296519 — IF: 71771832 — Patente: 34216642 — Siège : 6 rue zine ishak n° 7 angle bd ibn tachfine, Casablanca — www.insertec.ma
              </p>
            </div>
            <div className="pt-4 text-center">
              <p className="text-[10px] sm:text-xs text-white/30 tracking-wide font-medium">
                Designed by <a href="https://github.com/youssefben7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">youssefben7</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
