import React, { useEffect, useRef, useState } from 'react'
import Swiper from './Swiper'
import logo1 from '../images/logo1.jpg'
import uzb from '../images/uzb.webp'
import rus from '../images/rus.png'
import gb from '../images/gb.webp'
import sl1 from '../images/slider-6.webp'
import sl2 from '../images/slider-7.webp'
import sl3 from '../images/sam.jpeg'
import sl4 from '../images/tosh.jpg'
import sl5 from '../images/slider-5.webp'
import sl6 from '../images/xiva.jpg'
import sl7 from '../images/tur.jpg'
import sl8 from '../images/surx.jpg'
import d1 from '../images/d1.jpg'
import { useLocation } from 'react-router-dom'
import BuxoroBg from '../images/bux.jpg'
import SamarqandBg from '../images/sam.jpeg'
import ToshkentBg from '../images/tosh.jpg'
import ZominBg from '../images/zomin.jpg'
import XivaBg from '../images/xiva.jpg'
import TurkistonBg from '../images/tur.jpg'
import SurxandaryoBg from '../images/surxandaryo.jpg'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleHandler = () => {
        setIsOpen((prev) => !prev)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const handleOutsideClick = (e) => {
        if (!e.target.closest(".menu")) {
            closeMenu()
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("click", handleOutsideClick)
        } else {
            document.removeEventListener("click", handleOutsideClick)
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }
    }, [isOpen])

    const location = useLocation()
    const [bgImage, setBgImage] = useState(d1)
    const mainvideo = 'https://www.youtube.com/embed/48PSJqwZVIc?si=XpYJWX7WdxQeWOc7'
    const [video, setVideo] = useState(mainvideo)
    const iframeRef = useRef(null)

    useEffect(() => {
        const path = location.pathname
        let newBgImage, newVideo

        if (path === '/buxoro') {
            newBgImage = BuxoroBg
            newVideo = 'https://www.youtube.com/embed/zrNPBTzyc8I?si=8SMAG5AYhVuUXaih'
        } else if (path === '/samarqand') {
            newBgImage = SamarqandBg
            newVideo = 'https://www.youtube.com/embed/1feAEm1EnSI?si=PadQZiiTModPXuvu'
        } else if (path === '/toshkent') {
            newBgImage = ToshkentBg
            newVideo = 'https://www.youtube.com/embed/fz6rXEXk-Wg?si=5Ev_08HknlPDWbaz'
        } else if (path === '/zomin') {
            newBgImage = ZominBg
            newVideo = 'https://www.youtube.com/embed/2w6IVfO9ARY?si=kMl8G25S7TE8Aap4'
        } else if (path === '/xiva') {
            newBgImage = XivaBg
            newVideo = 'https://www.youtube.com/embed/KrL6B40wBok?si=Bmq2Cv9onZK_cR2v'
        } else if (path === '/turkiston') {
            newBgImage = TurkistonBg
            newVideo = 'https://www.youtube.com/embed/rM4AjhKoZUg?si=cyq_PwfYnbMmGYMP'
        } else if (path === '/surxandaryo') {
            newBgImage = SurxandaryoBg
            newVideo = 'https://www.youtube.com/embed/jvGTkkKa6OI?si=FF-4Gjd1OhxarPYU'
        } else {
            newBgImage = d1
            newVideo = mainvideo
        }

        setVideo(newVideo)
        setBgImage(newBgImage)
    }, [location.pathname])


    return (
        <>

            <div
                style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
                className='header h-[120vh]'>

                <div className='header-in pt-[30px] pb-[25px] relative '>

                    <div className="head-in max-w-7xl px-3 mx-auto flex items-center justify-between z-[90] ">

                        <a href="/">

                            <img
                                className='header-img w-[50px] h-[50px] hover:opacity-90 rounded-[50px] 2xl:left-16 xl:left-10 max-xl:left-10 max-md:left-8 max-sm:left-4  '
                                src={logo1} />

                        </a>

                    </div>

                    <button
                        onClick={toggleHandler}
                        className={`menu w-[45px] h-[45px] flex justify-center items-center bg-white p-[6px] text-[23px] border-0 shadow-[1px_1px_1px_1px_#747373] rounded-[50px] hover:opacity-90 right-2 top-[40px] fixed box-border 2xl:right-16 xl:right-10 max-xl:right-10 max-md:right-8 max-sm:right-4 max-lg:w-[40px] max-lg:h-[40px] ${isOpen ? 'hidden' : ''} `}>

                        <i className="fa-solid fa-bars text-2xl"></i>

                    </button>

                    {isOpen && (
                        <div className={`right-menu fixed right-0 z-[50] transform transition-transform duration-[3000ms] ${isOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto float-end w-[378px] h-auto bg-white mt-[-80px]`}>

                            <div className="py-4 px-6 border border-solid border-[#050505f] overflow-y-auto">

                                <button
                                    onClick={closeMenu}
                                    className="text-[#00000072] leading-[1.5] w-6 h-6 flex items-center justify-center font-semibold">
                                    <i className="fa-solid fa-x"></i>
                                </button>

                            </div>

                            <div className="p-6">

                                <ul className="mb-[30px] flex items-center justify-center">

                                    <li style={{ backgroundImage: `url(${uzb})` }} className="text-white cursor-pointer bg-no-repeat bg-center bg-cover m-[25px] py-[10px] text-center w-[40px] rounded-[50%] hover:opacity-90">
                                        <a href="/uz">uzb</a>
                                    </li>

                                    <li style={{ backgroundImage: `url(${rus})` }} className="cursor-pointer bg-no-repeat bg-center bg-cover m-[25px] py-[10px] text-center text-[#0000FE] w-[40px] rounded-[50%] hover:opacity-90">
                                        <a href="/ru">ru</a>
                                    </li>

                                    <li style={{ backgroundImage: `url(${gb})` }} className="cursor-pointer bg-no-repeat bg-center bg-cover m-[25px] py-[20px] rounded-[50%] text-center text-[#DB261F] w-[40px] hover:opacity-90">

                                    </li>

                                </ul>

                                <ul className="flex flex-col justify-center p-0 m-0 list-none items-start">

                                    <li className="mb-[30px] flex justify-between">

                                        <a class="place-link flex items-center" href="/">

                                            <img className='mr-[25px] rounded-[50%] w-[100px] h-[100px]' src={sl1} />

                                            <span className="text-black text-[20px] transition-all duration-[0.3s]">Dam olish maskanlari</span>

                                        </a>

                                    </li>

                                    <li className="mb-[30px] flex justify-between float-left">

                                        <a className="place-link flex items-center" href="/buxoro">

                                            <img className='mr-[25px] rounded-[50%] w-[100px] h-[100px]' src={sl2} />

                                            <span className="text-black text-[20px] transition-all duration-[0.3s]">Buxoro</span>

                                        </a>

                                    </li>

                                    <li className="mb-[30px]">

                                        <a className="place-link flex items-center" href="/samarqand">

                                            <img className='mr-[25px] rounded-[50%] w-[100px] h-[100px]' src={sl3} />

                                            <span className="text-black text-[20px] transition-all duration-[0.3s]">Samarqand</span>

                                        </a>

                                    </li>

                                    <li className="mb-[30px]">

                                        <a className="place-link flex items-center" href="/toshkent">

                                            <img className='mr-[25px] rounded-[50%] w-[100px] h-[100px]' src={sl4} />

                                            <span className="text-black text-[20px] transition-all duration-[0.3s]">Toshkent</span>

                                        </a>

                                    </li>

                                    <li className="mb-[30px]">

                                        <a className="place-link flex items-center" href="/zomin">

                                            <img className='mr-[25px] rounded-[50%] w-[100px] h-[100px]' src={sl5} />

                                            <span className="text-black text-[20px] transition-all duration-[0.3s]">Zomin</span>

                                        </a>

                                    </li>

                                    <li className="mb-[30px]">

                                        <a className="place-link flex items-center" href="/xiva">

                                            <img className='mr-[25px] rounded-[50%] w-[100px] h-[100px]' src={sl6} />

                                            <span className="text-black text-[20px] transition-all duration-[0.3s]">Xiva</span>

                                        </a>

                                    </li>

                                    <li className="mb-[30px]">

                                        <a className="place-link flex items-center" href="/turkiston">

                                            <img className='mr-[25px] rounded-[50%] w-[100px] h-[100px]' src={sl7} />

                                            <span className="text-black text-[20px] transition-all duration-[0.3s]">Turkiston</span>

                                        </a>

                                    </li>

                                    <li className="mb-[30px]">

                                        <a className="place-link flex items-center" href="/surxandaryo">

                                            <img className='mr-[25px] rounded-[50%] w-[100px] h-[100px]' src={sl8} />

                                            <span className="text-black text-[20px] transition-all duration-[0.3s]">Surxandaryo</span>

                                        </a>

                                    </li>

                                </ul>

                            </div>

                        </div>
                    )}

                </div>

                <div className="header-in2 z-[10] pb-[190px] md:pt-[25px] m-auto ">

                    <div className="max-w-7xl px-10 mx-auto">

                        <h1 className="w-full text-center text-[28px] leading-[35px] text-white font-medium mb-[10px] lg:w-[60%] lg:text-[42px] lg:text-left md:text-[36px] md:leading-[55px] ">Oilaviy yoki yaqinlaringiz bilan maroqli hordiq chiqaring</h1>

                        <p className="w-full text-center text-[17px] leading-[17px] mb-[10px] text-white lg:w-[60%] lg:text-left md:text-[18px] md:leading-[25px] md:mb-[30px] ">Bepul konsultatsiya uchun ro’yxatdan o’ting</p>

                        <ul className="flex flex-wrap items-center justify-center p-0 m-0 list-none lg:justify-start ">

                            <li className="card1 bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">

                                <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">Tajriba</h1>

                                <p className="text-[16px] text[#666] font-normal">10 yildan ortiq tajribaga ega jamoa</p>

                            </li>

                            <li className="card2 bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">

                                <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">Qulay narxlar</h1>

                                <p className="text-[16px] text[#666] font-normal">7 kunlik sayohat $100 dan boshlanadi</p>

                            </li>

                            <li className="card-el bg-white mr-5 mb-[30px] w-[270px] h-[120px] p-[15px] rounded-[8px] text-center">

                                <h1 className="text-[24px] pt-[10px] font-semibold text-[#333]">Keng tanlov</h1>

                                <p className="text-[16px] text[#666] font-normal">Sayohatingiz davomida 10dan...</p>

                            </li>

                        </ul>

                        <ul className="flex flex-wrap justify-center items-center p-0 m-0 list-none lg:justify-start max-md:gap-3 ">

                            <li className="btn1 mb-[30px] bg-[#ff9548] py-[15px] px-10 transition-all duration-[0.3s] rounded-[5px] hover:shadow-[1px_1px_5px_5px_#ffffff6c] md:mr-[50px] ">

                                <a className="hero-btn text-white text-[17px]" href="#contact">Bepul konsultatsiya</a>

                            </li>

                            <li className="btn2 mb-[30px] bg-[#5ec2ec] py-[15px] px-10 transition-all duration-[0.3s] rounded-[5px] hover:shadow-[1px_1px_5px_5px_#ffffff6c] md:mr-[50px] ">

                                <a className="hero-btn text-white text-[17px]" href="#contact">Tayyor tur paketlar</a>

                            </li>

                        </ul>

                        <Swiper />

                    </div>

                </div>

            </div>

            <div className='hero py-5'>

                <div className="hero-in max-w-7xl py-3 mx-auto">

                    <h1 className="w-[99%] text-[23px] mb-5 font-semibold text-center lg:text-[30px] md:text-[27px] ">Biz haqimizda quyidagi video orqali batafsil bilib oling</h1>

                    <div className="w-[90%] h-[400px] mx-auto flex items-center justify-center lg:w-[60%] ">

                        <iframe
                            ref={iframeRef}
                            className="rounded-[10px] w-full h-full "
                            src={video}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                            referrerpolicy="strict-origin-when-cross-origin">
                        </iframe>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Header