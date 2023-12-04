import React from "react";

// import latte from "../assets/img/screenFull.png";
import g6 from "../assets/img/Group (6).svg";
import g7 from "../assets/img/Group (7).svg";
import g8 from "../assets/img/Group (8).svg";

const Franchise = () => {
  return (
    <section>
      <div className="container">
        <div className="franc-con">
          <div className="left">
            <img className="icon-7" src={g7} alt="" />
            <div className="text">
              <p>
                WHY <span className="ormado">ORMADO</span> FRANCHISE ?
              </p>
            </div>

            <div className="ormado-about">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </div>

            <div className="ormado-icon">
              <img src={g6} alt="" />
              <p>INQUIRE NOW</p>
            </div>
            <img className="icon-8" src={g8} alt="" />
          </div>
       
          <div className="right">
            <img src="https://ormado-demo.webluna.space/cdn/img/screenFull.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Franchise;
