import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

function Nav() {
  return (
    <div className='flex justify-between items-center w-full md:max-w-[1080px] px-4 md:px-0 py-3 md:py-4'>
      <p className='text-lg font-semibold text-Black'>LO<span className='text-[#4CAF4F]'>GO</span></p>

      {/* Toggle Button for Small Screens */}
      <button className='md:hidden text-[#4D4D4D]'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Navigation Links */}
      <div className='hidden md:flex gap-6 items-center justify-items-center'>
        <p className='text-sm text-[#4D4D4D]'>Home</p>
        <p className='text-sm text-[#4D4D4D]'>Features</p>
        <p className='text-sm text-[#4D4D4D]'>Community</p>
        <p className='text-sm text-[#4D4D4D]'>Blog</p>
        <p className='text-sm text-[#4D4D4D]'>Pricing</p>
        <button className='bg-[#4CAF4F] py-2.5 px-5 text-sm text-white rounded flex gap-2 items-center justify-center'>
          Register Now
          <span>
            <FaArrowRightLong size={'0.7rem'} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Nav;
