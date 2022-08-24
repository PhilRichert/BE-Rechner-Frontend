import React from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner title="Welcome" subtitle="Put something witty here!" />
      <div className="container">
        <h2>Welcome</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dapibus, est posuere eleifend rutrum, lectus ligula gravida urna, at
          pretium dui turpis non lorem.Maecenas dapibus, est posuere eleifend
          rutrum, lectus ligula gravida urna, at pretium dui turpis non lorem.
          Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida
          urna, at pretium dui turpis non lorem.
        </p>
        <p> &nbsp;</p>
        <p> &nbsp;</p>
        <p> &nbsp;</p>
        <p>
          Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida
          urna, at pretium dui turpis non lorem.
        </p>
        <p> &nbsp;</p>
        <p> &nbsp;</p>
        <p> &nbsp;</p>
      </div>
      <Footer />
    </div>
  );
}
