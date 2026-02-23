import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../images/hero.jpg";

export default function Hero() {
  return (
    <section className="heroSplit  isImageRight">
      <div className="heroSplit__media">
        <img src={heroImg} alt="Ester Studio Hair" />
      </div>

      <div className="heroSplit__copy">
        <blockquote className="heroSplit__quote">
          “Vlasy nejsou detail. Jsou všechno.”
        </blockquote>

        <div className="heroSplit__sub">
          Luxusní, minimalistické hair studio • střih • barva • styling
        </div>

        <div className="heroSplit__cta">
          <a className="btn btn--primary" href="tel:+420777774906">
            Objednat se
          </a>
          <Link className="btn btn--ghost" to="/cenik">
            Ceník
          </Link>
        </div>
      </div>
    </section>
  );
}
