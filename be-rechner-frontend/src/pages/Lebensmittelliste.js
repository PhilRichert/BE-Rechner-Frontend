import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import { Link } from "react-router-dom";
import icon1 from "../pages/images/icon1.png";
import icon2 from "../pages/images/icon2.png";
import icon3 from "../pages/images/icon3.png";
import useAxios from "../components/useAxios.js";
import axios from "../apis/get_ingredients";
import "./Main.css";

export default function LebensmittelListe() {
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
    <div>
      <Navbar />
      <Banner title="Lebensmittel Liste" />
      <div className="container text-left">
        <div className="row">
          <div className="col-md-5">
            <h2>Alle Lebensmittel</h2>
            {loading && <p>Loading...</p>}

            {!loading && error && <p className="errMsg">{error}</p>}

            {!loading && !error && list && (
              <p>
                {list?.list.map(() => (
                  <p>{list}</p>
                ))}
              </p>
            )}

            {!loading && !error && !list && <p>No List to display.</p>}
          </div>

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
      <Footer />
    </div>
  );
}
