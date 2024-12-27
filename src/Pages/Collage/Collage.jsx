import React from 'react'
import c1 from '../images/collage-1.webp'
import c2 from '../images/collage-2.webp'
import c3 from '../images/collage-3.webp'
import c4 from '../images/collage-4.webp'
import c5 from '../images/collage-5.webp'
import c6 from '../images/collage-6.png'
import c7 from '../images/collage-7.webp'
import c8 from '../images/collage-8.webp'
import c9 from '../images/collage-9.webp'
import { useTranslation } from 'react-i18next'

const Collage = () => {

    const { t } = useTranslation()

    return (
        <div className="collage py-5">
            
            <div className="collage-in max-w-7xl py-3 mx-auto">

                <h1 className="text-[25px] leading-7 py-[10px] font-semibold text-center md:text-[27px] md:leading-[34px] max-sm:px-1">{t('2,000 dan ortiq mijozlarimiz bizning xizmatlarimizdan mamnun')}</h1>

                <p className="text-[16px] leading-5 pb-[23px] font-normal text-center text-[#333] md:text-[18px] md:leading-6 md:pb-[30px] ">{t('Bizga ishonch bildirgan mijozlarimizning suratlaridan namunalar')}</p>

                <div className="collage-box flex item-center justify-evenly flex-wrap gap-3 max-xl:gap-5 max-xl:mx-4 max-sm:gap-7 ">

                    <div className="collage-card1 w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2] rounded-lg">

                        <img style={{ color: 'transparent' }} className="w-[220px] h-[140px] object-cover trans" src={c1} />

                    </div>

                    <div className="collage-card2 w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2] rounded-lg">

                        <img style={{ color: 'transparent' }} className="w-[220px] h-[140px] object-cover trans" src={c2} />

                    </div>

                    <div className="collage-card3 w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2] rounded-lg">

                        <h3 className="pt-5 text-[17px] leading-6 text-center font-normal text-[#333]">{t('Bu yerda sizning suratingiz bo’lishi mumkin edi')}</h3>

                    </div>

                    <div className="collage-card4 w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2] rounded-lg">

                        <img style={{ color: 'transparent' }} className="w-[220px] h-[140px] object-cover trans" src={c3} />

                    </div>

                    <div className="collage-card5 w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2] rounded-lg">

                        <img style={{ color: 'transparent' }} className="w-[220px] h-[140px] object-cover trans" src={c4} />

                    </div>

                    <div className="collage-card6 w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2] rounded-lg">

                        <img style={{ color: 'transparent' }} className="w-[220px] h-[140px] object-cover trans" src={c5} />

                    </div>

                    <div className="collage-card7 w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2] rounded-lg">

                        <img style={{ color: 'transparent' }} className="w-[220px] h-[140px] object-cover trans" src={c6} />

                    </div>

                    <div className="collage-card8 w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2] rounded-lg">

                        <img style={{ color: 'transparent' }} className="w-[220px] h-[140px] object-cover trans" src={c7} />

                    </div>

                    <div className="collage-card9 w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2] rounded-lg">

                        <img style={{ color: 'transparent' }} className="w-[220px] h-[140px] object-cover trans" src={c8} />

                    </div>

                    <div className="collage-card10 w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2] rounded-lg">

                        <img style={{ color: 'transparent' }} className="w-[220px] h-[140px] object-cover trans" src={c9} />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Collage