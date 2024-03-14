import React from 'react';

function LearnMore({ value }) {
  return (
    <div className='max-w-[1080px] mx-auto flex flex-wrap items-center mt-5 px-4 md:px-0'>

      {/* Right Part */}
      <div className='w-full md:w-1/2 flex justify-center md:pl-5'>
        <img className='w-full md:w-[360px]' src={value.image} alt="" />
      </div>

      {/* Left Part */}
      <div className='w-full md:w-1/2 md:pr-8'>
        <h1 className='text-[#4D4D4D] font-semibold text-xl md:text-2xl leading-9'>
          {value.heading}
        </h1>
        <p className='text-[#4D4D4D] text-sm md:text-base mt-3'>{value.description}</p>
        <button className='bg-[#4CAF4F] text-white px-4 py-2.5 rounded mt-6 text-xs md:text-sm'>Learn More</button>
      </div>

    </div>
  );
}

export default LearnMore;
