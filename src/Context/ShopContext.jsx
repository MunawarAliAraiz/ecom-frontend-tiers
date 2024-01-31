import React, { useState, useEffect } from "react";

export const ShopContext = React.createContext('Default');
// const apiUrl = "https://ecom-server-tiers.onrender.com/api/";
// const apiUrl = "http://localhost:4000/api/";
const apiUrl = "https://chartreuse-achieved-soprano.glitch.me/api/";
const stripe_public_key = "pk_test_51LHLWaG5WyR6N5cNFAQIggnSkqUUvcDW8Bqrj2EXz5nJY7wUMSMIjrGhfZU74GB1NyPGc7qMoLMFgjR3ImzYAxRe00vSwcOOg9";

const getDefaultCart = () => {
  let cart = {};
  for (let index = 1; index <= 300; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]);
  const [cart, setCart] = useState(getDefaultCart());
  useEffect(() => {}, [cart]);

  useEffect(() => {
    fetch(`${apiUrl}products/productlist`)
      .then((res) => res.json())
      .then((data) => setAllProduct(data));

    if(localStorage.getItem('token')){
      fetch(`${apiUrl}users/getcartdata`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'auth-token': `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({}),
      })
        .then((res) => res.json())
        .then((data) => {
          setCart(data);
        });
    };

  }, []);

  

  const addToCart = (id) => {
    alert("Added to cart");
    setCart((cart) => ({ ...cart, [id]: cart[id] + 1 }));
    if(localStorage.getItem('token')){
      fetch(`${apiUrl}users/addtocart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'auth-token': `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ 'product_id': id }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
  };

  const removeFromCart = (id) => {
    if (cart[id] > 0) {
      alert("Removed from cart");
      setCart({ ...cart, [id]: cart[id] - 1 });
      if(localStorage.getItem('token')){
        fetch(`${apiUrl}users/removefromcart`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'auth-token': `${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ 'product_id': id }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      };
    }
  };

  const removeAllFromCart = (id) => {
    alert("Completely Removed from cart");
    if (cart[id] > 0) {
      setCart({ ...cart, [id]: 0 });
      if(localStorage.getItem('token')){
        fetch(`${apiUrl}users/completelyremovefromcart`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'auth-token': `${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ 'product_id': id }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      };
    }
  };

  const getTotalCart = () => {
    let total = 0;
    for (let item in cart) {
      total += cart[item];
    }
    return total;
  };

  const emptyCart = () => {
    setCart(getDefaultCart());
    if (localStorage.getItem("token")) {
      fetch(`${apiUrl}users/emptycart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({}),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (let item in cart) {
      let product = all_product.find(({ id }) => id === parseInt(item));
      total += cart[item] * (product && product.new_price ? product.new_price : 0);
    }
    return total;
  };

  const contextValue = {
    all_product,
    cart,
    addToCart,
    removeAllFromCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCart,
    emptyCart,
    apiUrl,
    stripe_public_key,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
