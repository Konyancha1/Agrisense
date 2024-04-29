import React from 'react';
import coffeeFarmer from '../../assets/coffee farmer 2.png';

const About = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 lg:px-24 z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-start font-sans">
          <div className="lg:w-1/2 lg:pl-16 sm:w-3/4 w-[80%] mt-8 lg:mt-0">
            <h1 className="text-2xl lg:text-4xl text-left text-green-600">About Agrisense</h1>
            <p className="text-lg lg:text-xl mt-4 lg:mt-8">At Agrisense, we specialize in 
                <span className='text-green-600 font-semibold'> early disease detection in crops, 
                focusing on improving coffee berry quality.</span> We understand the challenges farmers face
                    in combating disease outbreaks and quality deterioration, especially in susceptible regions.
                    Leveraging data and collaboration with farmers and industry experts, we develop solutions 
                    tailored to their needs. Our mission emphasizes 
                    <span className='text-green-600 font-semibold'> the urgency of disease detection 
                    for safeguarding farmers' livelihoods and ensuring coffee industry competitiveness.</span>
            </p>
          </div>
          <div className="lg:w-1/2 lg:pr-16 sm:w-3/4 w-[80%] h-[20rem] lg:h-[35rem] mt-8 lg:mt-0">
            <img
              src={coffeeFarmer}
              alt="Coffee Farmer"
              className="w-full lg:max-w-md object-cover rounded-lg shadow-lg lg:ml-auto lg:mt-8"
              style={{ maxHeight: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

