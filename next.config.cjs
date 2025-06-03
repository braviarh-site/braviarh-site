/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adicione a configuração para o PostCSS aqui, embora o Next.js já lide com isso, é bom para depurar
  webpack: (config, { isServer }) => {
    // Isso é mais para garantir que o PostCSS esteja sendo processado
    // Não é estritamente necessário para Tailwind padrão, mas pode resolver problemas de carregamento
    return config;
  },
};

module.exports = nextConfig; // <-- CORRIGIDO