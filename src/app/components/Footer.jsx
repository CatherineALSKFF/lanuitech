import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-10 mt-10 footer-shadow"  >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
        {/* Links Section */}
        <div className="mb-8 md:mb-0">
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul >
            <li><a href="/services" className="hover:text-gray-300">OUR SERVICES</a></li>
            <li><a href="/portfolio" className="hover:text-gray-300">OUR PROJECTS</a></li>
            <li><a href="/#team-intro" className="hover:text-gray-300">ABOUT US</a></li>
            <li><a href="/contact" className="hover:text-gray-300">GET IN TOUCH</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-8 md:mb-0">
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61555972621459" className="hover:text-gray-300">FACEBOOK</a></li>
            <li><a href="https://www.linkedin.com/company/lanuit-tech/" className="hover:text-gray-300">LINKEDIN</a></li>
            <li><a href="https://www.instagram.com/lanuit_tech/" className="hover:text-gray-300">INSTAGRAM</a></li>
          </ul>
        </div>

        {/* Call to Action */}
        <div>
          <h4 className="font-bold text-lg mb-4">Get Involved</h4>
          <a href="/contact" className="inline-block  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[30px] gradient-button">
            Get a Quote
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
