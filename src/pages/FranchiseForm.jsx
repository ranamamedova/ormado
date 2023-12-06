import React from "react";
import franchise from "../assets/img/franchiseform.png";
import Faqs from "../components/Faqs";
import ScrollToTop from "../components/ScrollToTop";
const FranchiseForm = () => {
  return (
    <>
        <ScrollToTop/>
      <section className="franchiseform pb-5">
        <div className="container">
          <div className="row  justify-content-center g-5">
            <div className="col-12 col-sm-6 ">
              <div className="franchiseFormImg">
                <div className="img">
                  <img src="https://ormado.webluna.org/cdn/img/franchiseform.png" alt="" className="img-fluid" />
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
            <div className="col-12 col-sm-6 ">
              <div className="formTitle mb-4 text-center">
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
              <form>
                <div className="row  formRow g-4">
                  <div className="col-7 col-sm-6 col-md-6 col-lg-6">
                    <div className="formInput">
                      <input type="text" required />
                      <label>First Name <span>*</span></label>
                    </div>
                  </div>
                  <div className="col-7 col-sm-6 col-md-6 col-lg-6">
                    <div className="formInput">
                      <input type="text" required />
                      <label>Last Name <span>*</span></label>
                    </div>
                  </div>
                  <div className="col-7 col-sm-12 col-md-12 col-lg-12">
                    <div className="formInput">
                      <input type="text" required />
                      <label>Email <span>*</span></label>
                    </div>
                  </div>
                  <div className="col-7 col-sm-6 col-md-6 col-lg-6">
                    <div className="formInput ">
                      <input type="text" required placeholder="+994" />
                      <label>Phone <span>*</span></label>
                    </div>
                  </div>
                  <div className="col-7 col-sm-6 col-md-6 col-lg-6">
                    <div className="formInput">
                      <input type="text" required />
                      <label>City <span>*</span></label>
                    </div>
                  </div>
                  <div className="col-7 col-sm-6 col-md-6 col-lg-6">
                    <div className="formInput">
                      <input type="text" required />
                      <label>Country <span>*</span></label>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <div className="checkBox mobilNoneCheckbox">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="me-2 mt-1"
                      required
                    />
                  </div>
                  <p>
                    Your personal data will be used to process your enquiry,
                    support your experience throughout this website, and for
                    other purposes described in our <span>Privacy policy.</span>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="me-2 mt-1"
                      required
                    />
                  </div>
                  <p>
                    Yes, please send me franchising opportunitiesBy checking
                    this box you will receive franchising opportunities from
                    Retail Food Group across all of our franchise brands via
                    email. You can unsubscribe at any time.
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="text-center submitBtn w-100">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Faqs />
    </>
  );
};

export default FranchiseForm;
