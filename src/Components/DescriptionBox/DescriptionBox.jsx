import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='m-10 md: md:my-28 md:mx-40'>
        <div className='flex'>
            <div className='flex items-center justify-center text-lg font-bold p-3 w-28 md:w-40 h-12 md:h-16 border-2 border-black/35 rounded-md'>Description</div>
            <div className='flex items-center justify-center text-lg font-bold w-40 h-12 md:h-16 border-2 border-black/35 rounded-md bg-gray-200'>Reviews (122)</div>
        </div>
        <div className='flex flex-col gap-2 md:gap-6 border-2 border-black/35 rounded-md p-5 md:p-12 pb-10 md:pb-16'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Natus, voluptatum. Quam, voluptatum.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Natus, voluptatum. Quam, voluptatum.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox