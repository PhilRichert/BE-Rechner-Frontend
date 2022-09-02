import React from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer.js";
import lolli from "../pages/images/start.jpg";
import "./Main.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner title="Welcome Sugies!" />
      <div className="container text-left main-content">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={lolli} alt="Lolli" width="420" height="420" />
          </div>
          <div className="col-md-6">
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
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.{" "}
            </p>
          </div>
        </div>
      </div>

      <Prefooter />
      <Footer />
    </div>
  );
}
