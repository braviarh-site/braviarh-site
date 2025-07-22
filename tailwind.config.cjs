/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primaryBlue: '#003049',
        secondaryBlue: '#0A3D62',
        accentOrange: '#FF7F00',
        offWhite: '#F2F2F2',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'shadow-blue': '0 6px 20px -5px rgba(0, 48, 73, 0.3)',
        'shadow-offwhite': '0 4px 15px -3px rgba(242, 242, 242, 0.2)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
