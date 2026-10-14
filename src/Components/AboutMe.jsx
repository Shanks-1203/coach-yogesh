import React from 'react'
import colors from '../Strings/Colors'
import aboutMeImage from '../Assets/About me image.jpg'
import gsLogo from '../Assets/GS Logo.png'
import texts from '../Strings/Texts'

const AboutMe = () => {
  return (
    <div style={{backgroundColor: colors.grey}}>
        <div className='w-[80%] mx-auto flex flex-col gap-[3rem] lg:flex-row lg:gap-[6rem] items-center py-[3rem]'>
          <img src={aboutMeImage} alt="Yogesh image" className='w-[18rem] rounded-full'/>
          <div>
            <p className='text-3xl font-semibold' style={{color: colors.green}}>About me</p>
            <p className='text-[18px] mt-7'>{texts.aboutMe}</p>
          </div>
        </div>

        <div className='w-[80%] mx-auto flex flex-col gap-[3rem] lg:flex-row lg:gap-[6rem] items-center py-[3rem]'>
          <img src={gsLogo} alt="GS Team logo" className='w-[18rem] rounded-lg'/>
          <div>
            <p className='text-3xl font-semibold' style={{color: colors.green}}>About the GS Team</p>
            <p className='text-[18px] mt-7'>{texts.aboutGS}</p>
          </div>
        </div>
    </div>
  )
}

export default AboutMe