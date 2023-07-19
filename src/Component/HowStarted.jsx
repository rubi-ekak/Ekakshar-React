import React from "react";
import "./HowStarted.css";

const HowStarted = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center mt-4">
        <div
          className="position-relative border border-danger border-start-0 rounded-end-4 box-timeline1 border-bottom-0"
          style={{ height: "10rem", width: "50rem" }}
        >
          <div class="position-absolute top-0 end-50 translate-middle">
            <button type="" class="btn border bgbuttoncolor rounded-circle ">
              1
            </button>
          </div>

          <div class="position-absolute top-0 end-0 translate-middle">
            <button type="" class="btn border bgbuttoncolor rounded-circle ">
              2
            </button>
          </div>

          <div className="d-flex align-items-center justify-content-around ">
            <div className="col-4 ">
              {/* <button type="button" class="btn btn-primary">step1</button> */}
              <div className="mt-4">
                <h5>Contact Us</h5>
                Tell us about yourself, your project idea, your budget, and your
                timeline.
              </div>
            </div>

            <div className="col-4">
              <div className="mt-4">
                <h5> Schedule a consultation</h5>
                {/* <button type="button" class="btn btn-primary">step2</button> */}
                We will get back to you within 24 hours to schedule a free
                consultation with one of our experts.
              </div>
            </div>
          </div>
        </div>
        <div
          className="position-relative border border-danger border-end-0 rounded-start-4 "
          style={{ height: "10rem", width: "50rem" }}
        >
          <div class="position-absolute top-25 end-50 translate-middle ">
            <button type="" class="btn border bgbuttoncolor rounded-circle ml-4">
              3
            </button>
          </div>

          <div class="position-absolute top-25 end-0 translate-middle margin-align">
            <button type="" class="btn border bgbuttoncolor rounded-circle ">
              4
            </button>
          </div>

          <div className="d-flex align-items-center justify-content-around">
            <div className="col-4 box-timeline1">
              <div className="mt-4">
                <h5>Sign a contract</h5>
                Happy with our proposal? We will share the scope of work,
                deliverables, milestones, and payment terms.
              </div>
            </div>
            <div className="col-4 box-timeline1">
              <div className="mt-4">
                <h5>Start working together</h5>
                Give us the go ahead - we start right away with a dedicated
                project manager.
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 position-relative">
          
          <div class="position-absolute top-25 start-50 translate-middle">
            <button type="" class="btn border bgbuttoncolor rounded-circle ">
              5
            </button>
          </div>
          
          <div class="position-absolute  start-100 translate-middle">
          <button type="button" class="btn btn-outline-color">Read more</button>
          </div>
          <div className=" mt-4">
            <h5> Enjoy the results</h5>
            {/* <button type="button" class="btn btn-primary">step2</button> */}
            You will receive the final product, along with the documentation,
            source files, and support.
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default HowStarted;
