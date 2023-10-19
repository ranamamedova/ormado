import React, { useState } from "react";
import Singlecard from "./Singlecard";
import product from "../data/Product.js";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Cakes = () => {
  const [data, setData] = useState(product);
  console.log(data);

  //     const mapproduct = ()=>{
  //     data.map((item) => {
  //         return (

  //             <Col xs={6} md={4} lg={4}>

  //                 <Singlecard
  //                     id={item.id}
  //                     photo={item.photo}
  //                     title={item.title}
  //                     desc={item.desc}
  //                     price={item.price}
  //                     key={item.id}
  //                 />
  //             </Col>

  //         )
  //     })

  // }

  return (
    <>
      <div className="Cakes mt-5">
        <div className="container">
          <div className="Title ">
            <p>Most Popular</p>
            <h4>
              Our Exclusive <span className="cakes">Cakes</span>
            </h4>
          </div>

          <Swiper
            breakpoints={{
              10: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            className="mySwiperCakes"
          >
            {data.map((item) => {
              return (
                <SwiperSlide>
                  <Singlecard
                    id={item.id}
                    photo={item.photo}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    key={item.id}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Cakes;
