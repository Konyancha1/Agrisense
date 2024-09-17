import React from 'react';
import Navbar from '../components/navbar';
import background from '../assets/images/background.png';
import Button from '../components/button';
import Image1 from '../assets/images/image1.png';
import Soil from '../assets/images/soil.png';
import Detection from '../assets/images/disease.png';
import Finance from '../assets/images/finance.png';
import Weather from '../assets/images/weather.png';
import Device from '../assets/images/device.png';
import Agronomist from '../assets/images/agronomist.png';
import Support from '../assets/images/support.png';
import Productivity from '../assets/images/productivity.png';
import Operations from '../assets/images/operations.png';
import Forecasting from '../assets/images/forecast.png';
import Climate from '../assets/images/plant.png';
import Finances from '../assets/images/finances.png';
import Sustainability from '../assets/images/sustainability.png';
import Global from '../assets/images/global.png';
import Team1 from '../assets/images/team1.png';
import Team2 from '../assets/images/team2.png';
import Team3 from '../assets/images/team3.png';
import Team4 from '../assets/images/team4.png';
import Team5 from '../assets/images/team5.png';
import Team6 from '../assets/images/team6.png';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
    
      <section
        id="home"
        className="relative h-screen flex flex-col justify-center items-start bg-cover bg-center px-6 sm:px-12 md:px-16 lg:px-28"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-green-500">
            Empower Farmers
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-green-500">
            Increasing Productivity
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-500">
            Promoting Sustainability
          </h1>
          <p className="text-white text-lg sm:text-xl mt-6 md:mt-10 w-full md:w-[40rem]">
            Revolutionizing farming with advanced technologies to ensure resilient and inclusive African food systems.
          </p>
          <div className="mt-6 md:mt-10 flex flex-row space-x-4 sm:justify-start justify-center">
            <Button
              onClick={() => console.log('Create Account Clicked')}
              backgroundColor="bg-green-600 text-white hover:bg-green-700"
              text="Create Account"
            />
            <Button
              onClick={() => console.log('Book Demo Clicked')}
              backgroundColor="bg-green-700 bg-opacity-30 text-white border border-white hover:bg-white hover:text-black"
              text="Book Demo"
            />
          </div>
        </div>
      </section>

      <section id="about" className="bg-green-600 px-12 lg:px-56 py-10">
        <p className="text-lg font-bold text-left text-yellow-400">About Us</p>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2'>Who We Are</h1>
        <div className='flex flex-col md:flex-row mt-16 space-y-6 md:space-y-0 md:space-x-12 justify-center items-center'>
          <img src={Image1} className='w-full md:w-[24rem] rounded-lg' alt="About Us" />
          <p className='w-full md:w-[65%] text-white text-left text-lg'>
            Agrisense Technologies is dedicated to transforming African agriculture by empowering farmers with
            digital tools that enhance climate adaptation, resilience, and promote sustainable farming practices. 
            Our platform addresses farm management inefficiencies, unpredictable weather patterns, traceability gaps
            from farm-to-cup, farmer education and regulatory compliance to ensure continuous market access, 
            fostering inclusive food systems and driving sustainable growth. We partner with financial and insurance
            institutions to facilitate easier access to financial services like loans and insurance for our farmers.
          </p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center mt-16 space-y-6 md:space-y-0 md:space-x-6'>
          <div className='flex flex-col justify-center space-y-2 w-full md:w-[30rem] h-[15rem] p-4 bg-green-700 rounded-lg'>
            <p className='text-yellow-400 text-lg'>Our Mission</p>
            <p className='text-white text-base'>
              To empower smallholder farmers with advanced technologies that improve productivity, 
              ensure compliance with international standards, and build a more climate-resilient agricultural 
              sector across Africa.
            </p>
          </div>
          <div className='flex flex-col justify-center space-y-2 w-full md:w-[30rem] h-[15rem] p-4 bg-green-700 rounded-lg'>
            <p className='text-yellow-400 text-lg'>Our Vision</p>
            <p className='text-white text-base'>
              To revolutionize African agriculture by providing cutting-edge technology solutions that 
              promote sustainability, productivity, and inclusivity in food systems.
            </p>
          </div>
          <div className='flex flex-col justify-center space-y-2 w-full md:w-[30rem] h-[15rem] p-4 bg-green-700 rounded-lg'>
            <p className='text-yellow-400 text-lg'>Our Core Pillars</p>
            <ul className='text-white text-base list-disc pl-5'>
              <li>Climate Resilience and Adaptation</li>
              <li>Supply Chain Digitization</li>
              <li>Socio-economic Growth</li>
              <li>Technology and Innovation</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="product" className="h-auto flex flex-col items-center justify-start px-6 sm:px-12 md:px-16 lg:px-28 bg-gray-200 py-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700 text-center">Our Products</h1>
        <p className="text-lg font-bold text-yellow-700 mt-2 text-center">Our Value, Your Success</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-items-center mt-12">
          <div className="flex flex-col rounded-lg space-y-4 p-6 w-full max-w-xs h-[25rem] bg-gray-100 shadow-lg">
            <img src={Device} className="w-full h-48 object-cover rounded-lg mx-auto"/>
            <p className="text-lg font-bold">Digital Traceability</p>
            <p className="text-sm text-gray-600">
              Ensure you adhere to stringent international traceability and sustainability compliance requirements to avoid market disruptions and ensure continuous revenue.
            </p>
          </div>
          
          <div className="flex flex-col rounded-lg space-y-4 p-6 w-full max-w-xs h-[25rem] bg-gray-100 shadow-lg">
            <img src={Detection} className="w-full h-48 object-cover rounded-lg mx-auto"/>
            <p className="text-lg font-bold">Early and Accurate Disease Detection</p>
            <p className="text-sm text-gray-600">
              50% yield increase demonstrated across crops! Significantly reduce the need for pesticides and herbicides through timely detection and intervention.
            </p>
          </div>

          <div className="flex flex-col rounded-lg space-y-4 p-6 w-full max-w-xs h-[25rem] bg-gray-100 shadow-lg">
            <img src={Soil} className="w-full h-48 object-cover rounded-lg mx-auto"/>
            <p className="text-lg font-bold">Advanced Analytics</p>
            <p className="text-sm text-gray-600">
              Get comprehensive insights into farm health, including soil moisture, pest activity, crop conditions, inventory, and other farm records.
            </p>
          </div>

          <div className="flex flex-col rounded-lg space-y-4 p-6 w-full max-w-xs h-[25rem] bg-gray-100 shadow-lg">
            <img src={Agronomist} className="w-full h-48 object-cover rounded-lg mx-auto"/>
            <p className="text-lg font-bold">AI Agronomist</p>
            <p className="text-sm text-gray-600">
              Fill the knowledge gap among farmers through tailored virtual agronomic advice in local languages. Learn more about sustainable farming practices to increase productivity.
            </p>
          </div>

          <div className="flex flex-col rounded-lg space-y-4 p-6 w-full max-w-xs h-[25rem] bg-gray-100 shadow-lg">
            <img src={Weather} className="w-full h-48 object-cover rounded-lg mx-auto"/>
            <p className="text-lg font-bold">Weather Alert</p>
            <p className="text-sm text-gray-600">
              Beat unpredictable weather patterns that can lead to significant crop and financial losses. Become Climate-resilient!
            </p>
          </div>

          <div className="flex flex-col rounded-lg space-y-4 p-6 w-full max-w-xs h-[25rem] bg-gray-100 shadow-lg">
            <img src={Finance} className="w-full h-48 object-cover rounded-lg mx-auto"/>
            <p className="text-lg font-bold">Finance Access</p>
            <p className="text-sm text-gray-600">
              Increase your appeal to financial and insurance institutions. Easily access different loans and finance options from our partners.
            </p>
          </div>
        </div>
      </section>

      <section className="h-auto flex flex-col items-center justify-start px-6 sm:px-12 md:px-16 lg:px-28 bg-green-600 py-10">
        <div className="w-full flex flex-col lg:flex-row lg:space-x-8 items-start lg:items-center">
          <div className="flex flex-col mb-8 lg:mb-0 w-full lg:w-1/2 px-4 sm:px-8 lg:px-12">
            <p className="text-lg font-bold text-yellow-400 text-center md:text-left">Our Advantage</p>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mt-2 text-center md:text-left">
              Join Agrisense.<br />
              Increase yields, protect crops, access global markets.
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
            <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
              <img src={Operations} className="h-10" alt="Operations" />
              <p className="text-white text-base">Improve your supply operations.</p>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
              <img src={Productivity} className="h-10" alt="Productivity" />
              <p className="text-white text-base">Boost your productivity.</p>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
              <img src={Global} className="h-10" alt="Global Market Access" />
              <p className="text-white text-base">Seamless Global Market Access.</p>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
              <img src={Sustainability} className="h-10" alt="Sustainability" />
              <p className="text-white text-base">Reach sustainability goals.</p>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
              <img src={Finances} className="h-10" alt="Financial Services" />
              <p className="text-white text-base">Access Financial and Insurance services.</p>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
              <img src={Climate} className="h-10" alt="Climate-Smart Farming" />
              <p className="text-white text-base">Learn about climate-smart farming.</p>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
              <img src={Forecasting} className="h-10" alt="Weather Forecasting" />
              <p className="text-white text-base">Predictive weather forecasting.</p>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
              <img src={Support} className="h-10" alt="Agronomic Support" />
              <p className="text-white text-base">Get virtual Agronomic support.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-6 items-center justify-center mt-10'>
          <p className='text-white text-center w-full md:w-[70%] md:text-2xl text-lg'>Ready to beat your competition? Join the Agrisense community and harness the power of AI and digital tools to increase yields, protect your crops, and access global markets.</p>
          <Button
            onClick={() => console.log('Create Your Account Clicked')}
            backgroundColor="bg-yellow-400 hover:bg-yellow-600"
            text="Create Your Account"
          />
        </div>
      </section>

      <section className="h-auto flex flex-col items-center justify-center bg-custom-brown px-6 sm:px-12 md:px-16 lg:px-28 py-10">
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

    </div>
  );
};

export default Home;