import React from 'react';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className='w-full bg-[#263238] flex justify-center py-12'>
      <div className='max-w-[1080px] w-full text-white flex flex-col items-center md:items-start md:flex-row md:justify-between px-4'>

        {/* Copyright */}
        <div className='py-2.5 text-[#f5f7fa9e] w-full md:w-auto text-center md:text-left mb-4 md:mb-0'>
          <p className='text-xs'>Copyright © 2024 Landify UI Kit.</p>
          <p className='text-xs'>All rights reserved</p>

          {/* Social Media Icons */}
          <div className='flex gap-3.5 py-6 text-white justify-center md:justify-start'>
            <AiOutlineInstagram size={'1rem'} className='p-1 w-8 h-8 bg-[#515B60] rounded-full flex items-center justify-center cursor-pointer' />
            <FaLinkedin size={'1rem'} className='p-1 w-8 h-8 bg-[#515B60] rounded-full flex items-center justify-center cursor-pointer' />
            <FaTwitter size={'1rem'} className='p-1 w-8 h-8 bg-[#515B60] rounded-full flex items-center justify-center cursor-pointer' />
            <FaYoutube size={'1rem'} className='p-1 w-8 h-8 bg-[#515B60] rounded-full flex items-center justify-center cursor-pointer' />
          </div>
        </div>

        {/* Company Links */}
        <div className='text-xs text-[#f5f7fa9e] flex flex-col gap-2.5 mb-4 md:mb-0'>
          <h2 className='text-base py-2 text-white'>Company</h2>
          <p>About us</p>
          <p>Blog</p>
          <p>Contact Us</p>
          <p>Pricing</p>
          <p>Testimonials</p>
        </div>

        {/* Social Media Links */}
        <div className='text-xs text-[#f5f7fa9e] flex flex-col gap-2.5 mb-4 md:mb-0'>
          <h2 className='text-base py-2 text-white'>Support</h2>
          <p>Help center</p>
          <p>Terms of service</p>
          <p>Legal</p>
          <p>Privacy policy</p>
          <p>Status</p>
        </div>

        {/* Message Us */}
        <div className='flex flex-col gap-2.5'>
          <h2 className='text-center md:text-start md:text-base py-2'>Stay up to date</h2>
          <form action='' className='flex items-center'>
            <input
              type='text'
              placeholder='Your email address'
              className='rounded-md w-full md:w-52 placeholder:text-[#D9DBE1] text-xs py-2.5 px-3.5 focus:outline-none bg-[#515B60]'
            />
            {/* Icon */}
            <IoPaperPlaneOutline size={'1rem'} className='-translate-x-7 cursor-pointer' />
          </form>
        </div>

      </div>
    </div>
  );
}

export default Footer;
