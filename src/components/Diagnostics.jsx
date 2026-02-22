import React from "react";

import imgDiagnostics from "../images/diagnostika_v2.jpeg";

export default function Footer() {
  return (
    <section className="diagnosticsSection">
      <div className="diagnosticsMedia">
        <img src={imgDiagnostics} alt="Diagnostika pokožky hlavy kamerou" />
      </div>

      <div className="diagnosticsContent">
        <div className="diagnosticsBadge">TRICHOLOGIE</div>

        <h2>Diagnostika pomocí kamery</h2>

        <p>
          Kamera poskytuje dermoskopické snímky, díky kterým lze přesně
          identifikovat problémy jako ucpání folikulů, podrážděnou pokožku či
          usazeniny z tvrdé vody.
        </p>

        <p>Na základě snímků z kamery se navrhuje personalizované ošetření.</p>
      </div>
    </section>
  );
}
