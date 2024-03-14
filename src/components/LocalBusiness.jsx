import React from 'react';
import RightPartLB from './RightPartLB';

function LocalBusiness({ value }) {
  return (
    <div className='w-full bg-[#F5F7FA] flex justify-center items-center py-5 mt-10'>
      <div className='max-w-[1080px] w-full flex flex-col md:flex-row md:justify-between md:items-center px-4'>

        {/* Left Part */}
        <div className='w-full md:w-[45%]'>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-[#4D4D4D] font-semibold leading-8'>
            Helping a local <br />
            <span className='text-[#4CAF4F]'> business reinvent itself</span>
          </h1>
          <p className='text-xs md:text-sm text-[#4D4D4D] mt-2'>We reached here with our hard work and dedication</p>
        </div>

        {/* Right Part */}
        <div className='w-full md:w-[55%] flex flex-wrap justify-center md:justify-start mt-4 md:mt-0'>
          {value.map((item, index) => (
            <RightPartLB value={item} key={index} />
          ))}
        </div>       
      </div>
    </div>
  );
}

export default LocalBusiness;
