"use client"
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <nav className=" mt-4 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        {/* Logo */}
                        <div>
                            <a href="/" className="flex items-center py-4 px-2">
                                {/* <Image src="/logo3.png" alt="Logo" width={45} height={45} className='rounded-[50px]' /> */}
                                <span className="gradient-logo text-xl">&lt;LaNuit/&gt;</span>






                                {/* <span className="ml-3 font-semibold text-white text-lg">CATH TECH</span> */}
                            </a>
                        </div>
                    </div>
                    {/* Primary Navbar items */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="/services" className="py-4 px-4 font-semibold">SERVICES</a>
                        <a href="/contact" className="py-4 px-4 font-semibold">GET IN TOUCH</a>
                        <a href="/portfolio" className="py-4 px-4 font-semibold">OUR PROJECTS</a>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="16" width="12" viewBox="0 0 384 512">
                                    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="16" width="16" viewBox="0 0 512 512"> <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>}
                        </button>
                    </div>
                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <a href="/contact" className="flex justify-center items-center py-[10px] px-[10px] mb-0 font-semibold gradient-button text-white rounded-[50px] hover:bg-blue-400 transition duration-300">
                            Get a Free Consultation
                        </a>
                    </div>

                </div>
            </div>
            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden font-semibold`}>
                <a href="/services" className="block py-2 px-4  text-sm hover:bg-gray-200">SERVICES</a>
                <a href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">GET IN TOUCH</a>
                <a href="/portfolio" className="block py-2 px-4 text-sm hover:bg-gray-200">OUR PROJECTS</a>
                <a href="/contact" className=" mt-[50px]  py-2 px-3 gradient-button text-white rounded-[50px] hover:bg-blue-400 transition duration-300">Get a Free Consultation</a>
                    
            </div>
        </nav>
    );
}
