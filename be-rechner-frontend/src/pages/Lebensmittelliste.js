import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import { Link } from "react-router-dom";
import icon1 from "../pages/images/icon1.png";
import icon2 from "../pages/images/icon2.png";
import icon3 from "../pages/images/icon3.png";
import React from "react";
import Lists from "../components/Lists.js";
import "./Main.css";

export default function LebensmittelListe() {
  return (
    <div>
      <Navbar />
      <Banner title="Lebensmittel Liste" />
      <div className="container text-left">
        <div className="row">
          <Lists />
          <div className="col-md-2 thesidebar" style={{ maxHeight: "500px" }}>
            <Link className="nav-link" to="/lebensmittelliste">
              <img
                src={icon3}
                className="icon"
                alt="Hinzufügen"
                width="150"
                height="100"
              />
              Lebensmittel auswählen
            </Link>
            <hr />
            <Link className="nav-link" to="/meinemenues">
              <img
                src={icon1}
                className="icon"
                alt="Hinzufügen"
                width="150"
                height="100"
              />
              Meine Menüs
            </Link>
            <hr />
            <Link className="nav-link" to="/lebensmittelhinzu">
              <img
                src={icon2}
                className="icon"
                alt="Hinzufügen"
                width="150"
                height="100"
              />
              Hinzufügen
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
