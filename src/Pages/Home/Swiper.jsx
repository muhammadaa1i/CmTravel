import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import './Swiper.css'
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'
import s1 from '../images/slider-1.webp'
import s2 from '../images/slider-2.webp'
import s3 from '../images/slider-3.webp'
import s4 from '../images/slider-4.webp'
import s5 from '../images/slider-5.webp'
import s6 from '../images/slider-6.webp'
import s7 from '../images/slider-7.webp'
import s8 from '../images/slider-8.webp'

export default function App() {
    const slides = [s1, s2, s3, s4, s5, s6, s7, s8];

    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={10} 
                loop={true} // Loop rejimi
                pagination={{
                    clickable: true, // Paginationlar bosiladigan bo'lsin
                }}
                autoplay={{
                    delay: 1000, // Slayd almashish tezligi
                    disableOnInteraction: false, // Foydalanuvchi o'zaro aloqasidan keyin autoplay davom etsin
                }}
                modules={[FreeMode, Pagination, Autoplay]} // Kerakli modullar
                className="mySwiper w-[100%] md:w-[98%] mx-auto mt-3"
            >
                {slides.map((src, index) => (
                    <SwiperSlide key={index} className="rounded-[10px]">
                        <img
                            src={src}
                            alt={`Slider ${index + 1}`}
                            className="rounded-[10px]"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
