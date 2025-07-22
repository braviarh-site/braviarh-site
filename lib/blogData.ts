// /lib/blogData.ts

export interface BlogPost {
  slug: string;
  title: string;
  audience: 'Empresas/Gestores' | 'Profissionais' | 'Empresas e Líderes';
  summary: string;
  content: string; // O conteúdo completo do artigo em Markdown ou HTML
  publishedDate: string;
}

export const allBlogPosts: BlogPost[] = [
  {
    slug: 'custo-invisivel-contratacao-errada',
    title: 'O Custo Invisível: Por que uma Contratação Errada Pode Afundar seu Resultado (e Como Evitar Isso)',
    audience: 'Empresas/Gestores',
    summary: 'Descubra os impactos financeiros e culturais de uma má contratação e como um processo seletivo estratégico protege seu maior ativo.',
    publishedDate: '16 de junho de 2025',
    content: `
      <p class="mb-4">No mundo dos negócios, nos acostumamos a olhar para as métricas visíveis: receita, margem de lucro, custos operacionais. Mas um dos maiores drenos financeiros de uma empresa não aparece nas planilhas tradicionais: o custo de uma contratação errada.</p>
      <p class="mb-4">Não falo apenas do salário pago a um profissional que não entrega o esperado. É preciso enxergar o efeito dominó: o tempo de gestão que é consumido, o impacto na moral da equipe, os projetos que atrasam, as oportunidades de negócio que se perdem e, claro, os custos de um novo processo seletivo. A visão estratégica nos negócios é justamente enxergar além do óbvio, e isso significa entender que contratar não é preencher uma vaga, é fazer um investimento.</p>
      <h3 class="text-2xl font-bold text-accentOrange mt-6 mb-4">A Solução é Método</h3>
      <p class="mb-4">Na Bravia RH, nosso pilar é o <strong>Recrutamento e Seleção por Competências</strong>, que vai muito além do currículo. Nós analisamos não apenas o que o candidato <em>sabe</em> fazer, mas <em>como</em> ele age, se seus comportamentos e valores se conectam à cultura da sua empresa e aos desafios reais daquela função.</p>
      <p class="mb-4">Antes de iniciar qualquer busca, mergulho no seu negócio para mapear as competências que realmente fazem a diferença entre a alta performance e a mediocridade. Isso garante que cada profissional que eu apresento não seja apenas qualificado, mas tenha o DNA certo para prosperar e impulsionar seus resultados.</p>
      <h3 class="text-2xl font-bold text-accentOrange mt-6 mb-4">Conclusão</h3>
      <p>Parar de "apagar incêndios" com contratações reativas e começar a construir pontes para o futuro é a decisão mais inteligente que um líder pode tomar. Um processo seletivo estratégico não é um custo; é a proteção do seu maior ativo: seu tempo, sua equipe e seu resultado.</p>
    `,
  },
  {
    slug: 'linkedin-vitrine-ou-arquivo-morto',
    title: 'Seu LinkedIn é uma Vitrine ou um Arquivo Morto? 5 Ajustes para Atrair as Oportunidades Certas',
    audience: 'Profissionais',
    summary: 'Transforme seu perfil no LinkedIn de um currículo estático para uma poderosa ferramenta de marketing pessoal que atrai as melhores vagas.',
    publishedDate: '07 de julho de 2025',
    content: `
      <p class="mb-4">Muitos profissionais tratam o LinkedIn como um currículo online, um arquivo estático de suas experiências passadas. Esse é o primeiro equívoco. Na realidade, seu perfil deveria ser uma vitrine dinâmica, uma plataforma de marketing pessoal que trabalha para você 24 horas por dia.</p>
      <p class="mb-6">Se você não está recebendo os contatos que gostaria, para as vagas que realmente deseja, o problema raramente é o mercado. Geralmente, é a estratégia.</p>
      <ol class="space-y-6">
        <li><strong>1. Seu Título é seu Cartão de Visita:</strong> Em vez de "Em busca de recolocação", comunique seu valor. Que tal "Especialista em Logística | Foco em Otimização de Processos e Redução de Custos"? Diga o que você resolve, não o que você procura.</li>
        <li><strong>2. O Resumo "Sobre" é a sua Narrativa:</strong> Não liste tarefas. Conte uma história. Comece com o que te move, conecte com suas principais competências e finalize com o tipo de desafio que te inspira. Use as palavras-chave da sua área de forma natural.</li>
        <li><strong>3. Palavras-Chave são seu GPS Profissional:</strong> Recrutadores usam palavras-chave para encontrar talentos. Liste suas competências técnicas e comportamentais na seção "Competências" e garanta que elas apareçam de forma orgânica no seu resumo e nas suas experiências.</li>
        <li><strong>4. Descreva Experiências com Foco em Resultados:</strong> Troque "Fui responsável por relatórios" por "Desenvolvi relatórios de performance que levaram a uma redução de 15% nos custos operacionais". Quantificar suas conquistas muda o jogo.</li>
        <li><strong>5. Engajamento é Posicionamento:</strong> Comentar publicações de líderes da sua área e compartilhar artigos com sua perspectiva vale mais do que mil "curtidas". Mostre que você é uma voz ativa e pensante no seu setor.</li>
      </ol>
      <h3 class="text-2xl font-bold text-accentOrange mt-6 mb-4">Conclusão</h3>
      <p>Uma carreira de sucesso não acontece por acaso. Ela é construída com estratégia e intenção. Transformar seu LinkedIn de um arquivo para uma vitrine de alto impacto é o primeiro passo para que as oportunidades certas comecem a encontrar você.</p>
    `,
  },
  {
    slug: 'lideranca-alta-performance-licoes-gigantes',
    title: 'Liderança de Alta Performance: O que gigantes como Ambev e Nubank podem ensinar à sua empresa',
    audience: 'Empresas e Líderes',
    summary: 'Descubra os princípios de liderança de grandes empresas que podem ser aplicados em seu negócio para fomentar uma cultura de autonomia e resultados.',
    publishedDate: '21 de julho de 2025',
    content: `
      <p class="mb-4">Empresas como Ambev, Nubank e Itaú não se tornaram líderes de mercado por acaso. Por trás de seus produtos e serviços de sucesso, existe algo que não se copia facilmente: uma cultura de liderança intencional.</p>
      <p class="mb-6">A boa notícia é que os princípios aplicados não são exclusivos para corporações bilionárias; o segredo raramente reside em orçamentos gigantescos, mas sim em uma mentalidade estratégica. O que esses líderes fazem de diferente?</p>
      <ol class="space-y-6">
          <li><strong>1. Contratam pela Cultura, Treinam pela Habilidade:</strong> O alinhamento cultural é inegociável. Eles entendem que é mais fácil ensinar uma ferramenta nova do que ensinar valores como "senso de dono" e colaboração. O processo seletivo se torna um filtro rigoroso de alinhamento humano.</li>
          <li><strong>2. Feedback é Rotina, Não um Evento:</strong> A cultura do feedback constante, direto e construtivo é o que acelera o desenvolvimento. Líderes de alta performance criam ambientes seguros onde a conversa sobre performance é parte do dia a dia, não um evento anual e temido.</li>
          <li><strong>3. Autonomia Gera Responsabilidade:</strong> Eles definem o "o quê" (o objetivo) com clareza, mas dão autonomia para que as equipes definam o "como". Essa confiança empodera os times, estimula a inovação e cria um senso de propósito compartilhado.</li>
      </ol>
      <h3 class="text-2xl font-bold text-accentOrange mt-6 mb-4">Conclusão</h3>
      </ol>
      <p>Você não precisa do tamanho da Ambev para pensar como ela. Implementar uma cultura de liderança focada em alinhamento, feedback e autonomia é uma decisão estratégica acessível a qualquer negócio que deseja parar de apenas gerenciar pessoas e começar a desenvolver verdadeiros líderes.</p>
    `,
  },
];

// Função para buscar um post pelo slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug);
}
