import React, { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const LanguageContext = createContext("cs");

export function LanguageProvider({ language, children }) {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = language;

    const page = location.pathname.endsWith("/prices")
      ? "prices"
      : location.pathname.endsWith("/contact")
        ? "contact"
        : "home";
    const meta = seo[language][page];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);

    const canonicalPath = location.pathname === "/en" ? "/en/" : location.pathname;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `https://emstudiohair.com${canonicalPath}`);
    const basePath = location.pathname.replace(/^\/en/, "") || "/";
    const csUrl = `https://emstudiohair.com${basePath}`;
    const enUrl = `https://emstudiohair.com/en${basePath === "/" ? "/" : basePath}`;
    document.querySelector('link[hreflang="cs"]')?.setAttribute("href", csUrl);
    document.querySelector('link[hreflang="en"]')?.setAttribute("href", enUrl);
    document.querySelector('link[hreflang="x-default"]')?.setAttribute("href", csUrl);
  }, [language, location.pathname]);

  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
export const localizedPath = (language, path = "") =>
  `${language === "en" ? "/en" : ""}${path}` || "/";

const seo = {
  cs: {
    home: { title: "EM Studio Hair | Kadeřnictví Praha 3", description: "Kadeřnické studio na Žižkově v Praze 3. Střih, barvení, Malibu C, Kevin Murphy a trichologická diagnostika." },
    prices: { title: "Ceník | EM Studio Hair Praha 3", description: "Ceník střihů, barvení a trichologické péče v EM Studio Hair na Praze 3." },
    contact: { title: "Kontakt | EM Studio Hair Praha 3", description: "Objednejte se do EM Studio Hair, Bořivojova 718/84, Praha 3. Telefon, e-mail nebo Instagram." },
  },
  en: {
    home: { title: "English-Speaking Hair Salon Prague 3 | EM Studio Hair", description: "English-speaking hair salon in Prague 3, Žižkov. Haircuts, colour, Malibu C, Kevin Murphy and scalp diagnostics." },
    prices: { title: "Hair Salon Prices | EM Studio Hair Prague", description: "Prices for haircuts, colouring and trichology services at EM Studio Hair in Prague 3." },
    contact: { title: "Contact | EM Studio Hair Prague 3", description: "Book an appointment at EM Studio Hair, Bořivojova 718/84, Prague 3. Call, email or message us on Instagram." },
  },
};

