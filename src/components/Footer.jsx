import React from "react";
import { copy, useLanguage } from "../i18n.jsx";

export default function Footer() {
  const t = copy[useLanguage()];
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer__info">
          © {new Date().getFullYear()} Ester Studio Hair
        </div>
        <a href="tel:+420777774906" className="muted">
          {t.footer}: +420 777 774 906
        </a>
      </div>
    </footer>
  );
}
