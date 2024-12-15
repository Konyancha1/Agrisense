import React from 'react';
import backgroundImg from '../assets/agricultureBG.jpg';

interface HomeProps {
  backgroundImage?: string;
}

const Home: React.FC<HomeProps> = ({
  backgroundImage = `url(${backgroundImg})`,
}) => {
  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-green-900"></div>
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold text-green-100">
            Empowering Farmers with Data
          </h1>
          <p className="mb-5 text-lg text-green-50">
            At Agrisense, we leverage technology to provide actionable insights
            for farmers, enhancing productivity and sustainability. 
            Join us in transforming agriculture through innovation.
          </p>
          <button className="btn text-white hover:bg-green-600 border-none">
            Explore Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
