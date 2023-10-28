"use client"

import React, { useState } from 'react';

// Define the icons or logos for each category
const frontendIcons = [
  '/react-icon.svg',
  '/vue-icon.svg',
  '/angular-icon.svg',
  '/html-icon.svg',
  '/javascript-icon.svg',
  //'/typescript-icon.svg'
];

const backendIcons = [
  '/golang-icon.svg',
  '/node-icon.svg',
  '/php-icon.svg',
  '/dotnet-icon.svg',
  '/python-icon.svg',
  '/ruby-on-rails-icon.svg',
  '/java-icon.svg'
];

const databaseIcons = [
  '/mongodb-icon.svg',
  '/mysql-icon.svg',
  //'/postgres-icon.svg'
];

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getIconsByCategory = () => {
    switch (activeTab) {
      case 'frontend':
        return frontendIcons;
      case 'backend':
        return backendIcons;
      case 'database':
        return databaseIcons;
      default:
        return [];
    }
  };

  const renderIcons = () => {
    const icons = getIconsByCategory();

    return (
      <div className="flex flex-wrap justify-center mt-6">
        {icons.map((icon, index) => (
         
         <img
           key={index}
           src={icon}
           alt={`Icon ${index + 1}`}
           className="h-24 m-2"
         />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto my-24 p-4">
      <div className="flex justify-center space-x-4 mb-16">
        <button
          className={`cursor-pointer border-none bg-transparent text-lg ${
            activeTab === 'frontend' ? 'bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent' : ''
          }`}
          onClick={() => handleTabClick('frontend')}
        >
          Frontend
        </button>
        <button
          className={`cursor-pointer border-none bg-transparent text-lg ${
            activeTab === 'backend' ? 'bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent' : ''
          }`}
          onClick={() => handleTabClick('backend')}
        >
          Backend
        </button>
        <button
          className={`cursor-pointer border-none bg-transparent text-lg ${
            activeTab === 'database' ? 'bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent' : ''
          }`}
          onClick={() => handleTabClick('database')}
        >
          Database
        </button>
      </div>
      {renderIcons()}
    </div>
  );
};

export default Technologies;