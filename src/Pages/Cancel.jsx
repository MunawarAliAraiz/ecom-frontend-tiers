import React from 'react';

const CancelPage = () => {
  const redirectToHome = () => {
    // Redirect to the home page
    // You can use React Router's history or any other navigation method
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-red-600">Payment Canceled</h1>
      <p className="text-lg mb-8">Your payment has been canceled.</p>
      <button
        onClick={redirectToHome}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Home
      </button>
    </div>
  );
};

export default CancelPage;
