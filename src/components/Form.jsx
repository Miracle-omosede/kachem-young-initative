"use client"

import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className=" max-w-md mx-auto mt-8 font-poppins">
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21v-3m0 0V9a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v9m0 0v3m0-3h-6m3 0c1.552 0 2.5-1.5 2.5-3s-1-3-2.5-3S10 16.5 10 18s1 3 2.5 3z"></path>
            </svg>
          </span>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-3 py-2 pl-10 border  border-[#097895] rounded-md focus:outline-none focus:border-[black]"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 6.586l-8 5.333-8-5.333M5.333 8L12 13l6.667-5M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
            </svg>
          </span>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="abc@gmail.com"
            className="w-full px-3 py-2 pl-10 border  border-[#097895] rounded-md focus:outline-none focus:border-[black]"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="block mb-2 text-gray-700">Phone Number</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3zm3 0v18m12-18v18M6 10h12"></path>
            </svg>
          </span>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+234 **********"
            className="w-full px-3 py-2 pl-10 border  border-[#097895] rounded-md focus:outline-none focus:border-[black]"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message"
          rows="4"
          className="w-full px-3 py-2 border border-[#097895] rounded-md focus:outline-none focus:border-[black]"
        ></textarea>
      </div>
      <button type="submit" className="bg-[#097895] text-white py-2 px-4 w-full rounded-md hover:bg-[#097895] focus:outline-none focus:bg-[#097895]">Send</button>
    </form>
  );
};

export default Form;
