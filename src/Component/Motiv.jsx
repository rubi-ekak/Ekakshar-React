import React from "react";
import "./Motiv.css";

const Motiv = () => {
  return (
    <section className="main-padding bgcolor1">
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
            <div className="d-flex justify-content-center align-items-center flex-column">
              <p className="motive-text">let's work together</p>
              <button
                type=""
                class="btn border btn-outline-color rounded-pill mt-4"
              >
                connect with us
              </button>
            </div>

            {/* <span className='btn btn-bg-primary border rounded-pill fs-1 '>start</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motiv;
