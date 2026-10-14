import React from 'react'
import colors from '../Strings/Colors'

const ServiceCard = ({icon, title, desc}) => {
  return (
    <div className='h-[19rem] sm:w-[19rem] rounded-md flex flex-col items-center py-7 px-5 cursor-pointer hover:scale-[1.03] transition-all' style={{backgroundColor: colors.grey}}>
        <p className='text-3xl p-4 w-fit rounded-full bg-white'>{icon}</p>
        <p className='text-[18px] font-semibold mt-3'>{title}</p>
        <p className='text-center mt-4'>{desc}</p>
    </div>
  )
}

export default ServiceCard