// Marketing.jsx
import React from 'react';
import MarketingCart from './MarketingCart';

function Marketing({ value }) {
  return (
    <div className='max-w-[1080px] w-full flex flex-col items-center gap-4 mt-9 px-4'>
      <h1 className='text-2xl font-semibold text-[#4D4D4D] text-center'>Caring is the new marketing</h1>
      <p className='text-[#717171] text-xs md:text-sm text-center w-full max-w-[470px] mb-3'>
        The Nextcent blog is the best place to read about the latest membership insights, trends and more.
        See who's joining the community, read about how our community are increasing their membership income and lots more.​
      </p>

      {/* Marketing Container */}
      <div className='flex flex-wrap w-full justify-center md:justify-between'>
        {value.map((item, index) => (
          <MarketingCart value={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Marketing;
