import React from "react";
import franchise from "../assets/img/franchiseform.png";
const FranchiseForm = () => {
  return (
    <>
      <section className="franchiseform">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-12 col-sm-6  ">
              <div className="franchiseFormImg">
                <div className="img">
                  <img src={franchise} alt="" className="img-fluid" />
                  <div className="overlayDesc">
                    <div className="d-flex justify-content-center align-items-center">
                      <h4 className="text-center">
                        ORMADO KAFFEHAUS <span>FRANCHISE</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6  ">
              <div className="formTitle mb-5 text-center">
                <h4>
                  ORMADO
                  <br />
                  KAFFEEHAUS
                  <br />
                  <span>FRANCHISE</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
              <div className="formInput">
                <input type="text" />
                <label>First Name</label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FranchiseForm;
