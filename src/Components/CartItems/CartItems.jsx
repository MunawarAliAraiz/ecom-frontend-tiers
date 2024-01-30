import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../../Assets/cart_cross_icon.png'
import {loadStripe} from '@stripe/stripe-js';

const CartItems = () => {
    const {cart, all_product, addToCart, removeAllFromCart, removeFromCart, getTotalCartAmount, emptyCart, apiUrl, stripe_public_key} = useContext(ShopContext)

    const makePayment = async() => {
        const stripe = await loadStripe(stripe_public_key);
        const products = []
        all_product.map((product) => {
            const product_obj = {}
            if (cart[product.id] !== 0) {
                product_obj['id'] = product.id
                product_obj['quantity'] = cart[product.id]
                product_obj['price'] = product.new_price
                product_obj['name'] = product.name
                product_obj['image'] = product.image
                product_obj['quantity'] = cart[product.id]
                products.push(product_obj)
            }
        })
        const body = {
            products: products
        }

        const response = await fetch(`${apiUrl}users/checkout-session`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(body)
        })

        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        })

        // Code here will execute after the redirect completes
        result.on('redirect', (event) => {
            // Code to execute after the redirect
            alert('Payment Successful');
            emptyCart();
        });

        // Handle errors if any during redirect
        result.on('error', (error) => {
            alert(error.message);
        });
        
    }

  return (
    <div className='mx-2 my-10 md:my-24 md:mx-40'>
        <div className='grid grid-cols-6 md:grid-cols-8 text-center items-center gap-1 md:gap-6 py-2 md:py-5 px-0 text-xs md:text-lg font-extrabold'>
            <p>Products</p>
            <p className='md:col-span-3'>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-1 bg-gray-500 border-2' />
        {all_product.map((product) => {
            if (cart[product.id] === 0) {
                return null
            }
            return (
                <div key={product.id}>
                    <div className='grid grid-cols-6 md:grid-cols-8 text-center items-center content-center gap-1 md:gap-6 py-5 px-0 text-xs md:text-lg font-bold'>
                        <img className='w-16 h-16 md:h-24 mx-auto' src={product.image} alt="" />
                        <p className='md:col-span-3'>{product.name}</p>
                        <p>${product.new_price}</p>
                        <div className='mx-auto w-6 md:w-[108px] flex flex-col md:flex-row justify-center rounded-md md:gap-4 bg-gray-200 border-gray-500 border-2'>
                            <button className='text-base text-blue-800' onClick={()=>{addToCart(product.id)}}>+</button>
                            <div className='w-full md:w-9 bg-white'>{cart[product.id]}</div>
                            <button className='text-base text-blue-800' onClick={()=>{removeFromCart(product.id)}}>-</button>
                        </div>
                        <p>${cart[product.id] * product.new_price}</p>
                        <img className='cursor-pointer mx-auto' src={remove_icon} onClick={()=>{removeAllFromCart(product.id)}} alt="" />
                    </div>
                    <hr className='h-1 bg-gray-500 border-2' />
                </div>
            )
        })}
        <div className='flex flex-col md:flex-row justify-center my-12 md:my-24 mx-0'>
            <div className='flex flex-col flex-1 gap-6 md:gap-10 mx-5 md:mr-20'>
                <h1 className='text-4xl md:text-6xl'>Cart Totals</h1>
                <div >
                    <div className='flex justify-between py-4 px-0'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='flex justify-between py-4 px-0'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='flex justify-between py-4 px-0 font-extrabold'>
                        <h1 className='text-lg  md:text-2xl'>Total</h1>
                        <h1 className='text-2xl text-red-500'>${getTotalCartAmount()}</h1>
                    </div>
                </div>
                <button onClick={makePayment} className='w-40 md:w-60 bg-red-500 rounded-md p-2 md:p-4 outline-none text-lg text-white cursor-pointer'>Checkout</button>
            </div>
            <div className='m-5 flex flex-col gap-3 flex-1 text-base md:text-lg font-bold'>
                <p>If you have promo code enter here</p>
                <div className='flex flex-col md:flex-row gap-2 md:gap-0 justify-start items-start rounded-lg'>
                    <input className='w-4/5 border-2 p-3 outline-none bg-gray-100 rounded-md' type="text" placeholder="Promo Code" />
                    <button className='bg-black text-white p-2 md:p-3 rounded-md md:-ml-5'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems