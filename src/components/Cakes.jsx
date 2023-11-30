import React, { useState } from "react";
import Singlecard from "./Singlecard";
import product from "../data/Product.js";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Cakes = () => {
  const [data, setData] = useState(product);



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
              180: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            390:{
              slidesPerView: 2,
              spaceBetween: 40,
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
            className="Othercake"
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
