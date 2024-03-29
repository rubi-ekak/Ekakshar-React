import React from "react";
import "./Chief.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Chief = () => {
  const navigate=useNavigate();
  const handleformchoose=()=>{
    navigate('/Ekakshar-product-form')
  }
  return (
    <section className="main-padding bgcolor2" id="whychoose">
      
      <div class="container-fluid box-padding">
      <h2 className="content-heading">
      Why Us <span className="chief-txt"></span>
                  </h2>
        <div class="row"> 

          <div class="col-md-6 col-sm-6 d-flex justify-content-start animate__delay-7s animate__animated animate__fadeInRight">
         
            <div class="text-center">
            
              <img
                src="/EkaksharImages/ChooseUs22.jpg"
                alt="image"
                className="rounded-2 img-fluid Ekakshar-image"
            
              />

              <div className="button-margin">
                <button
                  type="button"
                  class="btn btn-outline-color rounded-pill text-decoration-none btn-text-color width-button animate__animated animate__bounce"
                  onClick={handleformchoose}
                >
                  {/* <a
                    href="https://superlative-cascaron-35281e.netlify.app/"
                    className="text-decoration-none btn-text-color"
                  > */}
                    Choose Us
                  {/* </a> */}
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
          
          <div class="col-md-6 col-sm-6 animate__delay-7s animate__fadeInLeft animate__animated">
          
            <div class="">
           
              <div className="d-flex flex-column justify-content-between">
                <div className="mr-4">
                  
                  <p className=" formula-text para-family">
                    We are not just another product development services. We are
                    a team of passionate designers, engineers, analysts, and
                    makers who care about the planet and the people. We have
                    years of experience in creating sustainable products for
                    various industries, such as healthcare, education, energy,
                    transportation, agriculture, and more. We have helped our
                    clients achieve their goals while reducing their
                    environmental footprint.
                  </p>
                </div>
                <div className="mr-4">
                  <p className=" formula-text para-family">
                    We are not only experts in sustainable design practices, but
                    also in customer satisfaction. We value your feedback and
                    input throughout the product journey. We listen to your
                    needs and expectations, and we deliver on our promises. We
                    are always ready to go the extra mile for you.
                  </p>
                </div>
                <div className="mr-4">
                  <p className=" formula-text para-family">
                    We are not only a service provider, but also a partner in
                    innovation. We share your vision and mission of creating
                    products that make a positive difference in the world. We
                    support you in every step of the way, from ideation to
                    implementation. We celebrate your successes and learn from
                    your challenges. We are Ekakshar. And we are here for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chief;
