import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Section1 = () => {
  return (
    <>
      <div className="main">
        <div className="section1-part1">
          <div className="section1-part1-text p-5">
            <p className='text-part1'><b>ORMADO<span> <br />KAFFEEHAUS</span></b></p>
            <p className='text-part2'>It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</p>
            <button className='mt-5 px-4 py-2'><b>Learn more</b></button>
          </div>
         
        </div>
        <div className="section1-part2">
        <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://s3-alpha-sig.figma.com/img/3aed/f6a1/cca0dee2480b0c7dbd72ea1abedd90cf?Expires=1698019200&Signature=F0yDrDsI8HSDa8th5FWUEixVC1sTTViHfPYLhM8A~gi0uXwv4ytnauOvl0V400EP7Xftnlyc3aQcKrMNXbNdG6vixP2NYGAo680ESk~0h3crPpJyOuQn2MTg23KItrvARPxQ5waWUodj2uCCSfw0RklNpzb2nTCLcWkxyM1HWc5Ib5OqU9-5viS25dtXAZPgW~uaEG0ehGVvMPggSWbLyjwaoShdURpy-RaeUQUMAJh78Muv11Uzmgue84lRYjtiBXvCsTXCrIirt9I5VRlCcfx~peelGFa3gbAXozFy1y0XRWfGaSehyrFPE1RuptM3kEC8HehfT1SiWrTBj9PKXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
        </div>
      </div>
      
    </>
  )
}

export default Section1
