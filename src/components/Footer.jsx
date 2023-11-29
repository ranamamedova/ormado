import React from "react";
// import logo from "../assets/img/logo.png";
// import master from "../assets/img/master.png";
// import visa from "../assets/img/Visa.svg";
// import maestro from "../assets/img/Maestro.png";
// import paypal from "../assets/img/PayPal.png";
import dowlandpng from "../assets/img/download.png";
import dowlandpng2 from "../assets/img/download2.png";
const Footer = () => {
  return (
    <div className="footer mt-5">
      <footer className="pt-4">
        <div className="footer-parts g-3">
          <div className="footer-parts-top">
            <div className="footer-part1  mb-2 ms-5">
              <form>
                <img src="https://ormado-demo.webluna.space/cdn/img/logo.png" alt="error" />
                <div className="footer-part1-main d-flex flex-column flex-sm-row w-100 gap-2 mt-4">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control "
                    placeholder="Enter your email"
                  />
                  <button className="btn" type="button">
                    Subscribe Now
                  </button>
                </div>
              </form>
              <div className="footer-part1-text mt-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in
                  suscipit turpis enim cursus vulputate amet. Lobortis mi platea
                  aliquam senectus tempus mauris neque.
                </p>
              </div>
            </div>
            <div className="footer-parts-23 ">
              <div className="footer-part2 mb-2">
                <div className="footer-part2-text">
                  <h6>Services</h6>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 ">
                        Returns
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 ">
                        Terms & Conditions
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 ">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 ">
                        Shipping policy
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 ">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 ">
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-part3 mb-2 me-3">
                <div className="footer-part3-text">
                  <h6>Contact</h6>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 ">
                        sweetdeli@gmail.com
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 ">
                        +1-2345-6789
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 ">
                        123 Ave, New York, USA
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-parts-45 ">
            <div className="footer-part4 mb-2 me-3">
              <div className="footer-part4-text">
                <h6>WE ACCEPT</h6>
                <ul className="nav flex-column">
                  <div className="footer-card-part1">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 ">
                        <img src="https://ormado-demo.webluna.space/cdn/img/Visa.svg" alt="" />
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 ">
                        <img src="https://ormado-demo.webluna.space/cdn/img/master.png" alt="" />
                      </a>
                    </li>
                  </div>
                  <div className="footer-card-part2 ">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 ">
                        <img src="https://ormado-demo.webluna.space/cdn/img/Maestro.png" alt="" />
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 ">
                        <img src="https://ormado-demo.webluna.space/cdn/img/PayPal.png" alt="" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="footer-part5 mb-2 me-3">
              <div className="cards">
                <h6>Download our Mobile App</h6>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2 mt-3">
                    <a href="#" className="nav-link p-0 ">
                      <img src={dowlandpng} alt="error" />
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 ">
                      <img src={dowlandpng2} alt="error" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-icon ms-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="40"
            viewBox="0 0 129 129"
            fill="none"
          >
            <path
              d="M117.826 64.2706C117.826 34.7067 93.8325 10.7129 64.2686 10.7129C34.7048 10.7129 10.7109 34.7067 10.7109 64.2706C10.7109 90.1925 29.1348 111.776 53.5571 116.757V80.3379H42.8456V64.2706H53.5571V50.8812C53.5571 40.5445 61.9656 32.136 72.3023 32.136H85.6917V48.2033H74.9802C72.0345 48.2033 69.6244 50.6134 69.6244 53.559V64.2706H85.6917V80.3379H69.6244V117.56C96.671 114.883 117.826 92.067 117.826 64.2706Z"
              fill="#4E2922"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="40"
            viewBox="0 0 129 129"
            fill="none"
            className="mx-3"
          >
            <path
              d="M80.5667 64.2748C80.5667 67.4526 79.6244 70.559 77.8589 73.2013C76.0934 75.8436 73.584 77.9029 70.6481 79.119C67.7122 80.3351 64.4816 80.6533 61.3648 80.0334C58.2481 79.4134 55.3851 77.8831 53.1381 75.6361C50.891 73.389 49.3608 70.5261 48.7408 67.4094C48.1209 64.2926 48.439 61.062 49.6551 58.1261C50.8712 55.1902 52.9306 52.6808 55.5729 50.9153C58.2151 49.1498 61.3216 48.2075 64.4994 48.2075C68.7566 48.2207 72.8357 49.9178 75.8461 52.9281C78.8564 55.9385 80.5535 60.0175 80.5667 64.2748ZM114.71 42.1822V86.3673C114.71 93.8246 111.747 100.977 106.474 106.25C101.201 111.523 94.0492 114.485 86.5919 114.485H42.4068C34.9495 114.485 27.7977 111.523 22.5246 106.25C17.2515 100.977 14.2891 93.8246 14.2891 86.3673V42.1822C14.2891 34.7249 17.2515 27.5731 22.5246 22.3C27.7977 17.0269 34.9495 14.0645 42.4068 14.0645H86.5919C94.0492 14.0645 101.201 17.0269 106.474 22.3C111.747 27.5731 114.71 34.7249 114.71 42.1822ZM88.6004 64.2748C88.6004 59.5081 87.1869 54.8484 84.5386 50.885C81.8904 46.9216 78.1263 43.8325 73.7224 42.0084C69.3186 40.1843 64.4727 39.707 59.7975 40.6369C55.1224 41.5669 50.828 43.8623 47.4574 47.2328C44.0869 50.6034 41.7915 54.8978 40.8615 59.5729C39.9316 64.2481 40.4089 69.0939 42.233 73.4978C44.0572 77.9017 47.1462 81.6657 51.1096 84.314C55.073 86.9622 59.7327 88.3757 64.4994 88.3757C70.8914 88.3757 77.0215 85.8365 81.5414 81.3167C86.0612 76.7969 88.6004 70.6668 88.6004 64.2748ZM96.634 38.1654C96.634 36.9737 96.2806 35.8088 95.6186 34.818C94.9565 33.8271 94.0155 33.0549 92.9145 32.5988C91.8136 32.1428 90.6021 32.0235 89.4333 32.2559C88.2645 32.4884 87.1909 33.0623 86.3483 33.9049C85.5056 34.7476 84.9318 35.8212 84.6993 36.9899C84.4668 38.1587 84.5861 39.3702 85.0422 40.4712C85.4982 41.5721 86.2705 42.5132 87.2613 43.1752C88.2522 43.8373 89.4171 44.1907 90.6088 44.1907C92.2068 44.1907 93.7393 43.5559 94.8693 42.4259C95.9992 41.2959 96.634 39.7634 96.634 38.1654Z"
              fill="#4E2922"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="40"
            viewBox="0 0 129 129"
            fill="none"
          >
            <path
              d="M64.7307 11.0083C35.3124 11.0083 11.4648 34.8559 11.4648 64.2741C11.4648 93.6924 35.3124 117.54 64.7307 117.54C94.149 117.54 117.997 93.6924 117.997 64.2741C117.997 34.8559 94.149 11.0083 64.7307 11.0083ZM51.6916 86.3517H40.9053V51.6401H51.6916V86.3517ZM46.2319 47.3789C42.8251 47.3789 40.6223 44.9653 40.6223 41.9802C40.6223 38.934 42.8917 36.5925 46.3706 36.5925C49.8495 36.5925 51.9802 38.934 52.0468 41.9802C52.0468 44.9653 49.8495 47.3789 46.2319 47.3789ZM91.0862 86.3517H80.2998V67.115C80.2998 62.6373 78.7352 59.5967 74.8345 59.5967C71.855 59.5967 70.085 61.6552 69.3027 63.6361C69.0141 64.3407 68.942 65.3395 68.942 66.3326V86.3462H58.1501V62.7095C58.1501 58.3761 58.0114 54.7529 57.8672 51.6346H67.2386L67.7324 56.4563H67.9488C69.3692 54.1925 72.8482 50.8523 78.6686 50.8523C85.7651 50.8523 91.0862 55.6073 91.0862 65.8277V86.3517Z"
              fill="#4E2922"
            />
          </svg>
        </div>
        <div className="footer-end d-flex flex-column flex-mx-row justify-content-between py-3 my-4 border-top">
          <p className="text-center">
            Copyright © 2023 <a href="https://webluna.az/"> Webluna Software</a>{" "}
            . Bütün hüquqlar qorunur.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
