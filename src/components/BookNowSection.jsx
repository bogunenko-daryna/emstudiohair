import React from "react";

export default function BookNowSection() {
  return (
    <section className="bookNow">
      <div className="bookNow__header">
        <div className="productsKicker">Contact</div>
        <h2 className="bookNow__title">Objednání</h2>
        <p className="bookNow__intro">
          Termín domluvíme přes telefon nebo zprávou. Ráda poradím i s výběrem
          péče na míru.
        </p>
      </div>

      <div className="bookNow__grid">
        {/* MAPA */}
        <div className="mapCard">
          <iframe
            title="Mapa salonu"
            src="https://www.google.com/maps?q=Bořivojova+718/84,+Praha+3&output=embed"
            loading="lazy"
          />
        </div>

        {/* INFO */}
        <div className="bookNow__content">
          <div className="infoCard">
            <div className="infoCard__label">Adresa</div>
            <div className="infoCard__value">
              Bořivojova 718/84
              <br />
              Praha 3
            </div>
          </div>

          <div className="infoCard">
            <div className="infoCard__label">Telefon</div>
            <div className="infoCard__value">
              <a href="tel:+420777774906">+420 777 774 906</a>
              <div className="muted">Preferuji SMS / WhatsApp</div>
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
              <div className="muted">Napište mi do DM</div>
            </div>
          </div>

          <div className="infoCard">
            <div className="infoCard__label">E-mail</div>
            <div className="infoCard__value">
              <a href="mailto:mahurskaester@gmail.com">
                mahurskaester@gmail.com
              </a>
              <div className="muted">Odpovídám do 24 hodin</div>
            </div>
          </div>

          <div className="bookNow__cta">
            <a className="btn btn--primary" href="tel:+420777774906">
              Zavolat
            </a>
            <a
              className="btn btn--ghost"
              href="https://www.instagram.com/ester.studio.hair/"
              target="_blank"
              rel="noreferrer"
            >
              Napsat na Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
