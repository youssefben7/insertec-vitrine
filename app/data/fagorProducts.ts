export interface FagorProduct {
  id: string;
  name: string;
  series: string;
  category: "laveuses" | "sechoirs" | "calandres" | "finition" | "specialises";
  categoryLabel: string;
  capacity?: string;
  image: string;
  badge?: string;
  shortDesc: string;
  description: string;
  highlights: string[];
  specs: { [key: string]: string };
}

export const fagorCategories = [
  { id: "all", label: "Toute la Gamme" },
  { id: "laveuses", label: "Laveuses (11 à 120 kg)" },
  { id: "sechoirs", label: "Séchoirs Touch Plus" },
  { id: "calandres", label: "Calandres & Repasseuses" },
  { id: "finition", label: "Tables & Mannequins" },
  { id: "specialises", label: "Détachage & Vapeur" },
] as const;

export const fagorProducts: FagorProduct[] = [
  // --- LAVEUSES ---
  {
    id: "fagor-la-100-120-basc",
    name: "Laveuse Essoreuse Basculante LA-100 / LA-120",
    series: "Série LA Haute Capacité",
    category: "laveuses",
    categoryLabel: "Laveuse Essoreuse",
    capacity: "100 - 120 kg",
    badge: "BASCULEMENT PNEUMATIQUE",
    image: "/images/fagor/la-100-120-basc.png",
    shortDesc: "Laveuse super-essorage avec système de basculement pneumatique pour grands volumes.",
    description: "Système de basculement pneumatique pour un chargement et déchargement ergonomique, commande tactile Touch Plus Control et essorage haute vitesse réduisant l'humidité.",
    highlights: ["Basculement pneumatique", "Super-Essorage 450 G", "Touch Plus TP2", "Tambour Inox AISI-304"],
    specs: {
      "Capacité": "100 à 120 kg",
      "Essorage": "Super-Essorage 450 G",
      "Commande": "Écran tactile couleur TP2",
      "Usage": "Hôpitaux, Blanchisseries Centrales, Hôtels 5*",
    }
  },
  {
    id: "fagor-la-100-120",
    name: "Laveuse Essoreuse LA-100 / LA-120",
    series: "Série LA Haute Capacité",
    category: "laveuses",
    categoryLabel: "Laveuse Essoreuse",
    capacity: "100 - 120 kg",
    badge: "SUPER ESSORAGE",
    image: "/images/fagor/la-100-120.png",
    shortDesc: "Super-essorage haute vitesse avec contrôle intelligent d'eau et d'énergie.",
    description: "Laveuse essoreuse grand volume haute vitesse assurant une efficacité de lavage maximale avec optimisation du pesage.",
    highlights: ["Super-Essorage 450 G", "Pesage intelligent", "Économie d'eau", "Construction Inox"],
    specs: {
      "Capacité": "100 - 120 kg",
      "Essorage": "Super-essorage haute vitesse",
      "Contrôle": "Touch Plus 2",
      "Alimentation": "Électrique / Vapeur / Eau Chaude",
    }
  },
  {
    id: "fagor-la-60-80-basc",
    name: "Laveuse Industrielle Basculante LA-60 / LA-80",
    series: "Série LA Haute Capacité",
    category: "laveuses",
    categoryLabel: "Laveuse Essoreuse",
    capacity: "60 - 80 kg",
    badge: "BASCULANTE",
    image: "/images/fagor/la-60-80-basc.png",
    shortDesc: "Laveuse essoreuse grand volume avec basculement pour une extraction facile du linge.",
    description: "Basculement pneumatique bidirectionnel facilitant les opérations d'extraction du linge lourd (draps, serviettes, nappage).",
    highlights: ["Basculement ergonomique", "Facteur G 450", "Porte grand diamètre", "Dosage automatique"],
    specs: {
      "Capacité": "60 à 80 kg",
      "Châssis": "Suspendu haute performance",
      "Écran": "Interface graphique couleur 7''",
      "Garantie": "Garantie Fagor & SAV INSERTEC",
    }
  },
  {
    id: "fagor-la-60-80",
    name: "Laveuse Essoreuse LA-60 / LA-80",
    series: "Série LA Haute Capacité",
    category: "laveuses",
    categoryLabel: "Laveuse Essoreuse",
    capacity: "60 - 80 kg",
    badge: "HAUTE PERFORMANCE",
    image: "/images/fagor/la-60-80.png",
    shortDesc: "Laveuse essoreuse super-essorage pour grands hôtels, cliniques et buanderies.",
    description: "Idéale pour les buanderies internes d'hôtels et cliniques. Grande flexibilité de programmation et cycles délicats ou intensifs.",
    highlights: ["Super-Essorage 450 G", "Variateur de fréquence", "Optimisation détergents", "Inox AISI-304"],
    specs: {
      "Capacité": "60 - 80 kg",
      "Essorage": "Super essorage 1000 tr/min",
      "Programmes": "29 programmes + personnalisables",
      "Structure": "Inox AISI-304",
    }
  },
  {
    id: "fagor-la-35-45",
    name: "Laveuse Essoreuse LA-35 / LA-45",
    series: "Série LA Moyenne Capacité",
    category: "laveuses",
    categoryLabel: "Laveuse Essoreuse",
    capacity: "35 - 45 kg",
    badge: "BEST-SELLER HÔTELLERIE",
    image: "/images/fagor/la-35-45.png",
    shortDesc: "La référence pour hôtels 4* et 5*, résidences et pressings professionnels.",
    description: "Compacte et ultra-performante, assurant une rotation rapide du linge avec des temps de séchage minimisés.",
    highlights: ["Facteur G 450", "Touch Plus TP2", "Silencieuse & stable", "Optimisation eau"],
    specs: {
      "Capacité": "35 à 45 kg",
      "Tambour": "Inox haute durabilité",
      "Essorage": "Super essorage",
      "Énergie": "Optimisation thermique & eau",
    }
  },
  {
    id: "fagor-la-11-28",
    name: "Laveuse Compacte LA-11 à LA-28",
    series: "Série LA Basse Capacité",
    category: "laveuses",
    categoryLabel: "Laveuse Essoreuse",
    capacity: "11 - 28 kg",
    badge: "POLYVALENCE",
    image: "/images/fagor/la-11-28.png",
    shortDesc: "Laveuse essoreuse professionnelle haute vitesse pour restaurants, spas et hôtels.",
    description: "Performance industrielle dans un format compact. Idéale pour les besoins quotidiens réguliers et le linge délicat.",
    highlights: ["Super-Essorage autonome", "Interface tactile intuitive", "Dimensions compactes", "Maintenance rapide"],
    specs: {
      "Capacité": "11, 14, 18, 22 ou 28 kg",
      "Chauffage": "Électrique ou Eau chaude",
      "Programmes": "Personnalisables par USB",
      "Tambour": "Volume adapté selon modèle",
    }
  },
  {
    id: "fagor-ln-35-45",
    name: "Laveuse Essorage Standard LN-35 / LN-45",
    series: "Série LN Essorage Standard",
    category: "laveuses",
    categoryLabel: "Laveuse Industrielle",
    capacity: "35 - 45 kg",
    badge: "ROBUSTE & ÉCONOMIQUE",
    image: "/images/fagor/ln-35-45.png",
    shortDesc: "Laveuse industrielle rigide pour usage intensif continu.",
    description: "Conçue pour un usage intensif et une longévité maximale avec un rapport qualité/prix exceptionnel.",
    highlights: ["Châssis rigide haute résistance", "Commandes TP2", "Composants renforcés", "Grande longévité"],
    specs: {
      "Capacité": "35 - 45 kg",
      "Type": "Machine rigide scellée",
      "Essorage": "Facteur G 200",
      "Applications": "Collectivités, usines, laveries",
    }
  },
  {
    id: "fagor-ln-11-28",
    name: "Laveuse Essorage Standard LN-11 à LN-28",
    series: "Série LN Essorage Standard",
    category: "laveuses",
    categoryLabel: "Laveuse Industrielle",
    capacity: "11 - 28 kg",
    badge: "ESSORAGE STANDARD",
    image: "/images/fagor/ln-11-28.png",
    shortDesc: "Laveuse industrielle compacte et robuste pour collectivités.",
    description: "Machine infatigable pour les cycles de lavage continu dans les cuisines centrales et structures d'accueil.",
    highlights: ["Fiabilité mécanique Fagor", "Microprocesseur électronique", "Faible coût d'exploitation"],
    specs: {
      "Capacité": "11 à 28 kg",
      "Type": "Rigide",
      "Commande": "Touch Plus Control",
      "Usage": "Lavage intensif quotidien",
    }
  },

  // --- SÉCHOIRS ---
  {
    id: "fagor-sr-45-80-guillotine",
    name: "Séchoir Industriel SR-45/80 Porte Guillotine",
    series: "Série SR Haute Capacité",
    category: "sechoirs",
    categoryLabel: "Séchoir Rotatif",
    capacity: "45 - 80 kg",
    badge: "PORTE GUILLOTINE AUTO",
    image: "/images/fagor/sr-45-80-guillotine.png",
    shortDesc: "Séchoir grand débit avec ouverture guillotine automatique pour déchargement rapide.",
    description: "L'ouverture guillotine pneumatique libère l'espace pour le déchargement direct sur chariot ou convoyeur.",
    highlights: ["Porte guillotine automatique", "Flux d'air axial-radial", "Gestion d'humidité iDry", "Filtre peluches XXL"],
    specs: {
      "Capacité": "45, 60 ou 80 kg",
      "Chauffage": "Vapeur / Gaz / Électrique",
      "Contrôle": "Touch Plus 2",
      "Flux d'air": "Airflow haute efficacité",
    }
  },
  {
    id: "fagor-sr-45-80-opl",
    name: "Séchoir Rotatif SR-45 / SR-60 / SR-80",
    series: "Série SR Haute Capacité",
    category: "sechoirs",
    categoryLabel: "Séchoir Rotatif",
    capacity: "45 - 80 kg",
    badge: "ÉCONOMIE D'ÉNERGIE",
    image: "/images/fagor/sr-45-80.png",
    shortDesc: "Séchoir industriel grand débit avec tambour à rotation inversante.",
    description: "Équipé du système Total Flow pour un temps de séchage record et une préservation des textiles.",
    highlights: ["Rotation inversée anti-froissement", "Isolation thermique renforcée", "Détection fin de cycle", "Tambour Inox"],
    specs: {
      "Capacité": "45 à 80 kg",
      "Diamètre tambour": "Grand volume",
      "Chauffage": "Gaz / Vapeur / Électrique",
      "Contrôle": "Écran couleur tactile",
    }
  },
  {
    id: "fagor-sr-11-22-tp2",
    name: "Séchoir Rotatif Compact SR-11 à SR-22",
    series: "Série SR Touch Plus",
    category: "sechoirs",
    categoryLabel: "Séchoir Rotatif",
    capacity: "11 - 22 kg",
    badge: "TOUCH PLUS CONNECTÉ",
    image: "/images/fagor/sr-11-22.png",
    shortDesc: "Séchoir professionnel Touch Plus rapide et économe pour hôtels et buanderies.",
    description: "Flux d'air optimisé, rotation alternée anti-emmêlement, écran tactile couleur et connectivité avancée.",
    highlights: ["Touch Plus 2 intuitif", "Tambour inversant de série", "Filtre tiroir ergonomique", "Faible consommation"],
    specs: {
      "Capacité": "11, 14, 18 et 22 kg",
      "Énergie": "Électrique / Gaz / Vapeur",
      "Tambour": "Inox perforé",
      "Certification": "CE & Normes Internationales",
    }
  },

  // --- CALANDRES ---
  {
    id: "fagor-psp-65",
    name: "Calandre Industrielle PSP-65 (Ø 650 mm)",
    series: "Série PSP Grand Rendement",
    category: "calandres",
    categoryLabel: "Calandre Industrielle",
    capacity: "Rouleau Ø 650 mm",
    badge: "GRAND DÉBIT",
    image: "/images/fagor/psp-65.png",
    shortDesc: "Séchage et repassage direct sans pré-séchage pour draps et nappes d'hôtels.",
    description: "Permet de sécher et repasser le linge plat directement après essorage. Rouleau massif Ø 650 mm pour une finition hôtelière.",
    highlights: ["Diamètre 650 mm", "Sortie avant ou arrière", "Bandes Nomex haute température", "Vitesse variable"],
    specs: {
      "Diamètre rouleau": "650 mm",
      "Longueurs": "2200, 2600 et 3300 mm",
      "Capacité": "Jusqu'à 290 kg/h",
      "Chauffage": "Électrique / Gaz / Vapeur",
    }
  },
  {
    id: "fagor-psp-50-folder",
    name: "Calandre Pliante PSP-50 (Ø 500 mm)",
    series: "Série PSP avec Plieuse",
    category: "calandres",
    categoryLabel: "Calandre Pliante",
    capacity: "Rouleau Ø 500 mm",
    badge: "PLIEUSE AUTOMATIQUE",
    image: "/images/fagor/psp-50-folder.png",
    shortDesc: "Séchage, repassage et pliage automatique en une seule passe par un seul opérateur.",
    description: "Solution tout-en-un pour sécher, repasser et plier automatiquement le linge plat en une seule passe.",
    highlights: ["Pliage longitudinal auto", "Écran tactile de programmation", "Engagement assisté", "Gain de main d'œuvre"],
    specs: {
      "Diamètre rouleau": "500 mm",
      "Largeurs": "2000, 2600 et 3300 mm",
      "Fonction": "Séchage + Repassage + Pliage auto",
      "Productivité": "1 seul opérateur requis",
    }
  },
  {
    id: "fagor-ps-35-plus",
    name: "Sécheuse-Repasseuse Murale PS-35 PLUS",
    series: "Série PS Murale",
    category: "calandres",
    categoryLabel: "Sécheuse-Repasseuse",
    capacity: "Rouleau Ø 325 mm",
    badge: "REPASSAGE DIRECT",
    image: "/images/fagor/ps-35-plus.png",
    shortDesc: "Repasseuse murale à engagement et sortie frontale pour hôtels et restaurants.",
    description: "Compacte et installable contre un mur. Traite le linge directement en sortie de laveuse essoreuse.",
    highlights: ["Gain de place mural", "Pédale ergonomique", "Vitesse réglable", "Revêtement Nomex"],
    specs: {
      "Diamètre": "325 mm",
      "Longueurs": "1400, 1600 et 2000 mm",
      "Chauffage": "Électrique ou Gaz radiant",
      "Opérateur": "1 opérateur",
    }
  },
  {
    id: "fagor-ps-20",
    name: "Repasseuse Murale PS-20 M",
    series: "Série PS Compacte",
    category: "calandres",
    categoryLabel: "Repasseuse Murale",
    capacity: "Rouleau Ø 200 mm",
    badge: "COMPACTE",
    image: "/images/fagor/ps-20.png",
    shortDesc: "Repasseuse murale pour restaurants, maisons d'hôtes et serviettes de table.",
    description: "Qualité de repassage professionnelle pour petites structures (serviettes, taies, nappes et chemins de table).",
    highlights: ["Sortie frontale", "Arrêt d'urgence & sécurité", "Thermostat électronique", "Faible consommation"],
    specs: {
      "Diamètre": "200 mm",
      "Longueur": "1000 à 1400 mm",
      "Alimentation": "Monophasé / Triphasé",
      "Idéal pour": "Restaurants, Spas, Gîtes",
    }
  },

  // --- FINITION ---
  {
    id: "fagor-table-mrp-vas",
    name: "Table de Repassage MRP-VAS",
    series: "Finition & Repassage",
    category: "finition",
    categoryLabel: "Table de Repassage",
    badge: "ASPIRANTE / VAPORISANTE",
    image: "/images/fagor/mrp-vas.png",
    shortDesc: "Table pro avec aspiration puissante, soufflerie, vaporisation et fer inclus.",
    description: "Plateau chauffant thermorégulé avec aspiration, soufflerie, vaporisation et fer professionnel ergonomique.",
    highlights: ["Aspiration / Soufflerie / Vapeur", "Plateau chauffant", "Jeannette orientable", "Fer pro inclus"],
    specs: {
      "Fonctions": "Aspirante, Soufflante, Vaporisante",
      "Chaudière": "Chaudière inox automatique",
      "Accessoires": "Potence & éclairage",
      "Usage": "Pressings, Blanchisseries, Hôtels",
    }
  },
  {
    id: "fagor-table-mpa",
    name: "Table de Repassage Autonome MPA",
    series: "Finition & Repassage",
    category: "finition",
    categoryLabel: "Table de Repassage",
    badge: "AUTONOME",
    image: "/images/fagor/mpa.png",
    shortDesc: "Table aspirante autonome avec chaudière intégrée et fer vapeur.",
    description: "Table aspirante prête à l'emploi avec chaudière vapeur et fer ergonomique pour ateliers et retouches.",
    highlights: ["Aspiration puissante et silencieuse", "Plateau universel", "Pédale robuste"],
    specs: {
      "Type": "Table autonome aspirante",
      "Fer": "Fer vapeur professionnel",
      "Plateau": "Chauffant réglable",
      "Usage": "Pressings, Ateliers, Buanderies",
    }
  },
  {
    id: "fagor-mannequin-ma-360",
    name: "Mannequin de Finition Rotatif MA-360",
    series: "Mannequins de Finition",
    category: "finition",
    categoryLabel: "Mannequin Vapeur",
    badge: "ROTATION 360°",
    image: "/images/fagor/ma-360.png",
    shortDesc: "Mannequin rotatif automatique pour vestes, manteaux, chemises et robes.",
    description: "Défroisse et redonne forme aux vêtements par injection de vapeur et soufflerie avec rotation 360°.",
    highlights: ["Rotation 360°", "Pression vapeur contrôlée", "Cycles programmables", "Tendeurs manches"],
    specs: {
      "Rotation": "360 degrés",
      "Vêtements": "Vestes, manteaux, chemises, uniformes",
      "Cycles": "Vapeur, air chaud, air froid",
      "Rendement": "Jusqu'à 60 pièces / h",
    }
  },
  {
    id: "fagor-mannequin-mc-100",
    name: "Mannequin Chemises & Blouses MC-100",
    series: "Mannequins de Finition",
    category: "finition",
    categoryLabel: "Mannequin Chemises",
    badge: "CADENCE ÉLEVÉE",
    image: "/images/fagor/mc-100.png",
    shortDesc: "Finition rapide et sans pli des chemises et blouses de travail.",
    description: "Tendeurs automatiques pour poignets et col, injection de vapeur puissante et séchage instantané.",
    highlights: ["Pinces pneumatiques", "Programmes par tissu", "Finition en < 45s"],
    specs: {
      "Application": "Chemises, blouses, uniformes",
      "Commandes": "Microprocesseur",
      "Cycle": "30 à 60 secondes",
      "Qualité": "Rendu pressing haut de gamme",
    }
  },
  {
    id: "fagor-topper-t-3000",
    name: "Topper Pantalons T-3000",
    series: "Finition Pantalons",
    category: "finition",
    categoryLabel: "Topper Pantalons",
    badge: "TENSION PNEUMATIQUE",
    image: "/images/fagor/t-3000.png",
    shortDesc: "Finition et repassage sous tension des pantalons de costume et jeans.",
    description: "Maintien pneumatique ceinture et bas de jambe avec vaporisation et soufflerie puissante.",
    highlights: ["Tension ceinture pneumatique", "Pinces bas de pantalon", "Gain de temps 70%"],
    specs: {
      "Vêtements": "Pantalons costume, jeans, travail",
      "Tension": "Pneumatique réglable",
      "Cycles": "Automatiques",
      "Productivité": "40 à 50 pantalons / h",
    }
  },
  {
    id: "fagor-presse-pneumatique-pcp",
    name: "Presse Pneumatique PCP / PU",
    series: "Presses Blanchisserie",
    category: "finition",
    categoryLabel: "Presse Pneumatique",
    badge: "HAUTE PRESSION",
    image: "/images/fagor/pcp.png",
    shortDesc: "Presse pneumatique de blanchisserie pour cols, poignets, nappage et pantalons.",
    description: "Plateau supérieur chauffant à fermeture pneumatique sécurisée par double commande.",
    highlights: ["Fermeture sécurisée", "Plateaux thermorégulés", "Aspiration plateau inférieur", "Protection anti-écrasement"],
    specs: {
      "Pression": "Pneumatique haute force",
      "Sécurité": "Commande bimanuelle",
      "Chauffage": "Vapeur ou Électrique",
      "Usage": "Blanchisseries, Pressings",
    }
  },

  // --- TRAITEMENT SPÉCIFIQUE ---
  {
    id: "fagor-table-detachage-des",
    name: "Table de Détachage DES-COMPLET",
    series: "Détachage Textile",
    category: "specialises",
    categoryLabel: "Table de Détachage",
    badge: "INOX AISI-304",
    image: "/images/fagor/des-complet.png",
    shortDesc: "Table de détachage inox avec pistolets vapeur, air comprimé et aspiration.",
    description: "Élimine les taches tenaces sur tous textiles avant ou après lavage. Plateau et bras en acier inoxydable.",
    highlights: ["Plateau inox & bras de manche", "Pistolets air/vapeur", "Aspiration au pied", "Réservoirs solvants"],
    specs: {
      "Matériau": "Acier Inox AISI-304",
      "Pistolets": "Produits + Air/Vapeur",
      "Aspiration": "Pédale directe",
      "Usage": "Pressings, Hôtels, Hôpitaux",
    }
  },
  {
    id: "fagor-steam-cabinet-box",
    name: "Cabine Vapeur Steam Cabinet BOX",
    series: "Cabines Vapeur",
    category: "specialises",
    categoryLabel: "Cabine Vapeur",
    badge: "DÉSINFECTION VAPEUR",
    image: "/images/fagor/steam-box.png",
    shortDesc: "Défroissage et désinfection hygiénique de vêtements sur cintres sans contact.",
    description: "Traite plusieurs vêtements simultanément par injection de vapeur saturée puis séchage à air chaud.",
    highlights: ["Traitement multi-pièces", "Élimine odeurs et bactéries", "Protège tissus délicats", "100% automatique"],
    specs: {
      "Capacité": "4 à 8 cintres par cycle",
      "Cycles": "Vapeur + Séchage air chaud",
      "Durée": "3 à 8 min",
      "Idéal pour": "Hôtels luxe, Boutiques, Teintureries",
    }
  }
];
