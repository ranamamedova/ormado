import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/img/logo.png";
const Header = () => {
  // NAV ACTIVE COLOR
  const [active, setActive] = useState();

  // NAVBAR SCROLL BG
  const [navbarBg,setNavbarBg] = useState(false)

    const scrollNavbar = () =>{
      if (window.scrollY >= 400) {
          setNavbarBg(true)
      } else {
        setNavbarBg(false)
      }
    }


  const langArr = ["AZERBAIJAN","ENGLISH","GERMANY"];

  const langArrSlice = langArr.map(fd=>{
    return window.innerWidth < 768 ? fd.slice (0,2) : fd
  })
     window.addEventListener('scroll',scrollNavbar)

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className={`row align-items-center ${navbarBg ? "row align-items-center navbarActive" : "row align-items-center"}`}>
            <div className="col-7 ">
              <div className="d-flex align-items-center justify-content-between">
                <div className="logo">
                  <img src="https://ormado.webluna.org/cdn/img/logo.png" alt="" />
                </div>

                <div class="search-container">
                  <div className="search-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 58 58"
                      fill="none"
                    >
                      <path
                        d="M54.8886 57.5162C56.3808 59.0085 58.6841 56.7052 57.1918 55.2454L45.0268 43.048C49.2941 38.3264 51.6529 32.1865 51.6446 25.8223C51.6446 11.5811 40.0635 0 25.8223 0C11.5811 0 0 11.5811 0 25.8223C0 40.0635 11.5811 51.6446 25.8223 51.6446C32.2454 51.6446 38.182 49.2765 42.7236 45.3512L54.8886 57.5162ZM3.24076 25.8223C3.24076 13.3653 13.3945 3.24401 25.819 3.24401C38.276 3.24401 48.3973 13.3653 48.3973 25.8223C48.3973 38.2793 38.276 48.4006 25.819 48.4006C13.3945 48.4006 3.24076 38.2793 3.24076 25.8223Z"
                        fill="#979797"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div className="col-5 ">
              <div className="navbarDetails ">
                <div className="d-flex  justify-content-end align-items-center">
                  <div className="userMobile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.238 11.5847C13.1427 11.5847 14.027 11.3164 14.7792 10.8138C15.5314 10.3112 16.1177 9.59682 16.4639 8.76102C16.8101 7.92522 16.9007 7.00553 16.7242 6.11824C16.5477 5.23096 16.112 4.41594 15.4724 3.77624C14.8327 3.13654 14.0176 2.70091 13.1303 2.52442C12.2431 2.34792 11.3234 2.43851 10.4876 2.78471C9.65177 3.13091 8.93739 3.71718 8.43479 4.46938C7.93218 5.22158 7.66392 6.10593 7.66392 7.0106C7.66392 8.22372 8.14583 9.38715 9.00363 10.245C9.86144 11.1028 11.0249 11.5847 12.238 11.5847ZM12.238 3.7434C12.8842 3.7434 13.5159 3.93502 14.0531 4.29403C14.5904 4.65303 15.0092 5.1633 15.2565 5.7603C15.5038 6.3573 15.5685 7.01422 15.4424 7.648C15.3163 8.28177 15.0052 8.86393 14.5482 9.32086C14.0913 9.77778 13.5092 10.089 12.8754 10.215C12.2416 10.3411 11.5847 10.2764 10.9877 10.0291C10.3907 9.78181 9.88042 9.36304 9.52142 8.82576C9.16241 8.28847 8.9708 7.65679 8.9708 7.0106C8.9708 6.14409 9.31502 5.31306 9.92774 4.70034C10.5405 4.08763 11.3715 3.7434 12.238 3.7434Z"
                        fill="#979797"
                      />
                      <path
                        d="M20.3864 16.4004C19.3384 15.2928 18.0757 14.4106 16.6752 13.8077C15.2747 13.2048 13.766 12.8938 12.2412 12.8938C10.7165 12.8938 9.20777 13.2048 7.8073 13.8077C6.40683 14.4106 5.14404 15.2928 4.09612 16.4004C3.86893 16.6431 3.74275 16.9632 3.74326 17.2956V20.7327C3.74326 21.0793 3.88095 21.4117 4.12604 21.6568C4.37113 21.9019 4.70354 22.0396 5.05014 22.0396H19.4258C19.7724 22.0396 20.1048 21.9019 20.3499 21.6568C20.595 21.4117 20.7327 21.0793 20.7327 20.7327V17.2956C20.735 16.9641 20.6112 16.6441 20.3864 16.4004ZM19.4258 20.7327H5.05014V17.2891C5.97622 16.3139 7.09102 15.5374 8.32672 15.0068C9.56242 14.4762 10.8932 14.2025 12.238 14.2025C13.5828 14.2025 14.9135 14.4762 16.1492 15.0068C17.3849 15.5374 18.4997 16.3139 19.4258 17.2891V20.7327Z"
                        fill="#979797"
                      />
                    </svg>
                  </div>
                  <div className="cart">
                    <div className="svgBox ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 77 84"
                        fill="none"
                      >
                        <path
                          d="M13.821 22.1954C9.48418 25.7912 8.34539 31.8791 6.05999 44.0471C2.85029 61.1681 1.24739 69.7247 5.92739 75.3641C10.6074 80.9996 19.3122 80.9996 36.7257 80.9996H39.5415C56.955 80.9996 65.6637 80.9996 70.3398 75.3641C75.0198 69.7247 73.4091 61.1681 70.2033 44.0471C67.9179 31.8791 66.7791 25.7912 62.4423 22.1954M62.4501 22.1954C58.1172 18.5996 51.924 18.5996 39.5376 18.5996H36.7218C24.3393 18.5996 18.1461 18.5996 13.8132 22.1954"
                          stroke="#979797"
                          stroke-width="5.85"
                        />
                        <path
                          opacity="0.5"
                          d="M49.8352 38.1L53.7352 61.5M26.4352 38.1L22.5352 61.5M26.4352 18.6V14.7C26.4352 11.597 27.6678 8.62103 29.862 6.42685C32.0562 4.23268 35.0321 3 38.1352 3C41.2382 3 44.2141 4.23268 46.4083 6.42685C48.6025 8.62103 49.8352 11.597 49.8352 14.7V18.6"
                          stroke="#979797"
                          stroke-width="5.85"
                          stroke-linecap="round"
                        />
                      </svg>
                      <div className="cartTotal">
                        <span>2</span>
                      </div>
                    </div>
                  </div>
                 <Link to="/wishlistdetail">
                 <div className="heart">
                    <div className="svgBox">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 87 72"
                        fill="none"
                      >
                        <path
                          d="M25.3208 0C11.6525 0 0 10.2267 0 23.5017C0 32.6614 4.28733 40.3708 9.971 46.7575C15.6399 53.1246 22.951 58.469 29.5541 62.9432L40.9558 70.6623C41.5656 71.0745 42.2848 71.2948 43.0208 71.2948C43.7569 71.2948 44.476 71.0745 45.0858 70.6623L56.4876 62.9432C63.0956 58.469 70.4017 53.1246 76.0657 46.7575C81.7543 40.3708 86.0417 32.6614 86.0417 23.5017C86.0417 10.2267 74.3892 0 60.7208 0C53.6703 0 47.4704 3.304 43.0208 7.5815C38.5712 3.304 32.3664 0 25.3208 0Z"
                          fill="#979797"
                        />
                      </svg>
                      <div className="cartTotal">
                        <span>2</span>
                      </div>
                    </div>
                  </div>
                 </Link>
                  <div className="lang">
                    <div className="langBox">
                      <select>
                         {
                          langArrSlice.map((fd)=>{
                            return <option>{fd}</option>
                          })
                         }
                      </select>
                    </div>
                  </div>

                  <div className="signIn">
                    <div className="signA">
                      <NavLink to="/signin">SIGN IN</NavLink>
                    </div>
                  </div>
                  <div className="signUp">
                    <div className="signA">
                      <NavLink to="/signup">SIGN UP</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="destkopHr" />
        <nav >
          <div className="hamburgerMenu">
            <button
              class="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M2.66666 7.99341C2.66666 7.26008 3.26132 6.66675 3.99332 6.66675H14.6733C15.0252 6.66675 15.3626 6.80652 15.6114 7.05532C15.8602 7.30412 16 7.64156 16 7.99341C16 8.34527 15.8602 8.68271 15.6114 8.93151C15.3626 9.18031 15.0252 9.32008 14.6733 9.32008H3.99332C3.64147 9.32008 3.30403 9.18031 3.05523 8.93151C2.80643 8.68271 2.66666 8.34527 2.66666 7.99341ZM2.66666 16.0001C2.66666 15.2667 3.26132 14.6734 3.99332 14.6734H28.0067C28.3585 14.6734 28.696 14.8132 28.9447 15.062C29.1935 15.3108 29.3333 15.6482 29.3333 16.0001C29.3333 16.3519 29.1935 16.6894 28.9447 16.9382C28.696 17.187 28.3585 17.3267 28.0067 17.3267H3.99332C3.64147 17.3267 3.30403 17.187 3.05523 16.9382C2.80643 16.6894 2.66666 16.3519 2.66666 16.0001ZM3.99332 22.6801C3.64147 22.6801 3.30403 22.8199 3.05523 23.0687C2.80643 23.3174 2.66666 23.6549 2.66666 24.0067C2.66666 24.3586 2.80643 24.696 3.05523 24.9448C3.30403 25.1936 3.64147 25.3334 3.99332 25.3334H20.0067C20.3585 25.3334 20.696 25.1936 20.9447 24.9448C21.1935 24.696 21.3333 24.3586 21.3333 24.0067C21.3333 23.6549 21.1935 23.3174 20.9447 23.0687C20.696 22.8199 20.3585 22.6801 20.0067 22.6801H3.99332Z"
                  fill="#979797"
                />
              </svg>
            </button>
            <div className="d-flex">
              <div class="search-container">
                  <div className="search-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 58 58"
                      fill="none"
                    >
                      <path
                        d="M54.8886 57.5162C56.3808 59.0085 58.6841 56.7052 57.1918 55.2454L45.0268 43.048C49.2941 38.3264 51.6529 32.1865 51.6446 25.8223C51.6446 11.5811 40.0635 0 25.8223 0C11.5811 0 0 11.5811 0 25.8223C0 40.0635 11.5811 51.6446 25.8223 51.6446C32.2454 51.6446 38.182 49.2765 42.7236 45.3512L54.8886 57.5162ZM3.24076 25.8223C3.24076 13.3653 13.3945 3.24401 25.819 3.24401C38.276 3.24401 48.3973 13.3653 48.3973 25.8223C48.3973 38.2793 38.276 48.4006 25.819 48.4006C13.3945 48.4006 3.24076 38.2793 3.24076 25.8223Z"
                        fill="#979797"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                  />
                </div>
        </div>
            <div
              class="offcanvas offcanvas-start"
              data-bs-backdrop="static"
              tabindex="-1"
              id="staticBackdrop"
              aria-labelledby="staticBackdropLabel"
              style={{ width: "100%" }}
            >
              <div class="offcanvas-header">
                <h5
                  class="offcanvas-title"
                  id="staticBackdropLabel"
                  style={{ color: "#E3B142", fontWeight: "500" }}
                >
                  Menu
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div className="d-flex">
                  <div class="search-container">
                    <div className="search-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 58 58"
                        fill="none"
                      >
                        <path
                          d="M54.8886 57.5162C56.3808 59.0085 58.6841 56.7052 57.1918 55.2454L45.0268 43.048C49.2941 38.3264 51.6529 32.1865 51.6446 25.8223C51.6446 11.5811 40.0635 0 25.8223 0C11.5811 0 0 11.5811 0 25.8223C0 40.0635 11.5811 51.6446 25.8223 51.6446C32.2454 51.6446 38.182 49.2765 42.7236 45.3512L54.8886 57.5162ZM3.24076 25.8223C3.24076 13.3653 13.3945 3.24401 25.819 3.24401C38.276 3.24401 48.3973 13.3653 48.3973 25.8223C48.3973 38.2793 38.276 48.4006 25.819 48.4006C13.3945 48.4006 3.24076 38.2793 3.24076 25.8223Z"
                          fill="#979797"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search"
                    />
                  </div>
                </div>

                <div className="row justify-content-center mt-3">
                  <div className="col-11 ">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#react"
                          className={`notactive ${active == 0 ? "active" : ""}`}
                          onClick={() => {
                            setActive(0);
                          }}
                        >
                          HOME
                        </a>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="15"
                          viewBox="0 0 11 18"
                          fill="none"
                        >
                          <path
                            d="M2 2L9 9L2 16"
                            stroke="#D1D1D1"
                            stroke-width="2.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-11 ">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#react"
                          className={`notactive ${active == 1 ? "active" : ""}`}
                          onClick={() => {
                            setActive(1);
                          }}
                        >
                          PRODUCT
                        </a>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="15"
                          viewBox="0 0 11 18"
                          fill="none"
                        >
                          <path
                            d="M2 2L9 9L2 16"
                            stroke="#D1D1D1"
                            stroke-width="2.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-11 ">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#react"
                          className={`notactive ${active == 2 ? "active" : ""}`}
                          onClick={() => {
                            setActive(2);
                          }}
                        >
                          OUR STORY
                        </a>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="15"
                          viewBox="0 0 11 18"
                          fill="none"
                        >
                          <path
                            d="M2 2L9 9L2 16"
                            stroke="#D1D1D1"
                            stroke-width="2.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-11 ">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#react"
                          className={`notactive ${active == 3 ? "active" : ""}`}
                          onClick={() => {
                            setActive(3);
                          }}
                        >
                          FRANCHISE
                        </a>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="15"
                          viewBox="0 0 11 18"
                          fill="none"
                        >
                          <path
                            d="M2 2L9 9L2 16"
                            stroke="#D1D1D1"
                            stroke-width="2.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-11 ">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#react"
                          className={`notactive ${active == 4 ? "active" : ""}`}
                          onClick={() => {
                            setActive(4);
                          }}
                        >
                          CAREER
                        </a>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="15"
                          viewBox="0 0 11 18"
                          fill="none"
                        >
                          <path
                            d="M2 2L9 9L2 16"
                            stroke="#D1D1D1"
                            stroke-width="2.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-11 ">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#react"
                          className={`notactive ${active == 5 ? "active" : ""}`}
                          onClick={() => {
                            setActive(5);
                          }}
                        >
                          RESERVE
                        </a>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="15"
                          viewBox="0 0 11 18"
                          fill="none"
                        >
                          <path
                            d="M2 2L9 9L2 16"
                            stroke="#D1D1D1"
                            stroke-width="2.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-11 ">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#react"
                          className={`notactive ${active == 6 ? "active" : ""}`}
                          onClick={() => {
                            setActive(6);
                          }}
                        >
                          SEARCH A BRANCH
                        </a>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="15"
                          viewBox="0 0 11 18"
                          fill="none"
                        >
                          <path
                            d="M2 2L9 9L2 16"
                            stroke="#D1D1D1"
                            stroke-width="2.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="col-11 ">
                    <div className="d-flex justify-content-between">
                      <div>
                        <a
                          href="#react"
                          className={`notactive ${active == 7 ? "active" : ""}`}
                          onClick={() => {
                            setActive(7);
                          }}
                        >
                          CONTACT
                        </a>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="15"
                          viewBox="0 0 11 18"
                          fill="none"
                        >
                          <path
                            d="M2 2L9 9L2 16"
                            stroke="#D1D1D1"
                            stroke-width="2.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul>
            <li>
              {" "}
              <NavLink
                to="/"
                className={`notactive ${active == 0 ? "active" : ""}`}
                onClick={() => {
                  setActive(0);
                }}
              >
                HOME
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/product"
                className={`notactive ${active == 1 ? "active" : ""}`}
                onClick={() => {
                  setActive(1);
                }}
              >
                PRODUCT
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/ourstory"
                className={`notactive ${active == 2 ? "active" : ""}`}
                onClick={() => {
                  setActive(2);
                }}
              >
                OUR STORY
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/franchise"
                className={`notactive ${active == 3 ? "active" : ""}`}
                onClick={() => {
                  setActive(3);
                }}
              >
                FRANCHISE
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/career"
                className={`notactive ${active == 4 ? "active" : ""}`}
                onClick={() => {
                  setActive(4);
                }}
              >
                CAREER
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/reserve"
                className={`notactive ${active == 5 ? "active" : ""}`}
                onClick={() => {
                  setActive(5);
                }}
              >
                RESERVE
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/searchbranch"
                className={`notactive ${active == 6 ? "active" : ""}`}
                onClick={() => {
                  setActive(6);
                }}
              >
                SEARCH A BRANCH
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/contact"
                className={`notactive ${active == 7 ? "active" : ""}`}
                onClick={() => {
                  setActive(7);
                }}
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/category"
                className={`notactive ${active == 8 ? "active" : ""}`}
                onClick={() => {
                  setActive(8);
                }}
              >
                BLOG
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/gallery"
                className={`notactive ${active == 9 ? "active" : ""}`}
                onClick={() => {
                  setActive(9);
                }}
              >
                GALLERY
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
