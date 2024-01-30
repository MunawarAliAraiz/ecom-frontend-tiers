import React, { useContext } from 'react';
import { ShopContext } from './../Context/ShopContext';


const SuccessPage = () => {
  const {emptyCart} = useContext(ShopContext)
  const redirectToHome = () => {
    emptyCart()
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-green-600">Payment Successful!</h1>
      <p className="text-lg mb-8">Your payment has been successfully processed.</p>
      <button
        onClick={redirectToHome}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Home
      </button>
    </div>
  );
};

export default SuccessPage;
