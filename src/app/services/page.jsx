import React from 'react'
import Package from '../components/Package';


// text-[#8D86FF]

const services = [
  {
    title: <>Custom <span className='text-[#8D86FF]'>Web and Mobile Solutions</span>  for the Modern Digital Landscape"</>,
    description: "At LaNuit TECH, we specialize in crafting state-of-the-art web and mobile solutions that cater to the unique needs of your business. Our expert team of developers is proficient in the latest technologies and frameworks to deliver responsive, user-friendly websites and cutting-edge mobile applications. Whether you're looking for an e-commerce platform, a dynamic web application, or a feature-rich mobile app, we ensure a seamless user experience across all devices. Our development process is transparent, collaborative, and focused on delivering high-performance digital products that drive business growth and user engagement.",
    imgUrl:'/bannerpic.png'
  },
  {
   
    
    title:  <>Elevating Your Brand with Comprehensive <span className='text-[#8D86FF]'>Digital Marketing</span> and <span className='text-[#8D86FF]'>SEO Strategies</span>   </> ,
    description: "In the digital age, visibility is key. LaNuit TECH's digital marketing services are designed to elevate your brand's online presence. We employ advanced SEO techniques to boost your website's rankings, ensuring that you get noticed by your target audience. Our team of digital marketing experts develops tailored strategies, encompassing everything from content marketing and social media campaigns to PPC advertising and email marketing. We focus on creating campaigns that not only increase your visibility but also engage and convert your audience, ensuring a solid return on investment.",
    imgUrl: '/brandelevating.svg'
  },
  {
    title:  <> Crafting Intuitive and Engaging User Experiences with Innovative <span className='text-[#8D86FF]'>UX/UI Design</span>  </>,
    description: "At LaNuit TECH, we believe that the key to a successful digital product lies in its user experience. Our UX/UI design team focuses on creating interfaces that are both visually appealing and intuitively navigable. We start by understanding your users and their needs, which helps us design experiences that are both engaging and functional. From wireframes and prototypes to the final design, we ensure that every aspect of the user interface enhances the user journey, thereby improving customer satisfaction and loyalty.",
    imgUrl: '/uxuidesign.svg'
  },
  {
    title: <>Compelling <span className='text-[#8D86FF]'>Content Creation and Strategy</span>  to Captivate Your Audience  </>,
    description: "Content is the voice of your brand, and at LaNuit TECH, we help you tell your story compellingly. Our content creation and strategy services are designed to resonate with your target audience. From SEO-optimized blog posts and articles to engaging social media content and informative eBooks, our content experts craft narratives that not only inform and entertain but also drive conversions. We focus on creating content that aligns with your brand's voice and objectives, ensuring consistency across all your digital platforms.",
    imgUrl: '/contentcreation.svg'
  },
  { 
    title:<>Transforming Data into Actionable Insights for <span className='text-[#8D86FF]'>Strategic Decision Making</span>   </> ,
    description: "In the data-driven world of digital business, informed decision-making is paramount. LaNuit TECH offers comprehensive data analytics and insights services to help you understand your market and audience better. Our team utilizes the latest tools and techniques to gather and analyze data, providing you with actionable insights that can guide your business strategies. From tracking user behavior to understanding market trends, our analytics services are designed to give you a competitive edge by making data-backed decisions.",
    imgUrl: '/analiytics.svg'
  }
];

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center px-6 py-10 min-h-screen'>
      <Package/>
      {services.map((service, index) => (
        <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} my-10 items-center md:justify-between w-full md:max-w-4xl`}>
          <div className={`w-full md:w-1/2 px-4 py-2`}>
            <h3 className='text-2xl font-bold mb-3'>{service.title}</h3>
            <p className="text-base ">{service.description}</p>
          </div>
          <div className={`w-full md:w-1/2 px-4`}>
            <img src={service.imgUrl} alt={service.title} className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;