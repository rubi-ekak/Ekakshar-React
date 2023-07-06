import React from "react";
import "./HowStarted.css";

const HowStarted = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center mt-4">
        <div
          className="position-relative border border-danger border-start-0 rounded-end-4 box-timeline1"
          style={{ height: "15rem", width: "50rem" }}
        >
          <div class="position-absolute top-0 end-50 translate-middle">
            <button type="button" class="btn btn-primary">
              step1
            </button>
          </div>

          <div class="position-absolute top-0 end-0 translate-middle">
            <button type="button" class="btn btn-primary">
              step2
            </button>
          </div>

          <div className="d-flex align-items-center justify-content-around mb-4">
            <div className="col-4 ">
              {/* <button type="button" class="btn btn-primary">step1</button> */}
              <div className="mt-4">
                <h5>Contact Us</h5>
                Fill out the form below or send us an email at ekakshar@ekak.in
               
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
          className="position-relative border border-danger border-end-0 rounded-start-4 border-top-0"
          style={{ height: "15rem", width: "50rem" }}
        >
          <div class="position-absolute top-25 end-50 translate-middle">
            <button type="button" class="btn btn-primary">
              step3
            </button>
          </div>

          <div class="position-absolute top-25 end-0 translate-middle">
            <button type="button" class="btn btn-primary">
              step4
            </button>
          </div>

          <div className="d-flex align-items-center justify-content-around">
            <div className="col-4">
              <div className="mt-4">
                <h5>Sign a contract</h5>
                If you are happy with our proposal, we will send you a contract
                that outlines the scope of work, deliverables, milestones,
                payment terms, and other details.
              </div>
            </div>
            <div className="col-4">
              <div className="mt-4">
                <h5>Start working together</h5>
                Once you sign the contract and make the first payment
                installment (if applicable), we will start working on your
                projec
              </div>
            </div>
          </div>
          <div class="position-absolute top-100 start-50 translate-middle">
            <button type="button" class="btn btn-primary">
              step5
            </button>
          </div>
        </div>

        <div className="col-3">
          <div className="mt-4">
            <h5> Schedule a consultation</h5>
            {/* <button type="button" class="btn btn-primary">step2</button> */}
            We will get back to you within 24 hours to schedule a free
            consultation with one of our experts.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowStarted;
