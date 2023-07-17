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
              src="/EkaksharImages/1.jpg"
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
              <button
                    type="button"
                    class="btn btn-outline-color rounded-pill mt-4 animate__animated animate__bounce"
                  >
                    <a
                      href="https://ekak.in/"
                      className="text-decoration-none text-dark"
                    >
                      Join us
                    </a>
                    {/* <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} /> */}
                  </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/EkaksharImages/2.jpg"
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
              <button
                    type="button"
                    class="btn btn-outline-color rounded-pill mt-4 animate__animated animate__bounce"
                  >
                    <a
                      href="https://ekak.in/"
                      className="text-decoration-none text-dark"
                    >
                      Join us
                    </a>
                    {/* <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} /> */}
                  </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/EkaksharImages/3.jpg"
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
              <button
                    type="button"
                    class="btn btn-outline-color rounded-pill mt-4  animate__animated animate__bounce"
                  >
                    <a
                      href="https://ekak.in/"
                      className="text-decoration-none text-dark"
                    >
                      Join us
                    </a>
                    {/* <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} /> */}
                  </button>
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
              <button
                    type="button"
                    class="btn btn-outline-color rounded-pill mt-4 animate__animated animate__bounce"
                  >
                    <a
                      href="https://ekak.in/"
                      className="text-decoration-none text-dark"
                    >
                      Join us
                    </a>
                    {/* <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} /> */}
                  </button>
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
