import React from "react";
import { Link } from "react-router-dom";
import login from "../assets/img/login.png";
import logo from "../assets/img/logo.png";
import video from "../assets/img/video.png";
const SignIn = () => {
  return (
    <>
      <section className="singin">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-5  ">
              <div className="signImg">
                <img src={login} alt="" className="img-fluid" />
                <div className="logoTitle ">
                  <div className="logoImg">
                    <Link to="/">
                      <img src={logo} alt="" className="mt-3 mb-5" />
                    </Link>
                  </div>
                  <h2>WELCOME TO ORMADO KAFFEEHAUS</h2>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-5 ">
              <div className="formBox">
                <div className="formTitle">
                  <h5>Welcome back!</h5>
                  <p>Meet the good taste today</p>
                </div>
                <form className="mt-4">
                  <label>E-mail or phone number</label>
                  <br />
                  <input type="text" placeholder="Type your e-mail or phone number"/>
                  <br />
                  <label className="mt-3">Password</label>
                  <br />
                  <input type="text" placeholder="Type your password"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-5">
          <img src={video} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
