import React from 'react';
import hero from '../assets/hero.svg';

function Hero() {
  return (
    <div className='w-full bg-[#F5F7FA] px-4 md:px-8 lg:px-16 xl:px-24 flex justify-center relative py-12 md:py-24'>
      <div className='flex flex-col md:flex-row justify-between items-center max-w-[1080px]'>
        {/* Left Section */}
        <div className='w-full md:w-[540px] text-center md:text-left'>
          <h1 className='text-[2.5rem] md:text-5xl text-[#4D4D4D] font-semibold leading-[3.2rem] md:leading-[4rem]'>
            Lessons and insights <br />
            <span className='text-[#4CAF4F]'> from 8 years</span>
          </h1>
          <p className='text-[#717171] text-xs mt-3 md:mt-4'>Where to grow your business as a photographer: site or social media?</p>
          <button className='bg-[#4CAF4F] text-white px-6 py-2.5 rounded mt-6 text-xs md:text-sm'>Register</button>
        </div>
        {/* Right Section */}
        <div className='w-full md:w-[540px] flex justify-center items-center mt-10 md:mt-0'>
          <img className='w-full md:w-[272px] h-auto md:h-[283px]' src={hero} alt="" />
        </div>
      </div>
      {/* Three Dots */}
      <div className='flex absolute bottom-5 left-1/2 transform -translate-x-1/2 gap-1.5'>
        <div className='h-2 w-2 rounded-full bg-[#4CAF4F]'></div>
        <div className='h-2 w-2 rounded-full bg-[#4caf4f6e]'></div>
        <div className='h-2 w-2 rounded-full bg-[#4caf4f6e]'></div>
      </div>
    </div>
  );
}

export default Hero;
