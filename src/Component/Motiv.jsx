import React from "react";
import "./Motiv.css";

const Motiv = () => {
  return (
    <section className="main-padding bgcolor2">
      <div className="box-padding">
        <div className="row">
          <div className="col">
            <img
              src="/togetherWork.jpg"
              alt="image"
              className="w-100 work-image img-fluid"
              style={{}}
            />
          </div>
          <div className=" col  d-flex justify-content-between">
            <div className="d-flex justify-content-between flex-column">
              <div>
                {" "}
                <p className="motive-text">let's work together</p>
                <div className="d-flex align-items-center justify-content-center">
                  <div class="share d-flex align-items-center justify-content-center ">
                    <span className="">connect with us</span>
                    <nav>
                      share
                      <a href="#">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-github"></i>
                      </a>
                    </nav>
                  </div>
                </div>
               
              </div>
              <div className="d-flex align-item-center justify-content-between">
                  <div>info@ekak.in</div>
                  <div>0512-4028469</div>
                </div>
            </div>

            {/* <span className='btn btn-bg-primary border rounded-pill fs-1 '>start</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motiv;
