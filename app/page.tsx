// proativerh-site/app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from './components/AnimateOnScroll'; // Importe o componente de animação

export default function Home() {
  return (
    <div>
      {/* Seção Hero */}
      <section
        className="relative h-[calc(100vh-theme(spacing.20))] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Transformando Potencial em Resultados
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <p className="text-xl md:text-2xl mb-8">
              Soluções inovadoras em Gestão de Pessoas para o crescimento da sua empresa.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={400}>
            <Link href="/contato" className="bg-accentOrange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-accentOrange transition-all duration-300 shadow-lg">
                Fale com a gente!
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Seção Sobre nós (curta na home) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-4xl font-bold text-primaryBlue mb-8">Quem Somos</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              A ProativeRH é uma consultoria especializada em desenvolver talentos e otimizar processos de RH.
              Com paixão por pessoas e foco em resultados, ajudamos empresas a construir equipes de alta performance.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in" delay={200}>
            <Link href="/nossa-historia" className="text-primaryBlue hover:underline text-lg font-semibold">
                Saiba mais sobre nossa história &rarr;
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Seção de Serviços Destacados */}
      <section className="py-16 bg-gradient-to-r from-primaryBlue to-secondaryBlue text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-4xl font-bold mb-10">Nossos Serviços</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-primaryBlue">
                <h3 className="text-2xl font-semibold mb-4">Recrutamento e Seleção</h3>
                <p className="text-gray-700">Encontre os melhores talentos para sua equipe de forma estratégica.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-primaryBlue">
                <h3 className="text-2xl font-semibold mb-4">Treinamentos Corporativos</h3>
                <p className="text-gray-700">Capacite seus colaboradores para o máximo desempenho e inovação.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-up" delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-primaryBlue">
                <h3 className="text-2xl font-semibold mb-4">Gestão de Performance</h3>
                <p className="text-gray-700">Desenvolva lideranças e otimize processos para resultados sustentáveis.</p>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fade-in" delay={400}>
            <Link href="/nossos-servicos" className="mt-10 inline-block bg-accentOrange text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-accentOrange transition-all duration-300 shadow-md">
                Veja todos os serviços &rarr;
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}