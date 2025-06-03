// app/layout.tsx
import './globals.css'; // Isso é crucial!
import { Poppins } from 'next/font/google'; // Import da fonte
import Header from './components/Header';
import Footer from './components/Footer';

// Configuração da fonte Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins', // Define uma variável CSS para a fonte
});

export const metadata = {
  title: 'ProativeRH - Transformando Carreiras e Negócios',
  description: 'ProativeRH - Soluções em Recrutamento, Seleção e Desenvolvimento Humano.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable}`}> {/* Aplica a variável da fonte */}
      <body className="bg-white text-gray-900"> {/* Classes base do Tailwind */}
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}