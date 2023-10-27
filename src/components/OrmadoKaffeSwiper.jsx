import React, { useState } from "react";
import coffeImg from "../assets/img/swiperimg.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const OrmadoKaffeSwiper = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [coffeImg, coffeImg, coffeImg];
  const textArray = ["ORMADO", "ORMADO", "ORMADO"];
  const textArray1 = ["KAFFEHAUS", "KAFFEHAUS", "KAFFEHAUS"];
  const animationClasses = [
    "animate__fadeIn",
    "animate__slideInDown",
    "animate__zoomIn",
  ];
  const handleSlideChange = (swiper) => {
    setCurrentImageIndex(swiper.activeIndex);
  };
  return (
    <>
      <div className="ormadoKaffeSwiper my-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 swiperCol">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "70vh" }}
              >
                <div className="ormadoKaffeBox">
                  <div className="ormadoKaffeText">
                    <h1 className="ormadoh1 mt-2">
                      {textArray[currentImageIndex]}
                    </h1>
                    <h1>
                      <h1
                        className={` kaffehaush1 animate__animated ${animationClasses[currentImageIndex]}`}
                      >
                        {textArray1[currentImageIndex]}
                      </h1>
                    </h1>
                    <p className="kaffehausp mt-3 mb-5">
                      It is best to start your day with a cup of coffee.
                      Discover the best flavours coffee you will ever have. We
                      provide the best for our customers.
                    </p>
                    <a href="#react" className="kaffehausa">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
              <div className="d-flex justify-content-end arrowDown">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 86 170"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M64.2465 148.75C64.2465 154.386 62.0077 159.791 58.0226 163.776C54.0374 167.761 48.6324 170 42.9965 170C37.3607 170 31.9557 167.761 27.9705 163.776C23.9854 159.791 21.7465 154.386 21.7465 148.75C21.7465 143.114 23.9854 137.709 27.9705 133.724C31.9557 129.739 37.3607 127.5 42.9965 127.5C48.6324 127.5 54.0374 129.739 58.0226 133.724C62.0077 137.709 64.2465 143.114 64.2465 148.75ZM83.159 54.8144C81.6649 53.3221 79.6395 52.4839 77.5278 52.4839C75.4161 52.4839 73.3907 53.3221 71.8965 54.8144L50.9653 75.7456V7.96875C50.9653 5.85531 50.1257 3.82842 48.6313 2.33399C47.1369 0.839562 45.11 0 42.9965 0C40.8831 0 38.8562 0.839562 37.3618 2.33399C35.8673 3.82842 35.0278 5.85531 35.0278 7.96875V75.7456L14.0965 54.8144C12.5859 53.4068 10.5879 52.6405 8.52349 52.6769C6.45904 52.7133 4.48932 53.5496 3.0293 55.0096C1.56929 56.4697 0.732979 58.4394 0.696554 60.5038C0.660129 62.5683 1.42644 64.5663 2.83404 66.0769L37.3653 100.608L42.9965 106.25L48.6278 100.619L83.159 66.0875C83.8995 65.3475 84.487 64.4688 84.8878 63.5016C85.2885 62.5345 85.4948 61.4978 85.4948 60.4509C85.4948 59.404 85.2885 58.3674 84.8878 57.4002C84.487 56.4331 83.8995 55.5544 83.159 54.8144Z"
                    fill="#E3B142"
                  />
                </svg>
                <Swiper
                  onSlideChange={handleSlideChange}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  modules={[Pagination]}
                  className="swiperMobil"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="d-flex justify-content-end swiperImgBox">
                        <img
                          src={image}
                          className="imgSwiperCoffe"
                          alt={`Slide ${index}`}
                        />
                        <p></p>
                        <div className="swiperOpacity">
                          <div
                            className="swiperMobileContainer"
                            style={{ display: "block" }}
                          >
                            <h1 className="ormadoh1Mobile mt-2">
                              {textArray[currentImageIndex]}
                              <h1
                                className={` kaffehaush1Mobile animate__animated ${animationClasses[currentImageIndex]}`}
                              >
                                {textArray1[currentImageIndex]}
                              </h1>
                            </h1>
                            <p className="kaffehauspMobile mt-3 mb-5">
                              It is best to start your day with a cup of coffee.
                              Discover the best flavours coffee you will ever
                              have. We provide the best for our customers.
                            </p>
                           <div className="kaffehausaBox">
                           <a href="#react" className="kaffehausaMobile">
                              Learn more
                            </a>
                           </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
             <div className="arrowDownMobile">
             <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 86 170"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M64.2465 148.75C64.2465 154.386 62.0077 159.791 58.0226 163.776C54.0374 167.761 48.6324 170 42.9965 170C37.3607 170 31.9557 167.761 27.9705 163.776C23.9854 159.791 21.7465 154.386 21.7465 148.75C21.7465 143.114 23.9854 137.709 27.9705 133.724C31.9557 129.739 37.3607 127.5 42.9965 127.5C48.6324 127.5 54.0374 129.739 58.0226 133.724C62.0077 137.709 64.2465 143.114 64.2465 148.75ZM83.159 54.8144C81.6649 53.3221 79.6395 52.4839 77.5278 52.4839C75.4161 52.4839 73.3907 53.3221 71.8965 54.8144L50.9653 75.7456V7.96875C50.9653 5.85531 50.1257 3.82842 48.6313 2.33399C47.1369 0.839562 45.11 0 42.9965 0C40.8831 0 38.8562 0.839562 37.3618 2.33399C35.8673 3.82842 35.0278 5.85531 35.0278 7.96875V75.7456L14.0965 54.8144C12.5859 53.4068 10.5879 52.6405 8.52349 52.6769C6.45904 52.7133 4.48932 53.5496 3.0293 55.0096C1.56929 56.4697 0.732979 58.4394 0.696554 60.5038C0.660129 62.5683 1.42644 64.5663 2.83404 66.0769L37.3653 100.608L42.9965 106.25L48.6278 100.619L83.159 66.0875C83.8995 65.3475 84.487 64.4688 84.8878 63.5016C85.2885 62.5345 85.4948 61.4978 85.4948 60.4509C85.4948 59.404 85.2885 58.3674 84.8878 57.4002C84.487 56.4331 83.8995 55.5544 83.159 54.8144Z"
                    fill="#E3B142"
                  />
                </svg>
             </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <Swiper
        spaceBetween={30} 
        slidesPerView={1} 
        pagination={{ clickable: true }} 
        modules={[Pagination]}
        // direction="horizontal"
        className="swiperMobil"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}
    </>
  );
};

export default OrmadoKaffeSwiper;
