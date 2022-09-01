import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";

export default function NewEntry() {
  const [allentrys, setAllEntrys] = useState([]);


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
      <div>
        <table class="table table-hover">
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
              <th scope="col">BE</th>
              <th scope="col">KE</th>
              <th scope="col">FPE</th>
            </tr>
          </thead>
          <tbody>
            <th scope="row">{e.id}</th>
            <td>{e.name}</td>
            <td>{e.menge}</td>
            <td>{e.brennwert}</td>
            <td>{e.fett}</td>
            <td>{e.kohlenhydrate}</td>
            <td>{e.davonzucker}</td>
            <td>{e.protein}</td>
            <td>{e.ballaststoffe}</td>
            <td>{e.kohlenhydrate / 12}</td>
            <td>{e.kohlenhydrate / 10}</td>
            <td>{(e.fett * 9 /100) + (e.protein * 4 /100) } </td>
          </tbody>
        </table>
      </div>
    ));
  }

  const gesamt_berechnen = function (mahlzeit, zielwert) {
    const mahlzeiten2 = allentrys.filter((e) => mahlzeit === e.mahlzeit);
    let gesamt = mahlzeiten2.reduce((total, item) => {
      return total + item.kohlenhydrate;
    }, 0);
    if (zielwert === "BE") {
      return (
        <p>
          {" "}
          Die gesamt {zielwert} betragen: {gesamt / 12}
        </p>
      );
    } else if (zielwert === "KE") {
      return (
        <p>
          {" "}
          Die gesamt {zielwert} betragen: {gesamt / 10}
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
    }, 0);console.log(gesamt_fett,gesamt_protein)
    return (
      <p>
        Die gesamt FPE betragen{(gesamt_fett * 9/100) + (gesamt_protein * 4/100)}
      </p>
    );
    
  };

  return (
    <div>
      <Navbar />
      <Banner title="Neuer Eintrag" />
      <div className="container">
        <h2>Frühstück</h2>
        <div>{findmahlzeit("Frühstück")}</div>
        <div>
          <p>{gesamt_berechnen("Frühstück", "BE")}</p>
          <p>{gesamt_berechnen("Frühstück", "KE")}</p>
          <p>{gesamt_berechnen_FPE("Frühstück")}</p>
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

        <h2>Mittag</h2>
        <div>
        <p>{findmahlzeit("Mittagessen")}</p>
        <div><p>{gesamt_berechnen("Mittagessen", "BE")}</p>
        <p>{gesamt_berechnen("Mittagessen", "KE")}</p>
          <p>{gesamt_berechnen_FPE("Mittagessen")}</p>
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
        <p>{gesamt_berechnen("Abendbrot", "BE")}</p>
        <p>{gesamt_berechnen("Abendbrot", "KE")}</p>
          <p>{gesamt_berechnen_FPE("Abendbrot")}</p>
          </div>
          </div>
        <p> &nbsp;</p>
        <p> &nbsp;</p>
        <h2>Spätmahlzeit</h2>
        <p>{findmahlzeit("Nachts")}</p>
        <div>
        <p>{gesamt_berechnen("Nachts", "BE")}</p>
        <p>{gesamt_berechnen("Nachts", "KE")}</p>
          <p>{gesamt_berechnen_FPE("Nachts")}</p>
          </div>
        <p> &nbsp;</p>
        <p> &nbsp;</p>
      </div>
      <Footer />
    </div>
  );
}
