// proativerh-site/app/nossos-servicos/page.tsx
'use client';

import AnimateOnScroll from '../components/AnimateOnScroll';
import { FaUserTie, FaChalkboardTeacher, FaChartLine, FaHandshake } from 'react-icons/fa';

export default function NossosServicos() {
  const services = [
    {
      icon: <FaUserTie size={40} className="text-accentOrange mb-4" />,
      title: 'Recrutamento e Seleção',
      description: 'Processos assertivos para identificar e atrair os talentos ideais para a sua empresa, com foco na cultura organizacional e nas competências necessárias.',
    },
    {
      icon: <FaChalkboardTeacher size={40} className="text-accentOrange mb-4" />,
      title: 'Treinamentos Corporativos',
      description: 'Programas de capacitação personalizados, desenvolvidos para aprimorar habilidades e competências da sua equipe, impulsionando a performance e a inovação.',
    },
    {
      icon: <FaChartLine size={40} className="text-accentOrange mb-4" />,
      title: 'Gestão de Performance e Carreira',
      description: 'Ferramentas e consultoria para otimizar o desempenho individual e coletivo, além de planejar o desenvolvimento de carreira dos seus colaboradores.',
    },
    {
      icon: <FaHandshake size={40} className="text-accentOrange mb-4" />,
      title: 'Consultoria Estratégica em RH',
      description: 'Apoio especializado na elaboração e implementação de políticas e processos de RH que impulsionem o crescimento e a sustentabilidade do seu negócio.',
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-in-up">
          <h1 className="text-5xl font-bold text-primaryBlue text-center mb-12">Nossos Serviços</h1>
        </AnimateOnScroll>

        <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-16">
          Oferecemos um portfólio completo de soluções em gestão de pessoas, desenhadas para atender às necessidades específicas da sua organização e promover o desenvolvimento contínuo de talentos.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <AnimateOnScroll key={index} animation="fade-in-up" delay={index * 100}>
              <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
                {service.icon}
                <h2 className="text-2xl font-semibold text-secondaryBlue mb-4">{service.title}</h2>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}