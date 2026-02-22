import React, { useMemo, useRef, useState } from "react";

import imageMalibu from "../images/malibu.webp";
import imageKevin from "../images/kevin.jpg";

export default function ProductsSection() {
  const slides = useMemo(
    () => [
      {
        title: "MALIBU C",
        image: imageMalibu,
        alt: "Malibu C produkty",
        text: [
          "Malibu C díky své inovativní patentované technologii účinně bojuje proti negativním účinkům minerálů obsažených v tvrdé vodě, které se mohou hromadit na vlasech i vlasové pokožce. Vlivem toho jsou vlasy suché, ztrácí lesk a lámají se, a pokožka hlavy je podrážděná.",
          "Produkty Malibu C tyto nánosy odstraňují, a vlasy tak získají zpět svou přirozenou měkkost, lesk a zdravý vzhled. Veškeré produkty neobsahují parabeny, sulfáty a silikony. Netestováno na zvířatech.",
        ],
      },
      {
        title: "KEVIN MURPHY",
        image: imageKevin,
        alt: "Kevin Murphy produkty",
        text: [
          "Kevin Murphy je australská značka vlasové péče, která se specializuje na ekologicky šetrné produkty pro úpravu a péči o vlasy. Všechny produkty jsou bez sulfátů a parabenů a jsou vyrobeny z rostlin a esenciálních olejů, které pochází z přírodních zdrojů nebo jsou pěstovány organickým způsobem a sklizeny ekologickou technikou přirozené sklizně.",
          "Barvy Kevin Murphy Color.Me neobsahují PPD ani amoniak, ale jsou plné přírodních látek, jako je například bambucké máslo, med nebo granátové jablko. Díky těmto látkám nejsou vlasy dehydrované a neztrácejí lesk.",
        ],
      },
    ],
    []
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
        <div className="productsKicker">Products</div>
        <h2 className="productsTitle">Produkty, kterým věřím</h2>
        <p className="productsIntro">
          Pracuji s profesionální kosmetikou, která respektuje přirozenost vlasů
          a podporuje jejich zdraví.
        </p>
      </div>

      <div className="slider">
        <button
          className="sliderBtn"
          type="button"
          onClick={prev}
          aria-label="Předchozí"
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
                    <a className="btn btn--primary" href="/kontakt">
                      Doporučení na míru
                    </a>
                    <a className="btn btn--ghost" href="/kontakt">
                      Objednat se
                    </a>
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
          aria-label="Další"
        >
          ›
        </button>
      </div>

      <div className="dots" role="tablist" aria-label="Produkty">
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
