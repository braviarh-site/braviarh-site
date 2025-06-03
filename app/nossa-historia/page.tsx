// proativerh-site/app/nossa-historia/page.tsx
'use client';

import AnimateOnScroll from '../components/AnimateOnScroll';
import Image from 'next/image';

export default function NossaHistoria() {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-in-up">
          <h1 className="text-5xl font-bold text-primaryBlue text-center mb-12">Nossa História</h1>
        </AnimateOnScroll>

        <section className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <AnimateOnScroll animation="fade-in-left" delay={100} className="md:w-1/2">
            <Image
              src="/images/historia.jpg"
              alt="Equipe ProativeRH"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg shadow-xl"
            />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-right" delay={200} className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-secondaryBlue mb-6">Nossa Trajetória</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Fundada em [Ano de Fundação], a ProativeRH nasceu da paixão por desenvolver o potencial humano nas organizações.
              Acreditamos que o sucesso de uma empresa está intrinsecamente ligado à qualidade e ao engajamento de seus colaboradores.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ao longo dos anos, construímos uma reputação sólida, marcada por soluções personalizadas e um atendimento de excelência.
              Nossa equipe é formada por profissionais experientes e dedicados, prontos para impulsionar o seu negócio.
            </p>
          </AnimateOnScroll>
        </section>

        <section className="text-center mb-16">
          <AnimateOnScroll animation="fade-in-up" delay={300}>
            <h2 className="text-3xl font-semibold text-secondaryBlue mb-6">Nossos Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-accentOrange mb-3">Inovação</h3>
                <p className="text-gray-700">Buscamos constantemente as melhores e mais recentes práticas em RH.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-accentOrange mb-3">Excelência</h3>
                <p className="text-gray-700">Entregamos resultados de alta qualidade com comprometimento total.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-accentOrange mb-3">Parceria</h3>
                <p className="text-gray-700">Construímos relacionamentos duradouros e baseados na confiança.</p>
              </div>
            </div>
          </AnimateOnScroll>
        </section>
      </div>
    </div>
  );
}