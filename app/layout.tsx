import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Bravia RH',
  description: 'Soluções inovadoras em Gestão de Pessoas para o crescimento da sua empresa.',
  // Método 1: A forma moderna do Next.js (mantemos por boas práticas)
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable}`}>
      <head>
        {/* Método 2: A forma clássica e direta, para forçar o navegador */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
