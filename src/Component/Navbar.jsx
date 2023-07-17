import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-navbar fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-color brand-style" href="#">
          ekakshar
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
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto undorder-list">
            <li className="nav-item px-2 text-color">
              <Link
                activeClass="active"
                to="home"
                smooth={false}
                offset={-90}
                className="nav-link nav-item active text-color"
              >
                About Us
              </Link>
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
                Journey
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
            <li className="nav-item px-2 text-color">
            <Link
                activeClass="active"
                to="ekakinnovator"
                smooth={false}
                offset={-60}
                className="nav-link nav-item  text-color"
              >
                 Ekak Innovators
              </Link>
              {/* <a className="nav-link text-color" href="#">
                ekak Innovator
              </a> */}
            </li>
          </ul>
          <form className="d-flex" role="search">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
            <button
              className="btn btn-outline-color rounded-pill animate__animated animate__bounce"
              type="submit"
            >
              become a partner
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
