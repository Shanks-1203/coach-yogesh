import React from 'react'
import colors from '../Strings/Colors'
import texts from '../Strings/Texts'
import ServiceCard from './ServiceCard'
import services from '../Strings/Services'

const Services = () => {
  return (
    <div style={{backgroundColor: colors.primaryWhite}}>
      <div className='py-[3rem] w-[80%] mx-auto'>
        <div className='flex flex-col items-center'>
          <p className='text-3xl font-semibold text-center'>Let's walk together.</p>
          <p className='md:w-[27rem] w-full text-center mt-7 opacity-60'>{texts.servicePromise}</p>
        </div>
        <div className='flex flex-col justify-between items-center gap-7 mt-10 lg:flex-row lg:w-[78%] xl:w-full lg:mx-auto lg:flex-wrap xl:flex-nowrap'>
          {
            services.map(service => (
              <ServiceCard key={service.id} icon={service.icon} title={service.title} desc={service.desc}/>
            ))
          }
        </div>
        <a href="https://wa.me/919136236970" target="_blank" rel="noopener noreferrer">
          <p className='mx-auto mt-10 hover:underline cursor-pointer w-fit' style={{color: colors.green}}>Wanna know more? Let's talk.</p>
        </a>
      </div>
    </div>
  )
}

export default Services