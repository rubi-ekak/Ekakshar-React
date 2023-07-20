import React from "react";
import "./Cardfooter.css";
// import EastIcon from "@mui/icons-material/East";

const Cardfooter = () => {
  return (
    <div >
      <div className=" main-container" >
        <div className="newshort-container">
          <div className="short-img">
            <div className="short-img-bg"></div>
          </div>
          <div className="short-content">
            <div className="short-information ">
              <div
                className="data-heading d-flex
               align-items-center p-2"
              >
                {/* <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAABCAYAAADtqZEsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAaSURBVHgB7cABEQAAAMFA+idYWno4byC6CQUCFQLMlT9OeAAAAABJRU5ErkJggg=="
                  alt="line-images"
                  className="line"
                ></img> */}
                {/* <h2 className="short-head">Let's work together</h2> */}
              </div>
              <div className=" col">
            <div className="d-flex  flex-column">
              <div>
                {" "}
                <p className="motive-text text-center">let's work together</p>
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

           
          </div>
              <div className="information-text-btn d-flex justify-content-end">
                {/* <button className="show-information d-flex justify-content-between">
                  <span> Show to More</span>
                  <span className="arr-short">
                    <EastIcon />
                  </span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardfooter;
