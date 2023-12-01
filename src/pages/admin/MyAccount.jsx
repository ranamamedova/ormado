import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import BreadCrumb from "../BreadCrumb";
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

  const logoutFunc = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <BreadCrumb title="MY ACCOUNT" isOtherPage={true} />
      <section className="myaccount">
        <div className="container ">
          <div className="row  justify-content-center">
            <div className="col-7 col-sm-12 col-md-3  ">
              <div className="accountBox">
                <div className="title">
                  <h3>
                    Hello,<span>Webluna</span>
                  </h3>
                  <div className="accountInfo">
                    <div
                      className="info"
                      style={{ transform: "translateX(5px)" }}
                    >
                      <span className="me-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1524_6171)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.48657 9.02546C6.07095 9.02546 4.11271 10.9837 4.11271 13.3993V14.649C4.11271 14.9941 3.83296 15.2738 3.48787 15.2738C3.14279 15.2738 2.86304 14.9941 2.86304 14.649V13.3993C2.86304 10.2935 5.38078 7.77579 8.48657 7.77579C11.5924 7.77579 14.1101 10.2935 14.1101 13.3993V14.649C14.1101 14.9941 13.8304 15.2738 13.4853 15.2738C13.1402 15.2738 12.8604 14.9941 12.8604 14.649V13.3993C12.8604 10.9837 10.9022 9.02546 8.48657 9.02546Z"
                              fill="#E3B142"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.48559 7.77498C9.86594 7.77498 10.9849 6.65598 10.9849 5.27563C10.9849 3.89528 9.86594 2.77629 8.48559 2.77629C7.10524 2.77629 5.98625 3.89528 5.98625 5.27563C5.98625 6.65598 7.10524 7.77498 8.48559 7.77498ZM8.48559 9.02465C10.5561 9.02465 12.2346 7.34616 12.2346 5.27563C12.2346 3.20511 10.5561 1.52661 8.48559 1.52661C6.41507 1.52661 4.73657 3.20511 4.73657 5.27563C4.73657 7.34616 6.41507 9.02465 8.48559 9.02465Z"
                              fill="#E3B142"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1524_6171">
                              <rect
                                width="14.9961"
                                height="14.9961"
                                fill="white"
                                transform="translate(0.988281 0.902481)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p className="infoP">My Account</p>
                    </div>
                    <div className="info">
                      <span className="me-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="55"
                          viewBox="0 0 56 55"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1_2191)">
                            <path
                              d="M48.4431 41.3102C48.4431 42.4199 47.5435 43.3195 46.4339 43.3195H9.52748C8.41782 43.3195 7.51825 42.4199 7.51825 41.3102C7.51825 40.2006 8.41781 39.301 9.52748 39.301H9.56449V25.2987C9.56449 15.2766 17.8108 7.15332 27.9807 7.15332C38.1505 7.15332 46.3969 15.2766 46.3969 25.2987V39.301H46.4339C47.5435 39.301 48.4431 40.2006 48.4431 41.3102ZM13.657 39.301H42.3044V25.2987C42.3044 17.4968 35.8914 11.1718 27.9807 11.1718C20.0699 11.1718 13.657 17.4968 13.657 25.2987V39.301ZM23.9939 48.4763C22.8006 47.019 24.392 45.3287 26.2755 45.3287H29.6859C31.5694 45.3287 33.1608 47.019 31.9674 48.4763C31.8523 48.6168 31.7291 48.7518 31.598 48.8806C30.6386 49.8226 29.3374 50.3518 27.9807 50.3518C26.6239 50.3518 25.3228 49.8226 24.3634 48.8806C24.2323 48.7518 24.109 48.6168 23.9939 48.4763Z"
                              fill="#979797"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_2191">
                              <rect
                                width="54.5665"
                                height="54.5665"
                                fill="white"
                                transform="translate(0.698059 0.332031)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p>My Orders</p>
                    </div>
                    <div
                      className="info"
                      style={{ transform: "translateX(-5px)" }}
                    >
                      <span className="me-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="59"
                          height="60"
                          viewBox="0 0 59 60"
                          fill="none"
                        >
                          <path
                            d="M12.2918 29.6133L22.1252 19.7799M12.2918 29.6133L22.1252 39.4466M12.2918 29.6133H36.8752M24.5835 51.7383C27.489 51.7383 30.366 51.166 33.0504 50.0541C35.7347 48.9422 38.1737 47.3125 40.2282 45.258C42.2827 43.2035 43.9124 40.7645 45.0243 38.0802C46.1362 35.3958 46.7085 32.5188 46.7085 29.6133C46.7085 26.7078 46.1362 23.8307 45.0243 21.1464C43.9124 18.4621 42.2827 16.023 40.2282 13.9685C38.1737 11.914 35.7347 10.2843 33.0504 9.17245C30.366 8.06056 27.489 7.48828 24.5835 7.48828"
                            stroke="#979797"
                            stroke-width="4.91667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <p style={{ transform: "translateX(-10px)" }}>Logout</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 col-sm-12 col-md-8  pt-3">
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
            </div>
          </div>
        </div>
      </section>
      {/* <button
       onClick={logoutFunc}
      >Log out</button> */}
    </>
  );
};

export default MyAccount;
