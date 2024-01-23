import React from 'react';
import ConsultationForm from '../components/ConsultationForm';
import ConsultationText from '../components/ConsultationText';

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row  justify-center gap-8 px-6 py-10 min-h-screen w-full mt-[80px]'>
      <ConsultationText className="w-full md:w-1/2"/>
      <ConsultationForm className="w-full md:w-1/2"/>
    </div>
  );
};

export default Contact;
