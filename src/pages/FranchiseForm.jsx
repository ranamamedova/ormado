import React from "react";
import franchise from "../assets/img/franchiseform.png";
import Faqs from "../components/Faqs"
const FranchiseForm = () => {
  return (
    <>
      <section className="franchiseform pb-5">
        <div className="container">
          <div className="row  justify-content-center g-5">
            <div className="col-12 col-sm-6 ">
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
            <div className="col-12 col-sm-6 ">
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
              <form>
                <div className="row  formRow">
                  <div className="col-6">
                    <div className="formInput">
                      <input type="text" />
                      <label>First Name</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="formInput">
                      <input type="text" />
                      <label>Last Name</label>
                    </div>
                  </div>
                  <div className="col-12 my-5">
                    <div className="formInput">
                      <input type="text" />
                      <label>Email</label>
                    </div>
                  </div>
                  <div className="col-6 mb-5">
                    <div className="formInput ">
                      <input type="text" />
                      <label>Phone</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="formInput">
                      <input type="text" />
                      <label>City</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="formInput">
                      <input type="text" />
                      <label>Country</label>
                    </div>
                  </div>
       
                </div>
                <div className="d-flex justify-content-between my-4">
                    <div className="checkBox">
                      <input type="checkbox" name="" id="" className="me-2 mt-1" />
                    </div>
                    <p>
                      Your personal data will be used to process your enquiry,
                      support your experience throughout this website, and for
                      other purposes described in our <span>Privacy policy.</span>
                    </p>
                  </div>
                   <div className="d-flex justify-content-center">
             
                   <button className="text-center submitBtn w-100">SUBMIT</button>
                  
                   </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Faqs/>
    </>
  );
};

export default FranchiseForm;
