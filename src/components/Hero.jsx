import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../images/hero.jpg";
import { copy, localizedPath, useLanguage } from "../i18n.jsx";

export default function Hero() {
  const language = useLanguage();
  const t = copy[language].hero;
  return (
    <section className="heroSplit  isImageRight">
      <div className="heroSplit__media">
        <img src={heroImg} alt="Ester Studio Hair" />
      </div>

      <div className="heroSplit__copy">
        <blockquote className="heroSplit__quote">
          “{t[0]}”
        </blockquote>

        <div className="heroSplit__sub">
          {t[1]}
        </div>

        <div className="heroSplit__cta">
          <a className="btn btn--primary" href="tel:+420777774906">
            {t[2]}
          </a>
          <Link className="btn btn--ghost" to={localizedPath(language, "/prices")}>
            {t[3]}
          </Link>
        </div>
      </div>
    </section>
  );
}
