import React, { Component } from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner title="About Me!" />
        <div className="container">
          <h2>Neuer Eintrag</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            placerat orci eu nulla sagittis, pulvinar dignissim lectus
            consequat. Etiam in lobortis ligula, vitae ornare lacus.
          </p>
          <p>
            Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida
            urna, at pretium dui turpis non lorem.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
