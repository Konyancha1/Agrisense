import React from "react";
import background from '../assets/images/background.png';
import Button from '../components/button';

const Hero: React.FC = () => {
    return(
        <section
        id="home"
        className="relative h-screen flex flex-col justify-center items-start bg-cover bg-center px-6 sm:px-12 md:px-16 lg:px-28"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-green-500">
            Empowering <span className='text-white'>Farmers</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-green-500">
            Increasing <span className='text-white'>Productivity</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-500">
            Promoting <span className='text-white'>Sustainability</span>
          </h1>
          <p className="text-white text-lg sm:text-xl mt-6 md:mt-10 w-full md:w-[40rem]">
            Drive Growth and Sustainability by unlocking the power of digital agriculture with us.
          </p>
          <div className="mt-6 md:mt-10 flex flex-row space-x-4 sm:justify-start justify-center">
            <Button
              onClick={() => console.log('Get Started Clicked')}
              backgroundColor="bg-green-600 text-white hover:bg-green-800"
              text="Get Started"
            />
            <Button
              onClick={() => window.location.href = 'mailto:agrisense.coffee@gmail.com'}
              backgroundColor="bg-green-700 bg-opacity-30 text-white border border-white hover:bg-white hover:text-black"
              text="Request a Demo"
            />
          </div>
        </div>
      </section>
    );
}

export default Hero;
