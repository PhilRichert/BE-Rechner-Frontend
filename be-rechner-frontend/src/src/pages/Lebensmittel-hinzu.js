import React from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import { Link } from "react-router-dom";
import sweets from "../pages/images/sweets1.jpg";
import icon1 from "../pages/images/icon1.png";
import icon2 from "../pages/images/icon2.png";
import icon3 from "../pages/images/icon3.png";
import "./Main.css";

export default function LebensmittelHinzu() {
  return (
    <div>
      <Navbar />
      <Banner title="Lebensmittel" />
      <div className="container text-left">
        <div className="row">
          <div className="col-md-5">
            <img src={sweets} alt="Lolli" width="420" height="420" />
          </div>
          <div className="col-md-5">
            <h2>Sugary - leicht und selbstbewusst unterwegs...</h2>
            <p>
              Sugary ist von Menschen mit Diabetes für Menschen mit Diabetes. In
              der Sugary App findest du all deine wichtigen Diabetes-Daten,
              Integrationen und manuellen Einträgen, bequem an einem Ort.
            </p>
            <p>
              Die Sugary App steht dir in deinem Diabetes-Alltag jederzeit zur
              Seite und hilft dir dabei, motiviert und selbstbewusst dein
              Monster zu zähmen!
            </p>
            <h2>Sugary - du brauchst sie einfach!</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et
              justo duo dolores et ea rebum.
            </p>
          </div>
          <div className="col-md-2 thesidebar">
            <h3>Deine Lebensmittel</h3>

            <Link className="nav-link" to="/">
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
            <Link className="nav-link" to="/">
              <img
                src={icon1}
                className="icon"
                alt="Hinzufügen"
                width="150"
                height="100"
              />
              Meine Liste
            </Link>
            <hr />
            <Link className="nav-link" to="/">
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
