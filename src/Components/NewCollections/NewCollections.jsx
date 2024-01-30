import React, {useState, useContext} from 'react'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'


const NewCollections = () => {

  const {all_product} = useContext(ShopContext)
  
  // Get the latest 8 products
  const latest_products = all_product.slice(Math.max(all_product.length - 8, 0))

  return (
    <div className='w-full md:w-4/5 m-auto flex flex-col justify-center items-center gap-3 mt-4 mb-20 px-5 md:px-0'>
        <h1 className='text-gray-500 text-4xl md:text-6xl font-bold'>New Collections</h1>
        <hr className='w-52 h-[6px] rounded-lg bg-gray-900' />
        {/* Collections */}
        <div className='grid grid-cols-2 md:grid-cols-4 justify-items-center mt-12 gap-4 md:gap-7'>
            {latest_products.map((item, index) => {
                return <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} category={item.category} />
            })}
        </div>
    </div>
  )
}

export default NewCollections