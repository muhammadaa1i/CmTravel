import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Swiper.css';
import { FreeMode, Pagination, Autoplay, Navigation } from 'swiper/modules';
import s1 from '../images/slider-1.webp'
import s2 from '../images/slider-2.webp'
import s3 from '../images/slider-3.webp'
import s4 from '../images/slider-4.webp'
import s5 from '../images/slider-5.webp'
import s6 from '../images/slider-6.webp'
import s7 from '../images/slider-7.webp'
import s8 from '../images/slider-8.webp'

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                modules={[FreeMode, Pagination, Autoplay, Navigation]}
                className="mySwiper w-[100%] md:w-[98%] mx-auto mt-3  "
            >
                <SwiperSlide className='rounded-[10px]'>
                    <img src={s1} />
                </SwiperSlide>

                <SwiperSlide className='rounded-[10px]'>
                    <img src={s2} />
                </SwiperSlide>

                <SwiperSlide className='rounded-[10px]'>
                    <img src={s3} />
                </SwiperSlide>

                <SwiperSlide className='rounded-[10px]'>
                    <img src={s4} />
                </SwiperSlide>

                <SwiperSlide className='rounded-[10px]'>
                    <img className='rounded-[10px] ' src={s5} />
                </SwiperSlide>

                <SwiperSlide className='rounded-[10px]'>
                    <img className='rounded-[10px] ' src={s6} />
                </SwiperSlide>

                <SwiperSlide className='rounded-[10px]'>
                    <img className='rounded-[10px]' src={s7} />
                </SwiperSlide>

                <SwiperSlide className='rounded-[10px]'>
                    <img src={s8} />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
