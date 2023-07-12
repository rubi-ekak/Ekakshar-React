import React from "react";
import "./Motiv.css";

const Motiv = () => {
  return (
    <section className="main-padding bgcolor2">
      <div className="box-padding">
        <img src="/togetherWork.jpg" alt="image"  className="w-100 work-image img-fluid" style={{height:"45rem"}}/>
        <div className="mt-4 d-flex justify-content-between">
          <div className="d-flex justify-content-between">
            <p className="motive-text">let's work together</p>
          </div>
         
          {/* <span className='btn btn-bg-primary border rounded-pill fs-1 '>start</span> */}
        </div>
      </div>
    </section>
  );
};

export default Motiv;
