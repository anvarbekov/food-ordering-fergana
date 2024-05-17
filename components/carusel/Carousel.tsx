"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className='my-5 caousel__container'>
      <Swiper
        dir="rtl"
        navigation={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{delay: 3000}}
        loop={true}
        keyboard={true}
        cssMode={true}
        grabCursor={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        
      >

        <SwiperSlide>
            <img src="/images/pizza.png" alt="Kiwi mevasi" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/pizza.png" alt="Rukkola" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/pizza.png" alt="Chandler" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/images/pizza.png" alt="Chandler" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
