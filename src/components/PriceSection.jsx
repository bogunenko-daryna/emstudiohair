import React from "react";

const groups = [
  {
    title: "Hair Services",
    items: [
      { name: "Dámský střih + foukání", price: "1000 Kč" },
      { name: "Pánský střih + foukání", price: "650 Kč" },
      { name: "Foukání", price: "600 Kč" },
      { name: "Děvčata do 10 let", price: "550 Kč" },
      { name: "Chlapci do 10 let", price: "450 Kč" },
      { name: "Společenský účes + zkouška", price: "1500–2500 Kč" },
    ],
  },
  {
    title: "Color Services",
    items: [
      { name: "Barvení odrostů", price: "1400 Kč" },
      { name: "Částečný melír", price: "1000–2500 Kč" },
      { name: "Melír", price: "2900 Kč" },
      { name: "Nová barva", price: "1900 Kč" },
      { name: "Toner / Péče", price: "400–800 Kč" },
    ],
  },
  {
    title: "Head Spa / Tricho",
    featured: true,
    items: [
      { name: "Trichologické vyšetření", price: "750 Kč" },
      {
        name: "Čištění vlasů MALIBU C + tricho vyšetření",
        price: "1300–1700 Kč",
      },
    ],
  },
];

export default function PriceSection() {
  return (
    <section className="pricingPage">
      <header className="pricingHero pricingHero__bg">
        <h1 className="pricingHero__title">Ceník</h1>
        <p className="pricingHero__intro">
          Finální cena se může lišit dle délky a hustoty vlasů. Pro přesnou
          nabídku mi napište nebo zavolejte.
        </p>

        <div className="pricingHero__meta">
          <a className="btn btn--primary" href="/kontakt">
            Objednat se
          </a>
          <a className="btn btn--ghost" href="tel:+420777774906">
            +420 777 774 906
          </a>
        </div>
      </header>

      <section className="pricingGrid">
        {groups.map((g) => (
          <article
            key={g.title}
            className={`priceCard ${g.featured ? "priceCard--featured" : ""}`}
          >
            <div className="priceCard__head">
              <div className="priceCard__title">{g.title}</div>
              {g.featured && (
                <div className="priceCard__badge">Special care</div>
              )}
            </div>

            <div className="priceCard__rows">
              {g.items.map((it) => (
                <div className="priceRow" key={it.name}>
                  <div className="priceRow__name">{it.name}</div>
                  <div className="priceRow__price">{it.price}</div>
                </div>
              ))}
            </div>

            <div className="priceCard__note">
              <span className="dotGold" />
              <span>Ceny dle ceníku.</span>
            </div>
          </article>
        ))}
      </section>

      <section className="pricingFineprint">
        <div className="card pad">
          <div className="pricingFineprint__title">Poznámka</div>
          <p>
            U melírů/zesvětlení a společenských účesů se cena odvíjí od
            náročnosti a času. Doporučuji konzultaci předem.
          </p>
        </div>
      </section>
    </section>
  );
}
