import React from 'react';

const GetQuote = () => {
  return (
    <div className='mt-[90px] flex justify-center items-center'>
      <div className='getquotebanner bg-white rounded-[30px] w-full max-w-[1200px] p-8 text-center shadow-lg'>
        <p className='text-black text-2xl mb-4'>Hop onto the digital Train</p>
        <p className='text-4xl text-[#CCC] mb-6'>Be A Part of The Next Big Thing</p>
        <a href="/contact" className="inline-block bg-black mt-4 py-4 px-6 font-semibold text-white rounded-full hover:bg-blue-400 transition duration-300">
          Get A Quote
        </a>
      </div>
    </div>
  );
};

export default GetQuote;
