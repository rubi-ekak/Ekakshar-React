import React from "react";
import "./Chief.css";
import { Icon } from "@iconify/react";

const Chief = () => {
  return (
    <section className="main-padding bgcolor2">
      <div class="container-fluid box-padding">
        <div class="row gx-5">
          <div class="col animate__delay-7s animate__fadeInLeft animate__animated">
            <div class="p-3">
              <div className="d-flex flex-column justify-content-between">
                <div className="mr-4">
                  <h2 className="content-heading">
                    Why Choose Us <span className="chief-txt"></span>
                  </h2>
                  <p className=" formula-text para-family">
                    We are not just another product development services. We are
                    a team of passionate designers, engineers, analysts, and
                    makers who care about the planet and the people. We have
                    years of experience in creating sustainable products for
                    various industries, such as healthcare, education, energy,
                    transportation, agriculture, and more. We have helped our
                    clients achieve their goals while reducing their
                    environmental footprint.
                  </p>
                </div>
                <div className="mr-4">
                  <p className=" formula-text para-family">
                    We are not only experts in sustainable design practices, but
                    also in customer satisfaction. We value your feedback and
                    input throughout the product journey. We listen to your
                    needs and expectations, and we deliver on our promises. We
                    are always ready to go the extra mile for you.
                  </p>
                </div>
                <div className="mr-4">
                  <p className=" formula-text para-family">
                    We are not only a service provider, but also a partner in
                    innovation. We share your vision and mission of creating
                    products that make a positive difference in the world. We
                    support you in every step of the way, from ideation to
                    implementation. We celebrate your successes and learn from
                    your challenges. We are Ekakshar. And we are here for you.
                  </p>
                </div>
                <div className="button-margin">
                  <button
                    type="button"
                    class="btn btn-outline-color rounded-pill w-25 animate__animated animate__bounce"
                  >
                    <a
                      href="https://ekak.in/"
                      className="text-decoration-none text-dark"
                    >
                      Join us
                    </a>
                    {/* <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} /> */}
                  </button>

                  {/* <button
                    type="button"
                    class="btn btn-outline-color rounded-pill"
                  >
                    <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} />
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-color rounded-pill"
                  >
                    <Icon icon="bx:chevron-up" rotate={1} width={"1.3rem"} />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-end animate__delay-7s animate__animated animate__fadeInRight">
            <div class="text-center">
              <img
                src="/EkaksharImages/About Us.jpg"
                alt="image"
                className="rounded-2"
                style={{"height": "23rem", "width":"30rem" }}
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chief;
