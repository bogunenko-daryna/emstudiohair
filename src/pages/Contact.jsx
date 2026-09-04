import React from "react";
import { copy, useLanguage } from "../i18n.jsx";

export default function Contact() {
  const language = useLanguage();
  const t = copy[language].contact;
  const emailHref = language === "en"
    ? "mailto:mahurskaester@gmail.com?subject=Appointment%20request&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20book..."
    : "mailto:mahurskaester@gmail.com?subject=Rezervace%20term%C3%ADnu&body=Dobr%C3%BD%20den,%0D%0A%0D%0AR%C3%A1da%20bych%20se%20objednala%20na...";
  return (
    <div className="contactPage">
      <header className="contactHero">
        <div className="productsKicker">{t.kicker}</div>
        <h1 className="contactHero__title">{t.title}</h1>
        <p className="contactHero__intro">{t.intro}</p>
      </header>

      <section className="contactGrid">
        {/* MAP */}
        <div className="mapCard mapCard--boutique">
          <iframe
            title={t.mapTitle}
            src="https://www.google.com/maps?q=Bo%C5%99ivojova+718/84,+Praha+3&output=embed"
            loading="lazy"
          />
          <div className="mapBadge">Bořivojova 718/84 • Praha 3</div>
        </div>

        {/* INFO */}
        <div className="contactCards">
          <div className="infoCard">
            <div className="infoCard__label">{t.address}</div>
            <div className="infoCard__value">
              Bořivojova 718/84
              <br />
              Praha 3
              <div className="muted">
                <a
                  href="https://www.google.com/maps?q=Bo%C5%99ivojova+718/84,+Praha+3"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.maps}
                </a>
              </div>
            </div>
          </div>

          <div className="infoCard">
            <div className="infoCard__label">{t.phone}</div>
            <div className="infoCard__value">
              <a href="tel:+420777774906">+420 777 774 906</a>
              <div className="muted">{t.phoneNote}</div>
            </div>
          </div>

          <div className="infoCard">
            <div className="infoCard__label">E-mail</div>
            <div className="infoCard__value">
              <a href="mailto:mahurskaester@gmail.com">
                mahurskaester@gmail.com
              </a>
              <div className="muted">{t.response}</div>
            </div>
          </div>

          <div className="infoCard">
            <div className="infoCard__label">Instagram</div>
            <div className="infoCard__value">
              <a
                href="https://www.instagram.com/ester.studio.hair/"
                target="_blank"
                rel="noreferrer"
              >
                @ester.studio.hair
              </a>
              <div className="muted">{t.dm}</div>
            </div>
          </div>

          <div className="contactCta">
            <a className="btn btn--primary" href="tel:+420777774906">
              {t.call}
            </a>
            <a
              className="btn btn--ghost"
              href={emailHref}
            >
              {t.email}
            </a>
            <a
              className="btn btn--ghost"
              href="https://www.instagram.com/ester.studio.hair/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>

          <div className="contactNote">
            {t.note}
          </div>
        </div>
      </section>
    </div>
  );
}
