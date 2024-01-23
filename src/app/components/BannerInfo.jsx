import React from 'react'


const services = [
    {
      title: "Web Development",
      description: "Crafting state-of-the-art websites with a focus on user experience and responsiveness."
    },
    {
      title: "SEO Strategies",
      description: "Implementing cutting-edge SEO techniques to boost your online visibility and drive organic traffic."
    },
    {
      title: "Digital Marketing",
      description: "Creating targeted marketing campaigns that engage and convert your audience."
    },
    {
      title: "Brand Strategy",
      description: "Building cohesive and compelling brand narratives that resonate with your target market."
    },
    {
      title: "Content Creation",
      description: "Producing high-quality, SEO-optimized content that tells your story and captivates your audience."
    },
    {
      title: "Social Media Management",
      description: "Harnessing the power of social platforms to expand your reach and strengthen customer engagement."
    },
    {
      title: "Analytics and Insights",
      description: "Leveraging data to inform strategies and drive decision-making."
    }
  ];
  

  const BannerInfo = () => {
    const name = process.env.DOM_NAME;
  
    return (
      <div className="content-section my-12 px-4 text-center">
        <h3 className='text-2xl md:text-3xl font-semibold my-5'>Our Comprehensive Range of Services</h3>
        <p>We understand that the digital landscape is ever-evolving...</p>
  
        {/* Slider container with max width and overflow handling */}
        <div className="overflow-hidden relative mb-6 max-w-full">
          <div className="service-slider mt-6 flex overflow-x-auto">
            {services.map((service, index) => (
              <div className='service-box bg-[#7972EA94] rounded-[50px] p-6 m-2 h-[200px] w-[300px] min-w-[300px]' key={index}>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
  
        <a href="/contact" className="mt-[60px] py-[20px] px-[20px] font-semibold gradient-button text-white rounded-[50px] hover:bg-blue-400 transition duration-300">
          Get a Free Consultation
        </a>
      </div>
    );
  };
  
  export default BannerInfo;
  