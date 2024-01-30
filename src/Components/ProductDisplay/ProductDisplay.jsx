import React, { useState, useContext } from 'react'
import star_icon from '../../Assets/star_icon.png'
import star_dull_icon from '../../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = ({product}) => {

    const sizes = ['S', 'M', 'L', 'XL', 'XXL']
    const [size, setSize] = useState(sizes[0])
    const {addToCart} = useContext(ShopContext)

  return (
    <div className='flex flex-col md:flex-row my-0 mx-3 md:mx-40'>
        {/* Product Display Left */}
        <div className='flex justify-center gap-4'>
            {/* Product Image List */}
            {/* <div className='hidden md:flex flex-col gap-4'>
                <img className='w-20 h-24' src={product.image} alt="" />
                <img className='w-20 h-24' src={product.image} alt="" />
                <img className='w-20 h-24' src={product.image} alt="" />
                <img className='w-20 h-24' src={product.image} alt="" />
            </div> */}
            {/* Product Image */}
            <div className='bg-gray-200 p-5 w-[250px] md:w-[400px]'>
                <img className='bg-contain' src={product.image} alt="" />
            </div>
        </div>
        {/* Product Display Right */}
        <div className='flex flex-col my-0 mx-7 md:mx-14'>
            <h1 className='text-xl md:text-4xl font-poppins font-extrabold'>{product.name}</h1>
            {/* Product Rating */}
            <div className='flex items-center gap-1 mt-3 text-sm md:ext-lg'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            {/* Product Price */}
            <div className='flex my-5 m-0 gap-7 text-lg md:text-2xl font-extrabold'>
                <div className='text-gray-800 line-through'>${product.old_price}</div>
                <div className='text-red-600 font-bold'>${product.new_price}</div>
            </div>
            {/* Product Description */}
            <div>
                <p>{product.description}</p>
            </div>
            {/* Product Size */}
            <div>
                <h1 className='text-xl md:text-3xl font-poppins font-extrabold'>Select Size</h1>
                <div className='flex my-7 mx-0 gap-5'>
                    {sizes.map((item, index) => (
                        <div onClick={()=>setSize(sizes[index])} key={index} className={`text-sm md:text-lg py-2 px-3 md:py-3 md:px-4 bg-white ${item === size ? 'border-red-700 border-4': 'border-2'} cursor-pointer rounded-sm`}>{item}</div>
                    ))}
                </div>
            </div>
            <button key={product.id} onClick={()=>{addToCart(product.id)}} className='py-2 px-6 md:py-4 md:px-8  text-base font-semibold text-white bg-red-500 mb-10 border-none outline-none cursor-pointer w-48'>Add to Cart</button>
            <p className='font-light'><span className='text-lg font-extrabold'>Category :</span>Women, T-Shirt, Crop Top</p>
            <p className='mt-3 font-light'><span className='text-lg font-extrabold'>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay