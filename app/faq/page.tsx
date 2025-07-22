// /app/faq/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = {
  empresas: [
    {
      question: "Qual o principal diferencial do recrutamento da Bravia RH?",
      answer: "Nosso principal diferencial é a profundidade estratégica. Não nos limitamos a preencher vagas; atuamos como parceiros do seu negócio. Nosso método de Recrutamento por Competências é aprofundado, focando não apenas na habilidade técnica, mas na total aderência do candidato à sua cultura e aos seus desafios de longo prazo. O objetivo é garantir uma contratação que gere resultados sustentáveis."
    },
    {
      question: "Minha empresa é de pequeno/médio porte. As soluções da Bravia RH são adequadas para mim?",
      answer: "Com certeza. Nossas soluções são 100% customizadas. Entendemos que as necessidades de uma startup são diferentes das de uma grande corporação. Por isso, desenhamos projetos sob medida, seja para implantar um RH do zero, otimizar um processo específico ou realizar uma contratação pontual, sempre com foco no melhor custo-benefício e no maior impacto para o seu negócio."
    },
    {
      question: "Em quanto tempo posso ver os resultados de um projeto de otimização de RH?",
      answer: "Embora alguns benefícios, como a clareza nos processos, sejam imediatos, os resultados mais profundos de um RH estratégico são progressivos. Geralmente, nos primeiros 3 a 6 meses, você já poderá observar melhorias significativas em indicadores como engajamento, eficiência nas contratações e na comunicação interna."
    }
  ],
  profissionais: [
    {
      question: "A mentoria de recolocação garante que eu consiga um emprego?",
      answer: "A mentoria é uma parceria estratégica. Não posso garantir a vaga, pois a decisão final é sempre da empresa contratante. O que eu garanto é que você estará exponencialmente mais preparado(a), com um currículo e LinkedIn de alto impacto, um discurso alinhado, mais segurança nas entrevistas e uma estratégia clara de busca. Meu objetivo é te dar todas as ferramentas para que você seja a pessoa escolhida."
    },
    {
      question: "Meu currículo já é bom. O que uma reestruturação pode realmente fazer por mim?",
      answer: "Um 'bom' currículo, muitas vezes, apenas lista tarefas. Um currículo estratégico, como o que desenvolvemos, conta a história dos seus resultados. Nós o otimizamos com palavras-chave que são notadas pelos sistemas de recrutamento (ATS) e que chamam a atenção dos recrutadores, transformando seu currículo de um simples documento para uma poderosa ferramenta de marketing pessoal."
    },
    {
      question: "Eu não quero mudar de emprego agora. Como a mentoria de carreira pode me ajudar?",
      answer: "O planejamento de carreira não é apenas para quem busca uma transição. Ele serve para profissionais que desejam crescer onde estão, preparar-se para futuras posições de liderança, desenvolver novas competências ou simplesmente ter mais clareza sobre seus próximos passos. É um investimento estratégico no seu futuro profissional, independentemente do seu momento atual."
    }
  ]
};

// Componente AccordionItem para reutilização
const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primaryBlue/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-6"
      >
        <h3 className="text-xl font-semibold text-primaryBlue">{question}</h3>
        {isOpen ? <ChevronUp className="h-6 w-6 text-accentOrange" /> : <ChevronDown className="h-6 w-6 text-accentOrange" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FaqPage() {
  return (
    <div className="bg-primaryBlue text-offWhite min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-offWhite overflow-hidden">
        <Image
          src="/images/17.jpg" // SUGESTÃO: Use uma imagem que remeta a clareza, perguntas, etc.
          alt="Perguntas Frequentes - Bravia RH"
          fill
          style={{ objectFit: 'cover' }}
          className="z-0 absolute inset-0"
          priority
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/1920x1080/003049/FFFFFF?text=FAQ'; }}
        />
        <div className="absolute inset-0 bg-primaryBlue opacity-85 z-10"></div>
        <div className="relative z-20 p-4 max-w-5xl mx-auto pt-32">
          <AnimateOnScroll animation="fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-accentOrange mb-6 leading-tight">Perguntas frequentes</h1>
            <p className="text-xl md:text-2xl">Esclarecendo suas principais dúvidas sobre nossos serviços e metodologia.</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Seção de Perguntas */}
      <section className="py-20 bg-offWhite text-primaryBlue">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* FAQ para Empresas */}
          <AnimateOnScroll animation="fade-in-up" delay={100}>
            <h2 className="text-4xl font-bold text-center mb-10">Para Empresas</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {faqData.empresas.map((item, index) => (
                <AccordionItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </AnimateOnScroll>
          
          {/* FAQ para Profissionais */}
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <h2 className="text-4xl font-bold text-center mt-20 mb-10">Para Profissionais</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {faqData.profissionais.map((item, index) => (
                <AccordionItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </AnimateOnScroll>

        </div>
      </section>
    </div>
  );
}
