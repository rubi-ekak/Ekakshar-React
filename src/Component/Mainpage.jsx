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
import Navbar from "./Navbar";

const Mainpage = () => {
  return (
    <section>
<Navbar/>
   
    
      
      <Carousal />
      <About />

      <Journey />
      <Award />
      <Chief />

      <Timelineproduct />

      <Motiv />
  
    </section>
  );
};

export default Mainpage;
