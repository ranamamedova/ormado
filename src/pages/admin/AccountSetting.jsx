import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import MyorderData from '../../data/myorderData'
import BreadCrumb from '../BreadCrumb'

const AccountSetting = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(1)
  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");
  const logoutFunc = () => {
    localStorage.clear();
    navigate("/");
    setActive(3)
  };
  const [visible, setVisible] = useState(2)
  const func = () => {
    setVisible(fd => fd += 2)
  }
  return (

    <>
      {active == 1 && <BreadCrumb title="MY ACCOUNT" isOtherPage={true} />}
      {active == 2 && <BreadCrumb title="MY ORDER" isOtherPage={true} />}
      <section className="myaccount">
        <div className="container ">
          <div className="row  justify-content-center">
            <section className="accountSet">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-7 col-sm-12 col-md-3">
                    <div className="accountBox">
                      <div className="title">
                        <h3>
                          Hello,<span>Webluna</span>
                        </h3>
                        <div className="accountInfo">
                          <div
                            className={`info ${active == 1 ? "active" : ""}`}
                            style={{ transform: "translateX(5px)" }}
                            onClick={() => { setActive(1) }}
                          >

                            <span className="me-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                className='accountSvg'
                              >
                                <g clip-path="url(#clip0_1524_6171)">
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.48657 9.02546C6.07095 9.02546 4.11271 10.9837 4.11271 13.3993V14.649C4.11271 14.9941 3.83296 15.2738 3.48787 15.2738C3.14279 15.2738 2.86304 14.9941 2.86304 14.649V13.3993C2.86304 10.2935 5.38078 7.77579 8.48657 7.77579C11.5924 7.77579 14.1101 10.2935 14.1101 13.3993V14.649C14.1101 14.9941 13.8304 15.2738 13.4853 15.2738C13.1402 15.2738 12.8604 14.9941 12.8604 14.649V13.3993C12.8604 10.9837 10.9022 9.02546 8.48657 9.02546Z"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.48559 7.77498C9.86594 7.77498 10.9849 6.65598 10.9849 5.27563C10.9849 3.89528 9.86594 2.77629 8.48559 2.77629C7.10524 2.77629 5.98625 3.89528 5.98625 5.27563C5.98625 6.65598 7.10524 7.77498 8.48559 7.77498ZM8.48559 9.02465C10.5561 9.02465 12.2346 7.34616 12.2346 5.27563C12.2346 3.20511 10.5561 1.52661 8.48559 1.52661C6.41507 1.52661 4.73657 3.20511 4.73657 5.27563C4.73657 7.34616 6.41507 9.02465 8.48559 9.02465Z"
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
                            <p>My Account</p>
                          </div>
                          <div className={`info ${active == 2 ? "active" : ""}`} onClick={() => { setActive(2) }}>
                            <span className="me-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="56"
                                height="55"
                                viewBox="0 0 56 55"
                                fill="none"
                                className='orderSvg'
                              >
                                <g clip-path="url(#clip0_1_2191)">
                                  <path
                                    d="M48.4431 41.3102C48.4431 42.4199 47.5435 43.3195 46.4339 43.3195H9.52748C8.41782 43.3195 7.51825 42.4199 7.51825 41.3102C7.51825 40.2006 8.41781 39.301 9.52748 39.301H9.56449V25.2987C9.56449 15.2766 17.8108 7.15332 27.9807 7.15332C38.1505 7.15332 46.3969 15.2766 46.3969 25.2987V39.301H46.4339C47.5435 39.301 48.4431 40.2006 48.4431 41.3102ZM13.657 39.301H42.3044V25.2987C42.3044 17.4968 35.8914 11.1718 27.9807 11.1718C20.0699 11.1718 13.657 17.4968 13.657 25.2987V39.301ZM23.9939 48.4763C22.8006 47.019 24.392 45.3287 26.2755 45.3287H29.6859C31.5694 45.3287 33.1608 47.019 31.9674 48.4763C31.8523 48.6168 31.7291 48.7518 31.598 48.8806C30.6386 49.8226 29.3374 50.3518 27.9807 50.3518C26.6239 50.3518 25.3228 49.8226 24.3634 48.8806C24.2323 48.7518 24.109 48.6168 23.9939 48.4763Z"

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
                            className={`info ${active == 3 ? "active" : ""}`} onClick={() => { logoutFunc() }}
                            style={{ transform: "translateX(-5px)" }}
                          >
                            <span className="me-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="59"
                                height="60"
                                viewBox="0 0 59 60"
                                className='logoutSvg'
                              >
                                <path
                                  d="M12.2918 29.6133L22.1252 19.7799M12.2918 29.6133L22.1252 39.4466M12.2918 29.6133H36.8752M24.5835 51.7383C27.489 51.7383 30.366 51.166 33.0504 50.0541C35.7347 48.9422 38.1737 47.3125 40.2282 45.258C42.2827 43.2035 43.9124 40.7645 45.0243 38.0802C46.1362 35.3958 46.7085 32.5188 46.7085 29.6133C46.7085 26.7078 46.1362 23.8307 45.0243 21.1464C43.9124 18.4621 42.2827 16.023 40.2282 13.9685C38.1737 11.914 35.7347 10.2843 33.0504 9.17245C30.366 8.06056 27.489 7.48828 24.5835 7.48828"
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
                  {
                    active == 1 &&
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
                  }
                  {
                    active == 2 &&
                    <div className="myorder-card mt-5 col-10 col-sm-12 col-md-9 ">
                      <div className="myorder-card-main ">
                        <table class=" mt-1 my-2 ">
                          <thead className=' px-3'>
                            <tr>
                              <th className='ps-4'>Order</th>
                              <th >Date</th>
                              <th >Status</th>
                              <th >Total</th>
                              <th colSpan={2}></th>
                            </tr>

                          </thead>

                          <tbody>

                            {MyorderData.slice(0, visible).map((item) => (
                              <>
                                <tr>
                                  <td className='ps-4'>#711</td>
                                  <td>January 28,2023</td>
                                  <td>Processing</td>
                                  <td>$600.00</td>
                                  <td className='myorder-button'>
                                    <button className='px-1  me-3 pe-2'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 49 49" fill="none">
                                        <path d="M25.7058 21.8299C25.6513 21.5287 25.4859 21.2588 25.2423 21.0734C24.9987 20.888 24.6946 20.8005 24.3897 20.8281C24.0848 20.8558 23.8014 20.9966 23.5951 21.2228C23.3889 21.449 23.2748 21.7443 23.2754 22.0504V33.0803L23.295 33.3008C23.3495 33.602 23.5149 33.8719 23.7585 34.0573C24.002 34.2427 24.3062 34.3302 24.6111 34.3025C24.9159 34.2749 25.1994 34.1341 25.4056 33.9079C25.6119 33.6816 25.726 33.3864 25.7254 33.0803V22.0504L25.7058 21.8299ZM26.4579 16.5379C26.4579 16.0506 26.2643 15.5832 25.9198 15.2386C25.5752 14.894 25.1078 14.7004 24.6204 14.7004C24.1331 14.7004 23.6657 14.894 23.3211 15.2386C22.9765 15.5832 22.7829 16.0506 22.7829 16.5379C22.7829 17.0252 22.9765 17.4926 23.3211 17.8372C23.6657 18.1818 24.1331 18.3754 24.6204 18.3754C25.1078 18.3754 25.5752 18.1818 25.9198 17.8372C26.2643 17.4926 26.4579 17.0252 26.4579 16.5379ZM44.1004 24.5004C44.1004 19.3021 42.0354 14.3168 38.3597 10.6411C34.684 6.96539 29.6986 4.90039 24.5004 4.90039C19.3021 4.90039 14.3168 6.96539 10.6411 10.6411C6.96539 14.3168 4.90039 19.3021 4.90039 24.5004C4.90039 29.6986 6.96539 34.684 10.6411 38.3597C14.3168 42.0354 19.3021 44.1004 24.5004 44.1004C29.6986 44.1004 34.684 42.0354 38.3597 38.3597C42.0354 34.684 44.1004 29.6986 44.1004 24.5004ZM7.35039 24.5004C7.35039 22.2482 7.79399 20.0181 8.65586 17.9374C9.51772 15.8566 10.781 13.966 12.3735 12.3735C13.966 10.781 15.8566 9.51772 17.9374 8.65586C20.0181 7.79399 22.2482 7.35039 24.5004 7.35039C26.7526 7.35039 28.9827 7.79399 31.0634 8.65586C33.1441 9.51772 35.0347 10.781 36.6273 12.3735C38.2198 13.966 39.4831 15.8566 40.3449 17.9374C41.2068 20.0181 41.6504 22.2482 41.6504 24.5004C41.6504 29.0489 39.8435 33.411 36.6273 36.6273C33.411 39.8435 29.0489 41.6504 24.5004 41.6504C19.9519 41.6504 15.5898 39.8435 12.3735 36.6273C9.15726 33.411 7.35039 29.0489 7.35039 24.5004Z" fill="#E3B142" />
                                      </svg>
                                      <p className='ms-1'>Detail</p>
                                    </button>
                                    <button className='px-1 pe-2'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 22 22" fill="none" className='repeat-icon '>
                                        <path d="M19.1809 5.15009C19.1348 5.03896 19.0672 4.93803 18.982 4.85309L16.232 2.10309C16.1475 2.01554 16.0463 1.94571 15.9345 1.89766C15.8226 1.84962 15.7024 1.82433 15.5806 1.82328C15.4589 1.82222 15.3382 1.84541 15.2256 1.8915C15.1129 1.93759 15.0106 2.00566 14.9245 2.09173C14.8384 2.1778 14.7704 2.28014 14.7243 2.3928C14.6782 2.50545 14.655 2.62616 14.656 2.74787C14.6571 2.86959 14.6824 2.98987 14.7304 3.10171C14.7785 3.21355 14.8483 3.3147 14.9359 3.39926L16.1211 4.58451H7.33394C6.11836 4.58451 4.95257 5.06739 4.09303 5.92693C3.23349 6.78648 2.7506 7.95226 2.7506 9.16784V11.0012C2.7506 11.2443 2.84718 11.4774 3.01909 11.6494C3.191 11.8213 3.42415 11.9178 3.66727 11.9178C3.91038 11.9178 4.14354 11.8213 4.31545 11.6494C4.48736 11.4774 4.58394 11.2443 4.58394 11.0012V9.16784C4.58394 8.43849 4.87367 7.73902 5.38939 7.2233C5.90512 6.70757 6.60459 6.41784 7.33394 6.41784H16.1211L14.9359 7.60309C14.7689 7.77597 14.6765 8.00753 14.6786 8.24787C14.6807 8.48822 14.7771 8.71813 14.947 8.88809C15.117 9.05805 15.3469 9.15445 15.5872 9.15654C15.8276 9.15863 16.0591 9.06623 16.232 8.89926L18.982 6.14926C19.0673 6.06425 19.1349 5.96323 19.181 5.85201C19.2271 5.74079 19.2507 5.62156 19.2506 5.50117M19.1809 5.15009C19.2267 5.26052 19.2504 5.37887 19.2506 5.49842L19.1809 5.15009ZM2.82027 16.1501C2.7505 16.3176 2.73217 16.502 2.76759 16.68C2.80301 16.8579 2.8906 17.0213 3.01919 17.1493L5.76919 19.8993C5.94207 20.0662 6.17362 20.1586 6.41397 20.1565C6.65432 20.1545 6.88423 20.058 7.05419 19.8881C7.22414 19.7181 7.32055 19.4882 7.32264 19.2479C7.32473 19.0075 7.23233 18.776 7.06535 18.6031L5.8801 17.4178H14.6673C15.8828 17.4178 17.0486 16.935 17.9082 16.0754C18.7677 15.2159 19.2506 14.0501 19.2506 12.8345V11.0012C19.2506 10.7581 19.154 10.5249 18.9821 10.353C18.8102 10.1811 18.5771 10.0845 18.3339 10.0845C18.0908 10.0845 17.8577 10.1811 17.6858 10.353C17.5138 10.5249 17.4173 10.7581 17.4173 11.0012V12.8345C17.4173 13.5639 17.1275 14.2633 16.6118 14.779C16.0961 15.2948 15.3966 15.5845 14.6673 15.5845H5.8801L7.06535 14.3993C7.1529 14.3147 7.22274 14.2135 7.27078 14.1017C7.31882 13.9899 7.34411 13.8696 7.34517 13.7479C7.34622 13.6262 7.32303 13.5055 7.27694 13.3928C7.23085 13.2801 7.16278 13.1778 7.07671 13.0917C6.99065 13.0057 6.8883 12.9376 6.77564 12.8915C6.66299 12.8454 6.54228 12.8222 6.42057 12.8233C6.29885 12.8243 6.17857 12.8496 6.06673 12.8977C5.95489 12.9457 5.85375 13.0155 5.76919 13.1031L3.01919 15.8531M2.82027 16.1501C2.86604 16.0398 2.933 15.9395 3.01735 15.8549L2.82027 16.1501Z" fill="#E3B142" />
                                      </svg>
                                      <p className='ms-1'>Repeat</p>
                                    </button>
                                  </td>
                                </tr>
                              </>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="myorderNextBtn mt-4">
                        <button onClick={func}><p>Next</p></button>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

    </>
  )
}

export default AccountSetting