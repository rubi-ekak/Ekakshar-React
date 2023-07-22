import React from "react";
import "./Journey.css";
import { Icon } from "@iconify/react";

const Journey = () => {
  return (
    <div className="main-padding bgcolor2" id="journey">
      <h2 className="content-heading">Product Journey</h2>
      <div class="timeline pl-4 pr-4">
        <div class="timeline__event timeline__event--type1 animate__animated animate__delay-1s  animate__fadeInUp">
          <div class="timeline__event__icon ico">
            <div class="timeline__event__date problem-image">
              <img
                src="/EkaksharImages/problem-identification3.jpg"
                className="w-100%"
                // style={{ height: "9rem", width: "11rem" }}
              ></img>
            </div>
          </div>
          <div class="timeline__event__content ">
            <div class="timeline__event__title problem-title">
              Problem identification
            </div>
            <div class="timeline__event__description">
              <p className="para-family">
                Using design thinking, we understand your target users’ needs
                and define the problem your product solves. We conduct market
                research and competitive analysis to identify opportunities and
                challenges in your industry.
              </p>
            </div>
          </div>
        </div>
        <div class="timeline__event   timeline__event--type2 animate__animated animate__delay-2s  animate__fadeInUp">
          <div class="timeline__event__icon ico2">
            <div class="timeline__event__date">
              <img
                src="/EkaksharImages/brainstorming-ideas2.jpg"
                className="w-100%"
              ></img>
            </div>
          </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">Brainstorming ideas</div>
            <div class="timeline__event__description">
              <p className="para-family">
                Collaborative design generates creative solutions for users.
                Circular economy, biomimicry, and cradle-to-cradle design
                minimize environmental impact. Co- creation with users,
                customers, suppliers, and stakeholders ensures relevant and
                impactful ideas
              </p>
            </div>
          </div>
        </div>
        <div class="timeline__event  timeline__event--type3 animate__animated animate__delay-3s  animate__fadeInUp">
          <div class="timeline__event__icon ico3">
            <div class="timeline__event__date">
              <img
                src="/EkaksharImages/prototype-images1.jpg"
                className="w-100%"
              ></img>
            </div>
          </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">Prototype iterations</div>
            <div class="timeline__event__description">
              <p className="para-family">
                We use rapid prototyping and 3D printing to create physical
                models and prototypes. We help test and validate prototypes with
                real users and stakeholders. Our prototyping and 3D printing use
                sustainable materials and processes, such as biodegradable
                plastics and recyclable material.
              </p>
            </div>
          </div>
        </div>
        <div class="timeline__event  timeline__event--type1 animate__animated animate__delay-4s  animate__fadeInUp">
          <div class="timeline__event__icon ico4">
            <div class="timeline__event__date">
              <img
                src="/EkaksharImages/realworld-development2.jpg"
                className="w-100%"
              ></img>
            </div>
          </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title Real-world">
              Real world development
            </div>
            <div class="timeline__event__description">
              <p className="para-family">
                We evaluate product performance, durability, and safety. We
                conduct LCA and carbon footprint analysis to quantify
                environmental benefits. We help track and reduce carbon
                emissions throughout the product life cycle. We optimize supply
                chain and logistics using digital technologies.
              </p>
            </div>
          </div>
        </div>

        <div class="timeline__event  timeline__event--type1 animate__animated animate__delay-4s  animate__fadeInUp">
          <div class="timeline__event__icon ico5">
            <div class="">
              <img
                src="/EkaksharImages/delivering-solutions3.jpg"
                className="w-100%"
              ></img>
            </div>
          </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title deliver-solutions">
              Delivering solutions
            </div>
            <div class="timeline__event__description">
              <p className="para-family">
                We help scale up production and deliver products to market. We
                partner with local manufacturers using sustainable materials and
                processes. We offer Manufacturing-as-a-Service (MaaS) to access
                our network of manufacturers on demand, without investing in
                fixed assets or inventory.
              </p>
            </div>
          </div>
        </div>

        <div className="button-margin">
                <button
                  type="button"
                  class="btn btn-outline-color rounded-pill width-button animate__animated animate__bounce"
                >
                  <a
                    href="https://superlative-cascaron-35281e.netlify.app/"
                    className="text-decoration-none btn-text-color"
                  >
                   Start  Product Journey
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
  );
};

export default Journey;
