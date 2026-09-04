import React from "react";
import aboutImg from "../images/portrait-ester.jpg";
import { copy, useLanguage } from "../i18n.jsx";

export default function AboutSection() {
  const t = copy[useLanguage()].about;
  return (
    <section className="aboutSection">
      <div className="aboutSection__media">
        <img src={aboutImg} alt={t.alt} />
      </div>

      <div className="aboutSection__content">
        <div className="aboutSection__kicker">{t.kicker}</div>

        <h2 className="aboutSection__title">{t.title}</h2>

        {t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

        <div className="aboutSection__divider" />

        <div className="aboutSection__listTitle">{t.listTitle}</div>

        <ul className="aboutSection__list">
          {t.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
