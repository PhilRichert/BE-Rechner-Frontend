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
  return (
    <article className="col-md-5">
      <h2>Alle Lebensmittel</h2>
      {loading && <p>Loading...</p>}
      {!loading && error && <p className="errMsg">{error}</p>}
      {!loading && !error && list && list.map((data) => <p>{data.name}</p>)}
      {!loading && !error && !list && <p>No List to display.</p>}
    </article>
  );
};

export default Lists;
