// CommunityCart.jsx
import React from 'react';

function CommunityCart({ value, index }) {
  return (
    <div className='w-full md:w-[200px] flex flex-col items-center py-4 px-4 rounded-md mt-5 md:mt-0 md:mr-4 shadow-sm hover:scale-105 duration-500 hover:shadow-md'>
      <img key={index} className='w-[48px] h-[40px]' src={value.icon} alt="" />
      <h1 className='text-[#4D4D4D] font-black text-xl text-center mt-2'>{value.heading}</h1>
      <p className='text-[11px] text-[#717171] text-center mt-2'>{value.description}</p>
    </div>
  );
}

export default CommunityCart;
