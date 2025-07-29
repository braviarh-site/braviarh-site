// /app/components/Footer.tsx (Com a tarja laranja restaurada)
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    // CORREÇÃO: Adicionada a classe border-t-4 border-accentOrange para criar a tarja
    <footer className="bg-primaryBlue text-offWhite pt-16 pb-8 border-t-4 border-accentOrange">
      <div className="container mx-auto px-8">
        {/* Seção Superior do Rodapé (com as colunas) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          {/* Coluna Institucional */}
          <div>
            <h3 className="font-bold text-lg uppercase mb-4 text-accentOrange">Institucional</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-accentOrange transition">Início</Link></li>
              <li><Link href="/nossa-historia" className="hover:text-accentOrange transition">Nossa História</Link></li>
              <li><Link href="/blog" className="hover:text-accentOrange transition">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-accentOrange transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Coluna Nossos Serviços */}
          <div>
            <h3 className="font-bold text-lg uppercase mb-4 text-accentOrange">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li><Link href="/nossos-servicos#empresas" className="hover:text-accentOrange transition">Para Empresas</Link></li>
              <li><Link href="/nossos-servicos#profissionais" className="hover:text-accentOrange transition">Para Profissionais</Link></li>
            </ul>
          </div>

          {/* Coluna Contato */}
          <div>
            <h3 className="font-bold text-lg uppercase mb-4 text-accentOrange">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} />
                <a href="mailto:contato@braviarh.com.br" className="hover:text-accentOrange transition">contato@braviarh.com.br</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} />
                <a href="tel:51989336922" className="hover:text-accentOrange transition">(51) 98933-6922</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4 mt-4">
                <a href="https://linkedin.com/in/solschi" target="_blank" rel="noopener noreferrer" className="hover:text-accentOrange transition"><Linkedin size={24} /></a>
                <a href="https://instagram.com/braviarh" target="_blank" rel="noopener noreferrer" className="hover:text-accentOrange transition"><Instagram size={24} /></a>
              </li>
            </ul>
          </div>

          {/* Coluna Onde Estamos */}
          <div>
            <h3 className="font-bold text-lg uppercase mb-4 text-accentOrange">Onde Estamos</h3>
            <p>Porto Alegre, RS</p>
            <p>Atendimento Online para todo o Brasil</p>
          </div>
        </div>

        {/* Logo no Rodapé */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/images/logo-bravia-azul.png"
              alt="Logo da Bravia RH"
              width={320}
              height={110}
            />
          </Link>
        </div>

        {/* Seção Inferior do Rodapé (Direitos Reservados) */}
        <div className="border-t border-accentOrange pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Bravia RH. Todos os direitos reservados.</p>
          <p>Desenvolvimento e Design Web: <a href="https://linkedin.com/in/solschi" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-accentOrange transition">Sol Schimmelpfennig</a>.</p>
        </div>
      </div>
    </footer>
  );
}


