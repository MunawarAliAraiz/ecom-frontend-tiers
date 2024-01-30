import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ComplexNavbar } from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home"
import Category from "./Pages/Category"
import Product from "./Pages/Product"
import About from "./Pages/About"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import SuccessPage from "./Pages/Success"
import CancelPage from "./Pages/Cancel"

import men_banner from '../src/Assets/banner_mens.png'
import women_banner from '../src/Assets/banner_women.png'
import kids_banner from '../src/Assets/banner_kids.png'


function App() {

  return (
    <BrowserRouter>
      <ComplexNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Category banner={men_banner} category="men" />} />
        <Route path="/women" element={<Category banner={women_banner} category="women" />} />
        <Route path="/kids" element={<Category banner={kids_banner} category="kid" />} />
        <Route path="/product/:category/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
