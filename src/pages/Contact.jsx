import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import BreadCrumb from "./BreadCrumb";

const Contact = () => {

  return (
    <>
    <BreadCrumb title="Contact" isOtherPage={true} />
<div className="diascuss text-light ">
  <div className="row ">
    <div className="col-12 col-sm-6 col-md-4 my-5 order-md-1 order-2 ">
      <h1 >contact  us</h1>
     <h2 className="my-4">Have a project! Let’s diascuss </h2>
     <p >Thank you for getting in touch! <span>Kindly.</span>    Fill the form, have a great day!</p>
    </div>
     <div className="col-12 col-sm-6 col-md-4 my-5 order-md-2 order-1">
      <div className="left-one ">
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
          <select name="interested" id="interested" >
          <option disabled selected value="" >Interested In</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        </select>
          </div>
          
        </div>

      </div>
      <div className="endl d-flex flex-directions-column">
      <input type="text" name="" id="" placeholder="Message" className="message "/>
        <button type="submit" className="mt-3">Submit</button>
      </div>
      </div>
    </div>
  </div>
</div>
    
      
    </>
  );
};

export default Contact;
