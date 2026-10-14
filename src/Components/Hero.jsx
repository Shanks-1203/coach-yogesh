import React from 'react'
import heroImg from "../Assets/Hero Image.png"
import colors from '../Strings/Colors'
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Hero = () => {
  return (
    <div className='py-4' style={{backgroundColor:colors.primaryWhite}}>
      <div className='w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center'>
        <div>
          <p className='text-5xl font-semibold'>Hey, I'm Yogesh</p>
          <p className='text-xl mt-4 md:text-center lg:text-left'>Your Wellness & Lifestyle Coach</p>
          <div className='flex gap-7 items-center mt-8 md:justify-center lg:justify-start'>
            <div className='text-white px-5 py-3 h-full rounded-full cursor-pointer font-medium transition-all' style={{backgroundColor: colors.green}}>
              Contact me
            </div>
            <a href="https://instagram.com/gs_wellness_team?igshid=MzRlODBiNWFlZA==" target='blank'><div className='p-3 rounded-full bg-white text-2xl cursor-pointer' style={{color: colors.green}}><FaInstagram /></div></a>
            <a href="https://youtube.com/@gs_wellness_team" target='blank'><div className='p-3 rounded-full bg-white text-2xl cursor-pointer' style={{color: colors.green}}><AiOutlineYoutube /></div></a>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="Hero Image" className='w-[29rem] mt-[2rem] lg:mt-0'/>
        </div>
      </div>
    </div>
  )
}

export default Hero