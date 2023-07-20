import React from "react";
import Aboutservice from "./Aboutservice";
import Frontsection from "./Frontsection";
import "./Mainpage.css";
import Service from "./Service";
import Chief from "./Chief";
import Values from "./Values";
import Award from "./Award";
import Industry from "./Industry";
import Motiv from "./Motiv";
import Aboutcareer from "./Aboutcareer";

import Newtimeline from "./Newtimeline";
import About from "./About";
import Timelineproduct from "./Timelineproduct";
import Team from "./Team";
import Journey from "./Journey";
import Carousal from "./Carousal";

const Mainpage = () => {
  return (
    <div>
      {/* <Frontsection /> */}
      <Carousal/>
      <About />
      {/* <Aboutservice/> */}
      <Journey />
      <Award />
      <Chief />
      {/* <Aboutcareer/> */}
      

      {/* <Service/> */}
      {/* <Cards1/> */}

      
      {/* <Values /> */}
      

      {/* <Industry /> */}
      <Timelineproduct />
      {/* <Team /> */}
      <Motiv />
    </div>
  );
};

export default Mainpage;
