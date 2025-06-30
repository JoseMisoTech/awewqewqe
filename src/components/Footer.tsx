import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { useCompanyConfig } from '../hooks/useCompanyConfig';

const Footer: React.FC = () => {
  const config = useCompanyConfig();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Informações da Empresa</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed">
                  {config.company.address}
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300">
                  {config.company.phone}
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300">
                  {config.company.email}
                </p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                <strong>CNPJ:</strong> {config.company.cnpj}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {config.company.fullName}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Links Úteis</h3>
            
            <div className="space-y-4">
              <a
                href="/politica-privacidade"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Política de Privacidade</span>
              </a>
              
              <div className="pt-4">
                <h4 className="font-semibold mb-2">Contato</h4>
                <p className="text-gray-300">{config.company.phone}</p>
                <p className="text-gray-300">{config.company.email}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © Copyright 2024 {config.company.fullName} - Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;