import React from 'react';
import Team1 from '../assets/images/team1.png';
import Team2 from '../assets/images/team2.png';
import Team3 from '../assets/images/team3.png';
import Team4 from '../assets/images/team4.png';
import Team5 from '../assets/images/team5.png';
import Team6 from '../assets/images/team6.png';

const TeamSection: React.FC = () => {
  return (
    <section className="h-auto flex flex-col items-center justify-center bg-custom-brown px-6 sm:px-12 md:px-16 lg:px-28 py-16">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-yellow-400">Meet The Team</h1>
        <p className="text-center text-lg mt-6 text-white w-full sm:w-[80%]">
            To help monitor and reduce chemical inputs per hectare. To guide for increasing yield and efficiency. 
            To service monitoring cover crops across the whole year. To cooperate for carbon insetting by incorporating 
            carbon-reducing processes for its partners and clients. We support agro-industry and growers in reaching their 
            sustainability goals globally.
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
            <img src={Team3} alt="Team Member 3" className="md:w-full w-[60%] max-h-[18rem] rounded-lg object-cover" />
            <h2 className="text-lg font-bold text-white">Peter Maturwe</h2>
            <p className="text-yellow-400">Full Stack Engineer</p>
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
            <h2 className="text-lg font-bold text-white">Tammy Kaunda</h2>
            <p className="text-yellow-400">Brand Marketer</p>
            </div>
        </div>
    </section>
  );
};

export default TeamSection;
