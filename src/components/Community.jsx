// Community.jsx
import React from 'react';
import CommunityCart from './CommunityCart';

function Community({ value }) {
  return (
    <div className='w-full md:w-[1002px] mx-auto flex flex-col justify-center items-center mt-8'>
      <h1 className='font-semibold text-[#4D4D4D] text-lg md:text-2xl max-w-[400px] text-center'>
        Manage your entire community in a single system
      </h1>
      <p className='text-[#717171] text-xs md:text-sm leading-7 mt-2'>Who is Nextcent suitable for?</p>

      {/* Community Cards */}
      <div className='flex flex-wrap w-full md:w-[1080px] justify-center md:justify-between mt-4'>
        {value.map((item, index) => (
          <CommunityCart key={index} value={item} />
        ))}
      </div>
    </div>
  );
}

export default Community;
