import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="left">
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <h1>TRENDYFIT</h1>
          <span>wear confidence</span>
        </NavLink>
      </div>
      <div className="center">
        <button className="notfilled">
          <NavLink
            to="/pages/Men"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Men
          </NavLink>
        </button>
        <button className="notfilled">
          <NavLink
            to="/pages/Women"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Women
          </NavLink>
        </button>
      </div>
    </>
  );
};

export default Navbar;