export const copy = {
  cs: {
    nav: ["Domů", "Ceník", "Kontakt"],
    hero: ["Vlasy nejsou detail. Jsou všechno.", "Komorní vlasové studio v Praze 3 • střih • barva • styling", "Objednat se", "Ceník"],
    about: {
      kicker: "O mně", title: "ESTER", alt: "Ester při práci",
      paragraphs: [
        "Práci s vlasy miluju už od dětství – mojí úplně první „klientkou“ byla panenka, které jsem s vášní vytvořila nový účes. I když moje rodina zpočátku nebyla z mého vysněného povolání nadšená a já jsem nastoupila na IT školu, velmi rychle jsem zjistila, že moje srdce patří vlasům. Přes všechny obavy jsem se rozhodla změnit směr.",
        "Dnes je mým cílem, aby každá klientka odcházela spokojená – s účesem, který si přála, a zároveň s vlasy, které zůstávají zdravé a silné. Věřím, že péče o vlasy začíná nasloucháním, respektem k jejich přirozenosti a individuálním přístupem.",
      ],
      listTitle: "Na co se můžete těšit:",
      list: ["Individuální přístup", "Kreativita", "Profesionální péče o vlasy i pokožku hlavy", "Respekt k přirozené kráse vlasů", "Profesionální kosmetika", "Trichologické vyšetření"],
    },
    diagnostics: ["TRICHOLOGIE", "Diagnostika pomocí kamery", "Kamera poskytuje dermoskopické snímky, díky kterým lze přesně identifikovat problémy jako ucpání folikulů, podrážděnou pokožku či usazeniny z tvrdé vody.", "Na základě snímků z kamery navrhnu personalizované ošetření.", "Diagnostika pokožky hlavy kamerou"],
    products: ["Produkty", "Produkty, kterým věřím", "Pracuji s profesionální kosmetikou, která respektuje přirozenost vlasů a podporuje jejich zdraví.", "Předchozí", "Další", "Doporučení na míru", "Objednat se"],
    productTexts: [
      ["Malibu C díky své inovativní patentované technologii účinně bojuje proti negativním účinkům minerálů obsažených v tvrdé vodě, které se mohou hromadit na vlasech i vlasové pokožce. Vlasy pak bývají suché, ztrácejí lesk a lámou se, zatímco pokožka hlavy může být podrážděná.", "Produkty Malibu C tyto nánosy odstraňují a vlasům vracejí přirozenou měkkost, lesk a zdravý vzhled. Neobsahují parabeny, sulfáty ani silikony a nejsou testovány na zvířatech."],
      ["Kevin Murphy je australská značka vlasové péče zaměřená na ekologicky šetrné produkty pro styling a péči. Produkty neobsahují sulfáty ani parabeny a využívají rostliny a esenciální oleje z přírodních či organicky pěstovaných zdrojů.", "Barvy Kevin Murphy Color.Me neobsahují PPD ani amoniak. Obsahují přírodní složky, jako je bambucké máslo, med nebo granátové jablko, které pomáhají vlasům zachovat hydrataci a lesk."],
    ],
    pricing: { title: "Ceník", intro: "Finální cena se může lišit podle délky a hustoty vlasů. Pro přesnou nabídku mi napište nebo zavolejte.", book: "Objednat se", badge: "Speciální péče", note: "Cena dle ceníku.", fineTitle: "Poznámka", fine: "U melírů, zesvětlení a společenských účesů se cena odvíjí od náročnosti a času. Doporučuji konzultaci předem." },
    contact: { kicker: "Kontakt", title: "Kontakt", intro: "Kontakt je začátek proměny. Ozvěte se — o zbytek se postarám.", address: "Adresa", phone: "Telefon", maps: "Otevřít v mapách", phoneNote: "Preferuji SMS / WhatsApp", response: "Odpovídám do 24 hodin", dm: "Napište mi do DM", call: "Zavolat", email: "Napsat e-mail", note: "Do zprávy mi můžete poslat přibližnou délku vlasů a popsat, co si přejete (střih / barva / péče).", booking: "Objednání", bookingIntro: "Termín domluvíme telefonicky nebo zprávou. Ráda poradím i s výběrem péče na míru.", instagram: "Napsat na Instagram", mapTitle: "Mapa salonu" },
    footer: "Objednávky",
  },
  en: {
    nav: ["Home", "Prices", "Contact"],
    hero: ["Hair isn't a detail. It's everything.", "A boutique hair studio in Prague 3 • cuts • colour • styling", "Book now", "Prices"],
    about: {
      kicker: "About me", title: "ESTER", alt: "Ester at work",
      paragraphs: [
        "I have loved working with hair since childhood – my very first “client” was a doll whose new hairstyle I created with great enthusiasm. Although my family was initially unsure about my dream career and I enrolled at an IT school, I soon realised that my heart belonged to hair. Despite all my doubts, I decided to change direction.",
        "Today, my goal is for every client to leave happy – with the hairstyle they wanted and hair that remains healthy and strong. I believe great hair care begins with listening, respecting the hair's natural character and taking an individual approach.",
      ],
      listTitle: "What you can expect:",
      list: ["A personal approach", "Creativity", "Professional hair and scalp care", "Respect for your hair's natural beauty", "Professional products", "Trichology examination"],
    },
    diagnostics: ["TRICHOLOGY", "Camera-assisted scalp diagnostics", "The camera provides dermoscopic images that help accurately identify issues such as blocked follicles, irritated skin or mineral build-up from hard water.", "Based on the images, I will recommend a personalised treatment.", "Camera-assisted scalp diagnostics"],
    products: ["Products", "Products I trust", "I work with professional products that respect the natural character of your hair and support its health.", "Previous", "Next", "Personal recommendation", "Book now"],
    productTexts: [
      ["Using innovative patented technology, Malibu C effectively tackles the negative effects of minerals in hard water that can build up on the hair and scalp. This can leave hair dry, dull and prone to breakage, while irritating the scalp.", "Malibu C products remove this build-up and restore the hair's natural softness, shine and healthy appearance. They contain no parabens, sulphates or silicones and are cruelty-free."],
      ["Kevin Murphy is an Australian haircare brand specialising in environmentally conscious styling and care products. The products are sulphate- and paraben-free and use plants and essential oils from natural or organically grown sources.", "Kevin Murphy Color.Me colours contain no PPD or ammonia. Natural ingredients such as shea butter, honey and pomegranate help hair retain moisture and shine."],
    ],
    pricing: { title: "Prices", intro: "The final price may vary depending on the length and thickness of your hair. Message or call me for an exact quote.", book: "Book now", badge: "Special care", note: "Prices as listed.", fineTitle: "Please note", fine: "The price of highlights, lightening and occasion styling depends on the time and complexity involved. I recommend a consultation in advance." },
    contact: { kicker: "Contact", title: "Get in touch", intro: "Every transformation starts with a conversation. Get in touch — I'll take care of the rest.", address: "Address", phone: "Phone", maps: "Open in Maps", phoneNote: "SMS / WhatsApp preferred", response: "I reply within 24 hours", dm: "Send me a DM", call: "Call", email: "Send an email", note: "In your message, feel free to include your approximate hair length and what you would like (cut / colour / care).", booking: "Book an appointment", bookingIntro: "We can arrange your appointment by phone or message. I will also be happy to recommend personalised care.", instagram: "Message on Instagram", mapTitle: "Salon map" },
    footer: "Bookings",
  },
};

