import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white mt-5">
      <div className="container">
        <div className="row py-3">
          <div className="col-5 text-left">
            &#169; {new Date().getFullYear()} by P-R-R
          </div>
          <div className="col-7 text-right">
            <div>
              <span>Follow Us: </span>
              <a href="https://www.google.de/">
                <i className="fab fa-facebook-f px-3" />
              </a>
              <a href="https://www.google.de/">
                <i className="fab fa-twitter pr-3" />
              </a>

              <a href="https://www.google.de/">
                <i className="fab fa-github pr-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
