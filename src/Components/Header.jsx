import React from 'react'
import colors from '../Strings/Colors';
import gsLogo from '../Assets/GS Logo.png';
import { GoKebabHorizontal } from "react-icons/go";

const Header = () => {
  return (
    <div style={{backgroundColor:colors.primaryWhite}}>
      <div className='w-[80%] py-7 h-full flex justify-between mx-auto items-center'>
        <div className='flex items-center gap-3'>
          <img src={gsLogo} alt="Logo" className='h-8'/>
          <p className='text-xl font-semibold'>Coach Yogesh</p>
        </div>
        <div className='lg:flex gap-[2.7rem] items-center hidden'>
          <p className='cursor-pointer hover:text-[#125B50]'>Services</p>
          <p className='cursor-pointer hover:text-[#125B50]'>About me</p>
          <p className='cursor-pointer hover:text-[#125B50]'>Results</p>
        </div>
        <GoKebabHorizontal className='rotate-90 scale-110 cursor-pointer lg:hidden'/>
      </div>
    </div>
  )
}

export default Header