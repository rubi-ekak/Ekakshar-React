import React from "react";
import "./Carousal.css";
import { useNavigate } from "react-router-dom";

const Carousal = () => {
  const navigate = useNavigate();


const navigateform=()=>{
  navigate('/Ekakshar-product-form')
}




  return (
    <div id="home" className="margin-carousel-top">
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
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/EkaksharImages/thisengineering1.jpg"
              className="d-block w-100  image-shadow"
              alt="..."
            />
            <div class="carousel-caption  d-md-block carousal-show text-allignment  padding-box">
              <h1 className="heading-top text-capitalize">
                Bring your ideas to life with our rapid prototyping services!
              </h1>
              <p className="para-text mt-4">
                Create customized products that are quick, easy, and
                sustainable. Let us help you turn your imagination into reality!
              </p>

              <div className="car-button">
              <button
                    type="button"
                    class="btn btn-outline-color rounded-pill margin-button animate__animated animate__bounce text-decoration-none btn-text-color"
                    onClick={navigateform}
                  >
                    Create your ideas
                    {/* <a
                      href="https://superlative-cascaron-35281e.netlify.app/"
                      className="text-decoration-none btn-text-color"
                    >
                      Create your ideas
                    </a> */}
                    {/* <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} /> */}
                  </button>
                  </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/EkaksharImages/thisisengineering-raeng-xoCrMyMFt7s-unsplash1.jpg"
              class="d-block w-100  image-shadow"
              alt="..."
            />
            <div class="carousel-caption  d-md-block carousal-show text-allignment padding-box">
              <h1 className="heading-top text-capitalize">
                Need engineering support to solve operational issues?
              </h1>
              <p className="para-text mt-4">
                Our team is here to help! We’ll reimagine your processes and
                remove bottlenecks with our expert Engineering Consulting
                services. Let us help you streamline your operations and achieve
                success.
              </p>
              <div className="car-button">
              <button
                    type="button"
                    class="btn btn-outline-color rounded-pill margin-button animate__animated animate__bounce text-decoration-none btn-text-color"
                    onClick={navigateform}
                  >
                    {/* <a
                      href="https://superlative-cascaron-35281e.netlify.app/"
                      className="text-decoration-none btn-text-color"
                    > */}
                      Solve now!
                    {/* </a> */}
                    {/* <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} /> */}
                  </button>
                  </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/EkaksharImages/CAD Design Services1.jpg"
              className="d-block w-100 image-shadow"
              alt="..."
            />
            <div class="carousel-caption  d-md-block  carousal-show text-allignment padding-box">
              <h1 className="heading-top text-capitalize">
                Need affordable Computer Aided Design (CAD) services?
              </h1>
              <p className="para-text mt-4">
                Look no further! Submit your idea and receive a CAD model within
                just 5 working days, all at an affordable rate. Let us help you
                bring your designs to life quickly and cost- effectively.
              </p>
              <div className="car-button">
              <button
                    type="button"
                    class="btn btn-outline-color text-decoration-none btn-text-color rounded-pill margin-button  animate__animated animate__bounce"
                    onClick={navigateform}
                  >
                    {/* <a
                      href="https://superlative-cascaron-35281e.netlify.app/"
                      className="text-decoration-none btn-text-color"
                    > */}
                      Get designing
                    {/* </a> */}
                    {/* <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} /> */}
                  </button>
                  </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/EkaksharImages/Ekaksha-carousal1.jpg"
              className="d-block w-100 image-shadow"
              alt="..."
            />
            <div class="carousel-caption  d-md-block  carousal-show text-allignment padding-box">
              <h1 className="heading-top text-capitalize">
                Looking for flexible and cost-effective manufacturing solutions?
              </h1>
              <p className="para-text mt-4">
                Try our Manufacturing-as-a-Service (MaaS) offering! Access our
                network of manufacturers on demand, without investing in fixed
                assets or inventory. Let us help you scale up production and
                deliver your products to market.
              </p>
              <div className="car-button">
              <button
                    type="button"
                    class="btn btn-outline-color text-decoration-none btn-text-color rounded-pill margin-carousel margin-button animate__animated animate__bounce"
                    onClick={navigateform}
                  >
                    {/* <a
                      href="https://superlative-cascaron-35281e.netlify.app/"
                      className="text-decoration-none btn-text-color"
                    > */}
                      Try Now
                    {/* </a> */}
                    {/* <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} /> */}
                  </button>
              </div>
              
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
