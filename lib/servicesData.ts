export interface Service {
  slug: string;
  category: 'Empresas' | 'Profissionais';
  title: string;
  shortDescription: string;
  metaDescription: string;
  imageSrc: string;
  details: {
    intro: string;
    challenge: string;
    vision: string;
    subServices: string[];
    cta: string;
  };
}

export const allServices: Service[] = [
  // === PARA EMPRESAS ===
  {
    slug: 'recrutamento-selecao-competencias',
    category: 'Empresas',
    title: 'Recrutamento e Seleção por Competências',
    // shortDescription atualizada para incluir a ideia do suporte pós-contratação
    shortDescription: 'Atraia, contrate e integre os talentos que realmente farão a diferença no seu negócio.',
    // metaDescription atualizada para reforçar o diferencial do onboarding
    metaDescription: 'Otimize suas contratações. Nosso processo de Recrutamento e Seleção por Competências garante o alinhamento perfeito entre talentos e a cultura da sua empresa, com suporte estratégico na integração. Fale com a Bravia RH.',
    imageSrc: '/images/12.jpg',
    details: {
      intro: 'Vamos além do currículo. Mapeamos o perfil ideal e conduzimos um processo seletivo aprofundado para garantir que cada contratação seja um investimento estratégico no futuro da sua empresa.',
      challenge: 'O mercado de trabalho está cada vez mais competitivo. Contratar o profissional errado gera custos, desmotiva a equipe e atrasa o crescimento. A falta de um processo seletivo estruturado é o maior obstáculo para encontrar o talento certo.',
      vision: 'Nossa abordagem vai além do currículo. Analisamos a cultura da sua empresa e as competências necessárias para o sucesso na vaga. Nosso processo de seleção aprofundado minimiza riscos e assegura um alinhamento perfeito entre o profissional e a sua organização.',
      subServices: [
        'Mapeamento estratégico de perfil e cargos.',
        'Estratégias de atração de talentos otimizadas (incluindo hunting)',
        'Avaliação por competências aprofundada (entrevistas, testes, dinâmicas)',
        'Relatórios de candidatos detalhados e recomendações',
        // AQUI VOCÊ INCLUI O SUPORTE ESTRATÉGICO AO ONBOARDING
        'Suporte estratégico ao Onboarding (integração)',
      ],
      cta: 'Garanta a contratação certa. Fale com a Bravia RH.',
    },
  },
  {
    slug: 'implantacao-otimizacao-rh',
    category: 'Empresas',
    title: 'Implantação e otimização de RH Estratégico',
    shortDescription: 'Transforme seu RH em um pilar estratégico que impulsiona o negócio, otimizando processos e sistemas.',
    metaDescription: 'Transforme seu RH em um setor estratégico. Com a Bravia RH, implemente políticas, indicadores e uma estrutura que suporta o crescimento sustentável da sua organização.',
    imageSrc: '/images/13.jpg',
    details: {
      intro: 'Vamos além da rotina. Analisamos seus processos e desenhamos um RH sob medida, implementando políticas, indicadores e uma estrutura que garante o crescimento sustentável de sua empresa.',
      challenge: 'Muitas empresas operam com um RH sobrecarregado, focado em rotinas burocráticas, e perdem a oportunidade de usar a gestão de pessoas como uma alavanca estratégica para o negócio.',
      vision: 'A Bravia RH transforma essa realidade. Nossa metodologia eleva o RH a um nível estratégico, integrando-o ao core business para impulsionar a produtividade, a cultura e o crescimento.',
      subServices: [
        'Diagnóstico e otimização de processos de RH',
        'Desenho e implementação de políticas de RH transparentes',
        'Definição e acompanhamento de indicadores de RH (KPIs)',
        'Desenho da Estrutura Organizacional e Definição de Papéis',
      ],
      cta: 'Eleve o seu RH a um novo nível estratégico.',
    },
  },
  {
    slug: 'desenvolvimento-liderancas-equipes',
    category: 'Empresas',
    title: 'Desenvolvimento de Lideranças e Equipes',
    shortDescription: 'Capacite seus líderes e equipes para alcançarem a alta performance.',
    metaDescription: 'Capacite seus líderes e equipes para a alta performance. Nossos programas de desenvolvimento fortalecem competências e fomentam um ambiente de engajamento e inovação.',
    imageSrc: '/images/8.jpg',
    details: {
      intro: 'Criamos programas de treinamento e desenvolvimento customizados para fortalecer as competências de seus líderes e equipes, construindo um ambiente de alta performance, engajamento e inovação.',
      challenge: 'Equipes sem liderança forte perdem o rumo, a comunicação falha e a produtividade cai. A falta de um plano de desenvolvimento contínuo limita o potencial máximo dos seus talentos.',
      vision: 'Nossa consultoria foca em identificar e desenvolver as competências essenciais para uma liderança inspiradora e equipes autônomas, criando um ecossistema de crescimento mútuo.',
      subServices: [
        'Programas de Liderança inspiradora',
        'Desenvolvimento de Equipes por Competências',
        'Team Building e Dinâmicas de Grupo',
        'Mapeamento e Planos de Desenvolvimento (PDI)',
      ],
      cta: 'Desenvolva o potencial máximo da sua equipe.',
    },
  },
  {
    slug: 'avaliacao-desempenho-clima',
    category: 'Empresas',
    title: 'Avaliação de Desempenho e Clima',
    shortDescription: 'Obtenha um diagnóstico preciso da saúde e do clima organizacional para impulsionar o engajamento.',
    metaDescription: 'Entenda o pulso da sua organização com nossas Avaliações de Desempenho e Pesquisas de Clima. Obtenha dados valiosos para decisões estratégicas e impulsione o engajamento.',
    imageSrc: '/images/6.jpg',
    details: {
      intro: 'Implementamos sistemas de avaliação de desempenho e pesquisas de clima que fornecem dados e insights para a tomada de decisões estratégicas, impulsionando a satisfação e a produtividade.',
      challenge: 'Sem dados claros sobre o desempenho e o clima, a gestão age no escuro. A falta de feedback estruturado desmotiva talentos e impede que a empresa identifique e resolva problemas internos antes que se tornem crises.',
      vision: 'Nossa abordagem humanizada e analítica fornece um diagnóstico preciso do ambiente interno, transformando dados em insights acionáveis que impulsionam a produtividade, a satisfação e o crescimento da sua equipe.',
      subServices: [
        'Desenho e implementação de ciclos de avaliação de desempenho',
        'Pesquisas de Clima Organizacional e engajamento',
        'Planos de ação pós-pesquisa de clima',
        'Programas de reconhecimento e recompensa.',
      ],
      cta: 'Crie um ambiente de trabalho mais engajado.',
    },
  },
  {
    slug: 'cultura-organizacional-employer-branding',
    category: 'Empresas',
    title: 'Cultura Organizacional e Employer Branding',
    shortDescription: 'Construa uma cultura forte e uma marca empregadora que atraia e retenha talentos de alta performance.',
    metaDescription: 'Construa uma cultura forte e uma marca empregadora de destaque. Fortaleça os pilares da sua organização para atrair, engajar e reter os melhores talentos do mercado.',
    imageSrc: '/images/7.jpg',
    details: {
      intro: 'Ajudamos sua empresa a definir e fortalecer os pilares de sua cultura, transformando-a em um diferencial competitivo para atrair, engajar e reter talentos de alta performance.',
      challenge: 'Uma cultura fraca ou não definida gera insegurança, alta rotatividade e prejudica a reputação da empresa no mercado. Sem uma marca empregadora forte, é impossível competir pelos melhores talentos.',
      vision: 'A Bravia RH trabalha com você para definir a essência da sua cultura e traduzi-la em uma marca empregadora poderosa. Transformamos seus valores em um ímã para talentos alinhados e apaixonados pelo seu propósito.',
      subServices: [
        'Definição e reforço de Propósito, Missão, Visão e Valores (PMVV)',
        'Desenvolvimento de práticas culturais e código de conduta',
        'Estratégias de Employer Branding (Marca Empregadora)',
        'Comunicação interna estratégica',
      ],
      cta: 'Fortaleça a identidade da sua empresa.',
    },
  },
  {
    slug: 'plano-de-sucessao',
    category: 'Empresas',
    title: 'Plano de Sucessão',
    shortDescription: 'Assegure a continuidade da sua liderança e o futuro da sua empresa.',
    metaDescription: 'Prepare a sua empresa para o futuro com um Plano de Sucessão Estratégico. Identifique e desenvolva talentos internos para garantir a continuidade da liderança e a perenidade do negócio.',
    imageSrc: '/images/11.jpg',
    details: {
      intro: 'Assegure a continuidade da sua liderança e o futuro da sua empresa. Identificamos e desenvolvemos talentos internos para assumirem posições críticas, retendo os seus melhores profissionais e protegendo o futuro do negócio.',
      challenge: 'Depender de talentos externos para posições de liderança é arriscado e custoso. A falta de um plano de sucessão coloca a continuidade do negócio em risco e desmotiva talentos internos que buscam crescimento.',
      vision: 'Nossa consultoria mapeia seus talentos de alto potencial e cria trilhas de desenvolvimento individualizadas para prepará-los para os desafios futuros. Garantimos que sua empresa tenha os líderes certos, no momento certo.',
      subServices: [
        'Mapeamento de posições críticas e talentos de alto potencial',
        'Desenvolvimento de PDIs (Planos de Desenvolvimento Individual) para Sucessores',
        'Programas de Mentoria e Coaching para Lideranças futuras',
        'Estratégias de retenção para talentos chave',
      ],
      cta: 'Prepare os líderes de amanhã. Fale conosco.',
    },
  },
  {
    slug: 'endomarketing',
    category: 'Empresas',
    title: 'Endomarketing',
    shortDescription: 'Engaje seus colaboradores e fortaleça a comunicação interna.',
    metaDescription: 'Impulsione o engajamento e a produtividade com estratégias de Endomarketing. Transforme seus colaboradores nos maiores embaixadores da sua marca. Fale com a Bravia RH.',
    imageSrc: '/images/9.jpg',
    details: {
      intro: 'Desenvolvemos estratégias de comunicação e engajamento que transformam seus colaboradores em verdadeiros embaixadores da sua marca, alinhando a equipe com os valores e objetivos do negócio.',
      challenge: 'Uma comunicação interna falha causa ruídos, desinformação e desengajamento. Quando a equipe não se sente parte do propósito da empresa, a cultura é enfraquecida e a produtividade cai.',
      vision: 'Desenvolvemos ações de Endomarketing que criam um diálogo genuíno e transparente. Nossa missão é fazer com que cada colaborador se sinta valorizado e parte fundamental do sucesso da organização.',
      subServices: [
        'Diagnóstico de comunicação interna',
        'Criação de campanhas de Endomarketing',
        'Canais de feedback interno',
        'Eventos e ações de engajamento',
      ],
      cta: 'Potencialize sua comunicação interna.',
    },
  },
  {
    slug: 'gestao-desligamento-outplacement',
    category: 'Empresas',
    title: 'Gestão de Desligamento (Outplacement)',
    shortDescription: 'Conduza processos de desligamento com empatia e estratégia, protegendo a sua marca empregadora.',
    metaDescription: 'Gerencie desligamentos com empatia e estratégia. Oferecemos Outplacement para cuidar da sua marca empregadora e apoiar a transição de carreira dos profissionais desligados. Fale com a Bravia RH.',
    imageSrc: '/images/10.jpg',
    details: {
      intro: 'Guiamos sua empresa na condução de processos de desligamento de forma humanizada, protegendo sua marca empregadora e oferecendo suporte para a transição de carreira.',
      challenge: 'Processos de desligamento mal conduzidos podem gerar custos jurídicos, prejudicar o clima da equipe remanescente e manchar a reputação da sua marca empregadora no mercado.',
      vision: 'Acreditamos que todo ciclo tem um fim, mas a dignidade deve permanecer. Nossa consultoria guia sua empresa para um desligamento humano, que protege a sua imagem e oferece um novo horizonte para o profissional que está saindo.',
      subServices: [
        'Apoio psicológico e orientação profissional',
        'Mentoria para recolocação (currículo, LinkedIn, entrevistas)',
        'Suporte em negociação de propostas',
        'Comunicação estratégica de desligamento',
      ],
      cta: 'Conduza um desligamento humano e estratégico.',
    },
  },
  {
    slug: 'palestras-workshops-qualidade-vida',
    category: 'Empresas',
    title: 'Palestras e Workshops de Qualidade de Vida',
    shortDescription: 'Promova o bem-estar e veja a produtividade crescer.',
    metaDescription: 'Transforme o ambiente de trabalho. Nossas palestras e workshops de Qualidade de Vida (QVT) promovem saúde, felicidade e produtividade para seus colaboradores. Fale com a Bravia RH.',
    imageSrc: '/images/14.jpg',
    details: {
      intro: 'Criamos e implementamos programas que cuidam da saúde física e mental de seus colaboradores, resultando em um ambiente de trabalho mais saudável, feliz e produtivo.',
      challenge: 'O estresse no trabalho, a falta de cuidado com a saúde mental e física, e a exaustão minam a energia das equipes, elevam o absenteísmo e impactam diretamente na produtividade e nos resultados.',
      vision: 'A Bravia RH desenvolve soluções personalizadas para o bem-estar da sua equipe. Nosso foco é promover um ambiente onde a saúde e a felicidade se tornam alicerces para a inovação e a alta performance.',
      subServices: [
        'Diagnóstico de necessidades de QVT',
        'Ações de Saúde Mental e Ergonomia',
        'Palestras e Workshops de Bem-Estar',
        'Acompanhamento e avaliação de resultados',
      ],
      cta: 'Invista na qualidade de vida da sua equipe.',
    },
  },
  {
    slug: 'bpo-rh-assessoria',
    category: 'Empresas',
    title: 'BPO de RH (Assessoria)',
    shortDescription: 'Terceirize a gestão de RH com especialistas e libere sua equipe para focar no core business.',
    metaDescription: 'Terceirize a rotina operacional do seu RH e foque no seu negócio. Nosso BPO de RH garante eficiência e conformidade legal, do recrutamento à gestão de benefícios. Fale com a Bravia RH.',
    imageSrc: '/images/15.png',
    details: {
      intro: 'Gerimos as rotinas operacionais do seu RH, desde a admissão até a gestão de benefícios. Nossa assessoria garante conformidade legal e eficiência, liberando o seu tempo e recursos para focar no crescimento do negócio.',
      challenge: 'A gestão das rotinas de RH consome tempo e recursos preciosos, desviando o foco da liderança do que realmente importa: a estratégia de crescimento. Erros operacionais podem gerar grandes prejuízos e multas.',
      vision: 'Atuamos como a extensão do seu RH, assumindo as rotinas operacionais com excelência e precisão. Com nossa assessoria, você tem a certeza de que a gestão de pessoas está em boas mãos, e pode focar inteiramente no seu core business.',
      subServices: [
        'Gestão de processos de admissão e demissão',
        'Administração de benefícios',
        'Suporte na gestão de ponto e férias',
        'Assessoria em rotinas de departamento pessoal interno ou contabilidade',
        'Elaboração de contratos de trabalho e acordos',
        'Negociação com sindicatos',
        'E todas as demais rotinas pertinentes à área de RH.',
      ],
      cta: 'Otimize suas rotinas de RH com uma especialista.',
    },
  },

  // === PARA PROFISSIONAIS ===
  {
    slug: 'mentoria-recolocacao-carreira',
    category: 'Profissionais',
    title: 'Mentoria de Recolocação e Planejamento de Carreira',
    shortDescription: 'Direcione sua carreira para o sucesso com um plano estratégico e personalizado.',
    metaDescription: 'Alcance seus objetivos de carreira. Nossa mentoria de recolocação e planejamento oferece um plano de ação estratégico e personalizado para o seu próximo passo profissional. Fale com a Bravia RH.',
    imageSrc: '/images/2.jpg',
    details: {
      intro: 'Oferecemos um acompanhamento individualizado para sua transição de carreira ou para a sua ascensão profissional, definindo objetivos claros e traçando um plano de ação eficaz.',
      challenge: 'O mercado de trabalho é um campo de batalha. A falta de um plano de carreira, a insegurança na recolocação ou a dúvida sobre o futuro profissional podem gerar ansiedade e oportunidades perdidas.',
      vision: 'A Bravia RH te guia com clareza e estratégia. Com uma mentoria focada nos seus objetivos, transformamos a incerteza em um plano de ação concreto, que te leva do ponto A ao ponto B com segurança e propósito.',
      subServices: [
        'Definição de objetivo de carreira',
        'Estratégias de busca de vagas e Networking eficaz',
        'Desenvolvimento de Plano de Ação (PDI)',
        'Orientação para transições de carreira',
      ],
      cta: 'Planeje o próximo passo da sua carreira.',
    },
  },
  {
    slug: 'curriculo-linkedin-estrategico',
    category: 'Profissionais',
    title: 'Reestruturação de Currículo e LinkedIn Estratégico',
    shortDescription: 'Transforme seu currículo e LinkedIn em poderosas ferramentas de marketing pessoal.',
    metaDescription: 'Transforme seu currículo e LinkedIn em ímãs de oportunidades. Nossa consultoria de marca pessoal otimiza seu perfil para que recrutadores e empresas te encontrem e se interessem. Fale com a Bravia RH.',
    imageSrc: '/images/5.jpg',
    details: {
      intro: 'Sua marca pessoal começa em seu currículo e perfil no LinkedIn. Nós os otimizamos para destacar suas competências, aumentar sua visibilidade e atrair as oportunidades certas.',
      challenge: 'Currículos genéricos e perfis de LinkedIn incompletos são invisíveis para recrutadores e sistemas de busca. Milhares de oportunidades são perdidas por falta de uma estratégia de marketing pessoal.',
    vision: 'Através da nossa consultoria, seu perfil e currículo se tornam ferramentas de alto impacto, que comunicam sua experiência de forma assertiva e te posicionam como o profissional que as empresas procuram.',
      subServices: [
        'Otimização de currículo para ATS e recrutadores',
        'Construção de perfil profissional de destaque no LinkedIn',
        'Estratégias de conteúdo e engajamento no LinkedIn',
        'Fortalecimento da sua marca pessoal',
      ],
      cta: 'Construa um perfil que abre portas.',
    },
  },
  {
    slug: 'simulacao-entrevistas-performance',
    category: 'Profissionais',
    title: 'Simulação de Entrevistas e Preparação de Performance',
    shortDescription: 'Prepare-se para brilhar nas entrevistas mais desafiadoras.',
    metaDescription: 'Conquiste a sua próxima vaga com confiança. Nossa simulação de entrevistas prepara você para brilhar, com feedback estratégico e técnicas de comunicação de alto impacto. Fale com a Bravia RH.',
    imageSrc: '/images/3.jpg',
    details: {
      intro: 'Conduzimos simulações realistas de entrevistas, fornecendo feedback estratégico e prático para que você se comunique com segurança, autenticidade e conquiste a oportunidade certa.',
      challenge: 'A ansiedade antes de uma entrevista, a falta de preparo para perguntas difíceis e a insegurança na negociação salarial são barreiras que impedem o profissional de demonstrar seu verdadeiro valor.',
      vision: 'Através da simulação, você se familiariza com a pressão do momento e aprende a transformar nervosismo em performance. Nossa mentoria te capacita a se comunicar com clareza e a negociar com confiança, elevando suas chances de sucesso.',
      subServices: [
        'Simulação de entrevistas comportamentais e por competências',
        'Preparação para cases e dinâmicas de grupo',
        'Técnicas de negociação salarial e de propostas',
        'Desenvolvimento de comunicação de alto impacto',
      ],
      cta: 'Sinta-se 100% confiante na sua próxima entrevista.',
    },
  },
  {
    slug: 'treinamento-profissionais-rh',
    category: 'Profissionais',
    title: 'Treinamento de Profissionais de RH',
    shortDescription: 'Aprimore suas competências e se destaque como um profissional de RH estratégico.',
    metaDescription: 'Torne-se um profissional de RH estratégico. Nossos treinamentos oferecem as melhores práticas de mercado e uma visão inovadora para gerar mais valor na sua atuação. Fale com a Bravia RH.',
    imageSrc: '/images/4.jpg',
    details: {
      intro: 'Capacitamos profissionais de RH, do iniciante ao mais experiente, com as melhores práticas, ferramentas inovadoras e uma visão estratégica para gerar valor real nas organizações.',
      challenge: 'Muitos profissionais de RH se sentem presos a rotinas operacionais, perdendo a oportunidade de se posicionar como parceiros estratégicos do negócio.',
      vision: 'Com nossa mentoria, você adquire uma visão 360º do RH, dominando não apenas as rotinas, mas a estratégia de pessoas. Nossa expertise em neurociência e comportamento te capacita a atuar com inteligência emocional e resultados exponenciais.',
      subServices: [
        'Workshops de Recrutamento e Seleção por Competências',
        'Boas práticas em entrevistas comportamentais',
        'Como se tornar um RH estratégico',
        'Tendências e inovação em Gestão de Pessoas',
      ],
      cta: 'Eleve sua atuação no RH. Fale com a Bravia.',
    },
  },
  {
    slug: 'desenvolvimento-autoestima-confianca',
    category: 'Profissionais',
    title: 'Desenvolvimento de Autoestima, Confiança e Identidade Profissional',
    shortDescription: 'Fortaleça sua base emocional para sustentar o sucesso profissional e liderar a si mesmo.',
    metaDescription: 'Fortaleça sua autoestima e confiança profissional. Nossas sessões de coaching de carreira te ajudam a resgatar sua força interior e desenvolver uma identidade profissional sólida e autêntica.',
    imageSrc: '/images/1.jpg',
    details: {
      intro: 'Sua carreira é uma extensão de quem você é. Em sessões de mentoria e coaching, trabalhamos para resgatar sua força interior, clareza e poder de ação para que você possa liderar sua carreira.',
      challenge: 'A falta de autoconfiança, o medo de falhar e a síndrome do impostor sabotam o crescimento profissional. Sem uma base emocional sólida, o sucesso se torna insustentável e a busca por oportunidades se torna paralisante.',
      vision: 'Acreditamos que a carreira é uma extensão de quem você é. Nossa consultoria humanizada trabalha com você de dentro para fora, transformando insegurança em poder pessoal. Nossa missão é te guiar para uma carreira que seja uma expressão autêntica do seu potencial.',
      subServices: [
        'Sessões de Coaching de Carreira focadas em Autoconfiança',
        'Técnicas de Comunicação Assertiva e Oratória',
        'Gestão da Imagem e Marca Pessoal',
        'Inteligência Emocional e a sua aplicação no ambiente de trabalho.',
      ],
      cta: 'Desperte o seu poder pessoal. Fale com a Sol.',
    },
  },
];

// Função para buscar um serviço pelo slug
export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((service) => service.slug === slug);
}