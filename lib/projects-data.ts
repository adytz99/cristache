import type { StaticImageData } from "next/image"

import victoryImg from "@/public/images/victory residence mobile.png"
import gasestiImg from "@/public/images/gasesti orice mobile.png"
import luxuryImg from "@/public/images/luxury-residence mobile.png"
import shoesImg from "@/public/images/shoesup mobile.png"
import prodigitalImg from "@/public/images/prodigital mobile.png"
import scan2mealImg from "@/public/images/scan2meal.png"
import pawsightImg from "@/public/images/pawsight.jpeg"
import rominaEuImg from "@/public/images/rominafurniture.eu-mobile.png"
import rominaRoImg from "@/public/images/rominafurniture.ro-mobile.png"
import rominaComImg from "@/public/images/rominafurniture-com-mobile.png"
import cubeDesktopImg from "@/public/images/cube-desktop.png"
import cubeMobileImg from "@/public/images/cube-mobile.png"
import nimfaunaImg from "@/public/images/nimfauna-ro-mobile.png"
import pfpssImg from "@/public/images/pfpss-ro-mobile.png"
import credoImg from "@/public/images/credo-appstore-mobile.png"
import mobilityImg from "@/public/images/mobility mobile.png"

export type ProjectCategory = "web" | "ecommerce" | "automation" | "mobile"

export type ServiceSlug =
  | "creare-continut"
  | "social-media-marketing"
  | "campanii-ads"
  | "dezvoltare-web"
  | "aplicatii-mobile"
  | "platforme-online"
  | "baze-de-date"

export type Project = {
  id: string
  title: string
  description: string
  outcome: string
  category: ProjectCategory
  categoryLabel: string
  url: string
  appStoreUrl?: string
  image: StaticImageData | string
  desktopImage?: StaticImageData
  letter: string
  technologies: string[]
  features: string[]
  services: ServiceSlug[]
}

