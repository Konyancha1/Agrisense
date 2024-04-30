import React from 'react';

const SolutionCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center bg-green-500 text-white rounded-full w-12 h-12 mb-4">
        {icon}
      </div>
      <h3 className="text-lg lg:text-xl text-center font-semibold mb-2 lg:mb-4">{title}</h3>
      <p className="text-sm lg:text-base text-gray-700 text-center">{description}</p>
    </div>
  );
}

export default SolutionCard;