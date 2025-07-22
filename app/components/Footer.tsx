'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { allServices } from '../../lib/servicesData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicosProfissionais = allServices.filter(s => s.category === 'Profissionais');
  const servicosEmpresas = allServices.filter(s => s.category === 'Empresas');
  
  // Dividindo os serviços de empresas em duas colunas
  const servicosEmpresasCol1 = servicosEmpresas.slice(0, Math.ceil(servicosEmpresas.length / 2));
  const servicosEmpresasCol2 = servicosEmpresas.slice(Math.ceil(servicosEmpresas.length / 2));

  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);

  return (
    <footer className="bg-primaryBlue text-offWhite border-t-4 border-accentOrange">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Seção Principal do Footer */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12 lg:gap-16">

          {/* Coluna 1: Institucional */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/4">
            <h3 className="font-bold text-lg mb-3 uppercase">Institucional</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-accentOrange">Início</Link></li>
              <li><Link href="/nossa-historia" className="hover:text-accentOrange">Nossa História</Link></li>
              <li><Link href="/blog" className="hover:text-accentOrange">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-accentOrange">FAQ</Link></li>
            </ul>
          </div>

          {/* Coluna 2: Nossos Serviços (Efeito Cascata e Colunas) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/4">
            <h3 className="font-bold text-lg mb-3 uppercase">Nossos Serviços</h3>
            <div className="flex flex-col gap-4 items-start">
              {/* Para Empresas */}
              <div
                className="relative flex flex-col items-center md:items-start text-center md:text-left cursor-pointer"
                onMouseEnter={() => setHoveredColumn('empresas')}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                <h4 className="font-bold text-sm text-gray-300 mb-2 mt-4 md:mt-0">Para Empresas</h4>
                <div
                  className={`absolute top-full left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 bg-primaryBlue p-4 rounded-lg shadow-lg z-50 transition-opacity duration-300 flex ${hoveredColumn === 'empresas' ? 'opacity-100 block' : 'opacity-0 hidden'}`}
                >
                  <ul className="my-2 space-y-2">
                    {servicosEmpresasCol1.map(s => (
                      <li key={s.slug}>
                        <Link href={`/servicos/${s.slug}`} className="hover:text-accentOrange whitespace-nowrap">{s.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="my-2 space-y-2 ml-8">
                    {servicosEmpresasCol2.map(s => (
                      <li key={s.slug}>
                        <Link href={`/servicos/${s.slug}`} className="hover:text-accentOrange whitespace-nowrap">{s.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Para Profissionais */}
              <div
                className="relative flex flex-col items-center md:items-start text-center md:text-left cursor-pointer"
                onMouseEnter={() => setHoveredColumn('profissionais')}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                <h4 className="font-bold text-sm text-gray-300 mb-2 mt-4 md:mt-0">Para Profissionais</h4>
                <ul
                  className={`absolute top-full left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-max bg-primaryBlue p-4 rounded-lg shadow-lg z-50 transition-opacity duration-300 ${hoveredColumn === 'profissionais' ? 'opacity-100 block' : 'opacity-0 hidden'}`}
                >
                  {servicosProfissionais.map(s => (
                    <li key={s.slug} className="my-2">
                      <Link href={`/servicos/${s.slug}`} className="hover:text-accentOrange whitespace-nowrap">{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Coluna 3: Contato */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/4">
            <h3 className="font-bold text-lg mb-3 uppercase">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accentOrange" />
                <a href="mailto:contato@braviarh.com.br" className="hover:text-accentOrange">contato@braviarh.com.br</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accentOrange" />
                <a href="tel:51989336922" className="hover:text-accentOrange">(51) 98933-6922</a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a href="#" aria-label="Visite nosso LinkedIn" title="LinkedIn da Bravia RH" className="text-gray-400 hover:text-accentOrange"><Linkedin size={24} /></a>
                <a href="#" aria-label="Visite nosso Instagram" title="Instagram da Bravia RH" className="text-gray-400 hover:text-accentOrange"><Instagram size={24} /></a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Onde Estamos */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/4">
            <h3 className="font-bold text-lg mb-3 uppercase">Onde Estamos</h3>
            <p className="text-sm text-gray-300 leading-snug">
              Porto Alegre, RS
              <br/>
              Atendimento Online para todo o Brasil
            </p>
          </div>
        </div>

        {/* Separador + Copyright */}
        <div className="mt-12 text-center">
          <div className="border-t border-accentOrange w-full max-w-sm mx-auto mb-3"></div>
          <p className="text-sm text-gray-400">&copy; {currentYear} <strong>Bravia RH</strong>. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-400 mt-1">Desenvolvimento Web por <strong>Sol Schimmelpfennig</strong>.</p>
        </div>
      </div>
    </footer>
  );
}


