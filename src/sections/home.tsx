import React from 'react';
import Navbar from '../components/navbar';
import TeamSection from './team';
import Products from './products';
import About from './about';
import Hero from './hero';
import Contact from './contact';
import Footer from '../components/footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />     
      <About />
      <Products />
      <TeamSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;