import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Component/Form";
import Mainpage from "./Component/Mainpage";
import SuccessMessage from "./Component/SuccessMessage";
import Ekaksharform from "./Component/Ekaksharform";

// import Multileveldropdown from "./Component/Multileveldropdown";
// import Aboutservice from './Component/Aboutservice';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route
            path="/Ekakshar-product-form"
            element={<Ekaksharform />}
          ></Route>
          <Route
            path="/Ekakshar-product-success"
            element={<SuccessMessage />}
          ></Route>
        </Routes>
        <SuccessMessage />
      </BrowserRouter>
    </div>
  );
}

export default App;
