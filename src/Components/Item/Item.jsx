import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className='self-center w-full h-full hover:scale-105 transition-all ease-in delay-100 bg-black shadow-lg shadow-gray-700 rounded-md p-1'>
        <Link to={`/product/${props.category}/${props.id}`} >
          <img onClick={()=>scrollToTop()} className='bg-contain' src={props.image} alt="" />
        
          <p className='m-2 text-sm lg:text-lg text-gray-300' >{props.name}</p>

          {/* Item Prices */}
          <div className='flex gap-5 text-gray-300'>
              {/* Old Price */}
              <div className='text-sm lg:text-xl font-semibold pl-3'>
                  ${props.new_price}
              </div>
              {/* New Price */}
              <div className='text-sm lg:text-xl font-medium line-through'>
                  ${props.old_price}
              </div>
          </div>
        </Link>
    </div>
  )
}

export default Item