import React from 'react';
import { useCompanyConfig } from '../hooks/useCompanyConfig';

const About: React.FC = () => {
  const config = useCompanyConfig();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {config.about.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
                Nossa Missão
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {config.about.mission}
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-2xl border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
                Nossa Visão
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {config.about.vision}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Sobre nosso restaurante"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">8+</div>
              <div className="text-sm">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;