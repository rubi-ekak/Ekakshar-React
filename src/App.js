import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";  
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from "./Component/Form";
import Mainpage from "./Component/Mainpage";


// import Multileveldropdown from "./Component/Multileveldropdown";
// import Aboutservice from './Component/Aboutservice';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>}></Route>
        <Route path="/Ekakshar-product-form" element={<Form/>}></Route>
       
      </Routes>
      
      
      </BrowserRouter>

      
      

    
    </div>
  );
}

export default App;
