import React from 'react'
import r1 from '../images/rest-card1.webp'
import r2 from '../images/rest-card2.webp'
import r3 from '../images/rest-card3.webp'
import { useTranslation } from 'react-i18next'

const Service = () => {

    const { t } = useTranslation()

    return (
        <div className="service max-w-7xl px-3 mx-auto">

            <h1 className="text-[25px] mb-1 font-semibold text-[#333] text-center md:text-[34px] md:mb-[10px]">{t('Dam olish maskanlarimiz')}</h1>

            <p className="text-[18px] font-normal text-[#666] text-center mb-5">{t('Quyida taklif qilingan dam olish maskanlari bilan tanishib chiqing')}</p>

            <ul className="flex items-center justify-evenly p-0 m-0 list-none flex-wrap max-lg:gap-8 ">

                <li className="rest-card1 w-[300px] p-[15px] bg-white text-center transition-all duration-[0.3s] shadow-[0_4px_10px_#0000001a]">

                    <img className='rounded-lg w-[270px] h-[200px] ' src={r1} />

                    <div className='flex flex-row justify-between'>

                        <div className="flex items-center justify-between">

                            <div className="flex flex-row gap-1 py-[5px]">

                                <i className="fa-regular fa-calendar text-lg"></i>

                                <p className="text-16px font-normal mt-1 ">{t('2 kun')}</p>

                            </div>

                        </div>

                        <div className="flex flex-row gap-1 py-[5px]">

                            <i className="fa-regular fa-user text-base "></i>

                            <p className="text-16px font-normal mt-[2px] ">{t('20 ta odam')}</p>

                        </div>

                    </div>

                    <div className="flex text-left items-center justify-between py-[5px]">

                        <h1 className="text-[19px] font-semibold leading-[30px]">{t('Shervud Resorti')}</h1>

                        <div className='overflow-hidden relative '>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                        </div>

                    </div>

                    <div className="flex items-center">
                        <i className="fa-solid fa-location-dot text-base"></i>
                        <p className="ml-[5px] text-[17px] ">{t("O'zbekiston")}</p>
                    </div>

                    <div className="flex items-center justify-between">

                        <p className="text-[18px] text-[#ffa767]">1,000 $</p>

                        <del className="text-[15px]">1,200 $</del>

                    </div>

                    <p className="text-[14px] font-normal text-left leading-[19px] text-[#333] py-[10px]">{t('Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi. Har bir safar - bu yangi tajriba va hayotdan zavqlanish uchun ajoyib imkoniyat.')}</p>

                    <a className="bg-[#5ec2ec] py-[15px] px-10 text-[17px] text-white rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 block" href="#contact">{t("Ko'proq ma'lumot olish")}</a>

                </li>

                <li className="rest-card2 w-[300px] p-[15px] bg-white text-center transition-all duration-[0.3s] shadow-[0_4px_10px_#0000001a]">

                    <img className='rounded-lg w-[270px] h-[200px] ' src={r2} />

                    <div className='flex flex-row justify-between'>

                        <div className="flex items-center justify-between">

                            <div className="flex flex-row gap-1 py-[5px]">

                                <i className="fa-regular fa-calendar text-lg"></i>

                                <p className="text-16px font-normal mt-1 ">{t('2 kun')}</p>

                            </div>

                        </div>

                        <div className="flex flex-row gap-1 py-[5px]">

                            <i className="fa-regular fa-user text-base "></i>

                            <p className="text-16px font-normal mt-[2px] ">{t('20 ta odam')}</p>

                        </div>

                    </div>

                    <div className="flex text-left items-center justify-between py-[5px]">

                        <h1 className="text-[19px] font-semibold leading-[30px]">{t('Velmor Resorti')}</h1>

                        <div className='overflow-hidden relative '>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                        </div>

                    </div>

                    <div className="flex items-center">
                        <i className="fa-solid fa-location-dot text-base"></i>
                        <p className="ml-[5px] text-[17px] ">{t("O'zbekiston")}</p>
                    </div>

                    <div className="flex items-center justify-between">

                        <p className="text-[18px] text-[#ffa767]">1,000 $</p>

                        <del className="text-[15px]">1,200 $</del>

                    </div>

                    <p className="text-[14px] font-normal text-left leading-[19px] text-[#333] py-[10px]">{t('Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi. Har bir safar - bu yangi tajriba va hayotdan zavqlanish uchun ajoyib imkoniyat.')}</p>

                    <a className="bg-[#5ec2ec] py-[15px] px-10 text-[17px] text-white rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 block" href="#contact">{t("Ko'proq ma'lumot olish")}</a>

                </li>

                <li className="rest-card3 w-[300px] p-[15px] bg-white text-center transition-all duration-[0.3s] shadow-[0_4px_10px_#0000001a]">

                    <img className='rounded-lg w-[270px] h-[200px] ' src={r3} />

                    <div className='flex flex-row justify-between'>

                        <div className="flex items-center justify-between">

                            <div className="flex flex-row gap-1 py-[5px]">

                                <i className="fa-regular fa-calendar text-lg"></i>

                                <p className="text-16px font-normal mt-1 ">{t('2 kun')}</p>

                            </div>

                        </div>

                        <div className="flex flex-row gap-1 py-[5px]">

                            <i className="fa-regular fa-user text-base "></i>

                            <p className="text-16px font-normal mt-[2px] ">{t('20 ta odam')}</p>

                        </div>

                    </div>

                    <div className="flex text-left items-center justify-between py-[5px]">

                        <h1 className="text-[19px] font-semibold leading-[30px]">{t('Parkent ijod uyi')}</h1>

                        <div className='overflow-hidden relative '>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                            <i className="fa-solid fa-star text-[#ff9a3b]"></i>
                        </div>

                    </div>

                    <div className="flex items-center">
                        <i className="fa-solid fa-location-dot text-base"></i>
                        <p className="ml-[5px] text-[17px] ">{t("O'zbekiston")}</p>
                    </div>

                    <div className="flex items-center justify-between">

                        <p className="text-[18px] text-[#ffa767]">1,000 $</p>

                        <del className="text-[15px]">1,200 $</del>

                    </div>

                    <p className="text-[14px] font-normal text-left leading-[19px] text-[#333] py-[10px]">{t("Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi. Har bir safar - bu yangi tajriba va hayotdan zavqlanish uchun ajoyib imkoniyat.")}</p>

                    <a className="bg-[#5ec2ec] py-[15px] px-10 text-[17px] text-white rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 block" href="#contact">{t("Ko'proq ma'lumot olish")}</a>

                </li>

            </ul>

        </div>
    )
}

export default Service