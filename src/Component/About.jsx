import React from "react";
import "./About.css";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <section className="main-padding bgcolor1" id="home">
      <h2 className="content-heading">Welcome to Ekakshar</h2>
      <div class="container-fluid box-padding ">
     
        <div class="row ">
       
          <div class="col p-0">
         
            <div class="">
           
              <div className="d-flex flex-column justify-content-between animate__animated animate__fadeInLeft p-0">
              
                <div className="mr-4">
                
                  <p className=" formula-text para-family">
                    Ekakshar is our flagship product development service that
                    specializes in sustainable design practices. It is built on
                    our vision of accessibility through innovation where we help
                    our clients build innovative products and solutions. We help
                    our clients create innovative products that are
                    environmentally friendly, socially responsible, and
                    economically viable. We offer a range of services that cover
                    the entire product journey, from problem identification to
                    delivering solutions
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-center justify-content-end animate__animated animate__fadeInRight">
            <div class="text-center">
        
              <img
                src="/EkaksharImages/Ekaksharimage.jpg"
                alt="image"
                className="rounded-2 about-image"
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
