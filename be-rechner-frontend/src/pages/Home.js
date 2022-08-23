import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner title="Welcome" subtitle="Put something witty here!" />
        <div className="container">
          <h2>Welcome</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
export default Home;
