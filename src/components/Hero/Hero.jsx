import React from 'react'
import DonateButton from '../DonateButton';

const Hero = () => {
  return (
    <div className='hero-bg h-screen flex items-center justify-center'>
       <div className='w-auto md:max-w-[1180px] flex flex-col gap-5 md:gap-[30px]'>
        <h1 className='font-poppins md:text-[60px] text-[32px] font-bold text-white text-center md:leading-[4.8rem]'>
        Believing in a sustainable future<br/> through faith, hardwork,
        <br/> and resilience. 
        </h1>
        <div className='flex justify-center items-center'>
          <DonateButton/>
        </div>
       </div>
    </div>
  )
}

export default Hero;