import React from 'react'
import hand_icon from '../../Assets/hand_icon.png'
import arrow_icon from '../../Assets/arrow.png'
import hero_image from '../../Assets/hero_image.png'
import bgimg1 from '../../Assets/bgimg1.webp'
import bgimg2 from '../../Assets/bgimg2.jpg'


const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${bgimg2})`}} className='bg-cover h-[90vh] font-serif flex justify-center py-5 md:pt-0 md:flex-row'>
        {/* Hero Left */}
        <div className='flex flex-1 flex-col justify-center gap-2 md:gap-5 pl-10 md:pl-[180px]'>
            <div className='text-gray-900 font-light text-4xl md:text-8xl underline underline-offset-8 decoration-2 decoration-gray-500'>
                <div className='flex items-center gap-5'>
                    <p>New</p>
                </div>
                <p>Collections</p>
                <p>for Everyone</p>
            </div>
            <div className='flex justify-center items-center bg-gradient-to-tl from-black to-gray-800 text-white text-xl w-60 rounded-md gap-2 p-2 cursor-pointer'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>

        {/* Hero Right */}
        {/* <div className='flex flex-1 items-center justify-center'>
            <img className=' md:block h-4/5' src={hero_image} alt="" />
        </div> */}
    </div>
  )
}

export default Hero