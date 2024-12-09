import React from 'react'

const Hero = () => {
    return (
        <div className="hero-in max-w-7xl py-3 mx-auto">

            <h1 className="w-[99%] text-[23px] mb-5 font-semibold text-center lg:text-[30px] md:text-[27px] ">Biz haqimizda quyidagi video orqali batafsil bilib oling</h1>

            <div className="w-[90%] h-[400px] mx-auto flex items-center justify-center lg:w-[60%] ">

                <iframe className="rounded-[10px] w-full h-full " src="https://www.youtube.com/embed/48PSJqwZVIc?si=XpYJWX7WdxQeWOc7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                    #document (https://www.youtube.com/embed/48PSJqwZVIc?si=XpYJWX7WdxQeWOc7)

                </iframe>

            </div>

        </div>
    )
}

export default Hero