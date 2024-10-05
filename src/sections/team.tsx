import React from 'react';
import Team1 from '../assets/images/team1.png';
import Team2 from '../assets/images/team2.png';
import Team4 from '../assets/images/team4.png';
import Team5 from '../assets/images/team5.png';
import Team6 from '../assets/images/team6.png';

const TeamSection: React.FC = () => {
  return (
    <section className="h-auto flex flex-col items-center justify-center bg-custom-brown px-6 sm:px-12 md:px-16 lg:px-28 py-16">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-yellow-400">Meet The Team</h1>
        <p className="text-center text-lg mt-6 text-white w-full sm:w-[80%]">
          Our inclusive team at Agrisense is driven by a shared passion for transforming agriculture through innovative technology. Bringing together experts in AI, data analytics, agronomy, and supply chain management, we empower farmers and businesses with intelligent solutions for sustainable growth. By working collaboratively, we deliver impactful, data-driven results that enhance transparency, productivity, and food security. Together, we are building a more resilient and sustainable future for agriculture. 
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full lg:w-[65%]">
            <div className="flex flex-col items-center space-y-2 p-6">
            <img src={Team1} alt="Team Member 1" className="md:w-full w-[60%] max-h-[18rem] rounded-lg object-cover" />
            <h2 className="text-lg font-bold text-white">Dancan Odira</h2>
            <p className="text-yellow-400">CEO</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2 p-6">
            <img src={Team2} alt="Team Member 2" className="md:w-full w-[60%] max-h-[18rem] rounded-lg object-cover" />
            <h2 className="text-lg font-bold text-white">Kevin Onyancha</h2>
            <p className="text-yellow-400">CTO</p>
            </div>

            <div className="flex flex-col items-center space-y-2 p-6">
            <img src={Team4} alt="Team Member 4" className="md:w-full w-[60%] max-h-[18rem] rounded-lg object-cover" />
            <h2 className="text-lg font-bold text-white">Plamedi Mayala</h2>
            <p className="text-yellow-400">Frontend Developer</p>
            </div>

            <div className="flex flex-col items-center space-y-2 p-6">
            <img src={Team5} alt="Team Member 5" className="md:w-full w-[60%] max-h-[18rem] rounded-lg object-cover" />
            <h2 className="text-lg font-bold text-white">Anne Marie</h2>
            <p className="text-yellow-400">Backend Developer</p>
            </div>

            <div className="flex flex-col items-center space-y-2 p-6">
            <img src={Team6} alt="Team Member 6" className="md:w-full w-[60%] max-h-[18rem] rounded-lg object-cover" />
            <h2 className="text-lg font-bold text-white">Tamanda Kaunda</h2>
            <p className="text-yellow-400">Social Media Manager</p>
            </div>
        </div>
    </section>
  );
};

export default TeamSection;
