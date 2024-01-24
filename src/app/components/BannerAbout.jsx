import React from 'react';

const teamsMembers = [
  { name: 'Catherina Al Skaff', title: 'CEO, Software Engineer', imgUrl: '/catherinaalskaff.jpg' },
  { name: 'Jens Christian Mowinckel', title: 'UX/UI Designer', imgUrl: '/logo.png' },
  { name: 'Sky El Tenn', title: 'Marketing Specialist', imgUrl: '/logo.png' },
  { name: 'Elio Fikani', title: 'Web Developer', imgUrl: '/logo.png' }
];

const BannerAbout = () => {
  const name = process.env.DOM_NAME;

  return (
    <div className="content-section my-[150px] px-4 text-center" id='team-intro'>
      <h2 className='text-2xl md:text-3xl font-bold mb-5'>Get to know our global team!</h2>
      <p>
        At {name}, we pride ourselves on being an international team of experts...
      </p>
      <p>Hey! Meet our team:</p>
      
      {/* Flex container */}
      <div className="team-members flex flex-wrap justify-center gap-8 mt-6">
        {teamsMembers.map((member, index) => (
          <div key={index} className="shadow-lg team-member mt-[70px] bg-[#6C63FF6E] w-[250px] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            {/* Image positioning */}
            <img src={member.imgUrl} alt={member.name} className="w-32 h-32 object-cover rounded-full absolute -top-16 left-1/2 transform -translate-x-1/2" />
            <div className="pt-20">
              <h3 className="team-member-name font-semibold text-lg">{member.name}</h3>
              <p className="team-member-title text-[#CCC]">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BannerAbout;
