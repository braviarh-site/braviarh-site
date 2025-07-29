// /app/page.tsx (Versão com carrossel e layout 100% responsivo)
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from './components/AnimateOnScroll';
import ClientLogoCarousel from './components/ClientLogoCarousel'; // Re-adicionado para consistência

// Frases estratégicas para o carrossel
const heroSlides = [
  {
    imageSrc: "/images/hero-braviarh2.png",
    heading: "Estratégias de RH que impulsionam negócios",
    subheading: "Soluções completas para atrair, desenvolver e reter talentos de alta performance."
  },
  {
    imageSrc: "/images/hero.braviarh.jpg",
    heading: "Liderança e planejamento para a sua ascensão profissional.",
    subheading: "Mentoria e estratégia para arquitetar o seu futuro e alcançar seus objetivos mais audaciosos."
  },
  {
    imageSrc: "/images/hero-servicos2.jpg",
    heading: "Transformando potencial em resultados",
    subheading: "Do alinhamento cultural ao desenvolvimento de talentos, construímos o futuro do seu negócio."
  }
];

export default function HomePage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000); // A transição ocorre a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[currentSlideIndex];

  return (
    <div className="bg-offWhite min-h-screen">
      {/* ===========================================
        Seção Hero com Carrossel
        =========================================== */}
      <section className="relative h-screen flex items-center justify-center text-center text-offWhite overflow-hidden">
        {/* Imagens do Carrossel */}
        {heroSlides.map((slide, index) => (
          <Image
            key={slide.imageSrc}
            src={slide.imageSrc}
            alt={slide.heading}
            fill
            style={{ objectFit: 'cover' }}
            // SUGESTÃO 1: Transição suave entre as imagens
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlideIndex ? 'opacity-100' : 'opacity-0'}`}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-primaryBlue opacity-70 z-10"></div>
        
        {/* Conteúdo de Texto do Carrossel */}
        <div className="relative z-20 p-4 max-w-4xl mx-auto pt-24 md:pt-32">
          {/* SUGESTÃO 2: Otimização para Responsividade */}
          <AnimateOnScroll key={currentSlideIndex} animation="fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-12 leading-tight">
              {currentSlide.heading}
            </h1>
            {currentSlide.subheading && (
              <p className="text-lg md:text-2xl font-light text-gray-200">
                {currentSlide.subheading}
              </p>
            )}
          </AnimateOnScroll>
        </div>

        {/* Navegação do Carrossel (Bolinhas) */}
        <div className="absolute bottom-8 z-30 flex space-x-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${idx === currentSlideIndex ? 'bg-white' : 'bg-gray-400/60'}`}
              aria-label={`Ir para o slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===========================================
        Seção de Pilares de Serviço
        =========================================== */}
      <section className="py-12 md:py-20 bg-offWhite text-primaryBlue">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primaryBlue mb-4">Parceria estratégica em Gestão de Pessoas</h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Impulsionamos o sucesso de organizações e o crescimento de profissionais.
            </p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Para Empresas */}
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <div className="bg-primaryBlue text-offWhite p-8 rounded-lg h-full flex flex-col" style={{ boxShadow: '0 0 15px 5px rgba(0, 48, 73, 0.4)' }}>
                <h3 className="text-2xl md:text-3xl font-bold text-accentOrange mb-4">Para Empresas</h3>
                <p className="flex-grow mb-6 text-base md:text-lg">
                  Desenvolvemos e implementamos soluções de RH que fortalecem sua cultura, otimizam processos e constroem equipes de alta performance.
                </p>
                <Link href="/nossos-servicos#empresas" className="mt-auto self-center inline-block bg-accentOrange text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primaryBlue transition-all">
                  Ver Soluções
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Card Para Profissionais */}
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <div className="bg-primaryBlue text-offWhite p-8 rounded-lg h-full flex flex-col" style={{ boxShadow: '0 0 15px 5px rgba(0, 48, 73, 0.4)' }}>
                <h3 className="text-2xl md:text-3xl font-bold text-accentOrange mb-4">Para Profissionais</h3>
                <p className="flex-grow mb-6 text-base md:text-lg">
                  Oferecemos mentoria e suporte estratégico para sua transição de carreira, desenvolvimento de competências e fortalecimento da sua marca pessoal.
                </p>
                <Link href="/nossos-servicos#profissionais" className="mt-auto self-center inline-block bg-accentOrange text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primaryBlue transition-all">
                  Ver Soluções
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===========================================
        Seção de Logos de Clientes
        =========================================== */}
      <ClientLogoCarousel />
    </div>
  );
}
