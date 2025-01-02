'use client'
import FeaturesSection from "./components /FeaturesSection";
import Footer from "./components /Footer";
import Hero from "./components /HeroSection";
import Navbar from "./components /Navbar";
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <div className="flex flex-col justify-center gap-2 items-center">
      <h1 className="font-semibold font-poppins text-2xl">Trusted by</h1>
      <div className="flex gap-3">
        <div className="w-44 h-28">
        <img src="/assets/karmi-logo.png" alt="Karmi valley logo" className="w-full h-full"/>
        </div>
        <div className="w-44 h-28">
        <img src="/assets/microsoft-logo.png" alt="Karmi valley logo" className="w-full h-full"/>
        </div>
      </div>
    </div>
    <section>
      <div className="flex flex-col gap-3 p-4">
        <h1 className="text-2xl font-semibold text-[#16A34A]">About Us</h1>
        <p className="text-lg">
        At Agrisense, we deliver cutting-edge digital solutions for traceability, compliance, and productivity 
        in agriculture. Our platform enhances transparency, streamlines operations, and optimizes resource use, 
        connecting agribusinesses to global markets. Dedicated to sustainability and efficiency, we empower you 
        to grow smarter and succeed in today’s competitive landscape.
        </p>
      </div>
    </section>
    <section className="w-full py-16 bg-white flex items-center justify-center">
      <div className="max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-green-700">
            Become Audit-Ready, Always
          </h2>
          <p className="text-xl text-yellow-500 mt-2">
            Smarter. Simpler. Quicker
          </p>
          <p className="mt-6 text-gray-600">
            Stay prepared for audits with WaziTrack Compliance Software. Our platform ensures you meet regulatory
            standards like GLOBALGAP, Fairtrade International, USDA Organic, EUDR, EU Organic Certification, HACCP, and more.
          </p>
          <ul className="mt-6 space-y-4 text-gray-700">
            <li>
              <strong>AI-Powered Accuracy:</strong> Correct critical errors in real-time with AI-driven corrective actions.
            </li>
            <li>
              <strong>Mobile-First:</strong> Manage key activities on your phone, from SPS to SOPs, CCPs to SSOPs.
            </li>
            <li>
              <strong>Create and Manage HACCP Plans:</strong> Build and maintain comprehensive HACCP plans for your facility.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/assets/image-2.png" // Add the image to the public folder
              alt="A woman inspecting crops in a greenhouse"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
    <FeaturesSection />
    <section className="bg-[#EEEEFF5F] py-16 px-6 md:px-12 lg:px-24">
      <div>
        {/* Left Content */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-green-600">
            Organize your farm Operations and get more done
          </h1>
          <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
            Take control of your farm operations with tools designed to plan, track, and manage
            every task efficiently. With integrated scheduling, task management, work tracking, and
            detailed reporting, WaziTrack ensures your team stays aligned and
            productive—whether online or offline.
          </p>
        </div>
        {/* Right Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/assets/image-3.png" // Replace with your image path
              alt="Farmer working"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Features */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Streamlined Task Management</h3>
              <p className="text-sm text-gray-700 mt-2">
                Organize, assign, and prioritize tasks effortlessly, ensuring your team knows
                exactly what to do and when. Monitor progress in real time to stay on track and meet
                deadlines.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Flexible Workflows</h3>
              <p className="text-sm text-gray-700 mt-2">
                Tailor task lists, boards, and calendars to suit your farm’s unique needs, creating
                an efficient and seamless operational flow.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Simple Time Tracking</h3>
              <p className="text-sm text-gray-700 mt-2">
                Accurately track employee hours and manage labor resources with ease, ensuring
                precise and effective time reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title and Description */}
        <h2 className="text-2xl md:text-3xl font-bold text-green-600">
          ESG and Sustainability Tracking
        </h2>
        <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
          Track and optimize your farm’s environmental, social, and governance (ESG) impact with
          real-time data to achieve your sustainability goals. Ensure compliance with global
          sustainability standards, reduce waste, and improve efficiency. Easily generate reports
          to showcase your commitment to sustainability, boosting your market credibility and
          long-term success with data-backed sustainability practices.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/assets/image-4.png" // Replace with the correct image path
            alt="Sustainability Tracking"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-600">
            Yield Prediction and Analysis
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
            Accurately forecast crop yields with data-driven insights. Analyze historical trends,
            weather patterns, and soil conditions to make proactive decisions. Monitor real-time
            growth, mitigate risks early, and optimize resources to maximize productivity and
            profitability.
          </p>
        </div>

        {/* Image/Chart Section */}
        <div className="rounded-lg overflow-hidden border border-yellow-300 shadow-sm">
          <Image
            src="/assets/image-5.png" // Replace with your uploaded chart image path
            alt="Production Trend Chart"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left: Image */}
        <div className="md:w-1/2">
          <img
            src="/assets/image-6.png"
            alt="Farm Orders and Sales"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right: Text Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Farm Orders and Sales
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Streamline your farm's order and sales management with real-time
            tracking, timely fulfillment, and optimized inventory. Leverage
            sales insights to refine pricing, boost profitability, and enhance
            customer satisfaction for sustained growth.
          </p>
        </div>
      </div>
    </section>
    <section className="w-full py-16 bg-white flex items-center justify-center">
      <div className="max-w-5xl w-full px-6">
        <h2 className="text-4xl font-bold text-green-700">Start Using Agrisense Now</h2>
        <p className="mt-4 text-gray-600">
          Enhance your productivity and maximize profits with Agrisense! Our cutting-edge tools transform data into actionable insights, eliminating the guesswork in farming and driving your success.
        </p>
        <p className="mt-6 text-yellow-500 font-semibold">Talk to Our Team</p>
        <p className="text-gray-600 mb-8">To get in touch, please fill out the form below. Our team is committed to responding within 24 hours."</p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input className="w-full mt-2 p-3 border border-green-300 rounded-lg" placeholder="e.g Agrisense" />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input className="w-full mt-2 p-3 border border-green-300 rounded-lg" placeholder="e.g Technologies" />
          </div>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input className="w-full mt-2 p-3 border border-green-300 rounded-lg" placeholder="e.g agrisense.coffee@gmail.com" />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input className="w-full mt-2 p-3 border border-green-300 rounded-lg" placeholder="e.g +254 769 999 066" />
          </div>
          <div>
            <label className="block text-gray-700">Company</label>
            <input className="w-full mt-2 p-3 border border-green-300 rounded-lg" placeholder="e.g AgriSense Technology Limited" />
          </div>
          <div>
            <label className="block text-gray-700">Country</label>
            <input className="w-full mt-2 p-3 border border-green-300 rounded-lg" placeholder="e.g Rwanda" />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700">Leave Us A Message</label>
            <textarea className="w-full mt-2 p-3 border border-green-300 rounded-lg h-40"></textarea>
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-start">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-green-700">Submit</button>
          </div>
        </form>
      </div>
    </section>
    <Footer />
    </>
  );
}
