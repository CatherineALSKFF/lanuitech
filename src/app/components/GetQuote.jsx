'use client'
import React, { useState, useEffect } from 'react';

const GetQuote = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const el = document.querySelector('.getquotebanner');
    if (el) {
      const rect = el.getBoundingClientRect();
      const elemTop = rect.top;
      const isVisible = elemTop < window.innerHeight && elemTop >= 0;
      setIsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check on initial render
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  return (
    <div className='mt-[90px] flex justify-center items-center px-4'>
      <div className={`getquotebanner bg-white rounded-[30px] w-full max-w-[1200px] p-8 text-center shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <p className='text-lg md:text-xl lg:text-2xl mb-4 text-black'>Hop onto the digital Train</p>
        <p className='text-xl md:text-2xl lg:text-4xl mb-6 text-[#CCC]'>Be A Part of The Next Big Thing</p>
        <a href="/contact" className="inline-block bg-black mt-4 py-3 md:py-4 px-6 md:px-8 font-semibold text-white rounded-full hover:bg-blue-400 transition duration-300">
          Get A Quote
        </a>
      </div>
    </div>
  );
};

export default GetQuote;
