import React from 'react';
import { Target, Users, Building, Smartphone, Star, Heart, Shield, Zap } from 'lucide-react';
import { useCompanyConfig } from '../hooks/useCompanyConfig';

const iconMap = {
  target: Target,
  users: Users,
  building: Building,
  smartphone: Smartphone,
  star: Star,
  heart: Heart,
  shield: Shield,
  zap: Zap,
};

const Services: React.FC = () => {
  const config = useCompanyConfig();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções personalizadas para atender às suas necessidades de marketing e comunicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {config.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Target;
            
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;