import React from 'react'
import bg2 from '../images/bg-2.png'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'

const Section = () => {
    
    const { t } = useTranslation()

    return (
        <div style={{backgroundImage:`url(${bg2})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}} className="section my-[30px] py-5 pb-10 bg-no-repeat bg-center bg-cover">

            <div className="conatiner max-w-7xl px-3 mx-auto text-center flex flex-col items-center justify-center">

                <h1 className="py-5 text-[32px] text-white leading-[34px] font-semibold">{t('Nega aynan bizni tanlashingiz kerak?')}</h1>

                <p className="text-[19px] text-white leading-[27px] font-normal">{t('Bizni tanlashingiz uchun 8 ta sabab')}</p>

                <ul className="ul-sec flex item-center justify-center flex-wrap mt-10 mb-[10px]">

                    <li className="card-sec1 bg-white mr-5 mb-[30px] w-[270px] h-auto flex flex-col justify-center items-center p-[20px] rounded-[8px] text-center">

                        <h1 className="text-[24px] font-semibold text-[#333]">{t('Tajriba')}</h1>

                        <p className="text-[16px] text[#666] font-normal">{t('10 yildan ortiq tajribaga ega jamoa')}</p>

                    </li>

                    <li className="card-sec2 bg-white mr-5 mb-[30px] w-[270px] h-auto flex justify-center items-center flex-col p-[20px] rounded-[8px] text-center">

                        <h1 className="text-[24px] font-semibold text-[#333]">{t('Qulay narxlar')}</h1>

                        <p className="text-[16px] text[#666] font-normal">{t('7 kunlik sayohat $100 dan boshlanadi')}</p>

                    </li>

                    <li className="card-sec3 bg-white mr-5 mb-[30px] w-[270px] h-auto flex flex-col justify-center items-center p-[20px] rounded-[8px] text-center">

                        <h1 className="text-[24px] font-semibold text-[#333]">{t('Keng tanlov')}</h1>

                        <p className="text-[16px] text[#666] font-normal">{t('Sayohatingiz davomida 10dan...')}</p>

                    </li>

                    <li className="card-sec4 bg-white mr-5 mb-[30px] w-[270px] h-auto flex flex-col justify-center items-center p-[20px] rounded-[8px] text-center">

                        <h1 className="text-[24px] font-semibold text-[#333]">{t("Go'zal shaharlar")}</h1>

                        <p className="text-[16px] text[#666] font-normal">{t("Sifatli xizmat ko'rsatish va tanlovda yordam beramiz")}</p>

                    </li>

                    <li className="card-sec5 bg-white mr-5 mb-[30px] w-[270px] h-auto flex flex-col items-center justify-center p-[15px] rounded-[8px] text-center">

                        <h1 className="text-[24px] font-semibold text-[#333]">{t
                        ('Xavfsizlik')}</h1>

                        <p className="text-[16px] text[#666] font-normal">{t("Sayohatingzi xavfsiz bo'lishiga kafolat beramiz")}</p>

                    </li>

                    <li className="card-sec6 bg-white mr-5 mb-[30px] w-[270px] h-auto p-[15px] rounded-[8px] flex flex-col items-center justify-center">

                        <h1 className="text-[24px] font-semibold text-[#333]">{t('Ishonch')}</h1>

                        <p className="text-[16px] text[#666] font-normal">{t('Bizning xizmatlarga 2000 dan ortiq mijozlar ishonch bildirgan')}</p>

                    </li>

                    <li className="card-sec7 bg-white mr-5 mb-[30px] w-[270px] h-auto p-[15px] rounded-[8px] flex flex-col items-center justify-center ">

                        <h1 className="text-[24px] font-semibold text-[#333]">{t('Umumiy guruh')}</h1>

                        <p className="text-[16px] text[#666] font-normal">{t("Safar davomida yig'ilgan kontentlar bitta umumiy guruhda")}</p>

                    </li>

                    <li className="card-sec8 bg-white mr-5 mb-[30px] w-[270px] h-auto p-[15px] rounded-[8px] text-center flex items-center flex-col justify-center ">

                        <h1 className="text-[24px] font-semibold text-[#333]">{t('Yuqori sifat')}</h1>

                        <p className="text-[16px] text[#666] font-normal">{t('Sayohatingiz davomida komfort mashinalar va mehmonxonalardan foydalanasiz')}</p>

                    </li>

                </ul>

            </div>

        </div>
    )
}

export default Section