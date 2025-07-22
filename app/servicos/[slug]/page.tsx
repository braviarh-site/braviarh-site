'use client';

import { getServiceBySlug } from '../../../lib/servicesData'; // Usando caminho relativo
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useEffect, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

// ===================================================================
//  INÍCIO DO CÓDIGO DO AnimateOnScroll (INTEGRADO NESTA PÁGINA)
// ===================================================================
interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade-in' | 'fade-in-up';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
}

function AnimateOnScroll({
  children,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
}: AnimateOnScrollProps) {
  const { ref, inView, entry } = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView && entry?.target) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
    }
  }, [inView, entry, delay]);

  return (
    <div ref={ref} className={`${animation} ${className}`}>
      {children}
    </div>
  );
}
// ===================================================================
//  FIM DO CÓDIGO DO AnimateOnScroll
// ===================================================================

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = getServiceBySlug(params.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-offWhite text-primaryBlue min-h-screen">
            <section className="relative h-[600px] flex items-center justify-center text-center text-offWhite overflow-hidden">
                <Image src={service.imageSrc} alt={service.title} fill style={{ objectFit: 'cover' }} className="z-0 absolute inset-0" priority />
                <div className="absolute inset-0 bg-primaryBlue opacity-85 z-10"></div>
                <div className="relative z-20 p-4 max-w-5xl mx-auto pt-32">
                    <AnimateOnScroll animation="fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-bold text-accentOrange mb-6 leading-tight">{service.title}</h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-in-up" delay={200}>
                        <p className="text-xl md:text-2xl leading-relaxed">{service.details.intro}</p>
                    </AnimateOnScroll>
                </div>
            </section>

            <section className="py-16 bg-offWhite">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <AnimateOnScroll animation="fade-in-up" delay={100}>
                            <div className="p-8 bg-primaryBlue rounded-lg text-offWhite h-full flex flex-col" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-4xl">🎯</div>
                                    <h2 className="text-2xl font-bold text-accentOrange">O desafio que resolvemos</h2>
                                </div>
                                <p className="text-lg leading-relaxed">{service.details.challenge}</p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200}>
                            <div className="p-8 bg-primaryBlue rounded-lg text-offWhite h-full flex flex-col" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-4xl">🔍</div>
                                    <h2 className="text-2xl font-bold text-accentOrange">Nossa visão estratégica</h2>
                                </div>
                                <p className="text-lg leading-relaxed">{service.details.vision}</p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-primaryBlue text-offWhite">
                <div className="container mx-auto px-4 text-center max-w-6xl">
                    <AnimateOnScroll animation="fade-in-up">
                        <h2 className="text-4xl font-bold text-accentOrange mb-12">O que está incluso no nosso processo:</h2>
                    </AnimateOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* CÓDIGO CORRIGIDO PARA USAR A LISTA DE STRINGS */}
                        {service.details.subServices.map((text, index) => (
                            <AnimateOnScroll key={index} animation="fade-in-up" delay={100 * (index + 1)}>
                                <div className="p-6 bg-offWhite rounded-lg text-primaryBlue h-full flex flex-col items-center text-center" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}>
                                    <div className="text-4xl mb-4 text-accentOrange font-bold">✓</div>
                                    <h3 className="text-xl font-semibold">{text}</h3>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-offWhite text-primaryBlue text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <AnimateOnScroll animation="fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.details.cta}</h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-in" delay={200}>
                        <Link
                            href="https://wa.me/5551989336922?text=Olá,%20gostaria%20de%20solicitar%20uma%20proposta!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-accentOrange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primaryBlue hover:text-offWhite transition-all duration-300 shadow-lg"
                        >
                            Solicitar Proposta
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>
        </div>
    );
}