/* eslint-disable react/no-unescaped-entities */

'use client';

import { FC } from 'react';

const AdvantagesSection: FC = () => {
  return (
    <section className="py-4 font-poppins md:py-6 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl px-6 md:px-20">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16A34A]">
                ESG and Sustainability Tracking
            </h2>
            <p className="mt-2 text-gray-700 text-lg leading-relaxed">
                Track and optimize your farm’s environmental, social, and governance (ESG) impact with
                real-time data to achieve your sustainability goals. Ensure compliance with global
                sustainability standards, reduce waste, and improve efficiency. Easily generate reports
                to showcase your commitment to sustainability, boosting your market credibility and
                long-term success with data-backed sustainability practices.
            </p>
        </div>
        <div className="mt-8 max-w-5xl px-6 md:mx-auto">
            <div className="w-full h-auto rounded-lg overflow-hidden">
                <img
                src="/assets/image-4.png"
                alt="Sustainability Tracking"
                className="w-full h-full object-cover"
                />
            </div>
        </div>

        <div className="w-full px-6 md:px-20 mt-12 flex flex-col md:flex-row gap-8 lg:gap-12">
            <div className="w-full md:w-[60%] flex flex-col justify-center order-first md:order-first">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#16A34A] mb-4">
                Yield Prediction and Analysis
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                Accurately forecast crop yields with data-driven insights. Analyze historical trends,
                weather patterns, and soil conditions to make proactive decisions. Monitor real-time
                growth, mitigate risks early, and optimize resources to maximize productivity and
                profitability.
                </p>
            </div>
            <div className="w-full md:w-[30%] h-auto overflow-hidden rounded-lg order-last md:order-none border border-yellow-300">
                <img
                src="/assets/image-5.png"
                alt="Production Trend Chart"
                className="w-full h-full object-contain"
                />
            </div>
        </div>

        <div className="w-full px-6 md:px-20 mt-12 flex flex-col md:flex-row-reverse gap-8 lg:gap-12">
            <div className="w-full md:w-[65%] flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#16A34A] mb-4">
                Farm Orders and Sales
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                Streamline your farm's order and sales management with real-time
                tracking, timely fulfillment, and optimized inventory. Leverage
                sales insights to refine pricing, boost profitability, and enhance
                customer satisfaction for sustained growth.
                </p>
            </div>
            <div className="w-full md:w-[35%] md:mx-0 h-72 md:h-auto overflow-hidden rounded-lg order-last md:order-none">
                <img
                src="/assets/image-6.png"
                alt="Farm Orders and Sales"
                className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </div>
    </section>
  );
};

export default AdvantagesSection;
