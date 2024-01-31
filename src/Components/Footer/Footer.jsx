import React from 'react'
import footer_logo from '../../Assets/logo_big.png'
import instagram_icon from '../../Assets/instagram_icon.png'
import pintester_icon from '../../Assets/pintester_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

    const links = [
        {name: 'Company'},
        {name: 'Products'},
        {name: 'Offices'},
        {name: 'About'},
        {name: 'Contact'},
    ]

    const social_links = [
        {name: 'Instagram', icon: instagram_icon},
        {name: 'Pintester', icon: pintester_icon},
        {name: 'WhatsApp', icon: whatsapp_icon},
    ]

  return (
    <div className='font-poppins text-white mt-10 flex flex-col justify-center items-center gap-4 lg:gap-12 bg-gradient-to-b from-transparent to-black rounded-t-lg pt-5 bg-grad shadow-lg shadow-gray-300 drop-shadow-md'>
        {/* Logo */}
        <div className='flex items-center gap-3'>
            <img className='w-16 lg:w-24 ' src={footer_logo} alt="" />
            <p className='text-3xl lg:text-5xl font-light'>E-Commerce</p>
        </div>

        {/* Links */}
        <ul className='flex flex-col lg:flex-row justify-center list-none lg:gap-12 text-xl'>
            {links.map((link, index) => (
                <li key={index} className='cursor-pointer hover:text-gray-500'>{link.name}</li>
            ))}
        </ul>

        {/* Social Links */}
        <div className='flex gap-3'>
            {social_links.map((link, index) => (
                <div key={index} className='p-2 bg-white border-2 rounded-full cursor-pointer hover:bg-blue-gray-100'>
                    <img src={link.icon} alt={link.name} />
                </div>
            ))}
        </div>

        {/* Copyrights */}
        <div className='flex flex-col items-center gap-7 w-full mb-7 text-base lg:text-xl'>
            <hr className='w-4/5 border-none rounded-lg h-1 bg-gray-200' />
            <p className='text-white'>Copyright @ {year} - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer