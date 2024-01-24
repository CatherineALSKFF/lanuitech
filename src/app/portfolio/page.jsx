'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

const Portfolio = () => {
  const projects = useMemo(() => [
    {
      title: 'Fasting Focused - Personal Training Platform',
      description: 'Collaborated with the Fasting Focused team to develop and market their personal training website...',
      link: 'https://fastingfocused.com/',
      videoUrl: 'https://player.vimeo.com/video/905111178?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0&muted=1'
    },
    {
      title: 'TechFundMe - Blockchain Crowdfunding Platform',
      description: 'Developed TechFundMe, a blockchain-based crowdfunding platform focused on supporting technology causes...',
      link: 'https://techfundme.net/',
      videoUrl: 'https://player.vimeo.com/video/905110814?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0&muted=1'
    },
    {
      title: 'Skaf Stones - Exotic Stones Gallery Website',
      description: 'Collaborated with Skaf Stones Masonry, creating platform representing the brand and marketed their business generating new clients...',
      link: 'https://skafstones.store',
      videoUrl: 'https://player.vimeo.com/video/905110035?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0&muted=1'
    }
  ], []);




  const [visibleProjects, setVisibleProjects] = useState(new Array(projects.length).fill(false));


  useEffect(() => {


  const checkScroll = () => {
    console.log('Checking scroll...'); // Debugging
    projects.forEach((_, index) => {
      const element = document.getElementById(`project-${index}`);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        if (elementPosition < viewportHeight - 100) {
          setVisibleProjects(visibleProjects => {
            const newVisibleProjects = [...visibleProjects];
            newVisibleProjects[index] = true;
            return newVisibleProjects;
          });
        }
      }
    });
  };

    window.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, [projects]); // Add checkScroll here
  












  return (
    <div className='px-6 py-10 min-h-screen'>
     {projects.map((project, index) => (
  <div 
    key={index} 
    id={`project-${index}`}
    className={`my-10 md:grid md:grid-cols-2 md:gap-4 items-center mb-[100px] ${visibleProjects[index] ? 'visible' : 'fadeInOnScroll'}`}
  >
          <div className={`${index % 2 === 0 ? '' : 'md:order-2'} px-4`}>
            <iframe 
              src={project.videoUrl} 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen 
              className="w-full "
              style={{ height: '500px', borderRadius: '50px', maxWidth:'250px' }} // Consistent border-radius across all screen sizes
            ></iframe>
          </div>
          <div className={`${index % 2 === 0 ? 'md:order-2' : ''} px-4 py-2`}>
            <h3 className='text-2xl font-bold mb-3'>{project.title}</h3>
            <p className='mb-[50px]'>{project.description}</p>
            <Link href={project.link} className=" mt-[100px] hover:bg-blue-700  gradient-button rounded-[50px] my-2 px-4 py-3 shadow-lg md:w-auto">
                Check it out
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;