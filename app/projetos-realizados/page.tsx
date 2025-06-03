// proativerh-site/app/projetos-realizados/page.tsx
'use client';

import AnimateOnScroll from '../components/AnimateOnScroll';
import Image from 'next/image';

export default function ProjetosRealizados() {
  const projects = [
    {
      id: 1,
      title: 'Implantação de Plano de Carreira',
      client: 'Empresa X - Setor de Tecnologia',
      description: 'Desenvolvimento e implementação de um plano de carreira estruturado, resultando em maior retenção de talentos e engajamento da equipe.',
      image: '/images/projeto1.jpg',
    },
    {
      id: 2,
      title: 'Programa de Liderança Inovadora',
      client: 'Indústria Y - Setor de Manufatura',
      description: 'Treinamento focado em líderes para desenvolver habilidades de inovação e gestão de equipes, gerando aumento de produtividade em 15%.',
      image: '/images/projeto2.jpg',
    },
    {
      id: 3,
      title: 'Otimização de Processos de Recrutamento',
      client: 'Startup Z - Setor de Serviços',
      description: 'Revisão completa dos processos de recrutamento e seleção, reduzindo o tempo de contratação em 30% e melhorando a qualidade dos candidatos.',
      image: '/images/projeto3.jpg',
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-in-up">
          <h1 className="text-5xl font-bold text-primaryBlue text-center mb-12">Projetos Realizados</h1>
        </AnimateOnScroll>

        <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-16">
          Conheça alguns dos projetos que transformaram a gestão de pessoas e impulsionaram o sucesso de nossos clientes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} animation="fade-in-up" delay={index * 100}>
              <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-secondaryBlue mb-2">{project.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">Cliente: {project.client}</p>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}