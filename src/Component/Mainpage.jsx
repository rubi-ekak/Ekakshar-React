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
import Cards1 from "./Card1";
import Newtimeline from "./Newtimeline";
import About from "./About";
import Timelineproduct from "./Timelineproduct";
import Team from "./Team";
import Journey from "./Journey";

const Mainpage = () => {
  return (
    <div>
      <Frontsection />
      <About />
      {/* <Aboutservice/> */}
      <Journey />
      {/* <Aboutcareer/> */}
      <Timelineproduct />

      {/* <Service/> */}
      {/* <Cards1/> */}

      <Chief />
      <Values />
      <Award />

      <Industry />
      <Team />
      <Motiv />
    </div>
  );
};

export default Mainpage;
