// proativerh-site/app/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Nossa História', href: '/nossa-historia' },
    { name: 'Nossos Serviços', href: '/nossos-servicos' },
    { name: 'Projetos Realizados', href: '/projetos-realizados' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header className="fixed top-0 w-full bg-primaryBlue text-white shadow-lg z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <Link href="/" className="text-2xl font-bold text-accentOrange hover:text-white transition-colors duration-300">
            ProativeRH
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-accentOrange transition-colors duration-300 font-medium">
                  {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botões Sociais e WhatsApp Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="https://api.whatsapp.com/send?phone=5511999999999" // TROQUE PELO SEU NÚMERO
            target="_blank"
            className="bg-accentOrange text-white px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-accentOrange transition-all duration-300 flex items-center gap-2"
          >
            <FaWhatsapp /> Solicite uma Proposta
          </Link>
          <a href="#" target="_blank" className="hover:text-accentOrange transition-colors duration-300"><FaFacebook size={20} /></a>
          <a href="#" target="_blank" className="hover:text-accentOrange transition-colors duration-300"><FaLinkedin size={20} /></a>
          <a href="#" target="_blank" className="hover:text-accentOrange transition-colors duration-300"><FaInstagram size={20} /></a>
        </div>

        {/* Botão para Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-primaryBlue py-4 px-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="block text-white hover:text-accentOrange transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
                    {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=5511999999999" // TROQUE PELO SEU NÚMERO
                target="_blank"
                className="block bg-accentOrange text-white px-5 py-2 rounded-full text-center font-semibold hover:bg-white hover:text-accentOrange transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FaWhatsapp /> Solicite uma Proposta
              </Link>
            </li>
            <li className="flex justify-center space-x-6 mt-4">
              <a href="#" target="_blank" className="hover:text-accentOrange transition-colors duration-300"><FaFacebook size={24} /></a>
              <a href="#" target="_blank" className="hover:text-accentOrange transition-colors duration-300"><FaLinkedin size={24} /></a>
              <a href="#" target="_blank" className="hover:text-accentOrange transition-colors duration-300"><FaInstagram size={24} /></a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}