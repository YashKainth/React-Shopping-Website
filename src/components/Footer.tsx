import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="branding">
        <h4 className="madimi">TRENDYFIT</h4>
        <span className="poppins">wear confidence</span>
      </div>
      <div className="explore contain">
        <h4 className="madimi">Explore</h4>
        <Link
          to="/pages/Men"
          style={{
            textDecoration: "none",
            color: "white",
          }}
          className="poppins"
        >
          Men
        </Link>
        <Link
          to="/pages/Women"
          style={{
            textDecoration: "none",
            color: "white",
          }}
          className="poppins"
        >
          Women
        </Link>
      </div>
      <div className="follow contain">
        <h4 className="madimi">Follow</h4>
        <a
          href="https://www.instagram.com/yashh.kainth/"
          className="poppins"
          target="_blank"
        >
          instagram
        </a>
        <a
          href="https://twitter.com/yashkainth_"
          className="poppins"
          target="_blank"
        >
          X
        </a>
        <a
          href="https://www.linkedin.com/in/yash-kainth-aa249b2a3/"
          className="poppins"
          target="_blank"
        >
          linkedin
        </a>
      </div>
      <div className="legal contain">
        <h4 className="madimi">Legal</h4>
        <a href="" className="poppins">
          Terms
        </a>
        <a href="" className="poppins">
          Privacy
        </a>
      </div>
    </>
  );
};

export default Footer;
