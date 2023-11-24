import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Contact = () => {
  const location = useLocation();
  const [login, setLogin] = useState(false);
  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");
  const navigate = useNavigate();
  useEffect(() => {
    if (email && password) {
      setLogin(true);
    } else {
      setLogin(false);
      if (location.pathname === "/contact") {
        navigate("/signin");
      }
    }
  }, []);
  return (
    <>
<div className="diascuss text-light ">
  <div className="row mx-5">
    <div className="col-12 col-sm-6 col-md-4 my-5 mx-5">
      <h1 >contact us</h1>
     <h2>Have a project! Let’s diascuss </h2>
     <p >Thank you for getting in touch! <br /> Kindly. <br /> Fill the form, have a great day!</p>
    </div>
     <div className="col-12 col-sm-6 col-md-4 my-5 mx-5">
      <div className="both ">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
          <input type="text" placeholder="Your Name"/>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
          <input type="number" name="" id="" placeholder="Phone Number"/>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
          <input type="email" name="" id="" placeholder="Your Email"/>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
          <select name="country" id="country">
          <option disabled selected value="" >Country</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        </select>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
          <input type="text" placeholder="Company Name"/>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
          <select name="interested" id="interested">
          <option disabled selected value="" >Interested In</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        </select>
          </div>
          
        </div>

      </div>
      <div className="endl d-flex flex-directions-column">
      <input type="text" name="" id="" placeholder="Message" className="mb-3"/>
        <button type="submit">Submit</button>
      </div>
    </div>
  </div>
</div>
      {
        login && <div>
        <iframe
          src="https://my.atlist.com/map/f77aa50c-84cd-47b8-a0e1-8b31387435e8?share=true"
          allow="geolocation 'self' https://my.atlist.com/"
          width="100%"
          height="400px"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </div>
      }
    </>
  );
};

export default Contact;
