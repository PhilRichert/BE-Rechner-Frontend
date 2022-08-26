import useAxios from "../components/useAxios.js";
import axios from "../apis/get_ingredients";

const Lists = () => {
  const [list, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/ingridients",
    requestConfig: {
      headers: {
        "Content-Language": "de-DE",
      },
    },
  });
  console.log(list);

  //   const mapthroughdb =  // list.map((data) => (

  //     // //   <div>
  //     // //     `{data.id}{data.name} {data.menge} {data.brennwert} {data.fett}
  //     // //     {data.kohlenhydrate} {data.davonzucker} {data.protein}
  //     // //     {data.ballaststoffe}`
  //     // //   </div>
  //     // ))}
  return (
    <article className="col-md-5">
      <h2>Alle Lebensmittel</h2>
      {loading && <p>Loading...</p>}
      {!loading && error && <p className="errMsg">{error}</p>}
      {!loading && !error && list && (
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
                  {console.log(data)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {!loading && !error && !list && <p>No List to display.</p>}
    </article>
  );
};

export default Lists;
