'use client';

import { useState, useEffect } from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import Image from 'next/image';
import Link from 'next/link';
import ClientLogoCarousel from '../components/ClientLogoCarousel';

export default function NossaHistoriaPage() {
    // --- Dados para os Carrosséis ---
    const solJourneySlides = [
        { imageSrc: "/images/12780.jpg", altText: "Sol Schimmelpfennig em atuação profissional 1" },
        { imageSrc: "/images/IMG-89.jpg", altText: "Sol Schimmelpfennig em atuação profissional 2" },
        { imageSrc: "/images/foto3.png", altText: "Sol Schimmelpfennig em atuação profissional 3" },
    ];
    const desafioInovacaoSlides = [
        { imageSrc: "/images/sol7.jpg", altText: "Imagem do desafio e inovação 1" },
        { imageSrc: "/images/sol6.jpg", altText: "Imagem do desafio e inovação 2" },
        { imageSrc: "/images/sol4.jpg", altText: "Imagem do desafio e inovação 3" },
    ];
    const braviaRHSingles = [
        { imageSrc: "/images/IMG-109.jpg", altText: "Time da Bravia RH em reunião" },
        { imageSrc: "/images/IMG_6709.JPG", altText: "Consultoria Bravia RH em ação" },
        { imageSrc: "/images/IMG-439.jpg", altText: "Sol Schimmelpfennig apresentando" },
    ];
    const personalDevelopmentSlides = [
        { imageSrc: "/images/IMG-443.jpg", altText: "Mulher empoderada e confiante" },
        { imageSrc: "/images/IMG_450.jpg", altText: "Sessão de mentoria feminina" },
        { imageSrc: "/images/IMG_8999.jpg", altText: "Mulheres colaborando e crescendo" },
    ];

    // --- Lógica dos Carrosséis ---
    const [currentSolSlideIndex, setCurrentSolSlideIndex] = useState(0);
    const [currentDesafioInovacaoSlideIndex, setCurrentDesafioInovacaoSlideIndex] = useState(0);
    const [currentBraviaRHSingleIndex, setCurrentBraviaRHSingleIndex] = useState(0);
    const [currentPersonalDevelopmentSlideIndex, setCurrentPersonalDevelopmentSlideIndex] = useState(0);

    useEffect(() => {
        const solInterval = setInterval(() => setCurrentSolSlideIndex(prev => (prev + 1) % solJourneySlides.length), 5000);
        const desafioInterval = setInterval(() => setCurrentDesafioInovacaoSlideIndex(prev => (prev + 1) % desafioInovacaoSlides.length), 5000);
        const braviaInterval = setInterval(() => setCurrentBraviaRHSingleIndex(prev => (prev + 1) % braviaRHSingles.length), 5000);
        const personalDevInterval = setInterval(() => setCurrentPersonalDevelopmentSlideIndex(prev => (prev + 1) % personalDevelopmentSlides.length), 5000);
        return () => {
            clearInterval(solInterval);
            clearInterval(desafioInterval);
            clearInterval(braviaInterval);
            clearInterval(personalDevInterval);
        };
    }, [solJourneySlides.length, desafioInovacaoSlides.length, braviaRHSingles.length, personalDevelopmentSlides.length]);

    return (
        <div className="bg-offWhite min-h-screen">
            <section className="relative h-[500px] flex items-center justify-center text-center text-offWhite overflow-hidden">
                <Image src="/images/hero-nossa-historia.jpg" alt="Bravia RH - Nossa História" fill style={{ objectFit: 'cover' }} className="z-0 absolute inset-0" priority />
                <div className="absolute inset-0 bg-primaryBlue opacity-85 z-10"></div>
                <div className="relative z-20 p-4 max-w-5xl mx-auto pt-24 md:pt-32">
                    <AnimateOnScroll animation="fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-bold text-accentOrange mb-6 leading-tight">Nossa História</h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-in-up" delay={200}>
                        <p className="text-lg md:text-2xl mb-4">Elevando talentos. Transformando resultados.</p>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-in-up" delay={400}>
                        <p className="text-base md:text-xl text-center max-w-3xl mx-auto">A <strong>Bravia RH</strong> nasceu da visão de quem acredita que todo ser humano carrega dentro de si um potencial extraordinário e que, com direção certa e estratégia, é possível construir uma trajetória de sucesso e realização a longo prazo.</p>
                    </AnimateOnScroll>
                </div>
            </section>

            <section className="bg-offWhite py-12 md:py-16 text-primaryBlue">
                <div className="container mx-auto px-4 text-center max-w-5xl">
                    <AnimateOnScroll animation="fade-in-up"><h2 className="text-3xl md:text-4xl font-bold text-primaryBlue mb-8">A Essência da Bravia RH</h2><p className="text-base md:text-xl leading-relaxed text-center mb-12">Mais do que uma consultoria, somos um movimento de transformação. Com soluções estratégicas de Recursos Humanos, impulsionamos empresas e profissionais rumo a uma performance mais consciente, eficiente e alinhada ao propósito.</p></AnimateOnScroll>
                    <div className="grid md:grid-cols-2 gap-8 items-stretch"><AnimateOnScroll animation="fade-in-up" delay={200}><div className="p-6 md:p-8 bg-primaryBlue rounded-lg text-offWhite h-full flex flex-col justify-center" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><h3 className="text-2xl md:text-3xl font-bold text-accentOrange mb-4">Nossa Missão</h3><p className="text-base md:text-xl leading-relaxed text-offWhite">Transformar o potencial humano em resultados excepcionais, por meio de soluções estratégicas de RH que impulsionam o crescimento, a excelência e a autonomia das empresas.</p></div></AnimateOnScroll><AnimateOnScroll animation="fade-in-up" delay={300}><div className="p-6 md:p-8 bg-primaryBlue rounded-lg text-offWhite h-full flex flex-col justify-center" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><h3 className="text-2xl md:text-3xl font-bold text-accentOrange mb-4">Nosso Propósito</h3><p className="text-base md:text-xl leading-relaxed text-offWhite">Inspirar e guiar o desenvolvimento humano e organizacional, conectando talentos a trajetórias de evolução, prosperidade e realização.</p></div></AnimateOnScroll></div>
                </div>
            </section>

            <section className="pt-8 pb-12 md:pb-16 bg-primaryBlue text-offWhite">
                <div className="container mx-auto px-4 text-center max-w-6xl">
                    <AnimateOnScroll animation="fade-in-up"><h2 className="text-3xl md:text-4xl font-bold text-accentOrange mb-8">Nossos Valores</h2></AnimateOnScroll>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-8">
                        <AnimateOnScroll animation="fade-in-up" delay={100}><div className="p-6 bg-offWhite rounded-lg text-primaryBlue h-full flex flex-col justify-center text-center" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><div><h3 className="text-xl lg:text-xl font-semibold text-primaryBlue mb-3">Visão Ampla e Estratégica</h3><p className="text-gray-700 text-sm md:text-base">Enxergamos além do óbvio. Antecipamos cenários e atuamos com foco no que realmente importa para gerar impacto positivo.</p></div></div></AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200}><div className="p-6 bg-offWhite rounded-lg text-primaryBlue h-full flex flex-col justify-center text-center" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><div><h3 className="text-xl lg:text-xl font-semibold text-primaryBlue mb-3">Ética e Transparência</h3><p className="text-gray-700 text-sm md:text-base">Conduzimos cada passo com integridade e clareza, construindo relações de confiança duradouras.</p></div></div></AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={300}><div className="p-6 bg-offWhite rounded-lg text-primaryBlue h-full flex flex-col justify-center text-center" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><div><h3 className="text-xl lg:text-xl font-semibold text-primaryBlue mb-3">Foco no Cliente</h3><p className="text-gray-700 text-sm md:text-base">Cada solução é pensada sob medida, alinhada aos objetivos e cultura de cada cliente.</p></div></div></AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={400}><div className="p-6 bg-offWhite rounded-lg text-primaryBlue h-full flex flex-col justify-center text-center" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><div><h3 className="text-xl lg:text-xl font-semibold text-primaryBlue mb-3">Inovação com Propósito</h3><p className="text-gray-700 text-sm md:text-base">Unimos criatividade à consistência, entregando soluções atualizadas, viáveis e eficazes.</p></div></div></AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={500}><div className="p-6 bg-offWhite rounded-lg text-primaryBlue h-full flex flex-col justify-center text-center" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><div><h3 className="text-xl lg:text-xl font-semibold text-primaryBlue mb-3">Valorização das Pessoas</h3><p className="text-gray-700 text-sm md:text-base">Acreditamos que o sucesso está nas pessoas. Desenvolvê-las é o que nos move.</p></div></div></AnimateOnScroll>
                    </div>
                </div>
            </section>
            
            <section className="pt-12 md:pt-16 pb-16 bg-offWhite text-primaryBlue">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    {/* Bloco 1: Texto | Foto */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
                        <AnimateOnScroll animation="fade-in-up" delay={200}><div className="text-base md:text-lg leading-relaxed bg-primaryBlue p-6 md:p-12 rounded-lg text-offWhite text-justify h-full flex flex-col justify-center" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><h2 className="text-2xl md:text-4xl font-bold text-accentOrange text-center mb-6">Uma história de transformação</h2><p className="mb-6">Com mais de 29 anos de trajetória profissional, que teve início na área contábil, onde atuei por mais de 15 anos. Foi neste universo de números que desenvolvi uma base sólida em processos e um entendimento profundo dos bastidores das empresas.</p><p className="mb-6">A paixão por pessoas me conduziu ao RH, onde me aprofundei com estudos em Gestão de RH, MBA em Liderança e Administração de Empresas. Foi neste percurso que me tornei terapeuta, e a minha visão de negócios se uniu ao olhar holístico e sistêmico da PNL, neurociência e inteligencia emocional. Entendi que, assim como os complexos sistemas do universo, as organizações são redes de pessoas interconectadas.</p><p>Hoje, minha missão é unir essas duas jornadas, alinhando e agregando valor ao sucesso dos negócios e ao crescimento das pessoas por meio de um RH que integra precisão estratégica, análise profunda e um genuíno olhar humano.</p></div></AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}><div className="relative w-full max-w-lg h-80 md:h-[32rem] rounded-lg overflow-hidden mx-auto" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><div className="flex transition-transform duration-700 ease-in-out h-full" style={{ transform: `translateX(-${currentSolSlideIndex * 100}%)` }}>{solJourneySlides.map((slide, index) => (<div key={index} className="relative flex-shrink-0 w-full h-full"><Image src={slide.imageSrc} alt={slide.altText} fill style={{ objectFit: 'contain' }} /></div>))}</div><div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">{solJourneySlides.map((_, idx) => (<button key={idx} onClick={() => setCurrentSolSlideIndex(idx)} className={`h-2 w-2 rounded-full transition-colors duration-300 ${idx === currentSolSlideIndex ? 'bg-white' : 'bg-gray-400 opacity-60'}`} aria-label={`Ir para slide ${idx + 1}`} />))}</div></div></AnimateOnScroll>
                    </div>

                    {/* Bloco 2: Foto | Texto (Ordem Invertida no Desktop) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
                        <AnimateOnScroll animation="fade-in-up" delay={100} className="md:order-1"><div className="relative w-full max-w-lg h-80 md:h-[32rem] rounded-lg overflow-hidden mx-auto" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><div className="flex transition-transform duration-700 ease-in-out h-full" style={{ transform: `translateX(-${currentDesafioInovacaoSlideIndex * 100}%)` }}>{desafioInovacaoSlides.map((slide, index) => (<div key={index} className="relative flex-shrink-0 w-full h-full"><Image src={slide.imageSrc} alt={slide.altText} fill style={{ objectFit: 'contain' }} /></div>))}</div><div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">{desafioInovacaoSlides.map((_, idx) => (<button key={idx} onClick={() => setCurrentDesafioInovacaoSlideIndex(idx)} className={`h-2 w-2 rounded-full transition-colors duration-300 ${idx === currentDesafioInovacaoSlideIndex ? 'bg-white' : 'bg-gray-400 opacity-60'}`} aria-label={`Ir para slide ${idx + 1}`} />))}</div></div></AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200} className="md:order-2"><div className="bg-primaryBlue p-6 md:p-8 rounded-lg text-offWhite h-full flex flex-col justify-center" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><h3 className="text-2xl md:text-3xl font-semibold text-accentOrange mb-4 text-center">Desafio e inovação: A implantação de um RH estratégico</h3><p className="text-base md:text-lg text-offWhite leading-relaxed mb-4">Foi a partir da minha atuação como gerente e Líder em diversos projetos e auditorias terceirizadas que o mundo do RH se abriu para mim. Esta expertise me preparou para um dos meus maiores desafios: assumir a gerência de RH e administrativa em uma empresa de grande porte e estrutura tradicional, onde uni minha formação em Administração de Empresas à paixão por gestão de pessoas e transformação organizacional, implantando o setor de Recursos Humanos do zero.</p><p className="text-base md:text-lg text-offWhite leading-relaxed mb-4">Além da estruturação completa dos subsistemas de RH, atuei como gerente geral de um complexo de prédios comerciais, galeria e cinema. Nesta função, assumi a gestão administrativa e operacional com uma visão estratégica e um foco implacável em resultados.</p><p className="text-base md:text-lg text-offWhite leading-relaxed">Essa experiência consolidou minha capacidade de liderar mudanças culturais profundas, promovendo eficiência, engajamento e alinhamento organizacional em um ambiente multifuncional, tradicional e desafiador.</p></div></AnimateOnScroll>
                    </div>

                    {/* Bloco 3: Texto | Foto */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
                        <AnimateOnScroll animation="fade-in-up" delay={200}><div className="bg-primaryBlue p-6 md:p-8 rounded-lg text-offWhite h-full flex flex-col justify-center" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><h3 className="text-2xl md:text-3xl font-semibold text-accentOrange mb-4 text-center">Bravia RH: Onde o propósito ganha asas</h3><p className="text-base md:text-lg text-offWhite leading-relaxed mb-4">A Bravia RH Consultoria Estratégica foi fundada em 2022, como o resultado de uma jornada de dedicação a um propósito maior.</p><p className="text-base md:text-lg text-offWhite leading-relaxed mb-4">Este percurso foi enriquecido pela minha especialização, como Terapeuta, em PNL e Neurociência, que sigo mantendo até hoje. A união dessa visão de negócios com a minha paixão pela transformação humana se tornou a base da Bravia RH.</p><p className="text-base md:text-lg text-offWhite leading-relaxed">Hoje, como CEO, consultora e mentora, ajudo empresas e profissionais a conquistarem alta performance com propósito.</p></div></AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={100}><div className="relative w-full max-w-lg h-80 md:h-[32rem] rounded-lg overflow-hidden mx-auto" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><div className="flex transition-transform duration-700 ease-in-out h-full" style={{ transform: `translateX(-${currentBraviaRHSingleIndex * 100}%)` }}>{braviaRHSingles.map((slide, index) => (<div key={index} className="relative flex-shrink-0 w-full h-full"><Image src={slide.imageSrc} alt={slide.altText} fill style={{ objectFit: 'contain' }} /></div>))}</div><div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">{braviaRHSingles.map((_, idx) => (<button key={idx} onClick={() => setCurrentBraviaRHSingleIndex(idx)} className={`h-2 w-2 rounded-full transition-colors duration-300 ${idx === currentBraviaRHSingleIndex ? 'bg-white' : 'bg-gray-400 opacity-60'}`} aria-label={`Ir para slide ${idx + 1}`} />))}</div></div></AnimateOnScroll>
                    </div>

                    {/* Bloco 4: Foto | Texto (Ordem Invertida no Desktop) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <AnimateOnScroll animation="fade-in-up" delay={100} className="md:order-1"><div className="relative w-full max-w-lg h-80 md:h-[32rem] rounded-lg overflow-hidden mx-auto" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><div className="flex transition-transform duration-700 ease-in-out h-full" style={{ transform: `translateX(-${currentPersonalDevelopmentSlideIndex * 100}%)` }}>{personalDevelopmentSlides.map((slide, index) => (<div key={index} className="relative flex-shrink-0 w-full h-full"><Image src={slide.imageSrc} alt={slide.altText} fill style={{ objectFit: 'contain' }} /></div>))}</div><div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">{personalDevelopmentSlides.map((_, idx) => (<button key={idx} onClick={() => setCurrentPersonalDevelopmentSlideIndex(idx)} className={`h-2 w-2 rounded-full transition-colors duration-300 ${idx === currentPersonalDevelopmentSlideIndex ? 'bg-white' : 'bg-gray-400 opacity-60'}`} aria-label={`Ir para slide ${idx + 1}`} />))}</div></div></AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200} className="md:order-2"><div className="bg-primaryBlue p-6 md:p-8 rounded-lg text-offWhite h-full flex flex-col justify-center" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><h3 className="text-2xl md:text-3xl font-semibold text-accentOrange mb-4 text-center">Além do RH: Desenvolvimento pessoal e resgate do poder feminino</h3><p className="text-base md:text-lg text-offWhite leading-relaxed mb-6">Mais do que uma atuação técnica em RH, trago em minha trajetória uma especialização no desenvolvimento emocional de mulheres — com foco no resgate da autoestima, da autoconfiança e do poder pessoal. Sou coautora de um livro dedicado ao tema da autoestima feminina, e conduzo uma <Link href="/servicos/desenvolvimento-autoestima-confianca" className="underline hover:text-white">mentoria exclusiva</Link> de 6 semanas, voltada para mulheres que desejam se reconectar com sua identidade e força interior.</p><p className="text-base md:text-lg text-offWhite leading-relaxed mb-6">Com base em Programação Neurolinguística (PNL), neurociência e inteligência emocional, eu aplico um método de atendimento prático e acolhedor, já validado por mais de 17 mil mulheres, que impulsiona transformações reais na forma como cada mulher se vê e se posiciona. Acredito que liderar a si mesma é o primeiro passo para liderar com propósito — e essa é a essência que também move a missão da Bravia RH.</p></div></AnimateOnScroll>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-offWhite text-primaryBlue">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <AnimateOnScroll animation="fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-primaryBlue mb-12">O que nossos candidatos dizem</h2>
                        <p className="text-base md:text-xl text-primaryBlue text-center max-w-4xl mx-auto mb-12">
                            Veja o que os profissionais que participaram de nossos processos seletivos e mentorias têm a dizer sobre a experiência com a Bravia RH.
                        </p>
                    </AnimateOnScroll>
                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimateOnScroll animation="fade-in-up" delay={100}><div className="bg-primaryBlue p-8 rounded-lg text-offWhite h-full flex flex-col justify-between" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><p className="text-lg italic text-offWhite mb-4">"A Sol não foi somente um RH intermediador entre contratante e candidato. Ela foi suporte, foi mentoria, foi uma verdadeira conselheira. Agiu com muita integridade, me trouxe empatia e acima de tudo me trouxe muita segurança. Empresas e candidatos, apostem tudo na Sol, e tenham a certeza de que foi uma das melhores apostas que já fizeram em sua carreira. Por mais profissionais de RH como a Sol!"</p><p className="text-base font-semibold text-accentOrange">- Thiago Monteiro, Customer Experience Leader</p></div></AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={200}><div className="bg-primaryBlue p-8 rounded-lg text-offWhite h-full flex flex-col justify-between" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><p className="text-lg italic text-offWhite mb-4">"Que profissional maravilhosa, sensível, cuidadosa… Minha experiência foi realmente diferenciada. Todo processo foi conduzido com muito respeito e carinho. Me senti segura, informada, acolhida, tive muita facilidade e abertura para tirar dúvidas. Realmente, impecável. Eu realmente indico muito a Sol e sou muito grata por tê-la conhecido. Obrigada, Sol. Você é um exemplo de profissional e ser humano que muitos devem seguir. Serei eternamente grata a você por essa experiência."</p><p className="text-base font-semibold text-accentOrange">- Ione Batista, Gerente Administrativo</p></div></AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={300}><div className="bg-primaryBlue p-8 rounded-lg text-offWhite h-full flex flex-col justify-between" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><p className="text-lg italic text-offWhite mb-4">"Como uma recrutadora, Sol ganha a minha admiração, humana e sensata em suas avaliações. Sabe como deixar seu candidato confortável para suas etapas na seleção. Ganhou a minha admiração por nunca me deixar sem uma resposta a cada passo da seleção, esse profissionalismo dos recrutadores hoje em dia deve ser reconhecido."</p><p className="text-base font-semibold text-accentOrange">- Carine Medeiros, Analista Fiscal Pleno</p></div></AnimateOnScroll>
                        <AnimateOnScroll animation="fade-in-up" delay={400}><div className="bg-primaryBlue p-8 rounded-lg text-offWhite h-full flex flex-col justify-between" style={{ boxShadow: '0 0 15px 5px rgba(212, 175, 127, 0.7)' }}><p className="text-lg italic text-offWhite mb-4">"Recrutamento com excelência! Pontualidade e experiência. Formação de pessoas com grandes potenciais. Muito orgulho de passar por um recrutamento com a Sol e poder garantir um futuro excepcional."</p><p className="text-base font-semibold text-accentOrange">- Denilton Fernando Santos, Vendas e Supervisão</p></div></AnimateOnScroll>
                    </div>
                </div>
            </section>

            <ClientLogoCarousel />
        </div>
    );
}




