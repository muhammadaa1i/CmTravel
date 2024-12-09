import React from 'react'
import Swiper from './Swiper'
import logo1 from '../images/logo1.jpg'

const Header = () => {
    return (
        <div>
            <div className='header-in pt-[30px] pb-[25px] relative '>

                <div className="head-in max-w-7xl px-3 mx-auto flex items-center justify-between ">

                    <a href="/">

                        <img className='header-img w-[50px] h-[50px] hover:opacity-90 rounded-[50px] 2xl:left-16 xl:left-10 max-xl:left-10 max-md:left-8 max-sm:left-4  ' src={logo1} />

                    </a>

                </div>

                <button class="w-[45px] h-[45px] flex justify-center items-center bg-white p-[6px] z-[99] text-[23px] border-0 shadow-[1px_1px_1px_1px_#747373] rounded-[50px] hover:opacity-90 right-2 top-[40px] fixed box-border 2xl:right-16 xl:right-10 max-xl:right-10 max-md:right-8 max-sm:right-4 max-lg:w-[40px] max-lg:h-[40px] ">

                    <i className="fa-solid fa-bars text-2xl"></i>

                </button>

            </div>

            <div className="header-in2 pb-[25px] md:pt-[25px] m-auto ">

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
    )
}

export default Header