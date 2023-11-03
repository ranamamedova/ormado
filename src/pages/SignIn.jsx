import React from "react";
import { Link } from "react-router-dom";
import login from "../assets/img/login.png";
import logo from "../assets/img/logo.png";

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
              <div className="formBox ">
                <div className="formTitle">
                  <h5>Welcome back!</h5>
                  <p>Meet the good taste today</p>
                </div>
                <form className="mt-4 ">
                  <label className="">E-mail or phone number</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Type your e-mail or phone number"
                  />
                  <br />
                  <label className="mt-4">Password</label>
                  <br />
                  <input type="text" placeholder="Type your password" />
                  <div className="d-flex justify-content-end  forgotBox">
                    <a href="#react">Forgot password ?</a>
                  </div>
                  <div className="checkBox">
                    <input type="checkbox" />
                    <p>Remember me</p>
                  </div>
                  <div className="singInBox">
                    <a href="#react">Sign in</a>
                  </div>
                  <div className="account d-flex justify-content-center mt-4">
                  <p>
                    Don’t have an account? <a href="#react">Sign Up</a>
                  </p>
                </div>
                </form>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
