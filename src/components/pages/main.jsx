import React from 'react'
import Navbar from '../layouts/navbar'
import Home from '../sections/home';
import About from '../sections/about';
import Solution from '../sections/solution';
import Contact from '../sections/contact';
import Footer from '../layouts/footer';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Solution />
      <Contact />
      <Footer />
    </div>
  )
}

export default Main