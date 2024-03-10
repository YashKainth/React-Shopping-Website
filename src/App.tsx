import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Women from "./pages/Women";
import Error from "./pages/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Men from "./pages/Men";

/* Kal ke task :
5. Cart Page 1hr
6. Cart- Component 30 mins   */

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages/Men" element={<Men />} />
          <Route path="/pages/Women" element={<Women />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
