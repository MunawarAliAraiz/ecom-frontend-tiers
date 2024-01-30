import React, { useState, useContext } from "react";
import {
  Navbar,
  Collapse,
  IconButton,
  button,
} from "@material-tailwind/react";
import {Bars2Icon} from "@heroicons/react/24/solid";



import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";

import { ShopContext } from "../../Context/ShopContext";
 
 
function NavList({setIsNavOpen}) {
  const nav_items = ["Home", "Men", "Women", "Kids", "About"];
  const [menu, setMenu] = useState("Home");
  return (
    <ul className="text-gray-300 mt-2 mb-4 flex flex-col gap-4 font-semibold text-lg">
    {nav_items.map((item, index) => (
        <li
        key={index}
        onClick={() => setMenu(item)}
        className="flex flex-col gap-[2px] cursor-pointer hover:text-gray-800"
        >
        <p onClick={() => setIsNavOpen((cur) => !cur)}><Link to={`/${item === 'Home' ? '' : item.toLowerCase()}`}>{item}</Link></p>
        {menu === item ? (
            <hr className="hidden lg:block border-none w-16 h-1 rounded-xl bg-red-500" />
        ) : null}
        </li>
    ))}
    </ul>
  );
}
 
export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [fake, setFake] = useState("");
  const {getTotalCart} = useContext(ShopContext)
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar blurred={true} fullWidth={true} className="bg-gray-500/50 sticky top-0 z-10 mx-auto p-2 lg:rounded-md lg:pl-6 shadow-md shadow-white/55 border-none">
      <div className="relative mx-auto px-4 lg:px-10 flex items-center justify-between text-blue-gray-900">
        <div className="hidden">
          <NavList setIsNavOpen={setFake} />
        </div>
        <IconButton
          size="sm"
          color="white"
          variant="text"
          onClick={toggleIsNavOpen}
          className="mr-2"
        >
          <Bars2Icon className="h-8 w-8" />
        </IconButton>
 
        <div className="hidden lg:flex items-center gap-3">
            <img className="w-10 sm:w-5 md:w-20" src={logo} alt="LOGO" />
            <p className="text-gray-300 text-sm lg:text-4xl font-semibold font-poppins">E-Commerce</p>
        </div>
        <div className="block md:hidden items-center gap-3">
            <img className="w-10 sm:w-5 md:w-20" src={logo} alt="LOGO" />
            <p className="text-[#1717171] text-sm lg:text-4xl font-semibold font-bungee">E-Commerce</p>
        </div>

        <div className="flex items-center gap-2 md:gap-5">
          {localStorage.getItem('token') ?
          <button 
            onClick={()=>{
              localStorage.removeItem('token')
              window.location.replace('/');
            }}
            className="text-sm font-semibold px-4 py-2 border-2 text-gray-300 border-gray-500 rounded-2xl active:bg-blue-gray-100">
            Logout
          </button>:
          <Link to={'/login-signup'}>
            <button className="text-sm font-semibold px-4 py-2 border-2 text-gray-300 border-gray-500 rounded-2xl active:bg-blue-gray-100">
            Login
            </button>
          </Link>
          }
            <Link to={'/cart'}>
              <img className="w-10 md:w-15 lg:w-10 invert" src={cart_icon} alt="" />
            </Link>
            <Link to={'/cart'}>
              <div className="w-4 flex justify-center items-center -mt-6 -ml-4 lg:-mt-8 lg:-ml-7 rounded-xl bg-red-500 text-white">
                  {getTotalCart()}
              </div>
            </Link>
        </div>
      </div>
      <Collapse open={isNavOpen} className="flex flex-col">
        <NavList setIsNavOpen={setIsNavOpen} />
      </Collapse>
    </Navbar>
  );
}