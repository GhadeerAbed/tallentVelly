import React from 'react'
import logo from '../assest/logo.png'
const Header = ({paragraph}) => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
        <img src={logo} alt='logo' className='h-25 w-25 '></img>
        <h1 className="text-3xl font-semibold -mt-7 tracking-wider">Talents Valley</h1>
        </div>
        <p className='text-xl font-medium tracking-wide my-10 ml-20 ' >{paragraph}</p>
    </div>
  )
}

export default Header