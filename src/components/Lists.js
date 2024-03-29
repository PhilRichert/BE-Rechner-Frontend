import axios from "axios";
import Select from "react-select";
import { useEffect, useState } from "react";

import React from "react";
import { useNavigate } from "react-router-dom";

const Lists = function () {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [buttoninfo, setButtoninfo] = useState([]);
  const [input, setInput] = useState(100);
  let history = useNavigate();

  const [input2, setInput2] = useState("");
  const options = {
    url: "https://sugary-backend.onrender.com/ingridients",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const getData = function () {
    axios(options).then((response) => {
      if (!list) {
        return null;
      } else if (list !== response.data) {
        setList(response.data);
        setLoading(false);
      }
    });
  };

  useEffect(() => getData(), []);

  if (loading) {
    return (
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden"></span>
      </div>
    );
  }

  const Post_entry = (funde) => {
    const options = {
      url: "https://sugary-backend.onrender.com/entrys/add",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        name: funde.name,
        menge: parseInt(input),
        brennwert: Math.round((input * funde.brennwert) / 100),
        fett: Math.round((input * funde.fett) / 100),
        kohlenhydrate: Math.round((input * funde.kohlenhydrate) / 100),
        davonzucker: Math.round((input * funde.davonzucker) / 100),
        protein: Math.round((input * funde.protein) / 100),
        ballaststoffe: Math.round((input * funde.ballaststoffe) / 100),
        mahlzeit: input2,
      },
    };
    axios(options).then((res) => {
      console.log(res);
    });
    history("/");
  };

  const handleclick = function (e) {
    if (!buttoninfo) {
      return null;
    } else if (buttoninfo !== e.target.dataset.id) {
      setButtoninfo(e.target.dataset.id);
    }
  };

  function fund() {
    let funde = list.find((e) => parseInt(buttoninfo) === e.id);
    if (!funde) {
      return null;
    }

    const options = [
      { value: "frühstück", label: "Frühstück" },
      { value: "mittag", label: "Mittagessen" },
      { value: "abend", label: "Abendbrot" },
      { value: "nacht", label: "Nachts" },
    ];

    const handleChange = (selectedOption) => {
      if (!selectedOption) {
        return null;
      } else if (input2 !== selectedOption.label) {
        setInput2(selectedOption.label);
      }
    };

    return (
      <div>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Menge (in g)</th>
              <th scope="col">Brennwert (Kcal)</th>
              <th scope="col">Fett</th>
              <th scope="col">Kohlenhydrate</th>
              <th scope="col">davon Zucker</th>
              <th scope="col">Protein</th>
              <th scope="col">Ballaststoffe</th>
              <th scope="col">&nbsp;</th>
            </tr>
          </thead>

          <tbody>
            <th scope="row">{funde.name}</th>

            <td>
              {" "}
              <form>
                <input
                  type="text"
                  id="menge"
                  name="menge"
                  placeholder="100"
                  onChange={(e) => {
                    if (!input) {
                      return null;
                    } else if (input !== e.target.value) {
                      setInput(e.target.value);
                    }
                  }}
                />
              </form>
            </td>
            <td>{Math.round((input * funde.brennwert) / 100)}</td>
            <td>{Math.round((input * funde.fett) / 100)}</td>
            <td>{Math.round((input * funde.kohlenhydrate) / 100)}</td>
            <td>{Math.round((input * funde.davonzucker) / 100)}</td>
            <td>{Math.round((input * funde.protein) / 100)}</td>
            <td>{Math.round((input * funde.ballaststoffe) / 100)}</td>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <Select options={options} onChange={handleChange} />
        <p>&nbsp;</p>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          data-dismiss="modal"
          onClick={() => Post_entry(funde)}
        >
          Hinzufügen zu Tagesplan
        </button>
        <p>&nbsp;</p>
      </div>
    );
  }

  return (
    <div>
      {/* {loading && <p>Loading...</p>}
      {!loading && error && <p className="errMsg">{error}</p>}
      {!loading && !error && list && ( */}
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="the5">
                Name
              </th>

              <th scope="col">
                Menge <br />
                (in g)
              </th>
              <th scope="col">Brennwert (Kcal)</th>
              <th scope="col">Fett</th>
              <th scope="col">Kohlenhydrate</th>
              <th scope="col">davon Zucker</th>
              <th scope="col">Protein</th>
              <th scope="col">Ballaststoffe</th>
              <th scope="col">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {list.map((data) => (
              <tr>
                <th scope="row" className="the5">
                  {data.name}
                </th>

                <td>{data.menge}</td>
                <td>{data.brennwert}</td>
                <td>{data.fett}</td>
                <td>{data.kohlenhydrate}</td>
                <td>{data.davonzucker}</td>
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
                    Hinzufügen
                  </button>

                  <div
                    class="modal fade bd-example-modal-lg"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">{fund()}</div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Lists;
