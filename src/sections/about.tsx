import React from 'react';
import Image1 from '../assets/images/image1.png';

const About: React.FC = () => {
    return(
        <section id="about" className="bg-green-600 px-12 lg:px-56 py-16">
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
    );
}

export default About;