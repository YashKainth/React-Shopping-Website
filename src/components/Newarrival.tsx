import { Link } from "react-router-dom";
import "./Newarrival.css";
import Men from "../products/NewarrivalsMen.json";
import Women from "../products/NewarrivalsWomen.json";

const Newarrival = () => {
  return (
    <>
      <h2 className="madimi newarrival">New Arrivals</h2>
      <div className="women_arrival arrival">
        <div className="images">
          {Women.map((w) => (
            <Link to="/pages/Women">
              <img key={w.id} src={w.img} alt="new" />
            </Link>
          ))}
        </div>
        <button className="filled">
          <Link
            to="/pages/Women"
            style={{
              textDecoration: "none",
              color: "#ef8f10",
            }}
            className="poppins"
          >
            Closet
          </Link>
        </button>
      </div>
      <div className="men_arrival arrival">
        <button className="filled">
          <Link
            to="/pages/Men"
            style={{
              textDecoration: "none",
              color: "#ef8f10",
            }}
            className="poppins"
          >
            wardrobe
          </Link>
        </button>
        <div className="images">
          {Men.map((m) => (
            <Link to="/pages/Men">
              <img key={m.id} src={m.img} alt="new" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Newarrival;
