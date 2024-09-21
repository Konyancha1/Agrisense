import React from 'react';
import NewsletterBackground from '../assets/images/subscribe_bg.png';

const Contact: React.FC = () => {
  return (
    <>
      <section id='contact' className="h-auto flex flex-col items-center justify-center bg-green-600 px-6 sm:px-12 md:px-16 lg:px-28 py-10">
        <div className="w-full lg:w-[55%] bg-gray-100 p-8 rounded-lg shadow-lg">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-left text-black mb-2">Let's Talk</h1>
          <p className='text-lg text-black mb-6'>To contact us, fill out the form below and we’ll get back to you within 24 hours.</p>
          <form className="flex flex-col space-y-6 mb-8">
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-2">Your Name</label>
              <input type="text" id="name" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your name" required />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-2" >Your Email</label>
              <input type="email" id="email" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your email" required />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-2">Message</label>
              <textarea id="message" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Write your message..." required></textarea>
            </div>
            <div className="col-span-2 flex justify-center">
              <button type="submit" className="w-[30%] bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-700 transition">Submit</button>
            </div>
          </form>
        </div>
        
       <div
          className="h-auto flex flex-col sm:flex-row items-center sm:space-x-10 space-y-6 sm:space-y-0 w-full sm:w-[80%] bg-cover bg-center p-6 sm:p-12 mt-8 rounded-3xl"
          style={{ backgroundImage: `url(${NewsletterBackground})` }}
        >
          <div className='flex flex-col space-y-2 text-center sm:text-left'>
            <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-white">Subscribe to Our Newsletter</h1>
            <p className="text-lg text-white">Receive valuable insights and updates directly in your inbox</p>
          </div>
        
          <form className="flex flex-col sm:flex-row w-full sm:w-[45%]">
            <div className="flex flex-grow">
              <input
                type="email"
                className="p-3 border border-gray-300 rounded-l-3xl focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-800 text-white hover:bg-green-800 font-bold px-6 rounded-r-3xl transition sm:mt-0 mt-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
