import React, { useState } from 'react'
// import login from "../assets/img/login.png";
// import logo from "../assets/img/logo.png";
import { Link, NavLink, } from "react-router-dom"
import ScrollToTop from '../components/ScrollToTop'
const CreateAccount = () => {
  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [check, setCheck] = useState(false)


  const [passValid, setPassValid] = useState(false)
  const [passLength, setPassLength] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [nameValid, setNameValid] = useState(false)


  const checkFunc = () => {
    setCheck(!check)
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if (pass == "" || email == "" || name == "" || !check) {
      alert("Melumatlari doldurun")
      setPassValid(true)
      setEmailValid(true)
      setNameValid(true)
      setPassLength(false)
      if (pass != "") {
        setPassValid(false)
      }
      if (email != "") {
        setEmailValid(false)
      }
      if (name != "") {
        setNameValid(false)
      }
    } else if (pass.length < 8) {
      // alert("Minimum 8 herf olmalidir")
      setPassValid(false)
      setEmailValid(false)
      setNameValid(false)
      setPassLength(true)
    }

    else {
      alert("success")
      setPassValid(false)
      setPassLength(false)
    }
  }

  return (
    <>
        <ScrollToTop/>
      <section className="singin">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 col-sm-5 col-md-6 col-lg-5 ">
              <div className="signImg">
                <img src="https://ormado-demo.webluna.space/cdn/img/login.png" alt="" className="img-fluid" />
                <div className="logoTitle ">
                  <div className="logoImg">
                    <Link to="/">
                      <img src="https://ormado-demo.webluna.space/cdn/img/logo.png" alt="" className="mt-3 mb-5" />
                    </Link>
                  </div>
                  <h2>WELCOME TO ORMADO KAFFEEHAUS</h2>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-5 ">
              <div className="formBoxUp ">
                <div className="formTitle">
                  <h3>Create your account</h3>
                  <p>It’s free and easy</p>
                </div>
                <form className="mt-4 form" onSubmit={formSubmit}>
                  <label className="label1">Full name</label>
                  <br />
                  <input
                   
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                  <span className="passTxt" style={{ "color": "red", "fontWeight": "bold" }}>{nameValid ? "Ad boş buraxıla bilməz !" : ""}</span>
                  <br />
                  <label className="label2 ">E-mail or phone number</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Type your e-mail or phone number"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                  <span className="passTxt" style={{ "color": "red", "fontWeight": "bold" }}>{emailValid ? "E-mail boş buraxıla bilməz !" : ""}</span>
                  <br />
                  <label className="label3 ">Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Type your password"
                    onChange={(e) => {
                      setPass(e.target.value)
                    }}
                  />
                  <span className="passTxt" style={{ color: passLength ? 'red' : '#718096', fontWeight: passLength ? "bold" : "normal" }}>
                    Must be 8 characters at least
                  </span>
                  <br />
                  <span className="passTxt" style={{ "color": "red", "fontWeight": "bold" }}>{passValid ? "Şifrə boş buraxıla bilməz !" : ""}</span>
                  <div className="checkBox mt-2 mb-4">
                    <input type="checkbox"
                      onChange={checkFunc}
                      checked={check}
                      className="checkbox"
                    />
                    <p className="ms-1">
                      By creating an account means you agree to the
                      <span style={{ cursor: "pointer" }}>
                        Terms and Conditions
                      </span>
                      , and our
                      <span style={{ cursor: "pointer" }}>
                        Privacy Policy
                      </span>
                    </p>
                  </div>
                  <div className="singInBox">
                    <button type="submit">Sign Up</button>
                  </div>

                  <div className="singInBox ">
                    <a href="#react">
                      <i className="fa-brands fa-apple me-2"></i>
                      Sign in with Apple
                    </a>
                  </div>

                  <div className="singInBox">
                    <a href="#react">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 79 79"
                        fill="none"
                        className="me-1"
                        style={{ transform: "translateY(-1px)" }}
                      >
                        <path
                          d="M71.5551 33.3633H68.9413V33.2286H39.7374V46.2081H58.0758C55.4004 53.7638 48.2114 59.1876 39.7374 59.1876C28.9855 59.1876 20.2681 50.4703 20.2681 39.7184C20.2681 28.9664 28.9855 20.2491 39.7374 20.2491C44.7004 20.2491 49.2157 22.1214 52.6536 25.1797L61.8318 16.0015C56.0364 10.6004 48.2844 7.26953 39.7374 7.26953C21.8175 7.26953 7.28857 21.7985 7.28857 39.7184C7.28857 57.6382 21.8175 72.1672 39.7374 72.1672C57.6573 72.1672 72.1862 57.6382 72.1862 39.7184C72.1862 37.5427 71.9623 35.4189 71.5551 33.3633Z"
                          fill="#FFC107"
                        />
                        <path
                          d="M11.0303 24.615L21.6913 32.4336C24.576 25.2916 31.5623 20.2491 39.7377 20.2491C44.7008 20.2491 49.2161 22.1214 52.654 25.1797L61.8322 16.0015C56.0368 10.6004 48.2848 7.26953 39.7377 7.26953C27.2742 7.26953 16.4655 14.3061 11.0303 24.615Z"
                          fill="#FF3D00"
                        />
                        <path
                          d="M39.7382 72.1664C48.1197 72.1664 55.7354 68.9588 61.4935 63.7427L51.4506 55.2443C48.0832 57.8052 43.9686 59.1902 39.7382 59.1868C31.2982 59.1868 24.1319 53.8052 21.4321 46.2949L10.8506 54.4477C16.2209 64.9562 27.1269 72.1664 39.7382 72.1664Z"
                          fill="#4CAF50"
                        />
                        <path
                          d="M71.5557 33.3642H68.942V33.2295H39.738V46.209H58.0765C56.7967 49.805 54.4915 52.9473 51.4456 55.2476L51.4504 55.2444L61.4933 63.7427C60.7827 64.3885 72.1869 55.9437 72.1869 39.7193C72.1869 37.5436 71.963 35.4198 71.5557 33.3642Z"
                          fill="#1976D2"
                        />
                      </svg>
                      Sign in with Google
                    </a>
                  </div>

                  <div className="account d-flex justify-content-center mt-4">
                    <p>
                      Already have an account?{" "}
                      <NavLink to="/signin" >
                        Sign In
                      </NavLink>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreateAccount