import React from 'react'

const Accordion = () => {
    return (
        <div>
            <button className="w-full py-4 text-left focus:outline-none">
                <div class="plus flex items-center justify-between">
                    <span class="font-semibold">Sizning mahsulotlaringizning saqlash muddati qancha?</span>
                    <span class="plus-icon flex items-center justify-center w-5 h-5 rounded-[50%] transition-all duration-[0.3s]">+</span>
                </div>
            </button>
        </div>
    )
}

export default Accordion