import React from 'react';
import { Star } from 'lucide-react';
import { useCompanyConfig } from '../hooks/useCompanyConfig';

const Testimonials: React.FC = () => {
  const config = useCompanyConfig();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Depoimentos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {config.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;