export const services = {
  cs: [
    { title: "Kadeřnické služby", items: [["Dámský střih + foukání", "1000 Kč"], ["Pánský střih + foukání", "650 Kč"], ["Foukání", "600 Kč"], ["Děvčata do 10 let", "550 Kč"], ["Chlapci do 10 let", "450 Kč"], ["Společenský účes + zkouška", "1500–2500 Kč"]] },
    { title: "Barvení", items: [["Barvení odrostů", "1400 Kč"], ["Částečný melír", "1000–2500 Kč"], ["Melír", "2900 Kč"], ["Nová barva", "1900 Kč"], ["Toner / péče", "400–800 Kč"]] },
    { title: "Head Spa / Trichologie", featured: true, items: [["Trichologické vyšetření", "450 Kč"], ["Čištění vlasů MALIBU C + trichologické vyšetření", "1300–1700 Kč"]] },
  ],
  en: [
    { title: "Hair Services", items: [["Women's cut & blow-dry", "CZK 1,000"], ["Men's cut & blow-dry", "CZK 650"], ["Blow-dry", "CZK 600"], ["Girls under 10", "CZK 550"], ["Boys under 10", "CZK 450"], ["Occasion styling & trial", "CZK 1,500–2,500"]] },
    { title: "Colour Services", items: [["Root colour", "CZK 1,400"], ["Partial highlights", "CZK 1,000–2,500"], ["Full highlights", "CZK 2,900"], ["Full colour", "CZK 1,900"], ["Toner / treatment", "CZK 400–800"]] },
    { title: "Head Spa / Trichology", featured: true, items: [["Trichology examination", "CZK 450"], ["MALIBU C hair detox & trichology examination", "CZK 1,300–1,700"]] },
  ],
};
