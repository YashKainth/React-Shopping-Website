import "../App.css";
import Herosection from "../components/Herosection";
import Newarrival from "../components/Newarrival";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Herosection">
        <Herosection />
      </div>
      <div className="Newarrival">
        <Newarrival />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
