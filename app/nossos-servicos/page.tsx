// /app/nossos-servicos/page.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { allServices } from '../../lib/servicesData'; // Importando a lista atualizada

export default function NossosServicosPage() {
  const servicosEmpresas = allServices.filter(s => s.category === 'Empresas');
  const servicosProfissionais = allServices.filter(s => s.category === 'Profissionais');

  return (
    <div className="bg-primaryBlue text-offWhite min-h-screen">
      {/* Hero Section */}
<section className="relative h-[500px] flex items-center justify-center text-center text-offWhite overflow-hidden">
  {/* Fundo de Imagem (Escolha uma imagem de impacto que represente a marca!) */}
  <Image
    src="/images/hero-bg-3.jpg" // Substitua este caminho pela imagem que você escolher
    alt="Nossos Serviços - Consultoria Estratégica em RH"
    fill
    style={{ objectFit: 'cover' }}
    className="z-0 absolute inset-0"
    priority
  />
  <div className="absolute inset-0 bg-primaryBlue opacity-85 z-10"></div>
  <div className="relative z-20 p-4 max-w-5xl mx-auto pt-24">
    {/* ATENÇÃO: O `pt-32` foi removido para a imagem ir até o topo. */}
    {/* Dependendo do seu menu, o texto pode ficar parcialmente escondido. */}
    {/* Se isso acontecer, adicione de volta uma classe como `pt-24` ou `pt-32` para um ajuste fino. */}
    <AnimateOnScroll animation="fade-in-up">
      <h1 className="text-5xl md:text-6xl font-bold text-accentOrange mb-6 leading-tight">
        Nossos Serviços
      </h1>
    </AnimateOnScroll>
    <AnimateOnScroll animation="fade-in-up" delay={100}>
      <p className="text-xl md:text-2xl leading-relaxed">
        Soluções estratégicas para empresas e profissionais que buscam performance e crescimento.
      </p>
    </AnimateOnScroll>
  </div>
</section>

      {/* Seção Para Empresas */}
      <section className="py-16 bg-offWhite text-primaryBlue">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-12">Para Empresas: Impulsionando resultados sustentáveis</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicosEmpresas.map((service, index) => (
              <AnimateOnScroll key={service.slug} animation="fade-in-up" delay={100 * (index + 1)}>
                <div id={service.slug} className="p-6 bg-primaryBlue text-offWhite rounded-lg h-full flex flex-col items-center text-center scroll-mt-32 hover:scale-105 transition-transform duration-300"
                  style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}>
                  <h3 className="text-2xl font-semibold text-accentOrange mb-2">{service.title}</h3>
                  <p className="text-offWhite mb-4">{service.shortDescription}</p>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="mt-auto inline-block bg-accentOrange text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-primaryBlue transition-all duration-300">
                    Ver detalhes
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Para Profissionais */}
      <section className="py-16 bg-primaryBlue text-offWhite">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-12">Para Profissionais: Guiando sua jornada de carreira</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {servicosProfissionais.map((service, index) => (
              <AnimateOnScroll key={service.slug} animation="fade-in-up" delay={100 * (index + 1)}>
                <div id={service.slug} className="p-6 bg-offWhite text-primaryBlue rounded-lg h-full flex flex-col items-center text-center scroll-mt-32 hover:scale-105 transition-transform duration-300"
                  style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}>
                  <h3 className="text-2xl font-semibold text-accentOrange mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.shortDescription}</p>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="mt-auto inline-block bg-primaryBlue text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-accentOrange transition-all duration-300">
                    Ver detalhes
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
