import type { CaseStudy } from "@/lib/blog-data"

// Short titles for search results and cards. The full article titles are
// 80-230 characters long and Google cuts titles at roughly 60 characters
// (" | Cristache" is appended by the layout), so each one gets a version
// that leads with the industry and the automation, kept under 50 characters.
const shortTitles: Record<string, string> = {
  "coworking-flexible-office-instagram-whatsapp-oct-2026": "Automatizare WhatsApp pentru coworking: −69% cost",
  "interior-design-instagram-whatsapp-oct-2026-ai-automation": "Lead-uri din Instagram pentru design interior",
  "moving-company-whatsapp-oct-2026-ai-automation": "Chatbot WhatsApp pentru o firmă de mutări",
  "battery-storage-afm-prosumer-ai-automation": "Automatizare dosare AFM pentru stocare baterii",
  "notary-office-whatsapp-oct-2026-ai-automation": "Automatizare WhatsApp pentru un birou notarial",
  "private-kindergarten-afterschool-september-ai-automation": "Înscrieri automate la grădiniță și after-school",
  "hvac-heat-pump-whatsapp-oct-2026-cost-cliff-automation": "Chatbot WhatsApp pentru instalatori HVAC",
  "optician-back-to-school-instagram-whatsapp-ai-automation": "Programări automate pentru optică: 3,2× controale",
  "physiotherapy-clinic-instagram-whatsapp-ai-automation": "Programări AI pentru fizioterapie: −58% absențe",
  "language-school-september-enrollment-ai-automation": "Înscrieri automate la școala de limbi: 3×",
  "driving-school-instagram-whatsapp-ai-automation": "Agent AI pe Instagram pentru școala de șoferi",
  "ecommerce-anpc-ai-act-chatbot-automation": "Chatbot e-commerce conform ANPC și AI Act",
  "diagnostic-lab-whatsapp-results-ai-automation": "Rezultate de laborator pe WhatsApp: −78% apeluri",
  "wedding-planner-instagram-whatsapp-ai-automation": "Agent AI pentru wedding planner: 41 de nunți",
  "b2b-saas-x-api-reply-restriction-pipeline-automation": "Pipeline B2B SaaS automatizat după limitele X",
  "law-firm-instagram-whatsapp-ai-intake-automation": "Preluare clienți cu AI pentru o firmă de avocatură",
  "construction-renovation-instagram-speed-to-lead-automation": "Lead-uri pentru renovări cu răspuns sub 60 sec.",
  "boutique-hotel-instagram-whatsapp-direct-booking": "Rezervări directe pentru hotel boutique prin AI",
  "boutique-gym-instagram-trial-booking-automation": "Programări trial automate pentru sală de fitness",
  "insurance-broker-rca-casco-ai-act-automation": "Oferte RCA și CASCO automate, conforme AI Act",
  "instagram-commerce-meta-agent-cost-cliff": "Instagram commerce fără costurile Meta Agent",
  "pharmacy-chain-sipe-whatsapp-ai-automation": "Agent AI de stoc pe WhatsApp pentru farmacii",
  "digital-agency-shadow-ai-content-repurposing-automation": "Agenție digitală: conținut automatizat, sigur",
  "home-lifestyle-shopify-instagram-x-unified-ai-automation": "Automatizare AI pentru magazin Shopify home",
  "dtc-skincare-social-search-instagram-dm-automation": "Vânzări din DM-uri Instagram pentru skincare",
  "veterinary-clinic-ai-triage-whatsapp-automation": "Triaj AI pe WhatsApp pentru clinici veterinare",
  "short-term-rental-airbnb-ai-property-management": "Automatizare AI pentru închirieri Airbnb",
  "staffing-agency-ai-recruiting-reges-igi-automation": "Recrutare automatizată cu AI, REGES și IGI",
  "freight-forwarder-ro-etransport-ai-automation": "Automatizare RO e-Transport pentru transportatori",
  "solar-installer-casa-verde-ai-automation": "Automatizare dosare Casa Verde pentru fotovoltaice",
  "tiktok-shop-fashion-ai-live-commerce": "TikTok Shop pentru fashion: 1,4 mil. € în 90 zile",
  "accounting-firm-efactura-ai-automation": "Automatizare e-Factura pentru contabilitate",
  "beauty-studio-instagram-dm-ai-agent": "Agent AI pe Instagram pentru salon de estetică",
  "restaurant-ai-voice-agent": "Agent vocal AI pentru rezervări la restaurant",
  "dental-clinic-automation": "Automatizare clinică dentară: −62% absențe",
  "car-repair-shop-automation": "Devize și remindere automate pentru service auto",
  "real-estate-developer-automation": "Automatizare vânzări pentru dezvoltator imobiliar",
}

export function blogTitle(study: CaseStudy) {
  return shortTitles[study.slug] ?? study.content.title
}
