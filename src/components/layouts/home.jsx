import React from 'react';
import farmer from '../../assets/coffee farmer.jpg';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto lg:px-24 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start font-sans">
          <div className="lg:w-1/2 lg:pr-16 sm:w-3/4 w-[80%] mt-8 lg:mt-0">
            <h1 className="text-4xl lg:text-6xl text-left text-green-600">Empowering Coffee Farmers, Enhancing Quality, Maximizing Profits</h1>
            <p className="text-lg lg:text-xl mt-4 lg:mt-8">Revolutionizing coffee farming with intelligent disease detection technology, empowering farmers to protect harvest quality.</p>
          </div>
          <div className="lg:w-1/2 lg:pl-16 sm:w-3/4 w-[80%] h-[20rem] lg:h-[35rem] mt-8 lg:mt-0">
            <img
              src={farmer}
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

export default Home;
