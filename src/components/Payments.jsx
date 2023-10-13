import React from 'react'
import store1 from "../assets/img/download.png"
import store2 from "../assets/img/download2.png"
import iphone15 from "../assets/img/iPhone 15 Pro.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import slick1 from "../assets/img/slick1.png"
import slick2 from "../assets/img/slick2.png"
import slick3 from "../assets/img/slick3.png"
import slick4 from "../assets/img/slick4.png"
import slick5 from "../assets/img/slick5.png"
import slick6 from "../assets/img/slick6.png"
import slick7 from "../assets/img/slick7.png"

const Payments = () => {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: (
            <div>
              <div className="next-slick-arrow"> ⫸ </div>
            </div>
          ),
          prevArrow: (
            <div>
              <div className="prev-slick-arrow"> ⫷ </div>
            </div>
          ),

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 664,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 555,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };






    return (
        <div className="Payments">
            <div className="container">
                <div className="row mt-3">
                    <div className=" col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-center ">
                        <div className="leftside">
                            <div className="title">
                                <h1>Manage your payments with <span className='mpay'>mpay</span></h1>
                            </div>
                            <div className="about ">
                                <h6>It is best to start your day with a cup of coffee. Discover the
                                    best flavours coffee you will ever have.</h6>
                            </div>
                            <div className="store d-flex  ">
                                <img className='imgleft' src={store1} alt="" />
                                <img className='imgright ms-4' src={store2} alt="" />
                            </div>

                          <button className='click '><h6>Learn more</h6></button>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-center">

                        <img src={iphone15} alt="" className='iphone img-fluid' />

                    </div>

                </div>


                <div className="Slick  ">
                    <div className="writing mt-3 ">
                        <h2>Our Clients</h2>
                        <p>We have been working with some Fortune 500+ clients</p>
                    </div>

                    <Slider {...settings}>
                       
                      
                        <div className="box d-flex align-items-center justify-content-center ">
                            <img width={60} height={60} src={slick1} alt="" />
                        </div>

                        <div className="box d-flex align-items-center justify-content-center">
                            <img  width={60} height={60} src={slick2} alt="" />
                        </div>

                        <div className="box d-flex align-items-center justify-content-center">
                            <img  width={60} height={60} src={slick3} alt="" />
                        </div>

                        <div className="box d-flex align-items-center justify-content-center">
                            <img  width={60} height={60} src={slick4} alt="" />
                        </div>

                        <div className="box d-flex align-items-center justify-content-center">
                            <img  width={60} height={60} src={slick5} alt="" />
                        </div>


                        <div className="box d-flex align-items-center justify-content-center" >
                            <img  width={60} height={60} src={slick6} alt="" />
                        </div>


                        <div className="box d-flex align-items-center justify-content-center">
                            <img  width={60} height={60} src={slick7} alt="" />
                        </div>

                        <div className="box d-flex align-items-center justify-content-center">
                            <img  width={60} height={60} src={slick1} alt="" />
                        </div>
                        <div className="box d-flex align-items-center justify-content-center">
                            <img  width={60} height={60} src={slick2} alt="" />
                        </div>
                        <div className="box d-flex align-items-center justify-content-center">
                            <img  width={60} height={60} src={slick3} alt="" />
                        </div>
                       
                      
                       

                    </Slider>

                </div>

            



            </div>
        </div>
    )
}

const CustomNextArrow = (props) => {
    return   <div className="next-arrow" onClick={props.onClick}>
    Next
  </div>
  };
  
  const CustomPrevArrow = (props) => {
    return  <div className="prev-arrow" onClick={props.onClick}>
    Prev
  </div>
  };



export default Payments