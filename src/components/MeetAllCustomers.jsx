import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

function MeetAllCustomers({ value }) {
  return (
    <div className='w-full bg-[#F5F7FA] py-5 mt-12'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-28 flex flex-col md:flex-row'>

        {/* Left Part */}
        <div className='w-full md:w-[30%] mb-4 md:mb-0'>
          <img className='w-full h-[300px] object-cover rounded-md' src="https://i.pinimg.com/564x/48/50/4f/48504fa357f1d527ec16ec19fbabbda7.jpg" alt="" loading='lazy' />
        </div>

        {/* Right Part */}
        <div className='w-full md:w-[70%] md:pl-8 flex flex-col gap-4 md:gap-2.5'>
          <p className='text-sm text-[#717171]'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel 
            rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, 
            tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi 
            laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus 
            sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis 
            vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae 
            placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero 
            condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <p className='text-[#4CAF4F] font-semibold text-md'>Tim Smith</p>
          <p className='text-[#89939E] text-xs'>British Dragon Boat Racing Association</p>

          {/* Icon Div */}
          <div className='w-full flex flex-wrap flex-row gap-4 md:items-center'>
            {value.map((item, index) => (
              <img key={index} className='w-[2.2rem] duration-500' src={item.icon} alt="" />
            ))}
            <button className='text-[#4CAF4F] font-semibold flex gap-1 items-center text-sm'>
              Meet all customers
              <span>
                <FaArrowRightLong size={'0.7rem'} />
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MeetAllCustomers;
