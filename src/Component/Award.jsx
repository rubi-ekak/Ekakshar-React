import React from "react";
import "./Award.css";

const Award = () => {
  return (
    <section className="main-padding bgcolor1">
      <div class="container-fluid box-padding">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">
              <div className="d-flex flex-column justify-content-between">
                <div className="mr-4">
                  <h2 className="content-heading">Co-create with Ekakshar</h2>
                  <p className="text-start formula-text para-family">
                  We believe in collaborative innovation strategy and human centric design. We 
work closely with you throughout the product journey, from problem 
identification to delivering solutions. We also involve your users, customers, 
suppliers, and other stakeholders in the co-creation process, to ensure that your 
products are relevant, desirable, and impactful.
If you are looking for a partner who can help you create products that make a 
positive difference in the world, contact us today. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-center justify-content-end">
            <div className="d-flex align-items-center">
              <div className="oval"></div>
              <div
                className="bg-secondary rounded-3"
                style={{ width: "20rem", height: "16rem",}}
              ></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Award;
