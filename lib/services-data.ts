import type { ServiceSlug } from "@/lib/projects-data"

export type ServiceFaq = { question: string; answer: string }

export type Service = {
  slug: ServiceSlug
  name: string
  h1: string
  eyebrow: string
  metaTitle: string
  metaDescription: string
  short: string
  intro: string
  includes: string[]
  deliverables: string[]
  forWho: string[]
  steps: { title: string; description: string }[]
  sections?: { heading: string; paragraphs: string[] }[]
  faq: ServiceFaq[]
  related: ServiceSlug[]
}

export const services: Service[] = [
  {
    slug: "dezvoltare-web",
    name: "Dezvoltare web",
    h1: "Realizare site-uri de prezentare și magazine online",
    eyebrow: "Site-uri de prezentare și magazine online",
    metaTitle: "Realizare site-uri și magazine online în București",
    metaDescription:
      "Realizare site-uri de prezentare și magazine online rapide pe mobil, cu SEO tehnic, plăți și integrări. Next.js, Shopify, WordPress. Cristache, București.",
    short: "Site-uri de prezentare și magazine online, rapide pe mobil și ușor de găsit în Google.",
    intro:
      "Construim site-uri de prezentare și magazine online care se încarcă repede, arată bine pe telefon și pot fi găsite în Google. Ne ocupăm de structură, design, texte, formulare, plăți și integrări, apoi de lansare și de măsurare. Îți spunem sincer dacă ai nevoie de un site simplu sau de ceva mai complex.",
    includes: [
      "Structura paginilor și a conținutului",
      "Design adaptat pe mobil",
      "Dezvoltare pe Next.js, Shopify sau WordPress",
      "SEO tehnic și date structurate",
      "Formulare, plăți și integrări",
      "Lansare, domeniu și măsurare trafic",
    ],
    deliverables: [
      "Site publicat pe domeniul tău",
      "Pagini optimizate pentru căutări",
      "Formulare care trimit cererile pe email",
      "Acces de administrare și instrucțiuni",
    ],
    forWho: [
      "Firme care au un site vechi, lent sau greu de modificat",
      "Magazine care vor să vândă mai bine pe telefon",
      "Branduri noi care au nevoie de o prezență clară online",
    ],
    steps: [
      { title: "Structură", description: "Stabilim paginile, mesajele și ce trebuie să facă vizitatorul." },
      { title: "Design", description: "Propunem aspectul pe mobil și desktop, pe care îl aprobi." },
      { title: "Dezvoltare", description: "Construim, conectăm formularele și plățile, testăm." },
      { title: "Lansare", description: "Publicăm, verificăm indexarea și urmărim primele rezultate." },
    ],
    sections: [
      {
        heading: "Site de prezentare sau magazin online",
        paragraphs: [
          "Un site de prezentare are de obicei un singur rol: să explice clar ce faci și să transforme vizitatorul într-o cerere, un apel sau o programare. Un magazin online are nevoie, în plus, de catalog, coș, plată cu cardul, livrare, emailuri de confirmare și o administrare simplă a produselor și a comenzilor.",
          "Pornim de la ce trebuie să facă vizitatorul pe site, nu de la un șablon. Dacă trei pagini bine scrise rezolvă problema, nu îți propunem douăzeci. Dacă vinzi în mai multe țări sau valute, construim structura de la început pentru asta, cum am făcut pentru magazinele Romina Furniture din România, Europa și SUA.",
        ],
      },
      {
        heading: "Construit ca să fie găsit în Google",
        paragraphs: [
          "Fiecare site pleacă cu baza tehnică pentru căutări: încărcare rapidă pe telefon, titluri și descrieri unice pe fiecare pagină, adrese curate, sitemap, date structurate pentru Google și pagini de servicii scrise pentru cuvintele pe care le caută clienții tăi.",
          "După lansare conectăm Google Search Console și măsurarea traficului, ca să vezi de unde vin vizitatorii și ce pagini aduc cereri. Pozițiile pe căutări competitive vin în timp, din conținut constant și din recenzii, iar partea asta o putem planifica împreună.",
        ],
      },
      {
        heading: "Integrări care îți scot munca manuală",
        paragraphs: [
          "Un site bun nu se oprește la formular. Putem trimite cererile direct în CRM, putem sincroniza produsele, stocul și prețurile prin API, cum am făcut pentru Land Auto, sau putem conecta plăți, facturare și emailuri automate. Când fluxul devine mai complex, site-ul se poate extinde într-o platformă online, fără să fie rescris de la zero.",
        ],
      },
    ],
    faq: [
      {
        question: "Pe ce platformă construiți site-ul?",
        answer:
          "Alegem platforma după nevoie. Pentru site-uri rapide și personalizate folosim Next.js. Pentru magazine online lucrăm des pe Shopify, pentru că oferă plăți și gestiune de stoc sigure. Pentru site-uri de conținut pe care vrei să le editezi singur putem folosi WordPress.",
      },
      {
        question: "Site-ul va fi optimizat pentru Google?",
        answer:
          "Da. Fiecare site pleacă cu SEO tehnic de bază: viteză bună pe mobil, titluri și descrieri pe fiecare pagină, sitemap, date structurate și adrese curate. Pentru poziții pe căutări competitive mai este nevoie de conținut constant, pe care îl putem planifica împreună.",
      },
      {
        question: "Pot modifica singur textele după lansare?",
        answer:
          "Da, dacă stabilim asta de la început. Putem conecta un panou de administrare pentru texte, imagini și produse, iar la predare îți arătăm cum se folosește. Pentru modificări mai mari de structură sau funcții noi rămânem disponibili.",
      },
      {
        question: "Faceți și magazine online cu plăți?",
        answer:
          "Da. Construim magazine cu catalog, coș, plată cu cardul, livrare și emailuri automate de confirmare. Printre proiectele livrate sunt magazinele Romina Furniture pentru România, Europa și SUA, ShoesUp și GasestiOrice.",
      },
      {
        question: "Cât costă realizarea unui site?",
        answer:
          "Prețul depinde de numărul de pagini, de cine scrie textele, de funcțiile necesare, de exemplu plăți, programări sau sincronizare de produse, și de platforma aleasă. După o discuție scurtă primești o propunere cu livrabilele, etapele și costul, ca să știi de la început ce plătești.",
      },
      {
        question: "Domeniul și site-ul rămân ale mele?",
        answer:
          "Da. Site-ul se publică pe domeniul tău, iar la predare primești acces de administrare și instrucțiuni. Dacă vrei să schimbi furnizorul mai târziu, nu rămâi blocat.",
      },
      {
        question: "Vă ocupați și de site după lansare?",
        answer:
          "Da. Putem rămâne pentru actualizări, pagini noi, verificarea indexării și îmbunătățiri pe baza datelor din Google Search Console și din analytics. Stabilim de la început dacă ai nevoie de asta lunar sau doar la cerere.",
      },
    ],
    related: ["platforme-online", "automatizari-ai", "campanii-ads"],
  },
  {
    slug: "platforme-online",
    name: "Platforme online",
    h1: "Platforme online la comandă, cu plăți și automatizări",
    eyebrow: "Conturi, administrare, integrare plăți",
    metaTitle: "Dezvoltare platforme online la comandă, cu plăți",
    metaDescription:
      "Platforme online la comandă: conturi și roluri, panou de administrare, plăți Stripe sau Netopia, abonamente și fluxuri automate. Cristache, București.",
    short: "Produse online cu conturi, panou de administrare, plăți și abonamente, într-un singur flux.",
    intro:
      "Construim platforme online la comandă: conturi de utilizator cu roluri, panou de administrare, integrare de plăți și abonamente, emailuri automate și rapoarte. Înlocuim tabelele, formularele separate și emailurile trimise de mână cu un flux pe care echipa ta îl poate administra singură și care poate crește fără să fie rescris.",
    includes: [
      "Conturi, roluri și permisiuni",
      "Panou de administrare",
      "Integrare plăți cu cardul și abonamente",
      "Facturi și emailuri automate",
      "Integrări API cu alte sisteme",
      "Rapoarte și exporturi",
    ],
    deliverables: [
      "Platformă publicată și testată",
      "Plăți configurate în contul tău de procesator",
      "Panou de administrare pentru echipă",
      "Documentație și predare",
    ],
    forWho: [
      "Asociații și organizații cu membri și cotizații",
      "Afaceri care vând abonamente sau servicii recurente",
      "Echipe care lucrează din emailuri și tabele împrăștiate",
    ],
    steps: [
      { title: "Flux", description: "Desenăm pașii de la înscriere până la plată și administrare." },
      { title: "Model de date", description: "Stabilim ce se salvează, cine vede și cine modifică." },
      { title: "Dezvoltare", description: "Construim platforma, plățile și emailurile automate." },
      { title: "Predare", description: "Testăm cu echipa ta, publicăm și rămânem pentru ajustări." },
    ],
    sections: [
      {
        heading: "Când ai nevoie de o platformă, nu doar de un site",
        paragraphs: [
          "Semnele sunt de obicei aceleași: cererile vin pe email și se pierd, plățile se verifică de mână în extrasul de cont, datele clienților stau în trei tabele diferite și fiecare om din echipă are propria versiune a adevărului.",
          "O platformă online pune totul într-un singur flux: utilizatorul își face cont, completează datele, plătește, iar echipa ta vede și aprobă totul dintr-un panou de administrare. Pentru PFPSS, de exemplu, înscrierea membrilor, plata cotizației și comunicarea cu ei au trecut din zeci de fire de email într-o singură platformă.",
        ],
      },
      {
        heading: "Automatizările din spatele platformei",
        paragraphs: [
          "Partea care economisește cel mai mult timp este de obicei cea pe care utilizatorul nu o vede: emailuri trimise automat la fiecare pas, facturi generate după plată, notificări către echipă, sincronizare cu CRM-ul sau cu programul de facturare și remindere pentru plăți sau programări.",
          "Când are sens, adăugăm și un agent AI care răspunde pe WhatsApp sau Instagram, preia cererile și le trimite direct în platformă. Deciziile importante, cum ar fi aprobarea unei înscrieri sau a unei oferte, rămân la un om din echipa ta.",
        ],
      },
    ],
    faq: [
      {
        question: "Ce procesatori de plăți integrați?",
        answer:
          "Integrăm procesatori de plăți cu cardul folosiți în România și internațional, precum Stripe sau Netopia, plus plățile native din Shopify. Alegerea depinde de monedă, de tipul de plată, unică sau abonament, și de cum trebuie emise facturile.",
      },
      {
        question: "Ce înseamnă panou de administrare?",
        answer:
          "Este partea platformei pe care o folosește echipa ta: vede utilizatorii, plățile și cererile, aprobă înscrieri, trimite emailuri și exportă rapoarte. Pentru PFPSS, de exemplu, panoul a înlocuit zecile de fire de email cu un singur loc de lucru.",
      },
      {
        question: "Platforma poate crește ulterior?",
        answer:
          "Da. O construim pe module, cu o bază de date bine structurată, ca funcțiile noi să poată fi adăugate fără să rescriem ce există. Pornim de la ce este necesar acum și lăsăm loc pentru pașii următori.",
      },
      {
        question: "Datele sunt în siguranță?",
        answer:
          "Datele stau pe infrastructură cloud cu acces controlat, parolele sunt criptate, iar plățile trec prin procesatorul de plăți, deci datele cardului nu ajung în platformă. Configurăm backup și roluri, ca fiecare om să vadă doar ce îi trebuie.",
      },
      {
        question: "Platforma se poate conecta la e-Factura?",
        answer:
          "Da. Facturile pot fi emise automat după plată prin programul de facturare pe care îl folosești și trimise în e-Factura, sau pot fi pregătite ca ciorne pe care le aprobă cineva din echipă înainte de trimitere. Alegem varianta după volum și după cât control vrei să păstrezi.",
      },
      {
        question: "Cât costă o platformă online?",
        answer:
          "Costul depinde de numărul de tipuri de utilizatori, de fluxurile de plată și de integrările necesare. De obicei pornim cu o primă versiune care rezolvă fluxul principal, apoi adăugăm module. Primești o propunere pe etape, cu livrabile și cost pentru fiecare.",
      },
    ],
    related: ["automatizari-ai", "baze-de-date", "dezvoltare-web"],
  },
  {
    slug: "automatizari-ai",
    name: "Automatizări AI",
    h1: "Automatizări AI pentru firme: WhatsApp, Instagram și procese interne",
    eyebrow: "Agenți AI, WhatsApp, Instagram, n8n",
    metaTitle: "Automatizări AI și chatbot WhatsApp pentru firme",
    metaDescription:
      "Automatizări AI pentru firme din România: chatbot WhatsApp și Instagram, programări, calificare cereri, CRM și e-Factura, cu aprobare umană. Cristache.",
    short: "Agenți AI și fluxuri automate pentru mesaje, programări, oferte și facturi, cu un om care aprobă ce contează.",
    intro:
      "Construim automatizări care preiau munca repetitivă din mesaje și din back-office: răspunsuri pe WhatsApp și Instagram în câteva secunde, programări direct în calendar, calificarea cererilor, actualizarea CRM-ului și pregătirea facturilor pentru e-Factura. Agentul AI răspunde la întrebările frecvente și strânge datele, iar deciziile care contează, cum ar fi o ofertă, un contract sau un sfat de specialitate, rămân la un om din echipa ta.",
    includes: [
      "Audit al mesajelor și al proceselor repetitive",
      "Agent AI pe WhatsApp Business API, Instagram și Messenger",
      "Formulare WhatsApp Flows pentru programări și cereri",
      "Programări automate în calendar",
      "Integrare cu CRM, Stripe și e-Factura (SPV ANAF)",
      "Fluxuri n8n cu aprobare umană și jurnal de acțiuni",
    ],
    deliverables: [
      "Harta fluxurilor automatizate, aprobată înainte de implementare",
      "Agent AI configurat pe canalele tale",
      "Raport cu mesajele, programările și cererile procesate",
      "Documentație și predare către echipă",
    ],
    forWho: [
      "Clinici, saloane, școli și service-uri care primesc multe mesaje pentru programări",
      "Firme de servicii care pierd cereri seara și în weekend",
      "Echipe care copiază de mână date între WhatsApp, Excel, CRM și facturare",
    ],
    steps: [
      { title: "Audit", description: "Citim conversațiile reale și găsim ce se repetă și unde se pierd cereri." },
      { title: "Flux", description: "Desenăm ce face agentul, ce face omul și unde se aprobă fiecare pas." },
      { title: "Implementare", description: "Conectăm canalele, calendarul, CRM-ul și facturarea, apoi testăm cu echipa." },
      { title: "Monitorizare", description: "Urmărim răspunsurile, corectăm ce greșește și extindem ce funcționează." },
    ],
    sections: [
      {
        heading: "Ce automatizăm de obicei",
        paragraphs: [
          "Cele mai multe firme pierd timp în aceleași locuri: întrebări repetate despre preț, program și disponibilitate, programări confirmate de mână, remindere uitate, date copiate dintr-o conversație în CRM și facturi făcute la final de lună.",
          "Agentul AI răspunde imediat, pune întrebările de calificare, propune un interval liber din calendar și trimite cererea completă în CRM. Pe Instagram poate răspunde la comentariile de sub Reels cu un mesaj privat, iar pe WhatsApp poate folosi formulare scurte, mai ușor de completat decât un șir lung de mesaje.",
        ],
      },
      {
        heading: "Omul rămâne în control",
        paragraphs: [
          "Nu lăsăm un AI să dea consultanță juridică, medicală sau financiară și nici să semneze oferte. Stabilim de la început ce poate face agentul singur și ce trimite mai departe unui om, iar fiecare acțiune rămâne într-un jurnal pe care îl poți verifica.",
          "Agentul se prezintă ca asistent virtual, conform obligațiilor de transparență din AI Act, iar datele personale sunt tratate conform GDPR, cu acces limitat și reguli clare de păstrare.",
        ],
      },
      {
        heading: "WhatsApp Business API, costuri și canale oficiale",
        paragraphs: [
          "Lucrăm doar prin canalele oficiale Meta, adică WhatsApp Business API și API-urile pentru Instagram și Messenger, nu prin aplicații neoficiale care pot duce la blocarea numărului. Meta taxează o parte din mesajele trimise prin API, așa că proiectăm fluxurile astfel încât conversațiile să fie scurte și utile, nu zeci de mesaje pentru o singură programare.",
          "Pe blog găsești studii de caz din proiecte reale, de la clinici și școli până la firme de mutări și instalatori, cu cifrele de înainte și de după.",
        ],
      },
    ],
    faq: [
      {
        question: "Ce este un agent AI pentru WhatsApp?",
        answer:
          "Este un asistent care răspunde automat pe numărul tău de WhatsApp Business, înțelege întrebările scrise liber, folosește informațiile despre firma ta și poate face acțiuni concrete: verifică un interval în calendar, face o programare, trimite un link de plată sau creează o cerere în CRM. Când nu știe sau când e nevoie de o decizie, predă conversația unui om.",
      },
      {
        question: "Clienții vor ști că vorbesc cu un AI?",
        answer:
          "Da. Agentul se prezintă de la început ca asistent virtual și oferă oricând varianta de a vorbi cu un om. Pe lângă obligația legală de transparență, asta crește și încrederea, pentru că oamenii știu la ce să se aștepte.",
      },
      {
        question: "Pe ce unelte construiți automatizările?",
        answer:
          "Folosim n8n pentru fluxuri, WhatsApp Business API și API-urile oficiale Meta pentru mesaje, modele AI de la OpenAI și Anthropic, Cal.com sau Google Calendar pentru programări, Stripe pentru plăți și integrări cu CRM-uri precum Pipedrive sau HubSpot. Alegem uneltele după ce folosește deja echipa ta.",
      },
      {
        question: "Se poate conecta la sistemele pe care le am deja?",
        answer:
          "De cele mai multe ori da, prin API. Dacă un sistem nu are API, căutăm o soluție intermediară, de exemplu exporturi programate sau un tabel comun, și îți spunem sincer dacă integrarea nu merită efortul.",
      },
      {
        question: "Ce se întâmplă dacă AI-ul greșește sau nu știe răspunsul?",
        answer:
          "Agentul răspunde doar din informațiile pe care i le dăm și are reguli clare despre ce nu are voie să promită. Întrebările la care nu are răspuns ajung la un om, iar conversațiile sunt verificate periodic, ca să corectăm răspunsurile și să completăm informațiile lipsă.",
      },
    ],
    related: ["platforme-online", "dezvoltare-web", "baze-de-date"],
  },
  {
    slug: "aplicatii-mobile",
    name: "Aplicații mobile",
    h1: "Dezvoltare aplicații mobile iOS și Android",
    eyebrow: "iOS și Android",
    metaTitle: "Dezvoltare aplicații mobile iOS și Android",
    metaDescription:
      "Dezvoltare aplicații mobile iOS și Android: UX/UI, React Native sau SwiftUI, backend, plăți și publicare în App Store și Google Play. Cristache.",
    short: "Aplicații pentru iOS și Android, de la ecranele desenate până la publicarea în store-uri.",
    intro:
      "Dezvoltăm aplicații mobile pentru iOS și Android, de la primele ecrane până la publicarea în App Store și Google Play. Proiectăm interfața, construim aplicația și backend-ul, conectăm conturile, notificările și plățile, apoi ne ocupăm de publicare. Dacă un site ar rezolva problema mai simplu, îți spunem asta înainte să începem.",
    includes: [
      "Definirea funcțiilor pentru prima versiune",
      "UX/UI și prototip pe ecrane",
      "Dezvoltare iOS și Android",
      "Backend, API și bază de date",
      "Conturi, notificări și plăți în aplicație",
      "Publicare în App Store și Google Play",
    ],
    deliverables: [
      "Prototip aprobat înainte de dezvoltare",
      "Aplicație publicată în store-uri",
      "Panou de administrare, dacă este nevoie",
      "Cod sursă și acces la conturile de dezvoltator",
    ],
    forWho: [
      "Afaceri care vor programări, comenzi sau conturi pe telefon",
      "Fondatori care vor să lanseze și să testeze o idee nouă",
      "Echipe de teren care au nevoie de o unealtă proprie",
    ],
    steps: [
      { title: "Definire", description: "Alegem funcțiile esențiale pentru prima versiune." },
      { title: "Prototip", description: "Desenăm ecranele și fluxurile înainte de cod." },
      { title: "Dezvoltare", description: "Construim aplicația și backend-ul, cu teste pe telefoane reale." },
      { title: "Publicare", description: "Pregătim listarea și trimitem aplicația în store-uri." },
    ],
    faq: [
      {
        question: "Faceți aplicații native sau cross-platform?",
        answer:
          "Ambele. Pentru majoritatea proiectelor recomandăm React Native, pentru că dintr-un singur cod rezultă aplicații pentru iOS și Android. Când aplicația are nevoie de funcții foarte legate de telefon, cum ar fi Live Activities pe iOS, lucrăm nativ, ca în cazul Credo Prayer App construită în SwiftUI.",
      },
      {
        question: "Vă ocupați și de publicarea în store-uri?",
        answer:
          "Da. Pregătim descrierea, capturile de ecran și setările de confidențialitate, trimitem aplicația la verificare în App Store și Google Play și rezolvăm eventualele observații. Conturile de dezvoltator rămân pe numele tău.",
      },
      {
        question: "Aplicația are nevoie de backend?",
        answer:
          "De cele mai multe ori da, pentru conturi, date sincronizate, notificări sau plăți. Construim backend-ul și baza de date împreună cu aplicația, plus un panou de administrare dacă echipa ta trebuie să gestioneze conținut sau utilizatori.",
      },
      {
        question: "Ce aplicații ați lansat?",
        answer:
          "Printre proiecte sunt Credo Prayer App, disponibilă în App Store în 7 limbi, Scan2Meal, care transformă bonurile și pozele cu cămara în rețete, și PawSight, un asistent AI pentru sănătatea animalelor de companie. Detaliile sunt în portofoliu.",
      },
    ],
    related: ["platforme-online", "baze-de-date", "dezvoltare-web"],
  },
  {
    slug: "baze-de-date",
    name: "Baze de date",
    h1: "Proiectare baze de date și migrare din Excel",
    eyebrow: "Modelare, stocare, rapoarte, backup",
    metaTitle: "Proiectare baze de date și migrare din Excel",
    metaDescription:
      "Proiectare și administrare baze de date PostgreSQL și MySQL: modelare, migrare din Excel, rapoarte, acces pe roluri și backup testat. Cristache.",
    short: "Structură, rapoarte și backup pentru datele de care depinde afacerea ta.",
    intro:
      "Proiectăm și administrăm baze de date pentru site-uri, aplicații și platforme online. Modelăm datele, mutăm informația din tabele Excel sau sisteme vechi, setăm accesul pe roluri, construim rapoarte și configurăm backup automat. Rezultatul este o singură sursă de adevăr, pe care o pot folosi și oamenii, și aplicațiile.",
    includes: [
      "Modelarea datelor și a relațiilor",
      "Migrare din Excel sau sisteme vechi",
      "Acces pe roluri și permisiuni",
      "Rapoarte, filtre și exporturi",
      "Backup automat și restaurare",
      "Integrare cu site-ul, aplicația sau CRM-ul",
    ],
    deliverables: [
      "Schema bazei de date documentată",
      "Date migrate și verificate",
      "Rapoarte gata de folosit",
      "Backup programat și testat",
    ],
    forWho: [
      "Firme care țin clienți, comenzi sau stocuri în mai multe tabele",
      "Produse digitale care au nevoie de o bază solidă",
      "Echipe care pierd timp căutând informații",
    ],
    steps: [
      { title: "Inventar", description: "Aflăm ce date există, unde stau și cine le folosește." },
      { title: "Model", description: "Proiectăm structura și regulile de acces." },
      { title: "Migrare", description: "Mutăm datele, le curățăm și verificăm că nu s-a pierdut nimic." },
      { title: "Rapoarte", description: "Construim rapoartele și setăm backup-ul." },
    ],
    faq: [
      {
        question: "Ce tehnologii de baze de date folosiți?",
        answer:
          "Lucrăm în principal cu PostgreSQL, inclusiv prin Supabase, și cu MySQL pentru proiectele pe WordPress. Alegem tehnologia după volumul de date, după cine le folosește și după aplicațiile care trebuie conectate.",
      },
      {
        question: "Puteți muta datele din Excel?",
        answer:
          "Da. Preluăm tabelele existente, eliminăm dublurile, uniformizăm formatele și le importăm într-o structură clară. Înainte de mutarea finală verificăm împreună un eșantion, ca să fim siguri că datele au ajuns corect.",
      },
      {
        question: "Cum se face backup-ul?",
        answer:
          "Configurăm backup automat, la intervale stabilite după cât de des se schimbă datele, și testăm restaurarea, pentru că un backup care nu a fost testat nu oferă siguranță reală. Accesul la copii este limitat la persoanele stabilite.",
      },
      {
        question: "Baza de date poate alimenta site-ul și aplicația în același timp?",
        answer:
          "Da. Construim un API care citește și scrie în aceeași bază de date, astfel încât site-ul, aplicația mobilă și panoul de administrare lucrează cu aceleași informații, actualizate în timp real.",
      },
    ],
    related: ["platforme-online", "aplicatii-mobile"],
  },
  {
    slug: "creare-continut",
    name: "Creare conținut",
    h1: "Creare conținut video și foto pentru social media",
    eyebrow: "Strategie, filmare, montaj",
    metaTitle: "Creare conținut video pentru TikTok și Instagram",
    metaDescription:
      "Creare conținut video și foto pentru TikTok, Instagram, Facebook și YouTube: strategie, filmări, montaj și subtitrări. Cristache, București.",
    short: "Idei, filmări și montaj pentru materiale gata de publicat, făcute nativ pentru fiecare platformă.",
    intro:
      "Creăm conținut video și foto pentru social media, de la idee până la fișierul gata de publicat. Stabilim temele și calendarul, filmăm, montăm, adăugăm subtitrări și livrăm formate separate pentru TikTok, Reels, Shorts și feed. Primești materiale care arată ca brandul tău și care pot fi publicate imediat.",
    includes: [
      "Plan de conținut și calendar editorial",
      "Concepte, scenarii și unghiuri creative",
      "Filmări video și ședințe foto",
      "Montaj, ritm și corecție de culoare",
      "Subtitrări și text pe ecran",
      "Formate verticale și orizontale pentru fiecare canal",
    ],
    deliverables: [
      "Calendar lunar cu teme și date de publicare",
      "Clipuri scurte montate, gata de postat",
      "Fotografii editate și coperți",
      "Texte pentru descrieri și hashtag-uri",
    ],
    forWho: [
      "Branduri care au produs bun, dar publică rar sau neuniform",
      "Firme care vor să apară constant fără să filmeze singure",
      "Afaceri locale care vor să arate oamenii și locul din spatele numelui",
    ],
    steps: [
      { title: "Brief", description: "Aflăm ce vinzi, cui și ce a funcționat până acum." },
      { title: "Plan", description: "Propunem teme, formate și un calendar pe care îl aprobi." },
      { title: "Producție", description: "Filmăm în locația ta sau în exterior, după scenariile stabilite." },
      { title: "Livrare", description: "Montăm, subtitrăm și îți predăm fișierele pe canal." },
    ],
    faq: [
      {
        question: "Ce tip de conținut creați?",
        answer:
          "Creăm clipuri scurte pentru TikTok, Instagram Reels și YouTube Shorts, fotografii de produs și de echipă, coperți și postări pentru feed. Fiecare material este gândit pentru platforma pe care apare, cu format, ritm și text potrivite, nu același fișier urcat peste tot.",
      },
      {
        question: "Unde au loc filmările?",
        answer:
          "Filmăm de obicei la sediul, magazinul sau locația clientului, pentru că acolo se vede cel mai bine ce faci. Pentru produse putem filma și în alt spațiu. Locul și programul se stabilesc la începutul fiecărei luni, împreună cu calendarul de conținut.",
      },
      {
        question: "Pot primi doar montaj pentru materialele pe care le filmez eu?",
        answer:
          "Da. Dacă ai deja filmări, ne ocupăm doar de post-producție: selecție, montaj, culoare, subtitrări și exporturi pentru fiecare canal. Îți spunem și ce să filmezi data viitoare ca materialele să fie mai ușor de folosit.",
      },
      {
        question: "Cine publică materialele?",
        answer:
          "Poți publica tu, cu fișierele și textele pregătite de noi, sau putem prelua și administrarea conturilor prin serviciul de social media marketing. Stabilim varianta la început, în funcție de cât timp are echipa ta.",
      },
    ],
    related: ["social-media-marketing", "campanii-ads"],
  },
  {
    slug: "social-media-marketing",
    name: "Social media marketing",
    h1: "Administrare conturi social media",
    eyebrow: "TikTok, Instagram, Facebook, YouTube",
    metaTitle: "Administrare conturi social media în București",
    metaDescription:
      "Administrare conturi TikTok, Instagram, Facebook și YouTube: strategie, calendar, publicare, comunitate și rapoarte lunare. Cristache, București.",
    short: "Strategie, publicare și comunitate pe canalele unde stă publicul tău, cu rapoarte clare.",
    intro:
      "Ne ocupăm de conturile tale de social media de la strategie până la raportul lunar. Alegem canalele potrivite, stabilim ce publici și când, pregătim postările, răspundem comunității și urmărim ce aduce rezultate. Scopul nu este doar prezența, ci oameni care ajung să te contacteze sau să cumpere.",
    includes: [
      "Audit al conturilor existente",
      "Strategie pe canal și ton de comunicare",
      "Calendar editorial lunar",
      "Publicare și programare postări",
      "Răspunsuri la comentarii și mesaje",
      "Raport lunar cu ce a funcționat",
    ],
    deliverables: [
      "Strategie scrisă pe canalele alese",
      "Calendar aprobat înainte de fiecare lună",
      "Postări publicate la orele potrivite",
      "Raport lunar și recomandări pentru luna următoare",
    ],
    forWho: [
      "Firme care au conturi, dar nu au timp să le țină active",
      "Branduri noi care vor să pornească corect pe 1-3 canale",
      "Afaceri care primesc mesaje și comentarii fără răspuns rapid",
    ],
    steps: [
      { title: "Audit", description: "Ne uităm la conturi, public și concurență." },
      { title: "Strategie", description: "Alegem canalele, formatele și ritmul de publicare." },
      { title: "Publicare", description: "Postăm după calendar și răspundem comunității." },
      { title: "Raport", description: "Măsurăm, explicăm cifrele și ajustăm planul." },
    ],
    faq: [
      {
        question: "Pe ce platforme lucrați?",
        answer:
          "Lucrăm pe TikTok, Instagram, Facebook și YouTube, iar pentru branduri B2B și pe LinkedIn. Nu recomandăm prezența pe toate canalele din prima zi. Alegem de obicei unul până la trei canale unde se află publicul tău și le construim bine înainte să adăugăm altele.",
      },
      {
        question: "Includeți și crearea conținutului?",
        answer:
          "Administrarea conturilor și crearea conținutului pot fi luate împreună sau separat. Dacă ai deja materiale, le folosim pe ale tale. Dacă nu, le producem prin serviciul de creare conținut, iar calendarul se face o singură dată pentru ambele.",
      },
      {
        question: "Cum vedem rezultatele?",
        answer:
          "Primești un raport lunar cu evoluția audienței, interacțiunile, mesajele primite și postările care au mers cel mai bine, explicate pe înțeles. Raportul se încheie cu ce schimbăm luna următoare, ca să nu rămână doar o listă de cifre.",
      },
      {
        question: "Răspundeți și la mesaje?",
        answer:
          "Da, dacă stabilim asta. Pregătim răspunsuri pentru întrebările frecvente și trimitem către tine doar ce are nevoie de o decizie, de exemplu o ofertă sau o reclamație. Așa nimeni nu așteaptă zile întregi un răspuns.",
      },
    ],
    related: ["creare-continut", "campanii-ads"],
  },
  {
    slug: "campanii-ads",
    name: "Campanii ADS",
    h1: "Campanii Google Ads, Meta Ads și TikTok Ads",
    eyebrow: "TikTok, Meta și Google Ads",
    metaTitle: "Campanii Google Ads, Meta Ads și TikTok Ads",
    metaDescription:
      "Campanii plătite pe Google Ads, Facebook și Instagram Ads și TikTok Ads, urmărite după cereri și vânzări reale, nu după afișări. Cristache.",
    short: "Reclame plătite pe TikTok, Meta și Google, urmărite după cereri și vânzări, nu după afișări.",
    intro:
      "Construim și administrăm campanii plătite pe TikTok Ads, Facebook și Instagram Ads și Google Ads. Setăm urmărirea conversiilor, pregătim reclamele, împărțim bugetul pe audiențe și ajustăm săptămânal după cererile și vânzările reale. Bugetul de reclame rămâne în contul tău și vezi în orice moment unde merge.",
    includes: [
      "Configurare conturi și pixeli de urmărire",
      "Structura campaniilor și a audiențelor",
      "Reclame video, imagine și text",
      "Testare de mesaje și formate",
      "Optimizare săptămânală a bugetului",
      "Raport cu cost pe cerere sau pe vânzare",
    ],
    deliverables: [
      "Plan de campanie cu obiective și buget",
      "Urmărire conversii verificată pe site",
      "Reclame livrate pe fiecare platformă",
      "Raport lunar cu rezultate și pașii următori",
    ],
    forWho: [
      "Magazine online care vor vânzări măsurabile",
      "Servicii locale care au nevoie de cereri constante",
      "Branduri care au conținut bun, dar ajung la prea puțini oameni",
    ],
    steps: [
      { title: "Obiectiv", description: "Stabilim ce înseamnă un rezultat: cerere, apel sau vânzare." },
      { title: "Urmărire", description: "Verificăm că fiecare conversie se înregistrează corect." },
      { title: "Lansare", description: "Pornim campaniile cu mai multe variante de reclame." },
      { title: "Optimizare", description: "Mutăm bugetul spre ce aduce rezultate și oprim restul." },
    ],
    faq: [
      {
        question: "Bugetul de reclame este inclus în onorariu?",
        answer:
          "Nu. Bugetul de reclame se plătește direct platformelor, din contul tău, iar onorariul acoperă strategia, reclamele și administrarea. Așa vezi exact cât se cheltuie și poți păstra conturile și datele indiferent de colaborare.",
      },
      {
        question: "Pe ce platformă să începem?",
        answer:
          "Depinde de ce vinzi și unde caută oamenii. Google Ads prinde cererea existentă, când cineva caută deja serviciul tău. TikTok și Meta creează cerere, arătând produsul unor oameni care nu îl căutau încă. Recomandarea o facem după o discuție despre produs, public și buget.",
      },
      {
        question: "Cât durează până apar rezultate?",
        answer:
          "Primele date apar din primele zile, dar platformele au nevoie de o perioadă de învățare ca să livreze stabil. De obicei, după primele săptămâni se vede clar ce reclame și audiențe merită păstrate. Deciziile le luăm după date, nu după impresii.",
      },
      {
        question: "Faceți și reclamele video?",
        answer:
          "Da. Reclamele pot fi produse prin serviciul de creare conținut, în format nativ pentru fiecare platformă. Pe TikTok și Reels funcționează mai bine materialele care arată ca o postare obișnuită decât cele care arată ca o reclamă TV.",
      },
    ],
    related: ["creare-continut", "social-media-marketing", "dezvoltare-web"],
  },
]

export const getService = (slug: string) => services.find((service) => service.slug === slug)

export const homeCardService: Record<string, ServiceSlug> = {
  strategy: "creare-continut",
  production: "social-media-marketing",
  ads: "campanii-ads",
  web: "dezvoltare-web",
  automation: "automatizari-ai",
  mobile: "aplicatii-mobile",
  platforms: "platforme-online",
  data: "baze-de-date",
}
