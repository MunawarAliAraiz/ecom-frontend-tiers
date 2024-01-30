import React, { useState, useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const { apiUrl } = useContext(ShopContext);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const login = async() => {
    console.log("From Login",formData)
    let responseData;
    await fetch(`${apiUrl}users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => responseData = data)
    console.log(responseData)
    if(responseData.success){
      localStorage.setItem('token', responseData.token)
      window.location.replace('/');
      console.log("Success")
    }
    else{
      alert(responseData.message)
    }
  }

  const signup = async() => {
    console.log("From Sign Up",formData)
    let responseData;
    await fetch(`${apiUrl}users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => responseData = data)
    if(responseData.success){
      localStorage.setItem('token', responseData.token)
      window.location.replace('/');
    }
    else{
      alert(responseData.message)
    }
  }

  return (
    <div className='w-full pt-24 bg-[#fce3fe] pb-5'>
      {/* Login Container */}
      <div className='w-4/5 md:w-3/5 mx-auto py-10 px-14 bg-white rounded-lg'>
        <h1 className='text-3xl md:text-5xl my-5 mx-0'>{state}</h1>
        {/* Form */}
        <div className='flex flex-col gap-3 md: md:gap-7 mt-7'>

          {state === "Sign Up" ? 
          <input
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='h-10 md:h-12 w-full outline-none border-2 pl-5 text-lg text-gray-900' type="text"
            placeholder='Name' />
          : null}

          <input 
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='h-10 md:h-12 w-full outline-none border-2 pl-5 text-lg text-gray-900' type="email" 
            placeholder='Email' />

          <input 
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='h-10 md:h-12 w-full outline-none border-2 pl-5 text-lg text-gray-900' type={showPassword ? "text" : "password"}
            placeholder='Password' />
          <label>
            <input
              className="w-5 h-5 mx-2"
              type="checkbox"
              checked={showPassword}
              onChange={handleToggleShowPassword}
            />
            Show Password
          </label>
          
          <button onClick={state==='Login'?login:signup} className='w-full bg-red-500 text-white py-2 text-bold rounded-md text-lg'>{state}</button>
          
          {state === "Sign Up" ?
          <p className='mt-5 text-base md:text-base font-semibold'>
          Already have an account? <span onClick={()=>setState("Login")} className='text-red-500 font-bold cursor-pointer'>Login here</span>
          </p>:
          <p className='mt-5 text-base md:text-base font-semibold'>
            Create an account? <span onClick={()=>setState("Sign Up")} className='text-red-500 font-bold cursor-pointer'>Click here</span>
          </p>}
          {/* Login Agree */}
          <div className='flex items-center mt-6 gap-5 text-base md:text-xl font-bold'>
            <input className='w-5 h-5' type="checkbox" name='' id='' />
            <p>By continuing, I agree to the terms of use & Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup