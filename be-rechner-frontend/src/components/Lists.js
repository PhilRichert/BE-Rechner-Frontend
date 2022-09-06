import axios from "axios";
import Select from "react-select";
import { useEffect, useState } from "react";

const Lists = function () {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [buttoninfo, setButtoninfo] = useState([]);
  const [input, setInput] = useState(100);

  const [input2, setInput2] = useState("");
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
      if (!list) {
        return null;
      } else if (list !== response.data) {
        setList(response.data);
        setLoading(false);
      }
    });
  };
  console.log(list);
  useEffect(() => getData(), []);

  if (loading) {
    return <div>loading....</div>;
  }

  const Post_entry = (funde) => {
    const options = {
      url: "https://sugarlybackend.herokuapp.com/entrys/add",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        name: funde.name,
        menge: parseInt(input),
        brennwert: (input * funde.brennwert) / 100,
        fett: (input * funde.fett) / 100,
        kohlenhydrate: (input * funde.kohlenhydrate) / 100,
        davonzucker: (input * funde.davonzucker) / 100,
        protein: (input * funde.protein) / 100,
        ballaststoffe: (input * funde.ballaststoffe) / 100,
        mahlzeit: input2,
      },
    };
    axios(options).then((response) => {
      console.log(response.status);
    });
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

    console.log(input2);
    return (
      <div>
        <table className="table">
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
            <td>{(input * funde.brennwert) / 100}</td>
            <td>{(input * funde.fett) / 100}</td>
            <td>{(input * funde.kohlenhydrate) / 100}</td>
            <td>{(input * funde.davonzucker) / 100}</td>
            <td>{(input * funde.protein) / 100}</td>
            <td>{(input * funde.ballaststoffe) / 100}</td>
          </tbody>
        </table>
        <Select options={options} onChange={handleChange} />
        <button
          type="button"
          class="btn btn-primary btn-lg"
          onClick={() => Post_entry(funde)}
        >
          Hinzufügen zu Tagesplan
        </button>
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
              <th scope="col">#</th>
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
