import React, { useEffect, useState } from "react";
import franchise from "../assets/img/franchiseform.png";
import Faqs from "../components/Faqs";
import ScrollToTop from "../components/ScrollToTop";
import axios from "axios";


const FranchiseForm = () => {

  useEffect(() => {
    axios.get('https://ormadoapi.webluna.org/api/client/franchiseForm').then((res) => {
      console.log(res.data, "FormData");
    });
  }, []);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [city, setCity] = useState()
  const [country, setCountry] = useState()

  const FranchiseForm = async(e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('name',firstName)
    formData.append('surname',lastName)
    formData.append('email',email)
    formData.append('phone',phone)
    formData.append('city',city)
    formData.append('country',country)



    
    console.log(formData.get('name'));
    console.log(formData.get('surname'));
    console.log(formData.get('phone'));
    console.log(formData.get('email'));
    console.log(formData.get('city'));
    console.log(formData.get('country'));

   await axios.post(
      `https://ormadoapi.webluna.org/api/client/franchiseForm`, formData)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  };
  return (
    <>
      <ScrollToTop />
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
              <form onSubmit={FranchiseForm} method="POST">
                <div className="row  formRow g-4">
                  <div className="col-7 col-sm-6 col-md-6 col-lg-6">
                    <div className="formInput">
                      <input type="text" required onChange={(e) => setFirstName(e.target.value)} />
                      <label>First Name <span>*</span></label>
                    </div>
                  </div>
                  <div className="col-7 col-sm-6 col-md-6 col-lg-6">
                    <div className="formInput">
                      <input type="text" required onChange={(e) => setLastName(e.target.value)} />
                      <label>Last Name <span>*</span></label>
                    </div>
                  </div>
                  <div className="col-7 col-sm-12 col-md-12 col-lg-12">
                    <div className="formInput">
                      <input type="text" required onChange={(e) => setEmail(e.target.value)} />
                      <label>Email <span>*</span></label>
                    </div>
                  </div>
                  <div className="col-7 col-sm-6 col-md-6 col-lg-6">
                    <div className="formInput ">
                      <input type="text" required placeholder="+994" onChange={(e) => setPhone(e.target.value)} />
                      <label>Phone <span>*</span></label>
                    </div>
                  </div>
                  <div className="col-7 col-sm-6 col-md-6 col-lg-6">
                    <div className="formInput">
                      <input type="text" required onChange={(e) => setCity(e.target.value)} />
                      <label>City <span>*</span></label>
                    </div>
                  </div>
                  <div className="col-7 col-sm-6 col-md-6 col-lg-6">
                    <div className="formInput">
                      <input type="text" required onChange={(e) => setCountry(e.target.value)} />
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
                  <button type="submit" className="text-center submitBtn w-100">
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
