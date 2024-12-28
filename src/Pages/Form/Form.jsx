import axios from 'axios'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Form = () => {

    const SendMessage = (e) => {
        e.preventDefault()
        const token = "7876000404:AAHlUz6f0wkrrHIRnwXRQ9AQkqPuC6QrTm0"
        const chat_id = 1337108345
        const url = `https://api.telegram.org/bot${token}/sendMessage`
        const name = document.getElementById('name').value
        const phone = document.getElementById('phone').value
        const comment = document.getElementById('comment').value
        const messageContent = `Ismi: ${name} \nTelefon raqami: ${phone} \nKommentariya: ${comment} `

        axios({
            url: url,
            method: 'POST',
            data: {
                "chat_id": chat_id,
                "text": messageContent
            }
        }).then((res) => {
            toast.success("Message sent successfully!")
            e.target.reset()
            setPhone("+998")
        }).catch((error) => {
            console.log('Something went wrong!', error)

        })
        console.log("Telefon:", phone)
    }

    const [phone, setPhone] = useState("+998")

    const handlePhoneChange = (e) => {
        const value = e.target.value

        if (!value.startsWith("+998")) {
            setPhone("+998")
        } else {
            setPhone(value)
        }
    }

    const { t } = useTranslation()

    return (
        <div className='container flex flex-row max-md:flex-col'>

            <div className="contact-left lg:w-[50%] lg:m-0 mb-6 w-full bg-black lg:rounded-tl-lg lg:rounded-bl-lg rounded-lg md:p-[30px] max-sm:w-[90%] p-4 shadow-[0_2px_4px_#0000001a]">

                <h2 className="text-[29px] font-semibold m-5 text-white">{t('Savollaringiz qoldimi?')}</h2>

                <form onSubmit={SendMessage} className="flex flex-col gap-[15px]">

                    <input id='name' className="w-full border-0 p-[10px] my-[10px] text-[16px] outline-none bg-transparent border-b border-solid border-white text-white" placeholder="Ismingiz " required minlength={3} type="text"></input>

                    <input id='phone' className="w-full border-0 p-[10px] my-[10px] text-[16px] bg-transparent bg-none outline-none border-b border-solid border-white text-white" placeholder="+998" required minlength={9} value={phone} onChange={handlePhoneChange} type="text"></input>

                    <textarea id='comment' minLength={5} className="w-full border-0 p-[10px] my-[10px] text-[16px] bg-transparent border-b border-solid border-white outline-none text-white min-h-[100px]" required placeholder="Savolingiz..."></textarea>

                    <label className="flex items-center gap-5">

                        <input className="w-5" required type="checkbox" checked></input>

                        <p className="text-[14px] text-white">{t('Offerta shartlariga roziman')}</p>

                    </label>

                    <button type='submit' class="lg:mr-auto mx-auto bg-orange-400 outline-none border-none text-white border-0 rounded-sm py-[10px] px-5 text-base cursor-pointer transition-all duration-[0.3s] hover:shadow-[1px_1px_5px_5px_#ffffff6c]">{t('Yuborish')}</button>

                </form>

            </div>

            <div className="contact-right lg:w-[50%] w-full bg-white lg:pt-[58px] pt-0 md:px-[30px] px-3 shadow-[0_2px_4px_#0000001a] rounded-tr-lg rounded-br-lg max-sm:w-[90%]">

                <p className="text-[17px] py-[5px] font-normal lg:text-left text-center">
                    {t('Mutaxassislarimizdan barcha savollaringizga javob olmoqchi bo’lsangiz quyidagi manzilga tashrif buyuring yoki bizga qo’ng’iroq qiling')}
                </p>

                <div className="rounded-lg">
                    <iframe src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&z=12" width="100%" height="200px" frameborder="1" allowfullscreen></iframe>
                </div>

                <ul className="p-0 m-0 list-none">

                    <li className="flex items-center gap-[10px] py-[5px]">
                        <i className="fa-solid fa-location-dot text-xl"></i>
                        <span className="text-[17px] py-[5px] font-normal">{t('Toshkent shahar, Manzil ko’chasi 1a')}</span>
                    </li>

                    <li className="flex items-center gap-[10px] py-[5px]">
                        <i className="fa-solid fa-phone text-xl"></i>
                        <a href='tel:+998950907050' class="text-[17px] py-[5px] font-normal">+998950907050</a>
                    </li>

                    <li className="flex items-center gap-[10px] py-[5px]">
                        <i className="fa-solid fa-envelope"></i>
                        <a target='blank' href='mailto:muhammadaalin01@gmail.com' className="text-[17px] py-[5px] font-normal max-sm:hidden">
                            muhammadaalin01@gmail.com
                        </a>
                        <a target='blank' href='mailto:muhammadaalin01@gmail.com' className="text-[17px] mb-1 font-normal hidden max-sm:block">
                            e-mail
                        </a>
                    </li>

                </ul>

            </div>

        </div>
    )
}

export default Form