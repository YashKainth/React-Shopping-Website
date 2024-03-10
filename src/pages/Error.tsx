import "./Error.css";
import logo from "../assets/Logo-Black.png";

const Error = () => {
  return (
    <>
      <div className="errorpage">
        <div className="dot"></div>
        <img src={logo} alt="" className="errorimg" />
        <div className="error poppins">Error</div>
      </div>
    </>
  );
};

export default Error;
