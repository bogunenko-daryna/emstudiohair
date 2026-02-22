import React from "react";
import Hero from "../components/Hero";
import About from "../components/AboutSection";
import Products from "../components/Products";
import Diagnostics from "../components/Diagnostics";
import PriceSection from "../components/PriceSection";
import BookNowSection from "../components/BookNowSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Diagnostics />
      <PriceSection />
      <BookNowSection />
    </>
  );
}
