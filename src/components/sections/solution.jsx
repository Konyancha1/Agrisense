import React from 'react';
import SolutionCard from '../layouts/card';
import { FaTools, FaQuestion, FaCheck } from 'react-icons/fa';

const Solution = () => {
  return (
    <div className="container mx-auto px-4 lg:px-24 py-12">
        <h2 className="text-2xl lg:text-4xl text-green-600 text-center mb-8">Our Solution</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto lg:mx-2 sm:w-[65%] w-3/4 lg:w-full">
            <SolutionCard
                icon={<FaTools />}
                title="Coffee Disease Detection System"
                description="Developing an AI-powered system for early coffee disease detection. Utilizing machine learning algorithms to analyze coffee berry and coffee leaf images, identifying disease symptoms, and quality attributes. Empowering farmers with proactive measures to protect crops and optimize yield."
            />
            <SolutionCard
                icon={<FaQuestion />}
                title="Image Analysis System"
                description="Implementing an image analysis system for coffee disease detection. Collecting images via a web platform, analyzing with AI models trained on labeled datasets. Identifying disease indicators like color and texture abnormalities, providing real-time feedback and recommendations to farmers."
            />
             <SolutionCard
                icon={<FaCheck />}
                title="Analytics Dashboard"
                description="Enabling coffee cooperatives and corporations to monitor farmers' crop health through our analytics dashboard. Offering customized farmer support based on real-time insights. Resulting in improved income for farmers and increased revenue and profit margins for corporations by selling high-quality coffee cherry and beans at better prices."
            />
        </div>
    </div>
  );
}

export default Solution;
