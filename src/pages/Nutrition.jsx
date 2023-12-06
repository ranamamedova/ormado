import React from "react";
import BreadCrumb from "./BreadCrumb";
// import nutrition from "../assets/img/nutrition.png";
import Faqs from "../components/Faqs"
import ScrollToTop from "../components/ScrollToTop";

const Nutrition = () => {
  return (
    <>
      <BreadCrumb title="NUTRITION AND ALLERGENS" />
      <ScrollToTop/>
      <div className="nutrition" style={{"marginBottom":"100px"}}>
        <div className="container my-5 ">
          <div className="row justify-content-center">
            <div className="col-12  col-sm-12 col-md-5 col-lg-5   ">
              <img src="https://ormado.webluna.org/cdn/img/nutrition.png" alt="" className="img-fluid" />
            </div>
            <div className="col-12  col-sm-12 col-md-5 col-lg-5 ms-4" style={{"marginTop":"50px"}}>
              <div className="nutritionDesc">
                <h2>
                  Product <br /> <span>Information</span>
                </h2>
                <div className="desc my-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat
                  </p>
                </div>
                <button className="nutritionBtn">
                  <a href="#react"> Back To Menu</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faqs/>
    </>
  );
};

export default Nutrition;
