import axios from 'axios'
import React, { useState } from 'react'
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

    return (
        <div className="lg:w-[50%] lg:m-0 mb-6 w-full bg-black lg:rounded-tl-lg lg:rounded-bl-lg rounded-lg md:p-[30px] p-4 shadow-[0_2px_4px_#0000001a]">

            <h2 className="text-[29px] font-semibold m-5 text-white">Savollaringiz qoldimi?</h2>

            <form onSubmit={SendMessage} className="flex flex-col gap-[15px]">

                <input id='name' className="w-full border-0 p-[10px] my-[10px] text-[16px] outline-none bg-transparent border-b border-solid border-white text-white" placeholder="Ismingiz " required minlength={3} type="text"></input>

                <input id='phone' className="w-full border-0 p-[10px] my-[10px] text-[16px] bg-transparent bg-none outline-none border-b border-solid border-white text-white" placeholder="+998" required minlength={9} value={phone} onChange={handlePhoneChange} type="text"></input>

                <textarea id='comment' minLength={5} className="w-full border-0 p-[10px] my-[10px] text-[16px] bg-transparent border-b border-solid border-white outline-none text-white min-h-[100px]" required placeholder="Savolingiz..."></textarea>

                <label className="flex items-center gap-5">

                    <input className="w-5" required type="checkbox" checked></input>

                    <p className="text-[14px] text-white">Offerta shartlariga roziman</p>

                </label>

                <button type='submit' class="lg:mr-auto mx-auto bg-orange-400 outline-none border-none text-white border-0 rounded-sm py-[10px] px-5 text-base cursor-pointer transition-all duration-[0.3s] hover:shadow-[1px_1px_5px_5px_#ffffff6c]">Yuborish</button>

            </form>

        </div>
    )
}

export default Form