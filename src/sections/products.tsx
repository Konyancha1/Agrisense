import React from 'react';
import Button from '../components/button';
import Soil from '../assets/images/soil.png';
import Detection from '../assets/images/disease.png';
import Finance from '../assets/images/finance.png';
import Weather from '../assets/images/weather.png';
import Device from '../assets/images/device.png';
import Agronomist from '../assets/images/agronomist.png';
import Support from '../assets/images/support.png';
import Productivity from '../assets/images/productivity.png';
import Operations from '../assets/images/operations.png';
import Forecasting from '../assets/images/forecast.png';
import Climate from '../assets/images/plant.png';
import Finances from '../assets/images/finances.png';
import Sustainability from '../assets/images/sustainability.png';
import Global from '../assets/images/global.png';

const Products: React.FC = () =>{
    return(
        <>
            <section id="products" className="h-auto flex flex-col items-center justify-start px-6 sm:px-12 md:px-16 lg:px-28 bg-gray-200 py-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700 text-center">Our Products</h1>
                <p className="text-lg font-bold text-yellow-700 mt-2 text-center">Our Value, Your Success</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-items-center mt-12">
                    <div className="flex flex-col rounded-lg space-y-4 p-6 w-full max-w-xs h-[25rem] bg-gray-100 shadow-lg">
                        <img src={Device} className="w-full h-48 object-cover rounded-lg mx-auto" />
                        <p className="text-lg font-bold">Digital Traceability</p>
                        <p className="text-sm text-gray-600">
                            Ensure you adhere to stringent international traceability and sustainability compliance requirements to avoid market disruptions and ensure continuous revenue.
                        </p>
                    </div>

                    <div className="flex flex-col rounded-lg space-y-4 p-6 w-full max-w-xs h-[25rem] bg-gray-100 shadow-lg">
                        <img src={Detection} className="w-full h-48 object-cover rounded-lg mx-auto" />
                        <p className="text-lg font-bold">Early and Accurate Disease Detection</p>
                        <p className="text-sm text-gray-600">
                            50% yield increase demonstrated across crops! Significantly reduce the need for pesticides and herbicides through timely detection and intervention.
                        </p>
                    </div>

                    <div className="flex flex-col rounded-lg space-y-4 p-6 w-full max-w-xs h-[25rem] bg-gray-100 shadow-lg">
                        <img src={Soil} className="w-full h-48 object-cover rounded-lg mx-auto" />
                        <p className="text-lg font-bold">Advanced Analytics</p>
                        <p className="text-sm text-gray-600">
                            Get comprehensive insights into farm health, including soil moisture, pest activity, crop conditions, inventory, and other farm records.
                        </p>
                    </div>

                    <div className="flex flex-col rounded-lg space-y-4 p-6 w-full max-w-xs h-[25rem] bg-gray-100 shadow-lg">
                        <img src={Agronomist} className="w-full h-48 object-cover rounded-lg mx-auto" />
                        <p className="text-lg font-bold">AI Agronomist</p>
                        <p className="text-sm text-gray-600">
                            Fill the knowledge gap among farmers through tailored virtual agronomic advice in local languages. Learn more about sustainable farming practices to increase productivity.
                        </p>
                    </div>

                    <div className="flex flex-col rounded-lg space-y-4 p-6 w-full max-w-xs h-[25rem] bg-gray-100 shadow-lg">
                        <img src={Weather} className="w-full h-48 object-cover rounded-lg mx-auto" />
                        <p className="text-lg font-bold">Weather Alert</p>
                        <p className="text-sm text-gray-600">
                            Beat unpredictable weather patterns that can lead to significant crop and financial losses. Become Climate-resilient!
                        </p>
                    </div>

                    <div className="flex flex-col rounded-lg space-y-4 p-6 w-full max-w-xs h-[25rem] bg-gray-100 shadow-lg">
                        <img src={Finance} className="w-full h-48 object-cover rounded-lg mx-auto" />
                        <p className="text-lg font-bold">Finance Access</p>
                        <p className="text-sm text-gray-600">
                            Increase your appeal to financial and insurance institutions. Easily access different loans and finance options from our partners.
                        </p>
                    </div>
                </div>
            </section>
            <section className="h-auto flex flex-col items-center justify-start px-6 sm:px-12 md:px-16 lg:px-28 bg-green-600 py-16">
                <div className="w-full flex flex-col lg:flex-row lg:space-x-8 items-start lg:items-center">
                    <div className="flex flex-col mb-8 lg:mb-0 w-full lg:w-1/2 px-4 sm:px-8 lg:px-12">
                        <p className="text-lg font-bold text-yellow-400 text-center md:text-left">Our Advantage</p>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mt-2 text-center md:text-left">
                            Join Agrisense.<br />
                            Increase yields, protect crops, access global markets.
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
                        <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
                            <img src={Operations} className="h-10" alt="Operations" />
                            <p className="text-white text-base">Improve your supply operations.</p>
                        </div>

                        <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
                            <img src={Productivity} className="h-10" alt="Productivity" />
                            <p className="text-white text-base">Boost your productivity.</p>
                        </div>

                        <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
                            <img src={Global} className="h-10" alt="Global Market Access" />
                            <p className="text-white text-base">Seamless Global Market Access.</p>
                        </div>

                        <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
                            <img src={Sustainability} className="h-10" alt="Sustainability" />
                            <p className="text-white text-base">Reach sustainability goals.</p>
                        </div>

                        <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
                            <img src={Finances} className="h-10" alt="Financial Services" />
                            <p className="text-white text-base">Access Financial and Insurance services.</p>
                        </div>

                        <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
                            <img src={Climate} className="h-10" alt="Climate-Smart Farming" />
                            <p className="text-white text-base">Learn about climate-smart farming.</p>
                        </div>

                        <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
                            <img src={Forecasting} className="h-10" alt="Weather Forecasting" />
                            <p className="text-white text-base">Predictive weather forecasting.</p>
                        </div>

                        <div className="flex flex-row items-center justify-center space-x-2 w-full h-[7rem] p-4 bg-green-700 rounded-lg">
                            <img src={Support} className="h-10" alt="Agronomic Support" />
                            <p className="text-white text-base">Get virtual Agronomic support.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col space-y-6 items-center justify-center mt-10'>
                    <p className='text-white text-center w-full md:w-[70%] md:text-2xl text-lg'>Ready to beat your competition? Join the Agrisense community and harness the power of AI and digital tools to increase yields, protect your crops, and access global markets.</p>
                    <Button
                        onClick={() => console.log('Create Your Account Clicked')}
                        backgroundColor="bg-yellow-400 hover:bg-yellow-600"
                        text="Create Your Account" />
                </div>
            </section>
        </>
    );
}

export default Products;