import React from 'react'


const Package = () => {




    const packages = [
        {
            name: "Basic Web Presence Package",
            description: "Ideal for small businesses or startups looking to establish a basic online presence.",
            includes: [
                "Responsive website design (up to 5 pages)",
                "Basic SEO setup",
                "Social media integration",
                "Contact form",
                "Google My Business setup"
            ],
            estimatedPrice: "$1,500 - $3,000/month"
        },
        {
            name: "Digital Marketing and SEO Package",
            description: "Suitable for businesses seeking to enhance their online visibility and engagement.",
            includes: [
                "Advanced SEO services",
                "Social media marketing (setup and 1-month management)",
                "PPC campaign setup",
                "Content creation for SEO (4 blog posts)",
                "Monthly analytics report"
            ],
            estimatedPrice: "$2,500 - $5,000/month"
        },
        {
            name: "E-Commerce and Advanced Web Development Package",
            description: "Perfect for businesses looking to sell online or needing advanced website functionality.",
            includes: [
                "Custom e-commerce website development",
                "Shopping cart and payment gateway integration",
                "Advanced SEO",
                "Product page optimization",
                "Basic CRM integration",
                "Responsive design"
            ],
            estimatedPrice: "$5,000 - $10,000/month"
        }
    ];




    return (
        <div className="container mx-auto mb-[100px]">
          <div className="grid md:grid-cols-3 gap-4">
            {packages.map((pkg, index) => (
              <div key={index} className="max-w-sm rounded-[50px] overflow-hidden shadow-lg flex flex-col justify-between p-4 h-full mt-6 border-t">
                <div>
                  <div className="font-bold text-2xl mb-2 text-[#8D86FF]">{pkg.name}</div>
                  <p className="text-base mb-4">
                    {pkg.description}
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    {pkg.includes.map((include, i) => (
                      <li key={i}>{include}</li>
                    ))}
                  </ul>
                </div>
                <div className="font-bold text-lg mt-4">
                  Estimated <span className="text-[#8D86FF]">{pkg.estimatedPrice}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a href="/contact" className=" mt-4 inline-block hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[30px] gradient-button">
              Get a Quote
            </a>
          </div>
        </div>
      );
    }
    
    export default Package;