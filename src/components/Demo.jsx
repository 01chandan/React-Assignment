import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

function Demo() {
  return (
    <div className='w-full bg-[#F5F7FA] mt-10 md:mt-36 flex justify-center py-10'>
      <div className='max-w-[1080px] w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8'>

        <h1 className='text-[#263238] font-semibold text-xl sm:text-3xl md:text-4xl text-center leading-normal px-4 sm:px-0 md:px-10 lg:px-36'>
          " I'm putting all my effort into being the best Front-End developer I can be. "
        </h1>

        <button className='bg-[#4CAF4F] py-2.5 px-6 text-sm text-white rounded flex gap-2 items-center justify-center mt-6'>
          Select Me
          <span>
            <FaArrowRightLong size={'0.7rem'} />
          </span>
        </button>

      </div>
    </div>
  );
}

export default Demo;
