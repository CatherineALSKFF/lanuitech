import React from 'react';
import ConsultationForm from '../components/ConsultationForm';
import ConsultationText from '../components/ConsultationText';

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-8 px-6 py-10 min-h-screen w-full mt-[80px]'>
    <div className="w-full md:w-1/2 slide-in-left">
      <ConsultationText />
    </div>
    <div className="w-full md:w-1/2 slide-in-right">
      <ConsultationForm />
    </div>
  </div>
  );
};

export default Contact;
