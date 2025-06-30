import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useCompanyConfig } from '../hooks/useCompanyConfig';

const Contact: React.FC = () => {
  const config = useCompanyConfig();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-orange-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Deixe seu e-mail para contato e aguarde!
          </h2>
          
          <p className="text-xl text-orange-200 mb-12 max-w-2xl mx-auto">
            Entre em contato conosco e descubra nossos sabores únicos e experiências gastronômicas especiais
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Obrigado!
                </h3>
                <p className="text-gray-600">
                  Recebemos seu e-mail e entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nome@email.com"
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-lg"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;