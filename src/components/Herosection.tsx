import "./Herosection.css";
import Hero from "../products/Hero.json";
import { NavLink } from "react-router-dom";

const Herosection = () => {
  return (
    <>
      <div className="slider-container">
        {Hero.map((product) => (
          <div
            key={product.id}
            className="slidercard"
            style={{ backgroundColor: product.color }}
          >
            <div className="info">
              <h2 className="madimi">{product.name}</h2>
              <p className="poppins">{product.description}</p>
              <button className="filled poppins">
                <NavLink
                  to={product.path}
                  style={{
                    textDecoration: "none",
                    color: "#ef8f10",
                  }}
                >
                  {product.button_text}
                </NavLink>
              </button>
            </div>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Herosection;
