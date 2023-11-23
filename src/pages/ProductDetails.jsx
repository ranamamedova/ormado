import BreadCrumb from "../pages/BreadCrumb";
import ProductImg from "../assets/img/Product Image.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import RelatedProducts from "../components/RelatedProducts";
const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <BreadCrumb title="PRODUCT DETAILS" />
      <section className="ProductDetails">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 d-flex justify-content-center">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="productswiper"
              >
                <SwiperSlide>
                  <img src={ProductImg} style={{ width: "60%" }} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ProductImg} style={{ width: "60%" }} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ProductImg} style={{ width: "60%" }} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                // onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="productswipermain"
              >
                <SwiperSlide>
                  <img src={ProductImg} style={{ width: "60px" }} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ProductImg} style={{ width: "60px" }} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ProductImg} style={{ width: "60px" }} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-center">
              <div className="details-product">
                <div className="title-head">
                  <h4>Ormado Energy Drink</h4>
                  <p className="green-border">In Stock</p>
                </div>
                <div className="star-review">
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="review-font">4 Review</p>
                  <p className="thin-font">
                    <span>SKU:</span>2,51,591
                  </p>
                </div>
                <div className="discount">
                  <div className="line-price">48.00$</div>
                  <div className="real-price">17.28$</div>
                  <div className="discount-price">64% Off</div>
                </div>
                <hr />
                <div className="description-1">
                  <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                    consequat nec, ultrices et ipsum. Nulla varius magna a
                    consequat pulvinar.
                  </p>
                </div>
                <div className="description-2">
                  <h6>
                    All of our products can contain small traces of allergens.
                  </h6>
                  <p>
                    All our products are handled with care, despite that there
                    is a risk that different products can come into contact with
                    each other and contamination of allergens can occur.
                  </p>
                  <span>Read more in our allergen guide.</span>
                </div>
                <div className="category ">
                  <span className="grey-span">Category:</span>
                  <span className="yellow-span">Coffee</span>
                </div>
                <hr />
                <div className="quantity-box">
                  <div className="quantity-two">
                    <button className="quantity btn">
                      <i class="fa-solid fa-plus"></i>
                    </button>
                    <span>5</span>
                    <button className="quantity btn">
                      <i class="fa-solid fa-minus"></i>
                    </button>
                  </div>
                  <button className="btn addtocart-btn">
                    <span>Add To Cart</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        d="M13.9438 19.4603H6.71188L1.89062 45.9772H45.2819L40.4607 19.4603H33.2288M13.9438 19.4603V12.2285C13.9438 6.90304 18.2609 2.58594 23.5863 2.58594V2.58594C28.9117 2.58594 33.2288 6.90304 33.2288 12.2285V19.4603M13.9438 19.4603H33.2288M13.9438 19.4603V26.6922M33.2288 19.4603V26.6922"
                        stroke="white"
                        stroke-width="3.76058"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="heart-icon">
                    <i class="fa-regular fa-heart fs-5"></i>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="main-description row ">
            <h6>Description</h6>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="127"
                height="10"
                viewBox="0 0 50 10"
                fill="none"
              >
                <path
                  d="M5.05078 5H50.068"
                  stroke="#4A3024"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <div className="description-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <br />
                <br /> Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
          <hr />
          <div className="related-products row">
            <h6>Related Products</h6>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="127"
                height="10"
                viewBox="0 0 50 10"
                fill="none"
              >
                <path
                  d="M5.05078 5H50.068"
                  stroke="#4A3024"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <div className="related-single-cards">
              <div className="col-sm-12 col-md-6 col-lg-3 single-card row">
                <div>
                  <img
                    src={ProductImg}
                    style={{ width: "70%" }}
                    alt="ProductImg"
                  />
                </div>
                <div className="features">
                  <div className="price-part">
                    <p>Ormado Energy Drink</p>
                    <div className="pricesandbag">
                      <div className="prices">
                        <div className="real-price">14.99$</div>
                        <div className="line-price">20.99$</div>
                      </div>
                        <div className="bag-icon">
                            <svg
                               xmlns="http://www.w3.org/2000/svg"
                               width="20"
                               height="20"
                               viewBox="0 0 48 48"
                               fill="none"
                             >
                             <path
                               d="M13.9438 19.4603H6.71188L1.89062 45.9772H45.2819L40.4607 19.4603H33.2288M13.9438 19.4603V12.2285C13.9438 6.90304 18.2609 2.58594 23.5863 2.58594V2.58594C28.9117 2.58594 33.2288 6.90304 33.2288 12.2285V19.4603M13.9438 19.4603H33.2288M13.9438 19.4603V26.6922M33.2288 19.4603V26.6922"
                               stroke="#979797"
                               stroke-width="3"
                               stroke-linecap="round"
                               stroke-linejoin="round"
                             />
                            </svg>
                      </div>
                    </div>
                    <div className="star-review">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 single-card row">
                <div>
                  <img
                    src={ProductImg}
                    style={{ width: "70%" }}
                    alt="ProductImg"
                  />
                </div>
                <div className="features">
                  <div className="price-part">
                    <p>Ormado Energy Drink</p>
                    <div className="pricesandbag">
                      <div className="prices">
                        <div className="real-price">14.99$</div>
                        <div className="line-price">20.99$</div>
                      </div>
                        <div className="bag-icon">
                            <svg
                               xmlns="http://www.w3.org/2000/svg"
                               width="20"
                               height="20"
                               viewBox="0 0 48 48"
                               fill="none"
                             >
                             <path
                               d="M13.9438 19.4603H6.71188L1.89062 45.9772H45.2819L40.4607 19.4603H33.2288M13.9438 19.4603V12.2285C13.9438 6.90304 18.2609 2.58594 23.5863 2.58594V2.58594C28.9117 2.58594 33.2288 6.90304 33.2288 12.2285V19.4603M13.9438 19.4603H33.2288M13.9438 19.4603V26.6922M33.2288 19.4603V26.6922"
                               stroke="#979797"
                               stroke-width="3"
                               stroke-linecap="round"
                               stroke-linejoin="round"
                             />
                            </svg>
                      </div>
                    </div>
                    <div className="star-review">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 single-card row">
                <div>
                  <img
                    src={ProductImg}
                    style={{ width: "70%" }}
                    alt="ProductImg"
                  />
                </div>
                <div className="features">
                  <div className="price-part">
                    <p>Ormado Energy Drink</p>
                    <div className="pricesandbag">
                      <div className="prices">
                        <div className="real-price">14.99$</div>
                        <div className="line-price">20.99$</div>
                      </div>
                        <div className="bag-icon">
                            <svg
                               xmlns="http://www.w3.org/2000/svg"
                               width="20"
                               height="20"
                               viewBox="0 0 48 48"
                               fill="none"
                             >
                             <path
                               d="M13.9438 19.4603H6.71188L1.89062 45.9772H45.2819L40.4607 19.4603H33.2288M13.9438 19.4603V12.2285C13.9438 6.90304 18.2609 2.58594 23.5863 2.58594V2.58594C28.9117 2.58594 33.2288 6.90304 33.2288 12.2285V19.4603M13.9438 19.4603H33.2288M13.9438 19.4603V26.6922M33.2288 19.4603V26.6922"
                               stroke="#979797"
                               stroke-width="3"
                               stroke-linecap="round"
                               stroke-linejoin="round"
                             />
                            </svg>
                      </div>
                    </div>
                    <div className="star-review">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 single-card row">
                <div>
                  <img
                    src={ProductImg}
                    style={{ width: "70%" }}
                    alt="ProductImg"
                  />
                </div>
                <div className="features">
                  <div className="price-part">
                    <p>Ormado Energy Drink</p>
                    <div className="pricesandbag">
                      <div className="prices">
                        <div className="real-price">14.99$</div>
                        <div className="line-price">20.99$</div>
                      </div>
                        <div className="bag-icon">
                            <svg
                               xmlns="http://www.w3.org/2000/svg"
                               width="20"
                               height="20"
                               viewBox="0 0 48 48"
                               fill="none"
                             >
                             <path
                               d="M13.9438 19.4603H6.71188L1.89062 45.9772H45.2819L40.4607 19.4603H33.2288M13.9438 19.4603V12.2285C13.9438 6.90304 18.2609 2.58594 23.5863 2.58594V2.58594C28.9117 2.58594 33.2288 6.90304 33.2288 12.2285V19.4603M13.9438 19.4603H33.2288M13.9438 19.4603V26.6922M33.2288 19.4603V26.6922"
                               stroke="#979797"
                               stroke-width="3"
                               stroke-linecap="round"
                               stroke-linejoin="round"
                             />
                            </svg>
                      </div>
                    </div>
                    <div className="star-review">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <RelatedProducts />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
