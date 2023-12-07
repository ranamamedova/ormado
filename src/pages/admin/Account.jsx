import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import BreadCrumb from "../BreadCrumb";
import AccountSetting from "./AccountSetting";
const MyAccount = () => {
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
      if (location.pathname === "/myaccount") {
        navigate("/signin");
      }
    }
  }, []);

 
  return (
    <>
      {/* <BreadCrumb title="MY ACCOUNT" isOtherPage={true} /> */}
      {/* <section className="myaccount">
        <div className="container ">
          <div className="row  justify-content-center"> */}
            {/* <div className="col-7 col-sm-12 col-md-3 "> */}
             <AccountSetting/>
            {/* </div> */}
            {/* <div className="col-10 col-sm-12 col-md-8  pt-3">
              <div className="formDetails">
                <form>
                  <p>EDIT ACCOUNT INFORMATION</p>
                  <div className="row g-4">
                    <div className="col-6 ">
                      <div className="inputBox">
                        <label>FIRST NAME</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-6 ">
                      <div className="inputBox">
                        <label>LAST NAME</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-6 ">
                      <div className="inputBox">
                        <label>PHONE</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-6 ">
                      <div className="inputBox">
                        <label>EMAIL</label>
                        <input type="email" />
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="inputBox">
                        <label>YOUR ADDRESS</label>
                        <input type="email" />
                      </div>
                    </div>
                    <div className="col-12 ">
                      <label className="genderLabel">GENDER</label>
                      <div className="genderBox mt-2">
                        <button className="genderChoose">FEMALE</button>
                        <button className="genderChoose">MALE</button>
                        <button className="genderChoose">RATHER NOT SAY</button>
                      </div>
                    </div>
                    <div className="col-12  col-sm-6 col-md-6">
                      <div className="inputBox">
                        <label>NEW PASSWORD</label>
                        <input type="password" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 ">
                      <div className="inputBox">
                        <label>CONFIRIM PASSWORD</label>
                        <input type="password" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex checkBox">
                        <input type="checkbox" name="" id="" />
                        <p>Save in address</p>
                      </div>

                      <div className="inputBox">
                        <input
                          type="email"
                          style={{
                            borderRadius: "0",
                            border: "none",
                            borderBottom: "1px solid #e6e8ec",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <button className="updateBtn">Update profile</button>
                    <button className="clearBtn ms-4 mt-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 52 52"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.1273 11.7602C12.9508 10.9367 14.2859 10.9367 15.1094 11.7602L26.2704 22.9212L37.4314 11.7602C38.2549 10.9367 39.59 10.9367 40.4135 11.7602C41.237 12.5837 41.237 13.9188 40.4135 14.7423L29.2525 25.9033L40.4135 37.0642C41.237 37.8877 41.237 39.2229 40.4135 40.0463C39.59 40.8698 38.2549 40.8698 37.4314 40.0463L26.2704 28.8854L15.1094 40.0463C14.2859 40.8698 12.9508 40.8698 12.1273 40.0463C11.3038 39.2229 11.3038 37.8877 12.1273 37.0642L23.2883 25.9033L12.1273 14.7423C11.3038 13.9188 11.3038 12.5837 12.1273 11.7602Z"
                          fill="#777E91"
                        />
                      </svg>{" "}
                      Clear all
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
          {/* </div>
        </div>
      </section> */}
      {/* <button
       onClick={logoutFunc}
      >Log out</button> */}
    </>
  );
};

export default MyAccount;