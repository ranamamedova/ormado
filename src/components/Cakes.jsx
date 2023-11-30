import React, { useState } from "react";
import Singlecard from "./Singlecard";
import product from "../data/Product.js";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";
import axios from "axios";

const Cakes = () => {
  const [data, setData] = useState(product);
  const [cake, setCake] = useState([]);




  useEffect(() => {
    axios.get("https://ormado.webluna.space/api/client/product")
      .then((res) => {
        console.log(res.data.products, "product");
        setCake(res.data.products);

      })
  }, [])



 

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
                390: {
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

              {cake.map((item) => {
                return (
                  <SwiperSlide>
                    <Singlecard
                      id={item.id}
                      photo={item.coverImage[0]}
                      title={item.title}
                      // desc={item.description}
                      price={item.firstPrice}
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

  }



export default Cakes;
