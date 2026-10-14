import React from 'react'
import gsLogoFull from '../Assets/GS Logo Full.png'
import colors from '../Strings/Colors'

const Footer = () => {
  return (
    <div style={{backgroundColor: colors.grey}}>
        <div className='py-[5rem] w-[80%] mx-auto'>
          <img src={gsLogoFull} alt="GS Logo" className='h-[7rem]'/>
        </div>
    </div>
  )
}

export default Footer