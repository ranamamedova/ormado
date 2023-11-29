// import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Rectangle from "../assets/img/Rectangle.png";
// import energydrrink from "../assets/img/energydrink.png";
// import Vector from "../assets/img/Vector.png";
// import Vector1 from "../assets/img/Vector1.png";
// import Ellipse from "../assets/img/Ellipse.png";
// import Heart from "../assets/img/Heart.png";
// import Shopbag from "../assets/img/Shopbag.png";
// import { Col, Row } from "react-bootstrap";
// import productCard from "../data/ProductCard.js"
// import { Navigation,Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from "swiper/react";

// const ProductCards = () => {
//   const [data] = useState(productCard);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const slidesPerView = windowWidth <= 750 ? 2 : 4;
//   return (
//   <>
//     <div className="product-cards">
//       <h2 className="title-section mb-5 ms-3">
//         Your <span>Ormado</span>
//       </h2>
//       <Row>
//         {
//           data.map((fd,i)=>(
//             <Col xs={6} md={3} className="d-flex justify-content-center mb-5">
//             <Card className="card p-3 mt-5" style={{ width: "14rem" }}>
//             <Card.Img className="card-rentagle" src={Rectangle} />
//             <Card.Img className="card-ellipse" src={Ellipse} />
//             <Card.Img className="card-energy" src={energydrrink} />
//             <Card.Img className="card-vector" src={Vector} />
//             <Card.Img className="card-vector1" src={Vector1} />
//             <Card.Img className="card-vector2" src={Vector1} />
//             <Card.Body>
//               <Card.Title>{fd.title}</Card.Title>
//               <Card.Text>$20.00</Card.Text>
//               <div className="d-flex justify-content-center">
//                 <button className="btn-card me-1">
//                   <img src={Heart} className="btn-img" />
//                 </button>
//                 <button className="btn-card me-1">
//                   <img src={Shopbag} className="btn-img" />
//                 </button>
//                 <button className="btn-readmore">Read More</button>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//           ))
//         }


//       </Row>
//       <div className="d-flex justify-content-center mt-5">
//         <Button className="btn-seeall">See All</Button>
//       </div>
//     </div>
//   </>
//   );
// };

// export default ProductCards;


import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import productCard from "../data/ProductCard.js";
import { Swiper, SwiperSlide } from "swiper/react";
// import Rectangle from "../assets/img/Rectangle.png";
import energydrrink from "../assets/img/energydrink.png";
// import Vector from "../assets/img/Vector.png";
// import Vector1 from "../assets/img/Vector1.png";
import Ellipse from "../assets/img/Ellipse.png";
// import Heart from "../assets/img/Heart.png";
// import Shopbag from "../assets/img/Shopbag.png";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const ProductCards = () => {
  const [data] = useState(productCard);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <div className="product-cards">
        <h2 className="title-section my-5 ms-3">
          Your <span>Ormado</span>
        </h2>
        {windowWidth <= 600 ? (
          <div className="blogswiper">
            <Swiper
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        className="mySwiper "
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
            {/* <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        > */}
          {
          data.map((fd,i)=>(
            <SwiperSlide className="mb-5">
              <Col xs={6} md={3} className="productcard-main d-flex justify-content-center mb-5">
            <Card className="card p-3 mt-5">
            <Card.Img className="card-rentagle" src="https://ormado-demo.webluna.space/cdn/img/Rectangle.png" />
            <Card.Img className="card-ellipse" src="https://ormado-demo.webluna.space/cdn/img/Ellipse.png" />
            <Card.Img className="card-energy" src="https://ormado-demo.webluna.space/cdn/img/energydrink.png" />
            <Card.Img className="card-vector" src="https://ormado-demo.webluna.space/cdn/img/Vector.png" />
            <Card.Img className="card-vector1" src="https://ormado-demo.webluna.space/cdn/img/Vector1.png" />
            <Card.Img className="card-vector2" src="https://ormado-demo.webluna.space/cdn/img/Vector1.png" />
            <Card.Body>
              <Card.Title className="product-cardTitle">{fd.title}</Card.Title>
              <Card.Text className="product-cardPrice">$20.00</Card.Text>
              <div className="product-btn d-flex justify-content-center g-2">
                <button className="btn-card me-1">
                  <img src="https://ormado-demo.webluna.space/cdn/img/Heart.png" className="btn-img" />
                </button>
                <button className="btn-card me-1">
                  <img src="https://ormado-demo.webluna.space/cdn/img/Shopbag.png" className="btn-img" />
                </button>
                <button className="btn-readmore">Read More</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
            </SwiperSlide>
          ))
        }
        </Swiper>
          </div>
        ) : (
          <Row>
         {
          data.map((fd,i)=>(
            <Col xs={6} md={3} className="product-card-main d-flex justify-content-center mb-5">
            <Card className="card p-3 mt-5" style={{ width: "14rem" }}>
            <Card.Img className="card-rentagle" src="https://ormado-demo.webluna.space/cdn/img/Rectangle.png" />
            <Card.Img className="card-ellipse" src={Ellipse} />
            <Card.Img className="card-energy" src={energydrrink} />
            <Card.Img className="card-vector" src="https://ormado-demo.webluna.space/cdn/img/Vector.png" />
            <Card.Img className="card-vector1" src="https://ormado-demo.webluna.space/cdn/img/Vector1.png" />
            <Card.Img className="card-vector2" src="https://ormado-demo.webluna.space/cdn/img/Vector1.png" />
            <Card.Body>
              <Card.Title>{fd.title}</Card.Title>
              <Card.Text>$20.00</Card.Text>
              <div className="d-flex justify-content-center">
                <button className="btn-card me-1">
                  <img src="https://ormado-demo.webluna.space/cdn/img/Heart.png" className="btn-img" />
                </button>
                <button className="btn-card me-1">
                  <img src="https://ormado-demo.webluna.space/cdn/img/Shopbag.png" className="btn-img" />
                </button>
                <button className="btn-readmore">Read More</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
          ))
        }


      </Row>
        )}

        <div className="d-flex justify-content-center mt-5">
          <Button className="btn-seeall">See All</Button>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
