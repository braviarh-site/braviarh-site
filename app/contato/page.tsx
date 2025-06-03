// proativerh-site/app/contato/page.tsx
'use client';

import AnimateOnScroll from '../components/AnimateOnScroll';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contato() {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-in-up">
          <h1 className="text-5xl font-bold text-primaryBlue text-center mb-12">Fale Conosco</h1>
        </AnimateOnScroll>

        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
          Estamos prontos para atender suas necessidades e construir soluções personalizadas para o seu negócio.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <AnimateOnScroll animation="fade-in-left">
            <div className="bg-white p-8 rounded-lg shadow-xl h-full flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-secondaryBlue mb-6">Nossos Contatos</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope size={24} className="text-accentOrange" />
                  <div>
                    <p className="font-semibold text-lg text-gray-800">Email:</p>
                    <a href="mailto:contato@proativerh.com.br" className="text-primaryBlue hover:underline">contato@proativerh.com.br</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone size={24} className="text-accentOrange" />
                  <div>
                    <p className="font-semibold text-lg text-gray-800">Telefone:</p>
                    <a href="tel:+5551989336922" className="text-primaryBlue hover:underline">+55 51 989336-922</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt size={24} className="text-accentOrange" />
                  <div>
                    <p className="font-semibold text-lg text-gray-800">Endereço:</p>
                    <p className="text-gray-700">Rua Exemplo, 123 - Bairro Centro, Cidade - Estado</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Formulário de Contato */}
          <AnimateOnScroll animation="fade-in-right">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-semibold text-secondaryBlue mb-6">Envie sua Mensagem</h2>
              <form action="https://formsubmit.co/contato@proativerh.com.br" method="POST" className="grid gap-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://proativerh.COM.BR/obrigado" />

                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome Completo:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Seu nome"
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accentOrange"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="contato@proativerh.com.br"
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accentOrange"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Sua mensagem..."
                    required
                    rows={6}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accentOrange"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-accentOrange text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primaryBlue transition-all duration-300 shadow-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}