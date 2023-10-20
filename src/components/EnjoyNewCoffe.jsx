import React from "react";
import coffeImg from "../assets/img/img.png" ;
import beans from "../assets/img/beans2.png" ;
import beans3 from "../assets/img/beans3.png";
import beans4 from "../assets/img/beans4.png";
import beans5 from "../assets/img/beans5.png";
import drink from "../assets/img/drink.png"  ;
import drink1 from "../assets/img/drink1.png";
import drink2 from "../assets/img/drink2.png";
import arrow from "../assets/img/arrow.png"  ;
const EnjoyNewCoffe = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 bg-warning  coffeImgContainer ">
            <div className="coffeImg">
              <img src={coffeImg} alt="" className="img-fluid" />
              <div className="coffeModal">
                <div className="coffeModalText mt-4 ms-3">
                  <h6>Get Some Offer</h6>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="col-10 col-sm-10 col-md-11 col-lg-11  mt-3">
                    <div className="modalDrink">
                      <div className="modalDrinkBox pt-1 pb-1">
                        <div className="img">
                          <img src={drink} alt="" className="img-fluid " />
                        </div>
                        <div className="modalDrinkText">
                          <p className="mt-2">
                            Ormado Energy Drink
                            <br />
                            <a href="#react">Get Code</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-10 col-sm-11 col-md-11 col-lg-11  mt-3">
                    <div className="modalDrink">
                      <div className="modalDrinkBox pt-1 pb-1 modalDrinkGrey">
                        <div className="img">
                          <img src={drink2} alt="" className="img-fluid " />
                        </div>
                        <div className="modalDrinkText modalDrinkGreyText">
                          <p className="mt-2">
                            Ormado Energy Drink
                            <br />
                            <a href="#react">Get Code</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-10 col-sm-11 col-md-11 col-lg-11  mt-3">
                    <div className="modalDrink">
                      <div className="modalDrinkBox pt-1 pb-1 modalDrinkGrey">
                        <div className="img">
                          <img src={drink1} alt="" className="img-fluid " />
                        </div>
                        <div className="modalDrinkText modalDrinkGreyText">
                          <p className="mt-2">
                            Ormado Energy Drink
                            <br />
                            <a href="#react">Get Code</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 coffeImgContainer1" >
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
