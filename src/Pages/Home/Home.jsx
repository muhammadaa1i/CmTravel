import React from 'react'
import './Home.css'
import logo1 from '../images/logo1.png'
import Swiper from './Swiper'
import c1 from '../images/collage-1.webp'
import c2 from '../images/collage-2.webp'
import c3 from '../images/collage-3.webp'
import c4 from '../images/collage-4.webp'
import c5 from '../images/collage-5.webp'
import c6 from '../images/collage-6.png'
import c7 from '../images/collage-7.webp'
import c8 from '../images/collage-8.webp'
import c9 from '../images/collage-9.webp'
import r1 from '../images/rest-card1.webp'
import r2 from '../images/rest-card2.webp'
import r3 from '../images/rest-card3.webp'

const Home = () => {
  return (
    <div className='main'>

      <div className="header">

        <div className='header-in pt-[30px] pb-[25px] relative '>

          <div className="head-in max-w-7xl px-3 mx-auto flex items-center justify-between ">

            <a href="/">

              <img className='header-img w-[60px] h-[60px] hover:opacity-90' src={logo1} />

            </a>

          </div>

          <button class="w-[50px] h-[50px] flex justify-center items-center bg-white p-[6px] text-[23px] border-0 shadow-[1px_1px_1px_1px_#747373] rounded-[50px] hover:opacity-90 right-2 top-[40px] fixed box-border 2xl:right-16 xl:right-10 max-xl:right-10 max-md:right-8 max-sm:right-4 max-lg:w-[40px] max-lg:h-[40px] ">

            <i className="fa-solid fa-bars text-3xl max-lg:text-2xl "></i>

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

      <div className="hero pt-5">

        <div className="hero-in max-w-7xl py-3 mx-auto">

          <h1 className="w-[99%] text-[23px] mb-5 font-semibold text-center lg:text-[30px] md:text-[27px] ">Biz haqimizda quyidagi video orqali batafsil bilib oling</h1>

          <div className="w-[90%] h-[400px] mx-auto flex items-center justify-center lg:w-[60%] ">

            <iframe className="rounded-[10px] w-full h-full " src="https://www.youtube.com/embed/48PSJqwZVIc?si=XpYJWX7WdxQeWOc7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

              #document (https://www.youtube.com/embed/48PSJqwZVIc?si=XpYJWX7WdxQeWOc7)

            </iframe>

          </div>

        </div>

      </div>

      <div className="collage py-5">

        <div className="collage-in max-w-7xl py-3 mx-auto">

          <h1 className="text-[25px] leading-7 py-[10px] font-semibold text-center md:text-[27px] md:leading-[34px] ">2,000 dan ortiq mijozlarimiz bizning xizmatlarimizdan mamnun</h1>

          <p className="text-[16px] leading-5 pb-[23px] font-normal text-center text-[#333] md:text-[18px] md:leading-6 md:pb-[30px] ">Bizga ishonch bildirgan mijozlarimizning suratlaridan namunalar</p>

          <div className="collage-box flex item-center justify-evenly flex-wrap gap-3 max-xl:gap-5 max-xl:mx-4 max-sm:gap-7 ">

            <div className="collage-card1 w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2] rounded-lg">

              <img style={{ color: 'transparent' }} className="w-[220px] h-[140px] object-cover trans" src={c1} />

            </div>

            <div className="collage-card2 w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2] rounded-lg">

              <img style={{ color: 'transparent' }} className="w-[220px] h-[140px] object-cover trans" src={c2} />

            </div>

            <div className="collage-card3 w-[220px] h-[140px] rounded-2 flex items-center justify-center shadow-[1px_1px_3px_3px_#a4a2a2] rounded-lg">

              <h3 class="pt-5 text-[17px] leading-6 text-center font-normal text-[#333]">Bu yerda sizning suratingiz bo’lishi mumkin edi</h3>

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

      <div className="section my-[30px] py-5 pb-10 bg-no-repeat bg-center bg-cover">

        <div className="conatiner max-w-7xl px-3 mx-auto text-center flex flex-col items-center justify-center">

          <h1 className="py-5 text-[32px] text-white leading-[34px] font-semibold">Nega aynan bizni tanlashingiz kerak?</h1>

          <p className="text-[19px] text-white leading-[27px] font-normal">Bizni tanlashingiz uchun 8 ta sabab</p>

          <ul className="ul-sec flex item-center justify-center flex-wrap mt-10 mb-[10px]">

            <li className="card-sec1 bg-white mr-5 mb-[30px] w-[270px] h-auto flex flex-col justify-center items-center p-[20px] rounded-[8px] text-center">

              <h1 className="text-[24px] font-semibold text-[#333]">Tajriba</h1>

              <p className="text-[16px] text[#666] font-normal">10 yildan ortiq tajribaga ega jamoa</p>

            </li>

            <li className="card-sec2 bg-white mr-5 mb-[30px] w-[270px] h-auto flex justify-center items-center flex-col p-[20px] rounded-[8px] text-center">

              <h1 className="text-[24px] font-semibold text-[#333]">Qulay narxlar</h1>

              <p className="text-[16px] text[#666] font-normal">7 kunlik sayohat $100 dan boshlanadi</p>

            </li>

            <li className="card-sec3 bg-white mr-5 mb-[30px] w-[270px] h-auto flex flex-col justify-center items-center p-[20px] rounded-[8px] text-center">

              <h1 className="text-[24px] font-semibold text-[#333]">Keng tanlov</h1>

              <p className="text-[16px] text[#666] font-normal">Sayohatingiz davomida 10dan...</p>

            </li>

            <li className="card-sec4 bg-white mr-5 mb-[30px] w-[270px] h-auto flex flex-col justify-center items-center p-[20px] rounded-[8px] text-center">

              <h1 className="text-[24px] font-semibold text-[#333]">Go'zal shaharlar</h1>

              <p className="text-[16px] text[#666] font-normal">Sifatli xizmat ko'rsatish va tanlovda yordam beramiz</p>

            </li>

            <li className="card-sec5 bg-white mr-5 mb-[30px] w-[270px] h-auto flex flex-col items-center justify-center p-[15px] rounded-[8px] text-center">

              <h1 className="text-[24px] font-semibold text-[#333]">Xavfsizlik</h1>

              <p className="text-[16px] text[#666] font-normal">Sayohatingzi xavfsiz bo'lishiga kafolat beramiz</p>

            </li>

            <li className="card-sec6 bg-white mr-5 mb-[30px] w-[270px] h-auto p-[15px] rounded-[8px] flex flex-col items-center justify-center">

              <h1 className="text-[24px] font-semibold text-[#333]">Ishonch</h1>

              <p className="text-[16px] text[#666] font-normal">Bizning xizmatlarga 2000 dan ortiq mijozlar ishonch bildirgan</p>

            </li>

            <li className="card-sec7 bg-white mr-5 mb-[30px] w-[270px] h-auto p-[15px] rounded-[8px] flex flex-col items-center justify-center ">

              <h1 className="text-[24px] font-semibold text-[#333]">Umumiy guruh</h1>

              <p className="text-[16px] text[#666] font-normal">Safar davomida yeg'ilgan kontentlar bitta umumiy guruhda</p>

            </li>

            <li className="card-sec8 bg-white mr-5 mb-[30px] w-[270px] h-auto p-[15px] rounded-[8px] text-center flex items-center flex-col justify-center ">

              <h1 className="text-[24px] font-semibold text-[#333]">Yuqori sifat</h1>

              <p className="text-[16px] text[#666] font-normal">Sayohatingiz davomida komfort mashinalar va mehmonxonalardan foydalanasiz</p>

            </li>

          </ul>

        </div>

      </div>

      <div className="service max-w-7xl px-3 mx-auto">

        <h1 className="text-[25px] mb-1 font-semibold text-[#333] text-center md:text-[34px] md:mb-[10px]">Dam olish maskanlarimiz</h1>

        <p className="text-[18px] font-normal text-[#666] text-center mb-5">Quyida taklif qilingan dam olish maskanlari bilan tanishib chiqing</p>

        <ul className="flex items-center justify-evenly p-0 m-0 list-none flex-wrap max-lg:gap-8 ">

          <li className="rest-card1 w-[300px] p-[15px] bg-white text-center transition-all duration-[0.3s] shadow-[0_4px_10px_#0000001a]">

            <img className='rounded-lg w-[270px] h-[200px] ' src={r1} />

            <div className='flex flex-row justify-between'>

              <div className="flex items-center justify-between">

                <div className="flex flex-row gap-1 py-[5px]">

                  <i className="fa-regular fa-calendar text-lg"></i>

                  <p className="text-16px font-normal mt-1 ">2 kun</p>

                </div>

              </div>

              <div className="flex flex-row gap-1 py-[5px]">

                <i className="fa-regular fa-user text-base "></i>

                <p className="text-16px font-normal mt-[2px] ">20 ta odam</p>

              </div>

            </div>

            <div className="flex text-left items-center justify-between py-[5px]">

              <h1 className="text-[19px] font-semibold leading-[30px]">Sherwood Resort</h1>

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
              <p className="ml-[5px] text-[17px] ">O'zbekiston</p>
            </div>

            <div className="flex items-center justify-between">

              <p className="text-[18px] text-[#ffa767]">1,000 $</p>

              <del className="text-[15px]">1,200 $</del>

            </div>

            <p className="text-[14px] font-normal text-left leading-[19px] text-[#333] py-[10px]">Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi. Har bir safar - bu yangi tajriba va hayotdan zavqlanish uchun ajoyib imkoniyat.</p>

            <a className="bg-[#5ec2ec] py-[15px] px-10 text-[17px] text-white rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 block" href="#contact">Ko'proq ma'lumot olish</a>

          </li>

          <li className="rest-card2 w-[300px] p-[15px] bg-white text-center transition-all duration-[0.3s] shadow-[0_4px_10px_#0000001a]">

            <img className='rounded-lg w-[270px] h-[200px] ' src={r2} />

            <div className='flex flex-row justify-between'>

              <div className="flex items-center justify-between">

                <div className="flex flex-row gap-1 py-[5px]">

                  <i className="fa-regular fa-calendar text-lg"></i>

                  <p className="text-16px font-normal mt-1 ">2 kun</p>

                </div>

              </div>

              <div className="flex flex-row gap-1 py-[5px]">

                <i className="fa-regular fa-user text-base "></i>

                <p className="text-16px font-normal mt-[2px] ">20 ta odam</p>

              </div>

            </div>

            <div className="flex text-left items-center justify-between py-[5px]">

              <h1 className="text-[19px] font-semibold leading-[30px]">Wellmore Resort</h1>

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
              <p className="ml-[5px] text-[17px] ">O'zbekiston</p>
            </div>

            <div className="flex items-center justify-between">

              <p className="text-[18px] text-[#ffa767]">1,000 $</p>

              <del className="text-[15px]">1,200 $</del>

            </div>

            <p className="text-[14px] font-normal text-left leading-[19px] text-[#333] py-[10px]">Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi. Har bir safar - bu yangi tajriba va hayotdan zavqlanish uchun ajoyib imkoniyat.</p>

            <a className="bg-[#5ec2ec] py-[15px] px-10 text-[17px] text-white rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 block" href="#contact">Ko'proq ma'lumot olish</a>

          </li>

          <li className="rest-card3 w-[300px] p-[15px] bg-white text-center transition-all duration-[0.3s] shadow-[0_4px_10px_#0000001a]">

            <img className='rounded-lg w-[270px] h-[200px] ' src={r3} />

            <div className='flex flex-row justify-between'>

              <div className="flex items-center justify-between">

                <div className="flex flex-row gap-1 py-[5px]">

                  <i className="fa-regular fa-calendar text-lg"></i>

                  <p className="text-16px font-normal mt-1 ">2 kun</p>

                </div>

              </div>

              <div className="flex flex-row gap-1 py-[5px]">

                <i className="fa-regular fa-user text-base "></i>

                <p className="text-16px font-normal mt-[2px] ">20 ta odam</p>

              </div>

            </div>

            <div className="flex text-left items-center justify-between py-[5px]">

              <h1 className="text-[19px] font-semibold leading-[30px]">Parkent ijod uyi</h1>

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
              <p className="ml-[5px] text-[17px] ">O'zbekiston</p>
            </div>

            <div className="flex items-center justify-between">

              <p className="text-[18px] text-[#ffa767]">1,000 $</p>

              <del className="text-[15px]">1,200 $</del>

            </div>

            <p className="text-[14px] font-normal text-left leading-[19px] text-[#333] py-[10px]">Sayohat - bu yangi joylarni kashf etish, madaniyatlar bilan tanishish va unutilmas xotiralarni yaratish imkoniyatini beradi. Har bir safar - bu yangi tajriba va hayotdan zavqlanish uchun ajoyib imkoniyat.</p>

            <a className="bg-[#5ec2ec] py-[15px] px-10 text-[17px] text-white rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 block" href="#contact">Ko'proq ma'lumot olish</a>

          </li>

        </ul>

      </div>

      <section className="table container py-5 m-auto max-md:hidden">

        <div className="jadval m-auto max-w-7xl px-3 mx-auto">

          <h1 className="md:text-[30px] leading-10 text-[25px] text-black text-center font-semibold">Xizmatlar va narxlar</h1>
          <p className="md:text-[17px] leading-[30px] text-[15px] text-[#666] text-center">O'zingizga ma'qul tarifni tanlang</p>

          <div className="table-pr lg:w-[85%] max-lg:w-[100%] m-auto py-5 flex justify-center">

            <table className="w-full border-collapse max-md:w-[75%]">
              <thead>
                <tr>
                  <th className="p-5 w-[25%] text-left font-bold border border-solid border-[#ddd] max-md:w-[15%]">Features</th>
                  <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd] max-md:w-[15%]">Daily</th>
                  <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd] max-md:w-[15%]">Monthly</th>
                  <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd] max-md:w-[15%]">Annually</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-solid border-[#ddd] p-5 text-left w-[25%] max-md:w-[15%]">10-hours training</td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <i className="fa-solid fa-circle-check text-green-600"></i>
                  </td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <i className="fa-solid fa-circle-check text-green-600"></i>
                  </td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <i className="fa-solid fa-circle-check text-green-600"></i>
                  </td>
                </tr>
                <tr>
                  <td className="border border-solid border-[#ddd] p-5 text-left w-[25%] max-md:w-[15%]">Coffee and lunch</td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]"></td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]"></td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <i className="fa-solid fa-circle-check text-green-600"></i>
                  </td>
                </tr>
                <tr>
                  <td className="border border-solid border-[#ddd] p-5 text-left w-[25%] max-md:w-[15%]">Course files to your email in PDF</td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <i className="fa-solid fa-circle-check text-green-600"></i>
                  </td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <i className="fa-solid fa-circle-check text-green-600"></i>
                  </td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <i className="fa-solid fa-circle-check text-green-600"></i>
                  </td>
                </tr>
                <tr>
                  <td className="border border-solid border-[#ddd] p-5 text-left w-[25%] max-md:w-[15%]">Individual consulting</td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <i className="fa-solid fa-circle-xmark text-red-600"></i>
                  </td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <i className="fa-solid fa-circle-check text-green-600"></i>
                  </td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <i className="fa-solid fa-circle-check text-green-600"></i>
                  </td>
                </tr>
                <tr>
                  <td class="border border-solid border-[#ddd] p-5 text-left w-[25%] max-md:w-[15%]">Certificate</td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <i className="fa-solid fa-circle-xmark text-red-600"></i>
                  </td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <i className="fa-solid fa-circle-xmark text-red-600"></i>
                  </td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <i className="fa-solid fa-circle-check text-green-600"></i>
                  </td>
                </tr>
                <tr>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]"></td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <a className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white" href="#contact">
                      <button className="py-[15px] px-10 text-[17px]">Ko'proq</button>
                    </a>
                  </td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <a className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white" href="#contact">
                      <button className="py-[15px] px-10 text-[17px]">Ko'proq</button>
                    </a>
                  </td>
                  <td className="border border-solid border-[#ddd] p-5 text-center w-[25%] max-md:w-[15%]">
                    <a className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white" href="#contact">
                      <button className="py-[15px] px-10 text-[17px]">Ko'proq</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>

        </div>

      </section>

      <section className='max-w-7xl px-3 mx-auto'>

        <h1 className="lg:text-[33px] lg:py-[10px] md:text-[27px] md:py-8 py-5 text-[23px] font-semibold text-center">Mijozlar tomonidan berilgan savollar</h1>

        <div className="md:py-5 mb-5">
          <div className="md:p-6 p-3">
            <main className="max-w-2xl mx-auto">
              <div className="border-b border-gray-200">
                <button className="w-full py-4 text-left focus:outline-none">
                  <div class="plus flex items-center justify-between">
                    <span class="font-semibold">Sizning mahsulotlaringizning saqlash muddati qancha?</span>
                    <span class="plus-icon flex items-center justify-center w-5 h-5 rounded-[50%] transition-all duration-[0.3s]">+</span>
                  </div>
                </button>
              </div>
            </main>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Home