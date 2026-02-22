import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Ester Studio Hair</div>
        <div className="muted">Objednávky: +420 777 123 456</div>
      </div>
    </footer>
  );
}
