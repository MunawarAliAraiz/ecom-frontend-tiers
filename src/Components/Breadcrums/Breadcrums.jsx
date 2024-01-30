import React from 'react'
import arrow_icon from '../../Assets/breadcrum_arrow.png'

const Breadcrums = ({product}) => {
  return (
    <div className='flex items-center gap-2 text-xs md:text-xl font-extrabold capitalize my-3 md:my-10 mx-5 md:mx-40'>
        Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums