import React from "react";
import "./Carousal.css";

const Carousal = () => {
  return (
    <div id="home" className="mt-4">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/EkaksharImages/1.jpg"
              className="d-block w-100  image-shadow"
              alt="..."
            />
            <div class="carousel-caption  d-md-block carousal-show text-allignment  padding-box">
              <h1 className="heading-top"></h1>
              <p className="para-text mt-4">
                Bring your ideas to life with our rapid prototyping services!
                Create customized products that are quick, easy, and
                sustainable. Let us help you turn your imagination into reality!
              </p>
              {/* <button className="bttn button-carousel">
              <a href="https://www.google.com" onClick={()=>gaEventTracker('Argus show more data')}>Show more</a>
            </button> */}
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/EkaksharImages/2.jpg"
              class="d-block w-100  image-shadow"
              alt="..."
            />
            <div class="carousel-caption  d-md-block carousal-show text-allignment padding-box">
              <h1 className="heading-top"></h1>
              <p className="para-text mt-4">
                Need engineering support to solve operational issues? Our team
                is here to help! We’ll reimagine your processes and remove
                bottlenecks with our expert Engineering Consulting services. Let
                us help you streamline your operations and achieve success.
              </p>
              {/* <button className="bttn button-carousel">
              <a href="https://www.facebook.com" onClick={()=>gaEventTracker('DAVE show more data')}>Show more</a>
            </button> */}
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/EkaksharImages/3.jpg"
              className="d-block w-100 image-shadow"
              alt="..."
            />
            <div class="carousel-caption  d-md-block  carousal-show text-allignment padding-box">
              <h1 className="heading-top"></h1>
              <p className="para-text mt-4">
                Need affordable Computer Aided Design (CAD) services? Look no
                further! Submit your idea and receive a CAD model within just 5
                working days, all at an affordable rate. Let us help you bring
                your designs to life quickly and cost- effectively.
              </p>
              {/* <button className="bttn button-carousel">
              <a href="https://www.instagram.com/" onClick={()=>gaEventTracker('3D Printing show more data')}>Show more</a>
            </button> */}
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousal;
