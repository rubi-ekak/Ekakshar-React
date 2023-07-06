import React from "react";
import "./ProductForm.css";
import Selectbutton from "./Selectbutton";

const ProductForm = () => {
  
  return (
    <div>
      <div class="container d-flex justify-content-around">
        <div class="cta-form col-md-3 " style={{ height: "20rem" }}>
          Ekakshar
        </div>
        <form action="" class="form">
          <div className="row p-4">
            <h2 className="text-start ml-4">Customer Information</h2>
            <div className="col-md-6  d-flex align-items-center justify-content-center">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  class="form__input border-start-0 border-end-0 border-top-0"
                  id="name"
                />
                <label for="name" class="form__label">
                  Name
                </label>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div>
                <input
                  type="text"
                  placeholder="Last_Name"
                  class="form__input border-start-0 border-end-0 border-top-0"
                  id="name"
                />
                <label for="last_name" class="form__label">
                  Last Name
                </label>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="">
                <input
                  type="text"
                  placeholder="email"
                  class="form__input border-start-0 border-end-0 border-top-0"
                  id="name"
                />
                <label for="last_name" class="form__label">
                  email
                </label>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  class="form__input border-start-0 border-end-0 border-top-0"
                  id="subject"
                />
                <label for="phone_number" class="form__label">
                  Phone Number
                </label>
              </div>
            </div>
            <div className="ml-4 col-md-6">
              <h6>Select Services</h6>
              <Selectbutton />
              {/* <h6>Select Services</h6> */}

              {/* <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
                <label class="form-check-label" for="flexSwitchCheckChecked">
                  3D design
                </label>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
                <label class="form-check-label" for="flexSwitchCheckChecked">
                  Product design
                </label>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
                <label class="form-check-label" for="flexSwitchCheckChecked">
                  Checked switch checkbox input
                </label>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
                <label class="form-check-label" for="flexSwitchCheckChecked">
                  Checked switch checkbox input
                </label>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                />
                <label class="form-check-label" for="flexSwitchCheckChecked">
                  Others
                </label>
              </div> */}
            </div>
          </div>

          <div className="row p-4 mt-4 d-none">
            <div className="col-md-6  d-flex align-items-center justify-content-center">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  class="form__input border-start-0 border-end-0 border-top-0"
                  id="name"
                />
                <label for="name" class="form__label">
                  Product Name
                </label>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center justify-content-center">
              
            </div>

            <div className="col-md-6 d-flex align-items-center justify-content-between">
              <div>
                <select
                  class="form-select"
                  aria-label="Disabled select example"
                >
                  <option selected>Select Material</option>
                  <option value="1">ABS(colour-black)</option>
                  <option value="1">ABS(colour-white)</option>
                  <option value="2">PETG(colour-Red)</option>
                  <option value="2">PETG(colour-Black)</option>
                  <option value="2">PETG(colour-White)</option>
                  <option value="2">PETG(colour-Grey)</option>
                  <option value="2">PETG(colour-Blue)</option>
                  <option value="3">TPU(colour-white)</option>
                  <option value="3">TPU(colour-Black)</option>
                  <option value="3">PLA(colour-Black)</option>
                  <option value="3">PLA(colour-white)</option>
                  <option value="3">PLA(colour-Orange)</option>
                  <option value="3">PLA(colour-Green)</option>
                  <option value="3">PLA(colour-Brown)</option>
                  <option value="3">PLA(colour-Blue)</option>
                </select>
              </div>

              {/* <div>
                <select
                  class="form-select"
                  aria-label="Disabled select example"
                >
                  <option selected>Select Colour</option>
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3">Three</option>
                </select>
              </div> */}
            </div>

            <div className="col-md-6 justify-content-between d-flex">
              <div class="input-group mt-2">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <label>Dimension</label>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="width×height"
                />
                <div class="input-group-append">
                  <span class="input-group-text">inch/cm/mm</span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <h6>Prototype Image</h6>
              <input
                type="file"
                class="form-control"
                aria-label="file example"
                placeholder="for prototype"
              />
              <div class="invalid-feedback">
                Example invalid form file feedback
              </div>
            </div>
            <div className="submit_button">
              <input
                class="btn btn-primary"
                type="submit"
                value="Submit"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
