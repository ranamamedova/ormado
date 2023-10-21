import React from "react";
import coffeImg from "../assets/img/img.png";
import beans from "../assets/img/beans2.png";
import beans3 from "../assets/img/beans3.png";
import beans4 from "../assets/img/beans4.png";
import beans5 from "../assets/img/beans5.png";
import drink from "../assets/img/drink.png";
import drink1 from "../assets/img/drink1.png";
import drink2 from "../assets/img/drink2.png";
import arrow from "../assets/img/arrow.png";
const EnjoyNewCoffe = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 gi  coffeImgContainer ">
            <div className="coffeImg">
              <img src={coffeImg} alt="" className="img-fluid" />
              <div className="coffeModal pb-3">
                <div className="coffeModalText mt-2 ms-1 mb-3">
                  <h6>Get Some Offer</h6>
                </div>
                <div className="modelDrinkBox">
                  <div className="d-flex">
                    <div className="img">
                      <img src={drink} alt="" />
                    </div>
                    <div className="modalDrinkText">
                      <p>
                        Ormado Energy Drink <a href="#react">Get code</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modelDrinkBox">
                  <div className="d-flex">
                    <div className="img">
                      <img src={drink1} alt="" />
                    </div>
                    <div className="modalDrinkText">
                      <p>
                        Ormado Energy Drink <a href="#react">Get code</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modelDrinkBox">
                  <div className="d-flex">
                    <div className="img">
                      <img src={drink2} alt="" />
                    </div>
                    <div className="modalDrinkText">
                      <p>
                        Ormado Energy Drink <a href="#react">Get code</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="filterModal">
                  <p className="ms-2">Reviews (20)</p>
                  <div className="modalIcon me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <path
                        d="M2.7597 8.93158C3.07616 8.61522 3.5053 8.4375 3.95276 8.4375C4.40023 8.4375 4.82937 8.61522 5.14583 8.93158L13.499 17.2847L21.8521 8.93158C22.1703 8.62419 22.5966 8.45409 23.0391 8.45794C23.4815 8.46178 23.9048 8.63926 24.2176 8.95213C24.5305 9.26501 24.708 9.68826 24.7118 10.1307C24.7157 10.5732 24.5456 10.9994 24.2382 11.3177L14.692 20.8639C14.3756 21.1802 13.9464 21.358 13.499 21.358C13.0515 21.358 12.6223 21.1802 12.3059 20.8639L2.7597 11.3177C2.44334 11.0012 2.26562 10.5721 2.26562 10.1246C2.26562 9.67717 2.44334 9.24803 2.7597 8.93158Z"
                        fill="#979797"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 coffeImgContainer1">
            <div className="enjoyCoffeDesc">
              <div className="beansBig">
                <img src={beans3} alt="" />
              </div>
              <div className="beans">
                <img src={beans} alt="" />
              </div>
              <h6 className="enjoyCoffeDesch6">OUR COFFEE</h6>
              <div>
                <div className="enjoyCoffeTitleDesc">
                  <h1>
                    Enjoy a new <br /> blend of coffee <br /> style
                  </h1>
                  <p className="mt-4">
                    It is best to start you day with a cup of coffee.Discover
                    the <br /> best flavours coffee you will ever have.We
                    provide the best <br /> for our customers
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-7 ms-3">
                <div className="d-flex justify-content-between ">
                  <div className="enjoyFilterTxt ">
                    <p>Cappucion</p>
                    <p className="moreMenup ms-3 mt-4">More Menu</p>
                  </div>
                  <div className="enjoyFilterTxt active">
                    <p className="active">Late</p>
                    <img src={arrow} alt="" className="img-fluid" />
                  </div>
                  <div className="enjoyFilterTxt">
                    <p>Arabica</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="beans3">
              <img src={beans4} alt="" className="img-fluid" />
            </div>
            <div className="beans4">
              <img src={beans5} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnjoyNewCoffe;
