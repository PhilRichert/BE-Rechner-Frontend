import React from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";

export default function NewEntry() {
  return (
    <div>
      <Navbar />
      <Banner title="Neuer Eintrag" />
      <div className="container">
        <h2>Frühstück</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat
          orci eu nulla sagittis, pulvinar dignissim lectus consequat. Etiam in
          lobortis ligula, vitae ornare lacus.
        </p>
        <p> &nbsp;</p>
        <p> &nbsp;</p>

        <h2>Zwischenmahlzeit 1</h2>
        <p>
          Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida
          urna, at pretium dui turpis non lorem.
        </p>
        <p> &nbsp;</p>
        <p> &nbsp;</p>

        <h2>Mittag</h2>
        <p>
          Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida
          urna, at pretium dui turpis non lorem.
        </p>
        <p> &nbsp;</p>
        <p> &nbsp;</p>
        <h2>Zwischenmahlzeit 2</h2>
        <p>
          Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida
          urna, at pretium dui turpis non lorem.
        </p>
        <p> &nbsp;</p>
        <p> &nbsp;</p>
        <h2>Abendessen</h2>
        <p>
          Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida
          urna, at pretium dui turpis non lorem.
        </p>
        <p> &nbsp;</p>
        <p> &nbsp;</p>
        <h2>Spätmahlzeit</h2>
        <p>
          Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida
          urna, at pretium dui turpis non lorem.
        </p>
        <p> &nbsp;</p>
        <p> &nbsp;</p>
      </div>
      <Footer />
    </div>
  );
}
