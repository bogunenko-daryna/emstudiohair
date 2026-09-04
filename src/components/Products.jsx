import React, { useMemo, useRef, useState } from "react";

import imageMalibu from "../images/malibu.webp";
import imageKevin from "../images/kevin.jpg";
import { Link } from "react-router-dom";
import { copy, localizedPath, useLanguage } from "../i18n.jsx";

export default function ProductsSection() {
  const language = useLanguage();
  const t = copy[language];
  const slides = useMemo(
    () => [
      {
        title: "MALIBU C",
        image: imageMalibu,
        alt: "Malibu C hair products",
        text: t.productTexts[0],
      },
      {
        title: "KEVIN MURPHY",
        image: imageKevin,
        alt: "Kevin Murphy hair products",
        text: t.productTexts[1],
      },
    ],
    [t]
  );

  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const startX = useRef(null);

  const go = (i) => setIndex((i + slides.length) % slides.length);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // Simple touch swipe
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const endX = e.changedTouches[0].clientX;
    const dx = endX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
  };

  return (
    <section className="productsSlider">
      <div className="productsHeader">
        <div className="productsKicker">{t.products[0]}</div>
        <h2 className="productsTitle">{t.products[1]}</h2>
        <p className="productsIntro">{t.products[2]}</p>
      </div>

      <div className="slider">
        <button
          className="sliderBtn"
          type="button"
          onClick={prev}
          aria-label={t.products[3]}
        >
          ‹
        </button>

        <div
          className="sliderViewport"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            className="sliderTrack"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s) => (
              <article className="slide" key={s.title}>
                <div className="slideMedia">
                  <img src={s.image} alt={s.alt} />
                </div>

                <div className="slideText">
                  <h3 className="slideTitle">{s.title}</h3>
                  {s.text.map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}

                  <div className="slideCta">
                    <Link className="btn btn--primary" to={localizedPath(language, "/contact")}>{t.products[5]}</Link>
                    <Link className="btn btn--ghost" to={localizedPath(language, "/contact")}>{t.products[6]}</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          className="sliderBtn"
          type="button"
          onClick={next}
          aria-label={t.products[4]}
        >
          ›
        </button>
      </div>

      <div className="dots" role="tablist" aria-label={t.products[0]}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "isActive" : ""}`}
            onClick={() => setIndex(i)}
            type="button"
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
