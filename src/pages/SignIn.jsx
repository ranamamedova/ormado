import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate,} from "react-router-dom";
import login from "../assets/img/login.png";
import logo from "../assets/img/logo.png";

const SignIn = () => {
  const userEmail = localStorage.getItem("userEmail")
  const navigate = useNavigate()

  const data = {
    email: "admin@gmail.com",
    pass: "123",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [check, setCheck] = useState(false);
  const [valid, setValid] = useState(false);
  const [passValid, setPassValid] = useState(false);

  const checkFunc = () => {
    setCheck(!check);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !check) {
      alert("Məlumatları doldurun");
    } else {
      if (email != data.email) {
        setValid(true);
        setPassValid(false);
      } else if (password != data.pass) {
        setPassValid(true);
        setValid(false);  
      } else {
        if (email == data.email && password == data.pass) {
          setValid(false);
          setPassValid(false);
          localStorage.setItem("userEmail",email)
          localStorage.setItem("userPassword",password)
          navigate("/myaccount")
        } else {
          alert("Email ve Password sehvdir");
        }
      }
    }
  };

  return (
    <>
        <section className="singin">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-5 col-lg-5   ">
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
              <div className="col-12 col-sm-5 col-md-5 col-lg-5  ">
                <div className="formBox ">
                  <div className="formTitle">
                    <h5>Welcome back!</h5>
                    <p>Meet the good taste today</p>
                  </div>
                  <form className="mt-4 " onSubmit={formSubmit}>
                    <label className="">E-mail or phone number</label>
                    <br />
                    <input
                      type="email"
                      placeholder="Type your e-mail or phone number"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <p className="valid mt-1">
                      {valid ? "E-mail yanlışdır" : " "}
                    </p>
                    <label className="mt-3">Password</label>
                    <br />
                    <input
                      type="password"
                      placeholder="Type your password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <p className="valid mt-1">
                      {passValid ? "Şifrə yanlışdır" : " "}
                    </p>
                    <div className="d-flex justify-content-end  forgotBox">
                      <a href="#react">Forgot password ?</a>
                    </div>
                    <div className="checkBox">
                      <input
                        type="checkbox"
                        onChange={checkFunc}
                        checked={check}
                      />
                      <p className="ms-2">Remember me</p>
                    </div>
                    <div className="singInBox">
                      <button type="submit">Sign In</button>
                    </div>
                    <div className="account d-flex justify-content-center mt-3">
                      <p className="tag">
                        Don’t have an account?{" "}  
                        <NavLink to="/signup" >
                          Sign Up
                        </NavLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <p>{userEmail}</p>
        </section>
      
    </>
  );
};

export default SignIn;
