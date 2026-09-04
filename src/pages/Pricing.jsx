import React from "react";
import { Link } from "react-router-dom";
import { copy, localizedPath, services, useLanguage } from "../i18n.jsx";

export default function Pricing() {
  const language = useLanguage();
  const t = copy[language].pricing;
  const groups = services[language];
  return (
    <section className="pricingPage">
      <header className="pricingHero">
        <h1 className="pricingHero__title">{t.title}</h1>
        <p className="pricingHero__intro">{t.intro}</p>

        <div className="pricingHero__meta">
          <Link className="btn btn--primary" to={localizedPath(language, "/contact")}>{t.book}</Link>
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
                <div className="priceCard__badge">{t.badge}</div>
              )}
            </div>

            <div className="priceCard__rows">
              {g.items.map((it) => (
                <div className="priceRow" key={it[0]}>
                  <div className="priceRow__name">{it[0]}</div>
                  <div className="priceRow__price">{it[1]}</div>
                </div>
              ))}
            </div>

            <div className="priceCard__note">
              <span className="dotGold" />
              <span>{t.note}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="pricingFineprint">
        <div className="card pad">
          <div className="pricingFineprint__title">{t.fineTitle}</div>
          <p>{t.fine}</p>
        </div>
      </section>
    </section>
  );
}
