import React from "react";
import aboutImg from "../images/portrait-ester.jpg";

export default function AboutSection() {
  return (
    <section className="aboutSection">
      <div className="aboutSection__media">
        <img src={aboutImg} alt="Ester při práci" />
      </div>

      <div className="aboutSection__content">
        <div className="aboutSection__kicker">About Me</div>

        <h2 className="aboutSection__title">ESTER</h2>

        <p>
          Práci s vlasy miluju už od dětství – mojí úplně první “klientkou” byla
          panenka, které jsem s vášní vytvořila nový účes. I když moje rodina
          zpočátku nebyla z mého vysněného povolání nadšená a já jsem nastoupila
          na IT školu, velmi rychle jsem zjistila, že moje srdce patří vlasům.
          Přes všechny obavy jsem se rozhodla změnit směr.
        </p>

        <p>
          Dnes mým cílem je, aby každá klientka odcházela spokojená – s účesem,
          který si přála, ale zároveň s vlasy, které zůstávají zdravé a silné.
          Věřím, že péče o vlasy začíná nasloucháním, respektem k jejich
          přirozenosti a individuálním přístupem.
        </p>

        <div className="aboutSection__divider" />

        <div className="aboutSection__listTitle">Na co se můžete těšit:</div>

        <ul className="aboutSection__list">
          <li>Individuální přístup</li>
          <li>Kreativita</li>
          <li>Profesionální péče o vlasy i pokožku hlavy</li>
          <li>Respekt k přirozené kráse vlasů</li>
          <li>Profesionální kosmetika</li>
          <li>Trichologické vyšetření</li>
        </ul>
      </div>
    </section>
  );
}
