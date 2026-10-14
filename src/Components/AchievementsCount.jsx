import React from 'react'
import colors from '../Strings/Colors'

const AchievementsCount = () => {
  return (
    <div style={{backgroundColor: colors.grey}}>
        <div className='w-[80%] py-[3rem] mx-auto my-auto flex flex-col lg:flex-row justify-between items-center'>
          <div className='text-3xl font-semibold'>
            Key Highlights
          </div>
          <div className='flex flex-col lg:flex-row lg:w-full lg:ml-[5rem] xl:ml-[15rem] justify-between items-center'>
            <div className='mt-[2rem] lg:mt-0'>
              <p className='text-5xl mb-3 font-bold' style={{color: colors.green}}>13+</p>
              <p className='text-[18px]'>Years of Wellness</p>
            </div>
            <div className='mt-[2rem] lg:mt-0'>
              <p className='text-5xl mb-3 font-bold' style={{color: colors.green}}>5+</p>
              <p className='text-[18px]'>Years as a coach</p>
            </div>
            <div className='mt-[2rem] lg:mt-0'>
              <p className='text-5xl mb-3 font-bold' style={{color: colors.green}}>500+</p>
              <p className='text-[18px]'>Satisfied Customers</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AchievementsCount