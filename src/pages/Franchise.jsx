import React from "react";
import inner from "../assets/img/inner.png";
import footicon from "../assets/img/franchiseicon.png";
// import lefticon from "../assets/img/.png";
// import rightlife from "../assets/img/rightlifw.png";
import TestDetails from "../components/TestDetails";
import Watch from "../components/Watch";
import Faqs from "../components/Faqs";
import { Link } from "react-router-dom";
import Ormadolocation from "../pages/Ormadolocation";
import ScrollToTop from "../components/ScrollToTop";
import category from "../data/CategoryData";

const Franchise = () => {
  return (
    <>
        <ScrollToTop/>
      <div className="MyFranchise ">
        <div className="width-mysize mybox">
          <div className="container">
            <div className="row ">
              <div className="leftbox col-6">
                <div className="innerbox">
                  <img src="https://ormado.webluna.org/cdn/img/rightlifw.png" alt="" className="img-fluid image-one" />
                  <div className="innerbox1">
                    <h1>
                      Why <br /> <span className="Ormado">Ormado</span> <br />
                      Franchise ?
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>

                    <Link to="/franchiseform" className="footicon">
                      {/* <div className="footicon" style={{"cursor":"pointer"}}> */}
                      <img className="img-fluid foot" src="https://ormado.webluna.org/cdn/img/franchiseicon.png" alt="" />
                      <h5>INQUIRE NOW</h5>
                      {/* </div> */}
                    </Link>
                  </div>
                  <img src="https://ormado.webluna.org/cdn/img/leftside.png" alt="" className="img-fluid lefticon" />
                </div>
              </div>

              <div className="rightbox col-6">
                <div className="innerbox2">
                  <img className="lastimage img-fluid" src="https://ormado.webluna.org/cdn/img/inner.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestDetails />
      <Watch />
      <Ormadolocation />
      <Faqs />
      <div className="franchise-blog">
      <div className="row mt-5 g-5 container">
              {category.slice(0,3).map((fd) => (
                <div
                  className={`col-6 sol-sm-6 col-md-4 col-lg-4 mobileBlog`}
                >
                  <div className="blogBox">
                    <div className="blogImg">
                    <Link to={`/category/${fd.id}`}>
                    <img src={fd.img} alt="" className="img-fluid" />
                    </Link>
                    </div>
                    <h4 className="my-3">{fd.title}</h4>
                    <div className=" date">
                      <p>{fd.date}</p>
                      <span>1K read</span>
                    </div>
                    <p className="description">
                    {fd.desc}
                    </p>
                    <a href="#react" className="readMore">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
      </div>
      </div>
    </>
  );
};

export default Franchise;
