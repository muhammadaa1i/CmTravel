import React from 'react'
import logo from '../images/logo1.jpg'

const Footer = () => {
    return (
        <div className="max-w-7xl px-3 py-5 mx-auto">

            <ul className="flex flex-wrap items-center md:justify-between justify-center p-0 m-0 list-none">

                <li className="md:px-[30px] md:w-[30%] w-[90%] flex items-center text-center flex-col justify-center md:self-start">

                    <a className="w-[150px] h-[103px]" href="/">
                        <img src={logo} />
                    </a>

                    <p className="text-[14px] text-[#333] mt-11">O’zbekiston va qo’shni davlatlar bo’ylab tur xizmatlari</p>

                    <div className="py-5 flex justify-center gap-[10px] text-orange-400 text-[20px]">
                        <a target='blank' href="https://www.linkedin.com/in/muhammadali-numonjonov-7608b2319/">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a target='blank' href="https://t.me/xusanovvm">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                        <a target='blank' href="https://www.instagram.com/xusanovv.m/?hl=en">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>

                </li>

                <li className="md:px-[30px] md:w-[30%] w-[90%] flex items-center flex-col justify-center md:self-start">
                    <h1 className="text-[24px] font-semibold pt-[25px]">Kompaniya</h1>
                    <a href="#" className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">Biz haqimizda</a>
                    <a href="#" class="text-[17px] pt-[10px] text-[#333] hover:opacity-90">Nega biz?</a>
                    <a href="#" class="text-[17px] pt-[10px] text-[#333] hover:opacity-90">Bog’lanish</a>
                    <a href="#" class="text-[17px] pt-[10px] text-[#333] hover:opacity-90">Xizmatlar</a>
                </li>

                <li className="md:px-[30px] md:w-[30%] w-[90%] flex items-center flex-col justify-center md:self-start">
                    <h1 className="text-[24px] font-semibold pt-[25px]">Yo’nalishlar</h1>
                    <a href="#" className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">Buxoro</a>
                    <a href="#" className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">Toshkent</a>
                    <a href="#" className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">Samarqand</a>
                    <a href="#" className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">Zomin</a>
                    <a href="#" className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">Xiva</a>
                    <a href="#" className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">Turkiston</a>
                    <a href="#" className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">Surxondaryo</a>
                </li>

            </ul>

        </div>
    )
}

export default Footer