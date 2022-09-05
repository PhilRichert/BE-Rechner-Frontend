import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer.js";
import { Link } from "react-router-dom";
import icon1 from "../pages/images/icon1.png";
import icon2 from "../pages/images/icon2.png";
import icon3 from "../pages/images/icon3.png";
import axios from "axios";
import "./Main.css";

export default function LebensmittelHinzu() {
  const [custom_name, setCustom_name] = useState("");
  const [custom_brennwert, setCustom_brennwert] = useState(0);
  const [custom_fett, setCustom_fett] = useState(0);
  const [custom_kohlenhydrate, setCustom_kohlenhydrate] = useState(0);
  const [custom_davon_zucker, setCustom_davon_zucker] = useState(0);
  const [custom_protein, setCustom_protein] = useState(0);
  const [custom_ballaststoffe, setCustom_ballaststoffe] = useState(0);
  const [list_ingridients, setList_ingridients] = useState([]);

  const getData = function () {
    const options = {
      url: "https://sugarlybackend.herokuapp.com/newingridient",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    axios(options).then((response) => {
      if (!list_ingridients) {
        return null;
      } else if (list_ingridients !== response.data) {
        setList_ingridients(response.data);
      }
    });
  };

  useEffect(() => getData(), []);

  const handleclick = function () {
    const options = {
      url: "https://sugarlybackend.herokuapp.com/newingridient/newentry",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        name: custom_name,
        menge_in_g: 100,
        brennwert_kcal: custom_brennwert,
        fett: custom_fett,
        kohlenhydrate: custom_kohlenhydrate,
        davon_zucker: custom_davon_zucker,
        protein: custom_protein,
        ballaststoffe: custom_ballaststoffe,
      },
    };
    axios(options).then((response) => {
      console.log(response.status);
      console.log(custom_name);
    });
  };

  return (
    <div>
      <Navbar />
      <Banner title="Lebensmittel hinzufügen" />
      <div className="container text-left main-content">
        <div className="row">
          <div className="col-md-5">
            <article className="col-md-5">
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target=".bd-example-modal-lg1"
              >
                Eigenes Lebensmittel Hinzufügen
              </button>
              <div
                class="modal fade bd-example-modal-lg1"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <form>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Name:</label>
                        <input
                          class="form-control form-control-lg"
                          type="text"
                          placeholder="Name"
                          defaultValue={custom_name}
                          onChange={(e) => {
                            // if (!custom_name) {
                            //   return null;
                            // } else if (custom_name !== e.target.value) {
                            //   console.log(e.target.value);
                            //   setCustom_name(e.target.value);
                            //   console.log(custom_name);
                            // }
                            console.log(e.target.value);
                            setCustom_name(e.target.value);
                            console.log(custom_name);
                          }}
                        />
                        <label for="exampleFormControlTextarea1">
                          Brennwert für 100g:
                        </label>
                        <input
                          class="form-control form-control-lg"
                          type="text"
                          placeholder="Brennwert für 100g"
                          defaultValue={custom_brennwert}
                          onChange={(e) => {
                            // if (!custom_brennwert) {
                            //   return null;
                            // } else if (custom_brennwert !== e.target.value) {
                            //   setCustom_brennwert(e.target.value);
                            // }
                            setCustom_brennwert(e.target.value);
                          }}
                        />
                        <label for="exampleFormControlTextarea1">Fett:</label>
                        <input
                          class="form-control form-control-lg"
                          type="text"
                          placeholder="Fett"
                          defaultValue={custom_fett}
                          onChange={(e) => {
                            // if (!custom_fett) {
                            //   return null;
                            // } else if (custom_fett !== e.target.value) {
                            //   setCustom_fett(e.target.value);
                            // }
                            setCustom_fett(e.target.value);
                          }}
                        />
                        <label for="exampleFormControlTextarea1">
                          Kohlenhydrate:
                        </label>
                        <input
                          class="form-control form-control-lg"
                          type="text"
                          placeholder="Kohlenhydrate"
                          defaultValue={custom_kohlenhydrate}
                          onChange={(e) => {
                            // if (!custom_kohlenhydrate) {
                            //   return null;
                            // } else if (
                            //   custom_kohlenhydrate !== e.target.value
                            // ) {
                            //   setCustom_kohlenhydrate(e.target.value);
                            // }
                            setCustom_kohlenhydrate(e.target.value);
                          }}
                        />
                        <label for="exampleFormControlTextarea1">
                          davon Zucker:
                        </label>
                        <input
                          class="form-control form-control-lg"
                          type="text"
                          placeholder="davon Zucker"
                          defaultValue={custom_davon_zucker}
                          onChange={(e) => {
                            // if (!custom_davon_zucker) {
                            //   return null;
                            // } else if (custom_davon_zucker !== e.target.value) {
                            //   setCustom_davon_zucker(e.target.value);
                            // }
                            setCustom_davon_zucker(e.target.value);
                          }}
                        />
                        <label for="exampleFormControlTextarea1">
                          Protein:
                        </label>
                        <input
                          class="form-control form-control-lg"
                          type="text"
                          placeholder="Protein"
                          defaultValue={custom_protein}
                          onChange={(e) => {
                            // if (!custom_protein) {
                            //   return null;
                            // } else if (custom_protein !== e.target.value) {
                            //   setCustom_protein(e.target.value);
                            // }
                            setCustom_protein(e.target.value);
                          }}
                        />
                        <label for="exampleFormControlTextarea1">
                          Ballaststoffe:
                        </label>
                        <input
                          class="form-control form-control-lg"
                          type="text"
                          placeholder="Ballaststoffe"
                          defaultValue={custom_ballaststoffe}
                          onChange={(e) => {
                            // if (!custom_ballaststoffe) {
                            //   return null;
                            // } else if (
                            //   custom_ballaststoffe !== e.target.value
                            // ) {
                            //   setCustom_ballaststoffe(e.target.value);
                            //   console.log(custom_ballaststoffe);
                            // }
                            setCustom_ballaststoffe(e.target.value);
                            console.log(custom_ballaststoffe);
                          }}
                        />
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => handleclick()}
                        >
                          Erstellen
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Menge (in g)</th>
                <th scope="col">Brennwert (Kcal)</th>
                <th scope="col">Fett</th>
                <th scope="col">Kohlenhydrate</th>
                <th scope="col">davon Zucker</th>
                <th scope="col">Protein</th>
                <th scope="col">Ballaststoffe</th>
              </tr>
            </thead>
            <tbody>
              {list_ingridients.map((data) => (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.menge_in_g}</td>
                  <td>{data.brennwert_kcal}</td>
                  <td>{data.fett}</td>
                  <td>{data.kohlenhydrate}</td>
                  <td>{data.davon_zucker}</td>
                  <td>{data.protein}</td>
                  <td>{data.ballaststoffe}</td>

                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg"
                      data-id={data.id}
                      onClick={handleclick}
                    >
                      Hinzufügen zu...
                    </button>

                    <div
                      class="modal fade bd-example-modal-lg"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="myLargeModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content"></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="col-md-2 thesidebar">
            <Link className="nav-link" to="/lebensmittelliste">
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
            <Link className="nav-link" to="/meinemenues">
              <img
                src={icon1}
                className="icon"
                alt="Hinzufügen"
                width="150"
                height="100"
              />
              Meine Menüs
            </Link>
            <hr />
            <Link className="nav-link" to="/lebensmittelhinzu">
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
      <Prefooter />
      <Footer />
    </div>
  );
}
