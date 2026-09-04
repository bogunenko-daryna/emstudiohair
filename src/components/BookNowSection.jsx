import React from "react";
import { copy, useLanguage } from "../i18n.jsx";

export default function BookNowSection() {
  const t = copy[useLanguage()].contact;
  return (
    <section className="bookNow">
      <div className="bookNow__header">
        <div className="productsKicker">{t.kicker}</div>
        <h2 className="bookNow__title">{t.booking}</h2>
        <p className="bookNow__intro">{t.bookingIntro}</p>
      </div>

      <div className="bookNow__grid">
        {/* MAPA */}
        <div className="mapCard">
          <iframe
            title={t.mapTitle}
            src="https://www.google.com/maps?q=Bořivojova+718/84,+Praha+3&output=embed"
            loading="lazy"
          />
        </div>

        {/* INFO */}
        <div className="bookNow__content">
          <div className="infoCard">
            <div className="infoCard__label">{t.address}</div>
            <div className="infoCard__value">
              Bořivojova 718/84
              <br />
              Praha 3
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

          <div className="infoCard">
            <div className="infoCard__label">E-mail</div>
            <div className="infoCard__value">
              <a href="mailto:mahurskaester@gmail.com">
                mahurskaester@gmail.com
              </a>
              <div className="muted">{t.response}</div>
            </div>
          </div>

          <div className="bookNow__cta">
            <a className="btn btn--primary" href="tel:+420777774906">
              {t.call}
            </a>
            <a
              className="btn btn--ghost"
              href="https://www.instagram.com/ester.studio.hair/"
              target="_blank"
              rel="noreferrer"
            >
              {t.instagram}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
