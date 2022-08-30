import axios from "axios";

import { useEffect, useState } from "react";

const Lists = function () {
  const [list, setList] = useState([]);
  const [buttoninfo, setButtoninfo] = useState([]);

  const options = {
    url: "https://sugarlybackend.herokuapp.com/ingridients",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const getData = function () {
    axios(options).then((response) => {
      setList(response.data);
    });
  };
  console.log(list);
  useEffect(() => getData(), []);

  const Post_entry = (
    name,
    menge,
    brennwert,
    fett,
    kohlenhydrate,
    davonzucker,
    protein,
    ballaststoffe
  ) => {
    const options = {
      url: "https://sugarlybackend.herokuapp.com/entrys/add",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        name: name,
        menge: menge,
        brennwert: brennwert,
        fett: fett,
        kohlenhydrate: kohlenhydrate,
        davonzucker: davonzucker,
        protein: protein,
        ballaststoffe: ballaststoffe,
      },
    };
    axios(options).then((response) => {
      console.log(response);
    });
  };

  const handleclick = function (e) {
    setButtoninfo(e.target.dataset.id);
  };

  function fund() {
    const funde = list.find((e) => parseInt(buttoninfo) === e.id);
    if (!funde) {
      return null;
    }

    return (
      <div>
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
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            <th scope="row">{funde.id}</th>
            <td>{funde.name}</td>
            <td>100</td>
            <td>{funde.brennwert}</td>
            <td>{funde.fett}</td>
            <td>{funde.kohlenhydrate}</td>
            <td>{funde.davonzucker}</td>
            <td>{funde.protein}</td>
            <td>{funde.ballaststoffe}</td>
          </tbody>
        </table>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          onClick={Post_entry(
            funde.name,
            funde.menge,
            funde.brennwert,
            funde.fett,
            funde.kohlenhydrate,
            funde.davonzucker,
            funde.protein,
            funde.ballaststoffe
          )}
        >
          Hinzufügen zu Tagesplan
        </button>
      </div>
    );
  }

  return (
    <article className="col-md-5">
      <h2>Alle Lebensmittel</h2>
      {/* {loading && <p>Loading...</p>}
      {!loading && error && <p className="errMsg">{error}</p>}
      {!loading && !error && list && ( */}
      <div>
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
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {list.map((data) => (
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
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
                      <div class="modal-content">{fund()}</div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};
export default Lists;
