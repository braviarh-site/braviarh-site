      /** @type {import('next').NextConfig} */
      const nextConfig = {
        images: {
          domains: ['placehold.co'], // Esta linha é crucial e deve estar presente
        },
        webpack: (config, { isServer }) => {
          return config;
        },
      };

      module.exports = nextConfig;