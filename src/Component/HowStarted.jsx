import React from "react";
import "./HowStarted.css";
import { useNavigate } from "react-router-dom";

const HowStarted = () => {

  const navigate=useNavigate();
  const handleformgetstart=()=>{
    navigate('/Ekakshar-product-form')
  }
  return (
    <div>
      <div className="d-flex flex-column align-items-center mt-4">
        <div
          className="position-relative border box-1 border-danger border-start-0 rounded-end-4 box-timeline1 border-bottom-0"
          
        >
          <div class="position-absolute top-0 end-50 translate-middle">
            <button type="" class="btn border bgbuttoncolor rounded-circle btn-sm">
              1
            </button>
          </div>

          <div class="position-absolute top-0 end-0 translate-middle">
            <button type="" class="btn border bgbuttoncolor rounded-circle btn-sm">
              2
            </button>
          </div>

          <div className="d-flex align-items-center justify-content-around ">
            <div className="col-4 ">
              {/* <button type="button" class="btn btn-primary">step1</button> */}
              <div className="">
                <h5>Contact Us</h5>
                <p className="hows-text-para">Tell us about yourself, your project idea, your budget, and your
                timeline.</p>
                
              </div>
            </div>

            <div className="col-4">
              <div className="mt-4">
                <h5> Schedule a consultation</h5>
                {/* <button type="button" class="btn btn-primary">step2</button> */}

                <p className="hows-text-para">We will get back to you within 24 hours to schedule a free
                consultation with one of our experts.</p>
                
              </div>
            </div>
          </div>
        </div>
        <div
          className="position-relative border border-danger box-1 border-end-0 rounded-start-4 "
          
        >
          <div class="position-absolute top-25 end-50 translate-middle ">
            <button type="" class="btn border bgbuttoncolor rounded-circle ml-4 btn-sm">
              3
            </button>
          </div>

          <div class="position-absolute top-25 end-0 translate-middle margin-align">
            <button type="" class="btn border bgbuttoncolor rounded-circle btn-sm">
              4
            </button>
          </div>

          <div className="d-flex align-items-center justify-content-around">
            <div className="col-4 box-timeline1">
              <div className="mt-4">
                <h5>Sign a contract</h5>
                <p className="hows-text-para"> Happy with our proposal? We will share the scope of work,
                deliverables, milestones, and payment terms.</p>
               
              </div>
            </div>
            <div className="col-4 box-timeline1">
              <div className="mt-4">
                <h5>Start working together</h5>
                <p className="hows-text-para"> Give us the go ahead - we start right away with a dedicated
                project manager.</p>
               
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 position-relative">
          
          <div class="position-absolute top-25 start-50 translate-middle">
            <button type="" class="btn border bgbuttoncolor rounded-circle btn-sm">
              5
            </button>
          </div>
          
          <div class="position-absolute  start-100 translate-middle">
          <button type="button" class="btn btn-outline-color btn-text-color btn-sm"  onClick={handleformgetstart}>
            {/* <a href="https://superlative-cascaron-35281e.netlify.app/">Start Now</a> */}Start Now
            </button>
          </div>
          <div className=" mt-4">
            <h5> Enjoy the results</h5>
            {/* <button type="button" class="btn btn-primary">step2</button> */}
            <p className="hows-text-para"> You will receive the final product, along with the documentation,
            source files, and support.</p>
           
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default HowStarted;
