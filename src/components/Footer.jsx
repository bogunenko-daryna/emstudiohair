import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Ester Studio Hair</div>
        <a href="tel:+420777774906" className="muted">
          Objednávky: +420 777 774 906
        </a>
      </div>
    </footer>
  );
}
