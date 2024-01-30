import React, {useState, useContext} from 'react'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const RelatedProducts = ({category}) => {

  const {all_product} = useContext(ShopContext)

  return (
    <div className='w-full md:w-4/5 m-auto flex flex-col items-center gap-3 mt-4 mb-20 px-5 md:px-0'>
        <h1 className='text-gray-900 text-center text-4xl mdtext-6xl font-bold'>Related Products</h1>
        <hr className='w-52 h-[6px] rounded-lg bg-gray-900' />
        <div className='grid grid-cols-2 md:grid-cols-4 mt-12 gap-3 md:gap-7'>
        {all_product.map((product, index) => {
            if (product.category === category)
            {
              return <Item key={index} id={product.id} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} category={product.category} />
            } 
          })}
        </div>
    </div>
  )
}

export default RelatedProducts