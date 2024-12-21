import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import s1 from "../images/slider-1.webp"
import s2 from "../images/slider-2.webp"
import s3 from "../images/slider-3.webp"
import s4 from "../images/slider-4.webp"
import s5 from "../images/slider-5.webp"
import s6 from "../images/slider-6.webp"
import s7 from "../images/slider-7.webp"
import s8 from "../images/slider-8.webp"

const Swiper = () => {
    const settings = {
        centerMode: true,
        centerPadding: "8px",
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "10px",
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "0px",
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "0px",
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "10px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    const images = [s1, s2, s3, s4, s5, s6, s7, s8]

    return (
        <div className="max-w-5xl mx-auto mt-10">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="p-2">
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-[200px] h-[160px] rounded-md shadow-lg m-auto " />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Swiper;
