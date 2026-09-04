import React from "react";

import imgDiagnostics from "../images/diagnostika_v2.jpeg";
import { copy, useLanguage } from "../i18n.jsx";

export default function Footer() {
  const t = copy[useLanguage()].diagnostics;
  return (
    <section className="diagnosticsSection">
      <div className="diagnosticsMedia">
        <img src={imgDiagnostics} alt={t[4]} />
      </div>

      <div className="diagnosticsContent">
        <div className="diagnosticsBadge">{t[0]}</div>

        <h2>{t[1]}</h2>

        <p>{t[2]}</p>
        <p>{t[3]}</p>
      </div>
    </section>
  );
}
