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
    <div className='mt-[90px] flex justify-center items-center'>
      <div className={`getquotebanner bg-white rounded-[30px] w-full max-w-[1200px] p-8 text-center shadow-lg ${isVisible ? 'slide-in' : ''}`}>
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
