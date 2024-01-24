import React from 'react';
import Image from 'next/image';

const ConsultationText = () => {
  return (
    <div className="md:text-left md:mt-0">
        <p className='text-[#8D86FF] font-semibold text-[20px]'>BOOK A DEMO</p>
        <h2 className='font-bold text-[40px] my-[50px]'>Questions? We’ve Got <span className='text-[#8D86FF]'>Answers</span> </h2>
        <p className='text-white'>Reach out to our team to see how your agency can benefit from <span className='text-[#8D86FF]'>LaNuit TECH.</span> </p>
        
        <Image src='/contactpic.png' className='mt-[80px]' width={200} height={200} alt="Contact Image" />
    </div>
  )
}

export default ConsultationText;
