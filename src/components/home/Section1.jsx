import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
const Section1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ];

  const captions = [
    'Şəkil 1 - Bu birinci şəkildir.',
    'Şəkil 2 - Bu ikinci şəkildir.',
    'Şəkil 3 - Bu üçüncü şəkildir.',
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        onSlideChange={handleSlideChange}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Şəkil ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="caption">
        <p>{captions[activeIndex]}</p>
      </div>
    </div>
  );
};

export default Section1;
