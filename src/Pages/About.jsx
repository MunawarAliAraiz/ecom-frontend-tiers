import React from 'react'

const desc1 = "We are a UK based distributor for authentic African clothing, working closely with our partner in Ethiopia to provide the highest quality of authentic, traditional, and organically sourced fashion pieces."

const desc2 = "Our selection of items from Ethiopia are made from 100% pure and organic cotton, hand woven with incredible skill and passion in a style endemic to one of the oldest and most historic nations on the planet."

const desc3 = "Our selection from Ethiopia is commonly used in celebrations as well as for casual use amongst all Ethiopians."

const desc4 = "We at OCA want to see these traditional pieces on as many wearers as possible with or without an occasion, the Ethiopian way."

const About = () => {
  const descriptions = [desc1, desc2, desc3, desc4]

  return (
    <div className='w-[90%] md:w-4/5 my-10 m-auto mb-12 px-10 md:px-24 py-0 bg-gradient-to-b from-pink-200 to-white rounded-md'>
        <h1 className='p-5 text-center text-5xl md:text-6xl font-bold'>About US</h1>
        <div className='my-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-center text-lg'>
          {descriptions.map((item, index)=>{
            return <p className='md:text-left font-bold md:text-2xl'>{item}</p>
          })}
        </div>
    </div>
  )
}

export default About