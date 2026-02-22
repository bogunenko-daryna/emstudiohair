// import React from "react";

// import img1 from "../images/works/01.png";
// import img2 from "../images/works/02.png";
// import img3 from "../images/works/03.jpg";
// import img4 from "../images/works/04.png";
// import img5 from "../images/works/05.heic";
// import img6 from "../images/works/06.heic";

// const items = [
//   {
//     src: img1,
//     href: "https://www.instagram.com/ester.studio.hair/",
//     alt: "Work 01",
//     span: "tall",
//   },
//   {
//     src: img2,
//     href: "https://www.instagram.com/ester.studio.hair/",
//     alt: "Work 02",
//     span: "wide",
//   },
//   {
//     src: img3,
//     href: "https://www.instagram.com/ester.studio.hair/",
//     alt: "Work 03",
//   },
//   {
//     src: img4,
//     href: "https://www.instagram.com/ester.studio.hair/",
//     alt: "Work 04",
//     span: "tall",
//   },
//   {
//     src: img5,
//     href: "https://www.instagram.com/ester.studio.hair/",
//     alt: "Work 05",
//   },
//   {
//     src: img6,
//     href: "https://www.instagram.com/ester.studio.hair/",
//     alt: "Work 06",
//     span: "wide",
//   },
// ];

// export default function Works() {
//   return (
//     <div className="worksPage">
//       <header className="worksHero">
//         <h1 className="worksTitle">WORKS</h1>
//         <p className="worksIntro">
//           Výběr prací z mého Instagramu. Pro více inspirace navštivte{" "}
//           <a
//             href="https://www.instagram.com/ester.studio.hair/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             @ester.studio.hair
//           </a>
//           .
//         </p>
//       </header>

//       <section className="worksGrid" aria-label="Galerie prací">
//         {items.map((it, i) => (
//           <a
//             key={i}
//             className={`workTile ${it.span ? `is-${it.span}` : ""}`}
//             href={it.href}
//             target="_blank"
//             rel="noreferrer"
//           >
//             <img src={it.src} alt={it.alt} loading="lazy" />
//             <div className="workOverlay">
//               <div className="workOverlay__chip">View on Instagram</div>
//             </div>
//           </a>
//         ))}
//       </section>

//       <div className="worksFooter">
//         <a
//           className="btn btn--primary"
//           href="https://www.instagram.com/ester.studio.hair/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           Otevřít Instagram
//         </a>
//       </div>
//     </div>
//   );
// }
