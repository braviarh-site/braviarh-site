'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from './components/AnimateOnScroll';

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

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[currentSlideIndex];

  return (
    // ===== INÍCIO DO CONTÊINER PRINCIPAL =====
    <div>
      {/* Seção Hero com Carrossel */}
      <section className="relative h-screen flex items-center justify-center text-center text-offWhite overflow-hidden">
        <Image
          key={currentSlide.imageSrc}
          src={currentSlide.imageSrc}
          alt={currentSlide.heading}
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out"
          priority={currentSlideIndex === 0}
        />
        <div className="absolute inset-0 bg-primaryBlue opacity-70 z-10"></div>
        <div key={currentSlideIndex} className="relative z-20 p-4 max-w-4xl mx-auto pt-32">
          <AnimateOnScroll animation="fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
              {currentSlide.heading}
            </h1>
          </AnimateOnScroll>
          {currentSlide.subheading && (
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <p className="text-xl md:text-2xl mb-8 font-light text-gray-300">
                {currentSlide.subheading}
              </p>
            </AnimateOnScroll>
          )}
        </div>
        <div className="absolute bottom-8 z-30 flex space-x-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${idx === currentSlideIndex ? 'bg-white' : 'bg-gray-400 opacity-60'}`}
              aria-label={`Ir para o slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* NOVA SEÇÃO: Apresentação dos Pilares de Serviço */}
      <section className="py-16 bg-offWhite">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-4xl font-bold text-primaryBlue mb-4">Parceria estratégica em Gestão de Pessoas</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Impulsionamos o sucesso de organizações e o crescimento de profissionais.
            </p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Para Empresas */}
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <div className="bg-primaryBlue text-offWhite p-8 rounded-lg h-full flex flex-col" style={{ boxShadow: '0 0 15px 5px rgba(0, 48, 73, 0.4)' }}>
                <h3 className="text-3xl font-bold text-accentOrange mb-4">Para Empresas</h3>
                <p className="flex-grow mb-6">
                  Desenvolvemos e implementamos soluções de RH que fortalecem sua cultura, otimizam processos e constroem equipes de alta performance.
                </p>
                <Link href="/nossos-servicos#para-empresas" className="mt-auto self-center inline-block bg-accentOrange text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primaryBlue transition-all">
                  Ver Soluções
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Card Para Profissionais */}
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <div className="bg-primaryBlue text-offWhite p-8 rounded-lg h-full flex flex-col" style={{ boxShadow: '0 0 15px 5px rgba(0, 48, 73, 0.4)' }}>
                <h3 className="text-3xl font-bold text-accentOrange mb-4">Para Profissionais</h3>
                <p className="flex-grow mb-6">
                  Oferecemos mentoria e suporte estratégico para sua transição de carreira, desenvolvimento de competências e fortalecimento da sua marca pessoal.
                </p>
                <Link href="/nossos-servicos#para-profissionais" className="mt-auto self-center inline-block bg-accentOrange text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primaryBlue transition-all">
                  Ver Soluções
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Aqui você pode adicionar o restante das seções da sua página inicial, se houver */}

    </div>
  );
}