import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";
import { copy, localizedPath, useLanguage } from "../i18n.jsx";

const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");
const homeLinkClass = ({ isActive }) => `${linkClass({ isActive })} nav-link--home`;

export default function Navbar() {
  const language = useLanguage();
  const t = copy[language];
  const location = useLocation();
  const pagePath = location.pathname.replace(/^\/en/, "") || "/";
  const switchPath = language === "cs" ? `/en${pagePath === "/" ? "" : pagePath}` : pagePath;
  return (
    <header className="navbar">
      <NavLink to={localizedPath(language)} className="nav-logo">
        <img className="logo" src={logo} alt="Ester Studio Hair logo" />
      </NavLink>
      <nav className="nav">
        <NavLink to={localizedPath(language)} className={homeLinkClass} end>
          {t.nav[0]}
        </NavLink>

        <NavLink to={localizedPath(language, "/prices")} className={linkClass}>
          {t.nav[1]}
        </NavLink>
        <NavLink to={localizedPath(language, "/contact")} className={linkClass}>
          {t.nav[2]}
        </NavLink>
        <Link
          to={switchPath}
          className="languageSwitch"
          aria-label={language === "cs" ? "Switch to English" : "Přepnout do češtiny"}
          title={language === "cs" ? "English version" : "Česká verze"}
        >
          <span className={language === "cs" ? "isActive" : ""}>CZ</span>
          <span className="languageSwitch__divider" aria-hidden="true">/</span>
          <span className={language === "en" ? "isActive" : ""}>EN</span>
        </Link>
      </nav>
    </header>
  );
}
