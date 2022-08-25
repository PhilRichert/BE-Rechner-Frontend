import React from "react";
import { Link } from "react-router-dom";
import bonbon from "../components/images/sugary-logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <div className="row">
          <a className="navbar-brand" href="https://4sbsbn.csb.app/">
            <img
              className="rechtsdies"
              src={bonbon}
              alt="Sugar"
              width="200"
              height="80"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newentry">
                  Neuer Eintrag
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lebensmittel">
                  Lebensmittel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kontakt">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
