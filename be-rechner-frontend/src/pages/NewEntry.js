import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import axios from "axios";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import infocircle from "../pages/images/info-circle.png";
import "./Main.css";

export default function NewEntry() {
  const [loading, setLoading] = useState(true);
  const [allentrys, setAllEntrys] = useState([]);
  const [currentsettings, setCurrentSettings] = useState([]);

  const getData2 = function () {
    const options2 = {
      url: "https://sugarlybackend.herokuapp.com/settings",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    axios(options2).then((response) => {
      if (!currentsettings) {
        return null;
      } else if (currentsettings !== response.data) {
        setCurrentSettings(response.data);
        setLoading(false);
      }
    });
  };

  const options = {
    url: "https://sugarlybackend.herokuapp.com/entrys/add",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const getData = function () {
    axios(options).then((response) => {
      if (!allentrys) {
        return null;
      } else if (allentrys !== response.data) {
        setAllEntrys(response.data);
      }
    });
    getData2();
  };

  useEffect(() => getData(), []);

  if (loading) {
    return <div>loading....</div>;
  }

  const einstellungen = currentsettings.filter((e) => e.id === 1);

  function findmahlzeit(mahlzeit) {
    const mahlzeiten = allentrys.filter((e) => mahlzeit === e.mahlzeit);
    console.log(mahlzeiten);
    if (!mahlzeiten) {
      return null;
    }

    // const gesamt_be = mahlzeiten.filter((element) => element.kohlenhydrate);
    // if (!mahlzeiten2) {
    //   return null;
    // }
    // setMahlzeiten2(mahlzeiten);
    // console.log(mahlzeiten2);

    return mahlzeiten.map((e) => (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {e.name}
            <img src={infocircle} alt="Info" width="25" height="25" />
          </Accordion.Header>
          <Accordion.Body>
            <div>
              <table class="table table-hover watisdrin">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Menge (in g)</th>
                    <th scope="col">Brennwert (Kcal)</th>
                    <th scope="col">Fett</th>
                    <th scope="col">Kohlenhydrate</th>
                    <th scope="col">davon Zucker</th>
                    <th scope="col">Protein</th>
                    <th scope="col">Ballaststoffe</th>
                    <th scope="col">BE</th>
                    <th scope="col">KE</th>
                    <th scope="col">FPE</th>
                  </tr>
                </thead>
                <tbody>
                  <th scope="row">{e.menge}</th>
                  <td>{e.brennwert}</td>
                  <td>{e.fett}</td>
                  <td>{e.kohlenhydrate}</td>
                  <td>{e.davonzucker}</td>
                  <td>{e.protein}</td>
                  <td>{e.ballaststoffe}</td>
                  <td>{e.kohlenhydrate / 12}</td>
                  <td>{e.kohlenhydrate / 10}</td>
                  <td>{(e.fett * 9) / 100 + (e.protein * 4) / 100} </td>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ));
  }

  const gesamt_berechnen = function (mahlzeit, zielwert, Faktor) {
    const mahlzeiten2 = allentrys.filter((e) => mahlzeit === e.mahlzeit);

    let gesamt = mahlzeiten2.reduce((total, item) => {
      return total + item.kohlenhydrate;
    }, 0);
    if (zielwert === "BE") {
      return (
        <div>
          <p>
            {" "}
            Die gesamt {zielwert} betragen: {gesamt / 12}
          </p>
          <p>Für BE abzugebenes Insulin: {(gesamt / 12) * Faktor} IE </p>
        </div>
      );
    } else if (zielwert === "KE") {
      return (
        <div>
          <p>
            {" "}
            Die gesamt {zielwert} betragen: {gesamt / 10}
          </p>
          <p>Für KE abzugebenes Insulin: {(gesamt / 10) * Faktor} IE </p>
        </div>
      );
    }
  };

  const gesamt_berechnen_FPE = function (mahlzeit, Faktor) {
    const mahlzeiten3 = allentrys.filter((e) => mahlzeit === e.mahlzeit);
    let gesamt_fett = mahlzeiten3.reduce((total, item) => {
      return total + item.fett;
    }, 0);
    let gesamt_protein = mahlzeiten3.reduce((total, item) => {
      return total + item.protein;
    }, 0);

    console.log(gesamt_fett, gesamt_protein);
    return (
      <div>
        <p>
          Die gesamt FPE betragen
          {(gesamt_fett * 9) / 100 + (gesamt_protein * 4) / 100}
        </p>
        <p>
          Für FPE abzugebenes Insulin :{" "}
          {((gesamt_fett * 9) / 100 + (gesamt_protein * 4) / 100) * Faktor} IE
        </p>
      </div>
    );
  };
  console.log(einstellungen);
  console.log(einstellungen[0].Faktor_morgens);
  return (
    <div>
      <Navbar />
      <Banner title="Neuer Eintrag" />
      <div className="container">
        <h2>Frühstück</h2>
        <div>{findmahlzeit("Frühstück")}</div>
        <div>
          <p>
            {gesamt_berechnen(
              "Frühstück",
              "BE",
              einstellungen[0].Faktor_morgens
            )}
          </p>
          <p>
            {gesamt_berechnen(
              "Frühstück",
              "KE",
              einstellungen[0].Faktor_morgens
            )}
          </p>
          <p>
            {gesamt_berechnen_FPE("Frühstück", einstellungen[0].Faktor_morgens)}
          </p>
        </div>
        <p> &nbsp;</p>
        <p> &nbsp;</p>

        <h2>Zwischenmahlzeit 1</h2>
        <p>
          Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida
          urna, at pretium dui turpis non lorem.
        </p>
        <p> &nbsp;</p>
        <p> &nbsp;</p>

        <h>Mittag</h>
        <div>
          <p>{findmahlzeit("Mittagessen")}</p>
          <div>
            <p>
              {gesamt_berechnen(
                "Mittagessen",
                "BE",
                einstellungen[0].Faktor_mittags
              )}
            </p>
            <p>
              {gesamt_berechnen(
                "Mittagessen",
                "KE",
                einstellungen[0].Faktor_mittags
              )}
            </p>
            <p>
              {gesamt_berechnen_FPE(
                "Mittagessen",
                einstellungen[0].Faktor_mittags
              )}
            </p>
          </div>
        </div>
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
        <div>
          <p>{findmahlzeit("Abendbrot")}</p>
          <div>
            <p>
              {gesamt_berechnen(
                "Abendbrot",
                "BE",
                einstellungen[0].Faktor_abends
              )}
            </p>
            <p>
              {gesamt_berechnen(
                "Abendbrot",
                "KE",
                einstellungen[0].Faktor_abends
              )}
            </p>
            <p>
              {gesamt_berechnen_FPE(
                "Abendbrot",
                einstellungen[0].Faktor_abends
              )}
            </p>
          </div>
        </div>
        <p> &nbsp;</p>
        <p> &nbsp;</p>
        <h2>Spätmahlzeit</h2>
        <p>{findmahlzeit("Nachts")}</p>
        <div>
          <p>
            {gesamt_berechnen("Nachts", "BE", einstellungen[0].Faktor_nachts)}
          </p>
          <p>
            {gesamt_berechnen("Nachts", "KE", einstellungen[0].Faktor_nachts)}
          </p>
          <p>
            {gesamt_berechnen_FPE("Nachts", einstellungen[0].Faktor_nachts)}
          </p>
        </div>
        <p> &nbsp;</p>
        <p> &nbsp;</p>
      </div>
      <Prefooter />
      <Footer />
    </div>
  );
}
