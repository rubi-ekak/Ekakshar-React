import React from "react";
import "./Award.css";

const Award = () => {
  return (
    <section className="main-padding bgcolor1" id="cocreate">
       <h2 className="content-heading">Co-create with Ekakshar</h2>
      <div class="container-fluid box-padding">
        <div class="row ">
          <div class="col p-0">
            <div class="">
              <div className="d-flex flex-column justify-content-between">
                <div className="mr-4">
               
                  <p className=" formula-text para-family">
                    We believe in collaborative innovation strategy and human
                    centric design. We work closely with you throughout the
                    product journey, from problem identification to delivering
                    solutions. We also involve your users, customers, suppliers,
                    and other stakeholders in the co-creation process, to ensure
                    that your products are relevant, desirable, and impactful.
                    If you are looking for a partner who can help you create
                    products that make a positive difference in the world,
                    contact us today.We would love to hear from you and discuss
                    how we can work together
                  </p>
                  
                </div>
                <div className="mr-4">
                  
                  <p className=" formula-text para-family">
                    
                    If you are looking for a partner who can help you create
                    products that make a positive difference in the world,
                    contact us today.We would love to hear from you and discuss
                    how we can work together
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  class="btn btn-outline-color rounded-pill w-25 animate__animated animate__bounce"
                >
                  <a
                    href="https://superlative-cascaron-35281e.netlify.app/"
                    className="text-decoration-none btn-text-color"
                  >
                    Create now
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
          <div class="col d-flex align-items-center justify-content-end">
            <div className="d-flex align-items-center">
              {/* <div className="oval"></div> */}
              <div>
                <img
                  src="/EkaksharImages/Co-CreatewithEkakshar.jpg"
                  style={{ height: "23rem", width: "34rem" }}
                  className="rounded-3"
                ></img>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Award;
