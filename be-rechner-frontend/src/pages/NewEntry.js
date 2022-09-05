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
  const [allentrys, setAllEntrys] = useState([]);

  const options = {
    url: "https://sugarlybackend.herokuapp.com/entrys/add",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    }
  };

  const getData = function () {
    axios(options).then((response) => {
      if (!allentrys) {
        return null;
      } else if (allentrys !== response.data) {
        setAllEntrys(response.data);
      }
    });
  };

  useEffect(() => getData(), []);
  console.log(allentrys);

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

  const gesamt_berechnen = function (mahlzeit, zielwert) {
    const mahlzeiten2 = allentrys.filter((e) => mahlzeit === e.mahlzeit);
    let gesamt = mahlzeiten2.reduce((total, item) => {
      return total + item.kohlenhydrate;
    }, 0);
    if (zielwert === "BE") {
      return (
        <p className="be-ergebnis">
          {" "}
          <strong>Die gesamt {zielwert} betragen:</strong> {gesamt / 12}
        </p>
      );
    } else if (zielwert === "KE") {
      return (
        <p className="ke-ergebnis">
          {" "}
          <strong>Die gesamt {zielwert} betragen:</strong> {gesamt / 10}
        </p>
      );
    }
  };

  const gesamt_berechnen_FPE = function (mahlzeit) {
    const mahlzeiten3 = allentrys.filter((e) => mahlzeit === e.mahlzeit);
    let gesamt_fett = mahlzeiten3.reduce((total, item) => {
      return total + item.fett;
    }, 0);
    let gesamt_protein = mahlzeiten3.reduce((total, item) => {
      return total + item.protein;
    }, 0);
    console.log(gesamt_fett, gesamt_protein);
    return (
      <p className="fpe-ergebnis">
        <strong>Die gesamt FPE betragen:</strong>{" "}
        {(gesamt_fett * 9) / 100 + (gesamt_protein * 4) / 100}
      </p>
    );
  };

  return (
    <div>
      <Navbar />
      <Banner title="Meine Einträge" />
      <div className="container text-left main-content">
        <div className="row">
          <div className="col-md-12">
            <div className="mahlzeit">
              <h2 className="h2-eintrag">Frühstück</h2>
              <div>{findmahlzeit("Frühstück")}</div>
              <div className="ergebnis-eintrag">
                {gesamt_berechnen("Frühstück", "BE")}
                {gesamt_berechnen("Frühstück", "KE")}
                {gesamt_berechnen_FPE("Frühstück")}
              </div>
            </div>

            <div className="mahlzeit">
              <h2 className="h2-eintrag">Mittag</h2>
              <div>{findmahlzeit("Mittagessen")}</div>
              <div className="ergebnis-eintrag">
                {gesamt_berechnen("Mittagessen", "BE")}
                {gesamt_berechnen("Mittagessen", "KE")}
                {gesamt_berechnen_FPE("Mittagessen")}
              </div>
            </div>

            <div className="mahlzeit">
              <h2 className="h2-eintrag">Abendessen</h2>
              <div>{findmahlzeit("Abendbrot")}</div>
              <div className="ergebnis-eintrag">
                {gesamt_berechnen("Abendbrot", "BE")}
                {gesamt_berechnen("Abendbrot", "KE")}
                {gesamt_berechnen_FPE("Abendbrot")}
              </div>
            </div>

            <div className="mahlzeit">
              <h2 className="h2-eintrag">Spätmahlzeit</h2>
              <div>{findmahlzeit("Nachts")}</div>
              <div className="ergebnis-eintrag">
                {gesamt_berechnen("Nachts", "BE")}
                {gesamt_berechnen("Nachts", "KE")}
                {gesamt_berechnen_FPE("Nachts")}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Prefooter />
      <Footer />
    </div>
  );
}