export const projects: Project[] = [
  {
    id: "romina-com",
    title: "Romina Furniture US",
    description:
      "Magazinul din SUA al fabricii Romina: pătuțuri certificate Greenguard Gold și mobilă din lemn masiv, vândute în dolari.",
    outcome: "Familiile din America comandă direct de la fabrica din România, cu plată și livrare locală.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    url: "https://rominafurniture.com",
    image: rominaComImg,
    letter: "R",
    technologies: ["Shopify", "Liquid", "Checkout USD"],
    features: ["Temă Shopify personalizată", "Catalog conform CPSC", "Plăți în dolari", "Livrare în SUA"],
    services: ["dezvoltare-web", "platforme-online"],
  },
  {
    id: "credo",
    title: "Credo Prayer App",
    description:
      "Aplicație catolică de rugăciune pentru Liturgia Orelor și Rozariu, publicată în App Store.",
    outcome: "Disponibilă pe iOS în 7 limbi, cu serii zilnice de rugăciune și abonament Premium.",
    category: "mobile",
    categoryLabel: "Aplicație mobilă",
    url: "https://credopray.com",
    appStoreUrl: "https://apps.apple.com/us/app/credo-catholic-prayer-app/id6759874385",
    image: credoImg,
    letter: "C",
    technologies: ["iOS", "SwiftUI", "App Store"],
    features: ["Liturgia Orelor", "Rozariu ghidat", "Live Activities", "Abonamente Premium"],
    services: ["aplicatii-mobile", "platforme-online"],
  },
  {
    id: "pfpss",
    title: "PFPSS",
    description:
      "Platformă de membri pentru patronatul furnizorilor privați de servicii sociale: înscriere, plăți și administrare.",
    outcome: "Membrii se înscriu și plătesc într-un singur flux, iar echipa lucrează dintr-un panou, nu din zeci de emailuri.",
    category: "web",
    categoryLabel: "Platformă",
    url: "https://pfpss.ro",
    image: pfpssImg,
    letter: "P",
    technologies: ["Plăți online", "Panou de administrare", "Email"],
    features: ["Flux de înscriere", "Plăți integrate", "Panou de administrare", "Peste 20 de șabloane de email"],
    services: ["platforme-online", "baze-de-date", "dezvoltare-web"],
  },
  {
    id: "landauto",
    title: "Land Auto",
    description: "Magazin de iluminat și accesorii auto, cu catalogul preluat direct de la distribuitor.",
    outcome: "Produsele, stocul și prețurile se sincronizează prin API, fără liste copiate de mână.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    url: "https://landauto.ro",
    image: "/images/landauto-ro-mobile.png",
    letter: "L",
    technologies: ["API distribuitor", "Sincronizare catalog", "Checkout"],
    features: ["Integrare API cu distribuitorul", "Catalog actualizat automat", "Checkout pe mobil"],
    services: ["dezvoltare-web", "baze-de-date"],
  },
  {
    id: "nimfauna",
    title: "Nimfauna",
    description: "Site pentru un studio de obiecte de interior printate 3D, personalizate și biodegradabile.",
    outcome: "Designerii trimit comanda de pe site, fără drum la atelier pentru fiecare ofertă.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    url: "https://nimfauna.ro",
    image: nimfaunaImg,
    letter: "N",
    technologies: ["Magazin personalizat", "Catalog 3D", "Comandă directă"],
    features: ["Comenzi personalizate", "Galerie de proiecte", "Contact direct"],
    services: ["dezvoltare-web", "creare-continut"],
  },
  {
    id: "cubestructure",
    title: "CubeStructure",
    description: "Site de prezentare pentru o firmă de construcții, cu structuri redate 3D pentru servicii și proiecte.",
    outcome: "Clientul vede structura înainte de vizita pe șantier, iar pagina vinde lucrarea mai bine decât un PDF.",
    category: "web",
    categoryLabel: "Web",
    url: "https://cubestructure.ro",
    image: cubeMobileImg,
    desktopImage: cubeDesktopImg,
    letter: "C",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Structuri 3D", "Pagini de servicii", "Portofoliu de proiecte"],
    services: ["dezvoltare-web"],
  },
  {
    id: "scan2meal",
    title: "Scan2Meal",
    description: "Aplicație care transformă un bon de cumpărături sau o poză cu cămara în rețete pentru ziua de azi.",
    outcome: "Cina pornește de la o poză, nu de la 20 de minute petrecute în fața frigiderului.",
    category: "mobile",
    categoryLabel: "Aplicație mobilă",
    url: "https://scan2meal.app",
    image: scan2mealImg,
    letter: "S",
    technologies: ["React Native", "Expo", "Supabase", "OpenAI"],
    features: ["Scanare bon", "Rețete personalizate", "Sfaturi de nutriție", "Evidența cămării"],
    services: ["aplicatii-mobile", "baze-de-date"],
  },
  {
    id: "pawsight",
    title: "PawSight",
    description: "Asistent AI care verifică acasă pielea, ochii și starea generală a animalului de companie.",
    outcome: "Stăpânii observă o problemă din timp, înainte să devină urgență la clinică.",
    category: "mobile",
    categoryLabel: "Aplicație mobilă",
    url: "#",
    image: pawsightImg,
    letter: "P",
    technologies: ["React Native", "Integrare AI", "Mobile"],
    features: ["Scanare de sănătate", "Scor de stare", "Mai multe profiluri"],
    services: ["aplicatii-mobile"],
  },
  {
    id: "romina-eu",
    title: "Romina Furniture EU",
    description: "Magazinul european al aceleiași fabrici din Dâmbovița, cu catalog și checkout adaptate pieței UE.",
    outcome: "Cumpărătorii din Europa comandă direct de la fabrică, fără distribuitor la mijloc.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    url: "https://rominafurniture.eu",
    image: rominaEuImg,
    letter: "R",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    features: ["Temă Shopify personalizată", "Catalog pentru UE", "Checkout pentru export"],
    services: ["dezvoltare-web", "platforme-online"],
  },
  {
    id: "romina-ro",
    title: "Romina Furniture RO",
    description: "Magazinul din România al celui mai mare exportator de mobilă din lemn masiv.",
    outcome: "Familiile din România comandă de pe site-ul fabricii, fără să aștepte o programare la showroom.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    url: "https://rominafurniture.ro",
    image: rominaRoImg,
    letter: "R",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    features: ["Temă Shopify personalizată", "Checkout local", "Catalog complet"],
    services: ["dezvoltare-web", "platforme-online"],
  },
  {
    id: "victory-residence",
    title: "Victory Residence",
    description: "Site pentru un ansamblu rezidențial, construit pentru oamenii care caută deja o locuință.",
    outcome: "Cererile vin de la cumpărători activi, nu de la o broșură pe care n-o deschide nimeni.",
    category: "web",
    categoryLabel: "Web",
    url: "https://victoryresidence.ro",
    image: victoryImg,
    letter: "V",
    technologies: ["WordPress", "PHP", "MySQL"],
    features: ["Tururi 3D", "SEO pe căutări de apartamente", "Formulare de cerere"],
    services: ["dezvoltare-web"],
  },
  {
    id: "gasesti-orice",
    title: "GasestiOrice.ro",
    description: "Magazin Shopify pentru un marketplace românesc, gândit să vândă în primul rând pe telefon.",
    outcome: "Vizitatorii plătesc direct pe telefon, în loc să ceară detalii în mesaje pe Facebook.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    url: "https://gasestiorice.ro",
    image: gasestiImg,
    letter: "G",
    technologies: ["Shopify", "JavaScript", "CSS3"],
    features: ["Plăți online", "Gestiune stoc", "Checkout pe mobil"],
    services: ["dezvoltare-web", "platforme-online"],
  },
  {
    id: "crm-automation",
    title: "CRM Automation",
    description: "Follow-up automat pentru o firmă de închirieri auto care pierdea cereri în inbox.",
    outcome: "Fiecare cerere nouă primește răspuns, fără ca cineva să stea toată ziua pe email.",
    category: "automation",
    categoryLabel: "Automatizare",
    url: "https://mobilityrent.ro",
    image: mobilityImg,
    letter: "C",
    technologies: ["Node.js", "API", "AI"],
    features: ["Secvențe de email", "Evidența cererilor", "Chatbot AI"],
    services: ["platforme-online", "baze-de-date"],
  },
  {
    id: "luxury-residence",
    title: "Luxury Residence",
    description: "Site construit în jurul fotografiei, pentru un complex rezidențial de lux.",
    outcome: "Galeria duce vizitatorul spre o cerere de vizionare, nu spre un simplu „revenim noi”.",
    category: "web",
    categoryLabel: "Web",
    url: "https://luxury-residence.ro",
    image: luxuryImg,
    letter: "L",
    technologies: ["WordPress", "PHP", "MySQL"],
    features: ["Galerie foto", "Tururi virtuale", "Formulare de contact"],
    services: ["dezvoltare-web", "creare-continut"],
  },
  {
    id: "shoesup",
    title: "ShoesUp",
    description: "Magazin de încălțăminte cu catalog, stoc și checkout, făcut să vândă și după program.",
    outcome: "Comenzile intră și când magazinul fizic e închis.",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    url: "https://shoesup.ro",
    image: shoesImg,
    letter: "S",
    technologies: ["Shopify", "JavaScript", "CSS3"],
    features: ["Catalog de produse", "Gestiune comenzi", "Recenzii clienți"],
    services: ["dezvoltare-web", "platforme-online"],
  },
  {
    id: "prodigital",
    title: "ProDigital",
    description: "Automatizare de campanii pentru o agenție care trimitea totul manual.",
    outcome: "Campaniile pornesc singure dimineața, fără cineva care să stea pe contul de reclame.",
    category: "automation",
    categoryLabel: "Automatizare",
    url: "https://prodigital.ro",
    image: prodigitalImg,
    letter: "P",
    technologies: ["Python", "API", "AI"],
    features: ["Automatizare campanii", "Analiză rezultate", "Urmărire ROI"],
    services: ["campanii-ads", "social-media-marketing"],
  },
]

export const projectsForService = (slug: ServiceSlug) => projects.filter((project) => project.services.includes(slug))
