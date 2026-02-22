import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="nav-logo">
          <img className="logo" src={logo} alt="Ester Studio Hair logo" />
        </NavLink>
        <nav className="nav">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>

          <NavLink to="/prices" className={linkClass}>
            Ceník
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Kontakt
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
