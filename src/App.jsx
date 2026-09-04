import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";
import { LanguageProvider } from "./i18n.jsx";

const localizedRoutes = (language) => (
  <Route element={<LanguageProvider language={language}><Layout /></LanguageProvider>}>
    <Route index element={<Home />} />
    <Route path="prices" element={<Pricing />} />
    <Route path="contact" element={<Contact />} />
  </Route>
);

export default function App() {
  return (
    <Routes>
      {localizedRoutes("cs")}
      <Route path="/en">{localizedRoutes("en")}</Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
