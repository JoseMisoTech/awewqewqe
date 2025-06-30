import React from 'react';
import { useCompanyConfig } from '../hooks/useCompanyConfig';

const Header: React.FC = () => {
  const config = useCompanyConfig();

  return (
    <header 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${config.hero.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {config.hero.title}
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-orange-200">
          {config.hero.subtitle}
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          {config.hero.description}
        </p>
        
        <div className="space-x-4">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Ver Cardápio
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg">
            Reservar Mesa
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;