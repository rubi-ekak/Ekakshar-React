import React from "react";
import "./About.css";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <section className="main-padding bgcolor1" id="home">
      <h2 className="content-heading">Welcome to Ekakshar</h2>
      <div class="container-fluid box-padding ">
        <div class="row ">
          <div class="col-md-6 col-sm-12 p-0">
            <div class="">
              <div className="d-flex flex-column justify-content-between animate__animated animate__fadeInLeft p-0">
                <div className="mr-4">
                  <p className=" formula-text para-family">
                    Ekakshar is the product development service for you if you
                    want to create products that are good for the planet and the
                    people. You will work with a team of passionate designers,
                    engineers, analysts, and makers who share your vision and
                    mission. Ekakshar specializes in sustainable design
                    practices. We help you build innovative products and
                    solutions that are eco-friendly, socially responsible, and
                    economically viable. We cover the entire product journey,
                    from identifying the problem to delivering the solution. We
                    work with various industries, such as medical equipment,
                    food and beverage, and social entrepreneurship. You can get
                    engineering services, process engineering solutions, or
                    end-to-end product development support from us. We are
                    Ekakshar. We are here for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 d-flex align-items-center justify-content-end animate__animated animate__fadeInRight wel-image">
            <div class="text-center">
              <img
                src="/EkaksharImages/Ekaksharimage.jpg"
                alt="image"
                className="rounded-2 about-image img-fluid"
                style={{ height: "23rem", width: "34rem" }}
              />
              {/* <h2>Service Formula</h2>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  ducimus ullam harum sit exercitationem earum, tenetur sequi
                  quas!
                </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
