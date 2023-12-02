import BreadCrumb from "../pages/BreadCrumb";
import React, { useRef, useState } from "react";
import Faqs from '../components/Faqs';
import RelatedProducts from "../components/RelatedProducts";
import productDetails from "../data/productDetails";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Thumbnail = ({ src, alt, onClick }) => {
  return (
  
       <img
         src={src}
         alt={alt}
         style={{ width: '60px', height: '60px', cursor: 'pointer', }}
         onClick={onClick}
       />        

  );
};

const settings1 = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

};
// const settings2 = {
//   dots: false,
//   infinite: true,
//   arrows: true,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   vertical: true, // Set to true for vertical alignment
//   verticalSwiping: true, 
// };
const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const sliderRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
    sliderRef.current.slickGoTo(index); 
  };
  

  return (
    <>
      <BreadCrumb title="PRODUCT DETAILS"/>
      <ScrollToTop/>
      <section className="ProductDetails">
        <div className="container-fluid">
          <div className="row  justify-content-center ">
            <div className="col-sm-12 col-md-6 carousel-part justify-content-md-center">
                <div className="carouselSection " >
                {/* <div className="main-thumbnail "> */}
      <div className="main-slider border rounded-3 border-2 mb-4">
        <Slider ref={sliderRef} {...settings1}>
          {productDetails.map((imageData, index) => (
            <div className="img-sliders justify-content-center d-flex" key={index}>
              <img src={imageData.images} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="thumbnail-slider" >
        {/* <Slider {...settings2}> */}
          {productDetails.map((imageData, index) => (
            <Thumbnail
              key={index}
              src={imageData.images}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        {/* </Slider> */}
      {/* </div> */}
    </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 description-part ">
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
                      <Link to="/nutrition">
                    <span>
                      Read more in our allergen guide.
                    </span>
                      </Link>
                  </div>
                  <div className="category ">
                    <span className="grey-span">Category:</span>
                    <span className="yellow-span">Coffee</span>
                  </div>
                  <hr />
                  <div className="quantity-box">
                    <div className="quantity-two">
                      <button className="quantity btn">
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <span>5</span>
                      <button className="quantity btn">
                        <i className="fa-solid fa-minus"></i>
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
            <div className="related-single-cards row g-3">
              <div className="col-sm-12 col-md-6  col-lg-3 single-card mx-1 row g-3">
                <div className="discount-red-button">
                  <div className="discount-price">50% Off</div>
                </div>
                <div className="card-images">
                  <img
                    src="https://ormado-demo.webluna.space/cdn/img/Product%20Image.png"
                    style={{ width: "100%" }}
                    alt="ProductImg"
                  />
                </div>
                <div className="top-icons">
                  <div className="top-icon">
                    <div className="backgroundIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 52 51"
                        fill="none"
                      >
                        <path
                          d="M26.0184 44.0129C-15.6998 20.9544 13.5035 -4.07699 26.0184 11.7513C38.535 -4.077 67.7383 20.9544 26.0184 44.0129Z"
                          stroke="#979797"
                          stroke-width="3.75472"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="top-icon mt-2">
                    <div className="backgroundIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 52 51"
                        fill="none"
                      >
                        <path
                          d="M26.0197 9.10254C10.375 9.10254 4.11719 25.2705 4.11719 25.2705C4.11719 25.2705 10.375 41.4348 26.0197 41.4348C41.6644 41.4348 47.9222 25.2705 47.9222 25.2705C47.9222 25.2705 41.6644 9.10254 26.0197 9.10254V9.10254Z"
                          stroke="#979797"
                          stroke-width="3.75472"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26.0215 33.0929C28.0962 33.0929 30.0858 32.2688 31.5528 30.8018C33.0197 29.3348 33.8439 27.3452 33.8439 25.2706C33.8439 23.196 33.0197 21.2063 31.5528 19.7393C30.0858 18.2724 28.0962 17.4482 26.0215 17.4482C23.9469 17.4482 21.9573 18.2724 20.4903 19.7393C19.0234 21.2063 18.1992 23.196 18.1992 25.2706C18.1992 27.3452 19.0234 29.3348 20.4903 30.8018C21.9573 32.2688 23.9469 33.0929 26.0215 33.0929V33.0929Z"
                          stroke="#979797"
                          stroke-width="3.75472"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
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
              <div className="col-sm-12 col-md-6  col-lg-3 single-card mx-1 row g-3">
                {/* <div className="discount-red-button">
                  <div className="discount-price">50% Off</div>
                </div> */}
                <div className="card-images">
                  <img
                    src="https://ormado-demo.webluna.space/cdn/img/Image%20%282%29.png"
                    style={{ width: "100%" }}
                    alt="ProductImg"
                  />
                </div>
                <div className="top-icons">
                  <div className="top-icon">
                    <div className="backgroundIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 52 51"
                        fill="none"
                      >
                        <path
                          d="M26.0184 44.0129C-15.6998 20.9544 13.5035 -4.07699 26.0184 11.7513C38.535 -4.077 67.7383 20.9544 26.0184 44.0129Z"
                          stroke="#979797"
                          stroke-width="3.75472"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="top-icon mt-2">
                    <div className="backgroundIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 52 51"
                        fill="none"
                      >
                        <path
                          d="M26.0197 9.10254C10.375 9.10254 4.11719 25.2705 4.11719 25.2705C4.11719 25.2705 10.375 41.4348 26.0197 41.4348C41.6644 41.4348 47.9222 25.2705 47.9222 25.2705C47.9222 25.2705 41.6644 9.10254 26.0197 9.10254V9.10254Z"
                          stroke="#979797"
                          stroke-width="3.75472"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26.0215 33.0929C28.0962 33.0929 30.0858 32.2688 31.5528 30.8018C33.0197 29.3348 33.8439 27.3452 33.8439 25.2706C33.8439 23.196 33.0197 21.2063 31.5528 19.7393C30.0858 18.2724 28.0962 17.4482 26.0215 17.4482C23.9469 17.4482 21.9573 18.2724 20.4903 19.7393C19.0234 21.2063 18.1992 23.196 18.1992 25.2706C18.1992 27.3452 19.0234 29.3348 20.4903 30.8018C21.9573 32.2688 23.9469 33.0929 26.0215 33.0929V33.0929Z"
                          stroke="#979797"
                          stroke-width="3.75472"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
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
              <div className="col-sm-12 col-md-6  col-lg-3 single-card mx-1 row g-3">
                {/* <div className="discount-red-button">
                  <div className="discount-price">50% Off</div>
                </div> */}
                <div className="card-images">
                  <img
                    src="https://ormado-demo.webluna.space/cdn/img/Image%20%283%29.png"
                    style={{ width: "100%" }}
                    alt="ProductImg"
                  />
                </div>
                <div className="top-icons">
                  <div className="top-icon">
                    <div className="backgroundIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 52 51"
                        fill="none"
                      >
                        <path
                          d="M26.0184 44.0129C-15.6998 20.9544 13.5035 -4.07699 26.0184 11.7513C38.535 -4.077 67.7383 20.9544 26.0184 44.0129Z"
                          stroke="#979797"
                          stroke-width="3.75472"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="top-icon mt-2">
                    <div className="backgroundIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 52 51"
                        fill="none"
                      >
                        <path
                          d="M26.0197 9.10254C10.375 9.10254 4.11719 25.2705 4.11719 25.2705C4.11719 25.2705 10.375 41.4348 26.0197 41.4348C41.6644 41.4348 47.9222 25.2705 47.9222 25.2705C47.9222 25.2705 41.6644 9.10254 26.0197 9.10254V9.10254Z"
                          stroke="#979797"
                          stroke-width="3.75472"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26.0215 33.0929C28.0962 33.0929 30.0858 32.2688 31.5528 30.8018C33.0197 29.3348 33.8439 27.3452 33.8439 25.2706C33.8439 23.196 33.0197 21.2063 31.5528 19.7393C30.0858 18.2724 28.0962 17.4482 26.0215 17.4482C23.9469 17.4482 21.9573 18.2724 20.4903 19.7393C19.0234 21.2063 18.1992 23.196 18.1992 25.2706C18.1992 27.3452 19.0234 29.3348 20.4903 30.8018C21.9573 32.2688 23.9469 33.0929 26.0215 33.0929V33.0929Z"
                          stroke="#979797"
                          stroke-width="3.75472"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
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
              <div className="col-sm-12 col-md-6  col-lg-3 single-card mx-1 row g-3">
                {/* <div className="discount-red-button">
                  <div className="discount-price">50% Off</div>
                </div> */}
                <div className="card-images">
                  <img
                    src="https://ormado-demo.webluna.space/cdn/img/Image%20%284%29.png"
                    style={{ width: "100%" }}
                    alt="ProductImg"
                  />
                </div>
                <div className="top-icons">
                  <div className="top-icon">
                    <div className="backgroundIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 52 51"
                        fill="none"
                      >
                        <path
                          d="M26.0184 44.0129C-15.6998 20.9544 13.5035 -4.07699 26.0184 11.7513C38.535 -4.077 67.7383 20.9544 26.0184 44.0129Z"
                          stroke="#979797"
                          stroke-width="3.75472"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="top-icon mt-2">
                    <div className="backgroundIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 52 51"
                        fill="none"
                      >
                        <path
                          d="M26.0197 9.10254C10.375 9.10254 4.11719 25.2705 4.11719 25.2705C4.11719 25.2705 10.375 41.4348 26.0197 41.4348C41.6644 41.4348 47.9222 25.2705 47.9222 25.2705C47.9222 25.2705 41.6644 9.10254 26.0197 9.10254V9.10254Z"
                          stroke="#979797"
                          stroke-width="3.75472"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26.0215 33.0929C28.0962 33.0929 30.0858 32.2688 31.5528 30.8018C33.0197 29.3348 33.8439 27.3452 33.8439 25.2706C33.8439 23.196 33.0197 21.2063 31.5528 19.7393C30.0858 18.2724 28.0962 17.4482 26.0215 17.4482C23.9469 17.4482 21.9573 18.2724 20.4903 19.7393C19.0234 21.2063 18.1992 23.196 18.1992 25.2706C18.1992 27.3452 19.0234 29.3348 20.4903 30.8018C21.9573 32.2688 23.9469 33.0929 26.0215 33.0929V33.0929Z"
                          stroke="#979797"
                          stroke-width="3.75472"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
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
      <Faqs/>
    </>
  );
};

export default ProductDetails;