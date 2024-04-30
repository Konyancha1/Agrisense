import React from 'react';

const Contact = () => {
  return (
    <div className="bg-green-600 rounded-lg py-12 mx-auto w-3/4 shadow-md mb-24">
      <div className="container mx-auto px-4 lg:px-24">
        <p className="text-lg lg:text-xl text-white text-center mb-8">Interested in learning more about our solutions? Reach out to us today!</p>
        <div className="flex justify-center">
          <a href="mailto:agrisense.coffee@gmail.com" className="bg-white text-green-600 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 hover:text-white transition duration-300">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
