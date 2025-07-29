// /app/components/ClientLogoCarousel.tsx
'use client';

import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll'; // Importando o AnimateOnScroll

// Lista de logos dos clientes. Mantenha esta lista atualizada.
const allClientLogos = [
  '/images/logos/logo-client-1.png',
  '/images/logos/logo-client-2.png',
  '/images/logos/logo-client-3.png',
  '/images/logos/logo-client-4.png',
  '/images/logos/logo-client-5.png',
  '/images/logos/logo-client-7.png',
  '/images/logos/logo-client-9.png',
  '/images/logos/logo-client-10.png',
  '/images/logos/logo-client-12.png',
  '/images/logos/logo-client-11.png', // Adicionando os logos que faltavam
  '/images/logos/logo-client-8.png',
];

export default function ClientLogoCarousel() {
  // NOTA: Certifique-se de que a animação 'logo-scroll' está no seu ficheiro app/globals.css
  
  return (
    <section className="bg-offWhite py-16 text-primaryBlue text-center">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-in-up">
          <h2 className="text-4xl font-bold text-accentOrange mb-4">Empresas que Confiam na Bravia RH</h2>
          <p className="text-xl text-primaryBlue text-center max-w-4xl mx-auto mb-12">
            Conheça algumas das empresas que confiam em nosso trabalho para transformar o potencial em performance.
          </p>
        </AnimateOnScroll>
        
        <div className="relative w-full overflow-hidden group">
          <div className="flex flex-nowrap animate-logo-scroll group-hover:[animation-play-state:paused]">
            {[...allClientLogos, ...allClientLogos].map((logoSrc, index) => (
              <div key={index} className="flex-shrink-0 mx-2 py-4">
                {/* A caixa que envolve cada logo */}
                <div 
                  // CORREÇÃO: O fundo agora é sempre branco (bg-white)
                  className="rounded-lg w-44 h-20 p-4 flex items-center justify-center transition-transform duration-300 hover:scale-110 bg-white"
                  style={{ boxShadow: '0 4px 15px rgba(0, 48, 73, 0.1)' }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={logoSrc}
                      alt={`Logo do Cliente ${index + 1}`}
                      fill
                      style={{ objectFit: 'contain' }}
                      // O efeito de escala de cinza é aplicado a todos os logos
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
