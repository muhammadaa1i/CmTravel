import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Swiper.css';
import { EffectCards } from 'swiper/modules';
import s1 from '../images/slider-1.webp';
import s2 from '../images/slider-2.webp';
import s3 from '../images/slider-3.webp';
import s4 from '../images/slider-4.webp';
import s5 from '../images/slider-5.webp';
import s6 from '../images/slider-6.webp';
import s7 from '../images/slider-7.webp';
import s8 from '../images/slider-8.webp';

const images = [s1, s2, s3, s4, s5, s6, s7, s8];

export default function App() {
    return (
        <Swiper
            breakpoints={{
                480: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
            }}
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        className="w-full h-auto max-w-[500px] max-h-[350px] 
                                   md:max-w-[400px] md:max-h-[300px] 
                                   sm:max-w-[300px] sm:max-h-[200px] 
                                   object-contain mx-auto"
                        src={image}
                        alt={`slide-${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
