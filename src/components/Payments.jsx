import React from 'react'
import store1 from "../assets/img/download.png"
import store2 from "../assets/img/download2.png"
import iphone15 from "../assets/img/iPhone 15 Pro.png"
import Slider from 'react-slick';
// import slick1 from "../assets/img/slick1.png"
// import slick2 from "../assets/img/slick2.png"
// import slick3 from "../assets/img/slick3.png"
// import slick4 from "../assets/img/slick4.png"
// import slick5 from "../assets/img/slick5.png"
// import slick6 from "../assets/img/slick6.png"
// import slick7 from "../assets/img/slick7.png"



const Payments = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: (
            <div>
                <div className="next-slick-arrow"> <i className="fa-solid fa-play"></i> </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow"> <i className="fa-solid fa-play"></i>   </div>
            </div>
        ),

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
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
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 555,
                settings: {
                    slidesToShow: 3,
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
                                <h1>Manage your  <span className='mpay'> payments with mpay</span></h1>
                            </div>
                            <div className="about ">
                                <h6>It is best to start your day with a cup of coffee. Discover the
                                    best flavours coffee you will ever have.</h6>
                            </div>
                            <div className="store d-flex  ">
                                <img className='imgleft' src="https://ormado-demo.webluna.space/cdn/img/download.png" alt="" />
                                <img className='imgright ms-4' src={store2} alt="" />
                            </div>

                            <button className='click '><h6>Learn more</h6></button>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-center">

                        <img src="https://ormado-demo.webluna.space/cdn/img/iPhone%2015%20Pro.png" alt="" className='iphone img-fluid' />

                    </div>

                </div>


            

                <div className="Slick  ">
                    <div className="writing  ">
                        <h2>Our Clients</h2>
                        <p>We have been working with some Fortune 500+ clients</p>
                    </div>

                    <Slider className='slider my-3' {...settings}>

                        <div className="slicklogo d-flex align-items-center justify-content-center ">
                            <img id='one'  src="https://ormado-demo.webluna.space/cdn/img/slick1.png" alt="" />
                        </div>

                        <div className="slicklogo d-flex align-items-center justify-content-center ">
                            <img src="https://ormado-demo.webluna.space/cdn/img/slick2.png" alt="" />
                        </div>

                        <div className="slicklogo d-flex align-items-center justify-content-center ">
                            <img src="https://ormado-demo.webluna.space/cdn/img/slick3.png" alt="" />
                        </div>

                        <div className="slicklogo d-flex align-items-center justify-content-center ">
                            <img src="https://ormado-demo.webluna.space/cdn/img/slick4.png" alt="" />
                        </div>

                        <div className="slicklogo d-flex align-items-center justify-content-center ">
                            <img src="https://ormado-demo.webluna.space/cdn/img/slick5.png" alt="" />
                        </div>

                        <div className="slicklogo d-flex align-items-center justify-content-center " >
                            <img src="https://ormado-demo.webluna.space/cdn/img/slick6.png" alt="" />
                        </div>

                        <div className="slicklogo d-flex align-items-center justify-content-center ">
                            <img src="https://ormado-demo.webluna.space/cdn/img/slick7.png" alt="" />
                        </div>

                        <div className="slicklogo d-flex align-items-center justify-content-center ">
                            <img id='one' src="https://ormado-demo.webluna.space/cdn/img/slick1.png" alt="" />
                        </div>

                        <div className="slicklogo d-flex align-items-center justify-content-center ">
                            <img src="https://ormado-demo.webluna.space/cdn/img/slick2.png" alt="" />
                        </div>

                        <div className="slicklogo d-flex align-items-center justify-content-center ">
                            <img src="https://ormado-demo.webluna.space/cdn/img/slick3.png" alt="" />
                        </div>

                    </Slider>

                </div>



            </div>



          



        </div>
    )
}





export default Payments