// MarketingCart.jsx
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

function MarketingCart({ value }) {
  return (
    <div className='relative w-full md:w-[340px] h-[230px] bg-cover rounded-lg mb-20 md:mb-0' style={{ backgroundImage: `url(${value.image})` }}>
      <div className='absolute bg-[#F5F7FA] -bottom-14 w-[80%] left-[50%] -translate-x-1/2 md:-translate-x-1/2 rounded-md py-5 px-6 flex flex-col items-center gap-4 shadow-lg'>
        <p className='text-[#717171] text-sm font-semibold text-center px-5'>{value.description}</p>
        <p className='flex gap-1 items-center text-sm font-semibold text-[#4CAF4F]'>
          Read more
          <span>
            <FaArrowRightLong size={'0.8rem'} />
          </span>
        </p>
      </div>
    </div>
  );
}

export default MarketingCart;
