import React from 'react';
import Image from 'next/image';

const HeroBanner = () => {
  const name = process.env.DOM_NAME;

  return (
    <div className='flex flex-col md:flex-row items-center md:justify-start text-center md:text-left space-y-4 md:space-y-0 md:space-x-6'>
      
      <div>
        <p className='font-extrabold text-[30px] lg:text-[40px]'>
         Take Your Business <span className='text-[#8D86FF]'>Online</span> With Us
        </p>
        <p className='text-[15px] lg:text-[20px]'>
        We create sleek, modern SEO friendly websites, and maintain and advertise!  
        </p>
      </div>
      <div className='flex-shrink-0'>
        <Image src='/bannerpic.png' alt='Banner' width={500} height={300} className='object-cover object-center' />
      </div>
    </div>
  );
};

export default HeroBanner;
