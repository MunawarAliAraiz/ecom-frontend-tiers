import React from 'react'
import exclusive_image from '../../Assets/exclusive_image.png'
import bgimg1 from '../../Assets/bgimg1.webp'
import bgimg2 from '../../Assets/bgimg2.jpg'


const Offers = () => {
  return (
    <div style={{backgroundImage: `url(${bgimg1})`}} className='shadow-md shadow-gray-600/50 bg-cover h-[80vh] w-full flex m-auto mb-12 px-10 py-0 bg-gradient-to-b from-pink-200 to-white rounded-md'>
        {/* Offers left */}
        <div className='font-serif font-light flex flex-1 flex-col justify-end pb-10 items-start underline underline-offset-8 decoration-2 decoration-gray-200'>
            <h1 className='text-4xl md:text-7xl'>Offers & Deals</h1>
            <h1 className='text-4xl md:text-7xl'>for you</h1>
            <p className='text-lg md:text-xl mt-1'>Only on Best Sellers Product</p>
            <button className='w-60 h-12 rounded-md bg-gradient-to-tl from-black to-gray-800 border-none text-white mt-7 font-semibold p-2'>Check Now</button>
        </div>
    </div>
  )
}

export default Offers