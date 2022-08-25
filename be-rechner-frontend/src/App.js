import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./App.css";
import Home from "./pages/Home.js";
import NewEntry from "./pages/NewEntry.js";
import Lebensmittel from "./pages/Lebensmittel.js";
import LebensmittelListe from "./pages/Lebensmittelliste";
import LebensmittelHinzu from "./pages/Lebensmittel-hinzu.js";
import Kontakt from "./pages/Kontakt.js";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newentry" element={<NewEntry />} />
        <Route path="/lebensmittel" element={<Lebensmittel />} />
        <Route path="/lebensmittelliste" element={<LebensmittelListe />} />
        <Route path="/lebensmittelhinzu" element={<LebensmittelHinzu />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </BrowserRouter>
  );
}
