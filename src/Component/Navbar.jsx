import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navitem, setnavitem]=useState(false);
  // const handlenav=()=>{
  //   setnavitem(true)
  //   console.log(navitem)
  // }

  return (
    <nav className="navbar navbar-expand-lg bg-navbar fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand  brand-style" href="#">
          Ekakshar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <ul className="navbar-nav  mb-2  content-display undorder-list  p-2 bd-highligh">
            <li className="nav-item px-2 text-color">
              <Link
                activeClass="active"
                to="home"
                smooth={false}
                offset={-90}
                className={navitem?"nav-link navhighlight text-color":"nav-link text-color"}
                
              >
                About Us
              </Link>
              <div className="bg-primary" style={navitem?{width:"70px",height:"2px"}:{width:"0px",height:"0px"}}></div>
              {/* <a
                className="nav-link active text-color"
                aria-current="page"
                href="#"
              >
                about us
              </a> */}
            </li>
            <li className="nav-item px-2 text-color">
              <Link
                activeClass="active"
                to="journey"
                smooth={false}
                offset={-60}
                className="nav-link nav-item  text-color"
              >
               Product Journey
              </Link>
              {/* <a className="nav-link text-color" href="#">
                Journey
              </a> */}
            </li>

            <li className="nav-item px-2 text-color">
              <Link
                activeClass="active"
                to="cocreate"
                smooth={false}
                offset={-60}
                className="nav-link nav-item  text-color"
              >
               Co-create
              </Link>
              {/* <a className="nav-link text-color" href="#">
                Journey
              </a> */}
            </li>
            <li className="nav-item px-2 text-color">
              <Link
                activeClass="active"
                to="whychoose"
                smooth={false}
                offset={-60}
                className="nav-link nav-item  text-color"
              >
                Why Choose Us
              </Link>
              {/* <a className="nav-link text-color " href="#">
                why choose
              </a> */}
            </li>
            <li className="nav-item px-2 text-color">
              <Link
                activeClass="active"
                to="getstarted"
                smooth={false}
                offset={-60}
                className="nav-link nav-item  text-color"
              >
                Get Started
              </Link>
              {/* <a className="nav-link text-color" href="#">
                get Started
              </a> */}
            </li>
            {/* <li className="nav-item px-2 text-color">
            <Link
                activeClass="active"
                to="ekakinnovator"
                smooth={false}
                offset={-60}
                className="nav-link nav-item  text-color"
              >
                 Ekak Innovators
              </Link>
             
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button
              className="btn btn-outline-color rounded-pill animate__animated animate__bounce"
              type="submit"
            >
              become a partner
            </button> */}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


