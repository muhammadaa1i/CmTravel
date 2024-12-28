import React from 'react'
import logo from '../images/logo1.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {

    const { t } = useTranslation()

    return (
        <div className="max-w-7xl px-3 py-5 mx-auto">

            <ul className="flex flex-wrap items-center md:justify-between justify-center p-0 m-0 list-none">

                <li className="md:px-[30px] md:w-[30%] w-[90%] flex items-center text-center flex-col justify-center md:self-start">

                    <a className="w-[150px] h-[103px]" href="/">
                        <img src={logo} />
                    </a>

                    <p className="text-[14px] text-[#333] mt-11">{t("O’zbekiston va qo’shni davlatlar bo’ylab tur xizmatlari")}</p>

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
                    <h1 className="text-[24px] font-semibold pt-[25px]">{t('Kompaniya')}</h1>
                    <a href="#" className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">{t('Biz haqimizda')}</a>
                    <a href="#" class="text-[17px] pt-[10px] text-[#333] hover:opacity-90">{t('Nega biz?')}</a>
                    <a href="#" class="text-[17px] pt-[10px] text-[#333] hover:opacity-90">{t("Bog’lanish")}</a>
                    <a href="#" class="text-[17px] pt-[10px] text-[#333] hover:opacity-90">{t("Xizmatlar")}</a>
                </li>

                <li className="md:px-[30px] md:w-[30%] w-[90%] flex items-center flex-col justify-center md:self-start">
                    <h1 className="text-[24px] font-semibold pt-[25px]">{t("Yo’nalishlar")}</h1>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth', duration: 1000 })} to='/buxoro' className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">
                        {t("Buxoro")}
                    </Link>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth', duration: 1000 })} to='/samarqand' className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">
                        {t('Samarqand')}
                    </Link>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth', duration: 1000 })} to='/toshkent' className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">
                        {t('Toshkent')}
                    </Link>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth', duration: 1000 })} to='/zomin' className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">
                        {t('Zomin')}
                    </Link>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth', duration: 1000 })} to='/xiva' className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">
                        {t('Xiva')}
                    </Link>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth', duration: 1000 })} to='/turkiston' className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">
                        {t('Turkiston')}
                    </Link>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth', duration: 1000 })} to='/surxandaryo' className="text-[17px] pt-[10px] text-[#333] hover:opacity-90">
                        {t('Surxondaryo')}
                    </Link>
                </li>

            </ul>

        </div>
    )
}

export default Footer