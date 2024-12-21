import React, { useState } from 'react'

const Accordion = () => {

    const [openAccordion, setOpenAccordion] = useState(null)

    const toggleAccordion = (id) => {
        setOpenAccordion((prev) => (prev === id ? null : id))
    }

    return (
        <div id="accordion-collapse" data-accordion="collapse">

            <div className='1 border-b border-gray-200' id="accordion-collapse-heading-1">
                <button
                    type="button"
                    className="w-full py-4 text-left focus:outline-none flex justify-between"
                    onClick={() => toggleAccordion(1)}
                    aria-expanded={openAccordion === 1} aria-controls="accordion-collapse-body-1">
                    <span className='font-semibold'>Sizning mahsulotlaringizning saqlash muddati qancha?</span>
                    <i className={`${openAccordion === 1 ? "fa-solid fa-minus" : "fa-solid fa-plus"}`}></i>
                </button>
            </div>
            <div
                id="accordion-collapse-body-1"
                className={`text ${openAccordion === 1 ? 'block' : 'hidden'} p-4`} aria-labelledby="accordion-collapse-heading-1">
                <p>Biz zamonaviy evropa texnologiyalari va uskunalaridan foydalanamiz, bu bizning mahsulotlarimizning yuqori sifatini kafolatlaydi.</p>
            </div>

            <div className='2 border-b border-gray-200' id="accordion-collapse-heading-1">
                <button
                    type="button"
                    className="w-full py-4 text-left focus:outline-none flex justify-between"
                    onClick={() => toggleAccordion(2)}
                    aria-expanded={openAccordion === 2} aria-controls="accordion-collapse-body-1">
                    <span className='font-semibold'>Ishlab chiqarishda qaysi texnologiyalar qo'llaniladi?</span>
                    <i className={`${openAccordion === 2 ? "fa-solid fa-minus" : "fa-solid fa-plus"}`}></i>
                </button>
            </div>
            <div
                id="accordion-collapse-body-1"
                className={`text ${openAccordion === 2 ? 'block' : 'hidden'} p-4`} aria-labelledby="accordion-collapse-heading-1">
                <p>Biz zamonaviy evropa texnologiyalari va uskunalaridan foydalanamiz, bu bizning mahsulotlarimizning yuqori sifatini kafolatlaydi.</p>
            </div>

            <div className='3 border-b border-gray-200' id="accordion-collapse-heading-1">
                <button
                    type="button"
                    className="w-full py-4 text-left focus:outline-none flex justify-between"
                    onClick={() => toggleAccordion(3)}
                    aria-expanded={openAccordion === 3} aria-controls="accordion-collapse-body-1">
                    <span className='font-semibold'>Qanday tarkibiy qismlar ishlatiladi?</span>
                    <i className={`${openAccordion === 3 ? "fa-solid fa-minus" : "fa-solid fa-plus"}`}></i>
                </button>
                <div
                    id="accordion-collapse-body-1"
                    className={`text ${openAccordion === 3 ? 'block' : 'hidden'} p-4`} aria-labelledby="accordion-collapse-heading-1">
                    <p>Biz zamonaviy evropa texnologiyalari va uskunalaridan foydalanamiz, bu bizning mahsulotlarimizning yuqori sifatini kafolatlaydi.</p>
                </div>
            </div>

            <div className='4 border-b border-gray-200' id="accordion-collapse-heading-1">
                <button
                    type="button"
                    className="w-full py-4 text-left focus:outline-none flex justify-between"
                    onClick={() => toggleAccordion(4)}
                    aria-expanded={openAccordion === 4} aria-controls="accordion-collapse-body-1">
                    <span className='font-semibold'>Sizning mahsulotlaringizni qayerdan xarid qilishim mumkin?</span>
                    <i className={`${openAccordion === 4 ? "fa-solid fa-minus" : "fa-solid fa-plus"}`}></i>
                </button>
                <div
                    id="accordion-collapse-body-1"
                    className={`text ${openAccordion === 4 ? 'block' : 'hidden'} p-4`} aria-labelledby="accordion-collapse-heading-1">
                    <p>Biz zamonaviy evropa texnologiyalari va uskunalaridan foydalanamiz, bu bizning mahsulotlarimizning yuqori sifatini kafolatlaydi.</p>
                </div>
            </div>

        </div>
    )
}

export default Accordion