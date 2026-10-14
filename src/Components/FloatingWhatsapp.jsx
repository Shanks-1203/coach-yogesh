import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
  return (
    <a href="https://wa.me/919136236970" target="_blank" rel="noopener noreferrer"><div className='fixed bottom-6 right-6 rounded-full w-[3rem] h-[3rem] bg-[#25D366] hover:scale-[1.2] cursor-pointer transition-all flex justify-center items-center'>
        <FaWhatsapp className='text-white text-3xl'/>
    </div></a>
  )
}

export default FloatingWhatsapp