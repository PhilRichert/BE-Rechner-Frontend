import React from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";
import lolli from "../pages/images/lolli2.jpg";
import "./Main.css";

export default function Home() {
    return (
      <div>
        <Navbar />
        <Banner title="Welcome Sugies!" />
        <div className="container text-left">
            <p>
                Trage hier deine Werte ein.
            </p>
            <form>
                <input type="text" className="form-weight" placeholder="Dein Gewicht in kg">

                </input>
                <input type="text" className="form-height" placeholder="Deine Größe in cm">

                </input>
                <input type="text" className="form-faktor-morgens" placeholder="dein Faktor am morgen">

                </input>
                <input type="text" className="form-faktor-mittags" placeholder="dein Faktor am Mittag">

                </input>
                <input type="text" className="form-faktor-abends" placeholder="dein Faktor am Abend">

                </input>
                <input type="submit" className="form-save" placeholder="Speichern">
                    
                </input>
            </form>


          <div className="row">
            <div className="col-md-6">
              <img src={lolli} alt="Lolli" width="420" height="420" />
            </div>
          </div>
            <Footer />
        </div>
      </div>
  );
}