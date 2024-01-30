import React, {useState, useContext} from 'react'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'


const Popular = () => {

  const {all_product} = useContext(ShopContext)

  // Get the latest 4 women products
  const latest_products = all_product
  .filter((item) => item.category === 'women')
  .slice(Math.max(all_product.filter((item) => item.category === 'women').length - 4, 0));


  return (
    <div className='w-full md:w-4/5 m-auto my-10 px-5 md:px-0'>
      <div className='flex flex-col justify-center items-center gap-3 mt-4'>
          <h1 className='text-gray-500 text-4xl text-center md:text-6xl font-bold'>Popular in Women</h1>
          <hr className='w-52 h-[6px] rounded-lg bg-gray-900' />
          {/* Popular Item */}
          <div className='mt-12 grid grid-cols-2 md:grid-cols-4 justify-center gap-2 lg:gap-7'>
            {latest_products.map((product, index) => {
                return <Item key={index} id={product.id} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} category={product.category} />
            })}
          </div>
      </div>
    </div>
  )
}

export default Popular