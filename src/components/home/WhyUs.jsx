import React from "react";
import icon from "../../assets/img/Group.jpg";
// import rectangle1 from "../../assets/img/Rectangle1.png"
// import rectangle2 from "../../assets/img/Rectangle2.png";
// import whyusimg from "../../assets/img/whyusimg.png"
const WhyUs = () => {
  return (
    <div className="whyus">
      <div className="whyus-main mt-5 mb-5 pb-5">
        <div className="whyus-part1 mb-5">
          <img src="https://ormado-demo.webluna.space/cdn/img/Rectangle1.png" alt="" />
        </div>
        <div className="whyus-part2 ">
          <div className="part2-main">
            <div className="whyus-text ">
              <p className="text-header">
                <b>Why Us ?</b>
              </p>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverranunc ante velit vitae. Est tellus vitae, nullam lobortis
                enim.Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </p>
            </div>
          </div>
          <div className="whyus-img card text-bg-dark">
            <div className="card-img-overlay">
                <img src="https://ormado-demo.webluna.space/cdn/img/whyusimg.png" className="card-img " alt="..." />
              <div className="round-btn-part1"></div>
              <div className="round-btn-part2"></div>
              <div className="round-btn-part3">
                <img src={icon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="whyus-part3 mt-5 pt-5">
          <img className="mt-5" src="https://ormado-demo.webluna.space/cdn/img/Rectangle2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
