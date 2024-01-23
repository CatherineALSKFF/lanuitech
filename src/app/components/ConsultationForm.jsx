"use client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    jobTitle: '',
    workEmail: '',
    companySize: '',
    companyType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response)
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
      // Handle success - you might want to clear the form or show a success message
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error - show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto shadow-2xl p-10 rounded-[30px] bg-[#6C63FF6E] form-input">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="firstName" className="block text-white my-2">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className="shadow-lg w-full p-2 border rounded-[15px] bg-[#BDBCD587] border-none "
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block text-white my-2">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className="shadow-lg w-full p-2 border rounded-[15px] bg-[#BDBCD587] border-none "
          />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="flex-1">
          <label htmlFor="companyName" className="block text-white my-2">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Acme"
            className="shadow-lg w-full p-2 border rounded-[15px] bg-[#BDBCD587] border-none "
          />
        </div>
        <div className="flex-1">
          <label htmlFor="jobTitle" className="block text-white my-2">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Marketing Specialist"
            className="shadow-lg w-full p-2 border rounded-[15px] bg-[#BDBCD587] border-none "
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="workEmail" className="block text-white my-2">Work Email</label>
        <input
          type="email"
          id="workEmail"
          name="workEmail"
          value={formData.workEmail}
          onChange={handleChange}
          placeholder="john.doe@gmail.com"
          className="shadow-lg w-full p-2 border rounded-[15px] bg-[#BDBCD587] border-none "
        />
      </div>

      <div className="mb-4">
        <label htmlFor="companySize" className="block text-white my-2">Company Size</label>
        <select 
          id="companySize"
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
          className="shadow-lg w-full p-2 border rounded-[15px] bg-[#BDBCD587] border-none "
        >
          <option value="">Select Company Size</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-500">201-500 employees</option>
          <option value="501-1000">501-1000 employees</option>
          <option value="1001+">1001+ employees</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="companyType" className="block text-white my-2">Company Type</label>
        <select 
          id="companyType"
          name="companyType"
          value={formData.companyType}
          onChange={handleChange}
          className="shadow-lg w-full p-2 border rounded-[15px] bg-[#BDBCD587] border-none "
        >
          <option value="">Select Company Type</option>
          <option value="Accounting">Accounting</option>
          <option value="Marketing">Marketing</option>
          <option value="IT">IT</option>
          <option value="Financial Services">Financial Services</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Retail">Retail</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-white my-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us your challenges, requirements or ask us a question."
          className="shadow-lg w-full p-2 border rounded-[15px] bg-[#BDBCD587] border-none  h-32 message-form"
        />
      </div>

      <button type="submit" className="hover:bg-blue-700  gradient-button rounded-[50px] my-2 px-4 py-3 shadow-lg md:w-auto" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
