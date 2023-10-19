import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import newSweet from '../home/imgs/Rectangle603.png'

const NewSweets = () => {
  return (
    <div>
        <div className='px-5'>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper3 "
      >
        <SwiperSlide className='swiper-slide'>
            <div className="swiper-main">
              <div className="img">
              <img src={newSweet} alt="" /> 
              </div>
              <div className="swiper-background"></div>
              <div className="swiper-text container">
                <h1 className='mb-5'>NEW <span>SWEETS</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam </p>
            </div>
            </div></SwiperSlide>
        <SwiperSlide>
        <div className="swiper-main">
             <div className="img">
                <img src={newSweet} alt="" /> 
              </div>
              <div className="swiper-background"></div>
              <div className="swiper-text container">
                <h1 className='mb-5'>NEW <span>SWEETS</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam </p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-main">
              <div className="img">
                <img src={newSweet} alt="" /> 
              </div>
              <div className="swiper-background"></div>
              <div className="swiper-text container">
                <h1 className='mb-5'>NEW <span>SWEETS</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam </p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-main">
              <div className="img">
                <img src={newSweet} alt="" /> 
              </div>
              <div className="swiper-background"></div>
              <div className="swiper-text container">
                <h1 className='mb-5'>NEW <span>SWEETS</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam </p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-main">
              <div className="img">
                <img src={newSweet} alt="" /> 
              </div>
              <div className="swiper-background"></div>
              <div className="swiper-text container">
                <h1 className='mb-5'>NEW <span>SWEETS</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam </p>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  )
}

export default NewSweets