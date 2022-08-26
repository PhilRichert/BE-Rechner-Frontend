import React from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import heroes from "../pages/images/heroes.jpg";

export default function Kontakt() {
  return (
    <div>
      <Navbar />
      <Banner title="Kontakt" />
      <div className="container text-left">
        <div className="row">
          <div className="col-md-6">
            <img src={heroes} alt="Lolli" width="420" height="420" />
          </div>
          <div className="col-md-6">
            <h2>Sugary Heroes - bei Diabetis stets an deiner Seite...</h2>
            <p>Philip | Romano | René</p>
            <hr />
            <h2>Legal Informations</h2>
            <p>
              Das ist ein Entwickler-Projekt und wir waren zu faul sämtliche
              Urheberquellen zu notieren. Bei Fragen: nicht fragen.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
