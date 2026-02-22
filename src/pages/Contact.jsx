import React from "react";

export default function Contact() {
  return (
    <div className="contactPage">
      <header className="contactHero">
        <div className="productsKicker">Contact</div>
        <h1 className="contactHero__title">Kontakt</h1>
        <p className="contactHero__intro">
          <p className="contactHero__intro">
            Kontakt je začátek proměny. Ozvěte se — zbytek necháte na mně.
          </p>
        </p>
      </header>

      <section className="contactGrid">
        {/* MAP */}
        <div className="mapCard mapCard--boutique">
          <iframe
            title="Mapa salonu"
            src="https://www.google.com/maps?q=Bo%C5%99ivojova+718/84,+Praha+3&output=embed"
            loading="lazy"
          />
          <div className="mapBadge">Bořivojova 718/84 • Praha 3</div>
        </div>

        {/* INFO */}
        <div className="contactCards">
          <div className="infoCard">
            <div className="infoCard__label">Adresa</div>
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
                  Otevřít v mapách
                </a>
              </div>
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
            <div className="infoCard__label">E-mail</div>
            <div className="infoCard__value">
              <a href="mailto:mahurskaester@gmail.com">
                mahurskaester@gmail.com
              </a>
              <div className="muted">Odpovídám do 24 hodin</div>
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

          <div className="contactCta">
            <a className="btn btn--primary" href="tel:+420777774906">
              Zavolat
            </a>
            <a
              className="btn btn--ghost"
              href="mailto:mahurskaester@gmail.com?subject=Rezervace%20term%C3%ADnu&body=Dobr%C3%BD%20den,%0D%0A%0D%0AR%C3%A1da%20bych%20se%20objednala%20na..."
            >
              Napsat e-mail
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
            Pokud chcete, pošlete mi do zprávy přibližnou délku vlasů a co si
            přejete (střih / barva / péče).
          </div>
        </div>
      </section>
    </div>
  );
}
