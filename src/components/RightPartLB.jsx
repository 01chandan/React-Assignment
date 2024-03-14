import React from 'react';

function RightPartLB({ value }) {
  return (
    <div className='w-full md:w-1/2 flex my-5'>
      <div className='flex gap-4 items-center'>
        <img className='w-10 h-10 md:w-12 md:h-12' src={value.icon} alt="" />
        <div>
          <h1 className='text-[#4D4D4D] font-bold text-lg md:text-xl'>{value.number}</h1>
          <p className='text-[#717171] text-xs'>{value.description}</p>
        </div>
      </div>
    </div>
  );
}

export default RightPartLB;
