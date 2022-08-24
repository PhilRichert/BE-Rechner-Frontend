import React, { Component } from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";

class NewEntry extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner title="Neuer Eintrag" />
        <div className="container">
          <h2>Frühstück</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            placerat orci eu nulla sagittis, pulvinar dignissim lectus
            consequat. Etiam in lobortis ligula, vitae ornare lacus.
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

          <h2>Mittach</h2>
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
}

export default NewEntry;
