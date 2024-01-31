import React from 'react'
import bgimg1 from '../../Assets/bgimg1.webp'
import bgimg2 from '../../Assets/bgimg2.jpg'
import bgimg3 from '../../Assets/bgimg3.webp'


const NewsLetter = () => {
  return (
    <div style={{backgroundImage: `url(${bgimg3})`}} className='h-[80vh] bg-cover w-full flex flex-col items-center justify-end mx-auto rounded-md shadow-md shadow-gray-600/50'>
        <div className='text-white w-full rounded-lg bg-gradient-to-b from-transparent to-black py-10 px-10 md:px-36 gap-7'>
          <h1 className='text-4xl md:text-6xl font-bold pt-16'>Get the latest updates and offers.</h1>
          <p className='text-xl'>Subscribe to our newsletter and stay updated.</p>
          <div className='w-4/5 flex flex-col gap-5 md:gap-0 lg:flex-row items-center justify-between'>
              <input className='text-black p-5 w-full rounded-lg border-2 text-xl bg-white/70 ml-2 md:ml-7 outline-none font-poppins' type='email' placeholder='your email address' />
              <button className='md:-ml-10 text-center p-6 px-4 md:px-10 bg-black text-white rounded-lg'>Subscribe</button>
          </div>
        </div>
    </div>
  )
}

export default NewsLetter