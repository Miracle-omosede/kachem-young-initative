import React from 'react'
import DonateButton from '../DonateButton';

const Hero = () => {
  return (
    <div className='hero-bg h-screen flex items-center justify-center'>
       <div className='w-auto md:max-w-[1180px] flex flex-col gap-[30px]'>
        <h1 className='font-poppins text-[80px] font-bold text-white text-center leading-[5.4rem]'>
        Believing in a sustainable future through faith, hardwork, and resilience. 
        </h1>
        <div className='flex justify-center items-center'>
          <DonateButton/>
        </div>
       </div>
    </div>
  )
}

export default Hero;