// /app/components/Header.tsx (Layout preferido com funcionalidade mobile integrada)
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Phone, Mail, MessageSquare, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const isActive = (path: string) => {
    if (path === '/nossos-servicos') {
      return pathname.startsWith('/nossos-servicos') || pathname.startsWith('/servicos');
    }
    if (path === '/blog') {
      return pathname.startsWith('/blog');
    }
    if (path === '/faq') {
      return pathname === '/faq';
    }
    return pathname === path;
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-primaryBlue/80 shadow-md h-32 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-8 h-full">
          {/* Logo (Esquerda) */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo-bravia-azul.png"
                alt="Logo da Bravia RH"
                width={350}
                height={150}
                className="w-auto h-auto"
              />
            </Link>
          </div>

          {/* GRUPO DA DIREITA (Navegação + Contato/CTA) - VISÍVEL APENAS EM DESKTOP */}
          <div className="hidden md:flex items-center gap-12">
            {/* Menu de Navegação */}
            <nav className="flex items-center gap-8 text-offWhite text-base uppercase font-semibold">
              <Link href="/" className={isActive('/') ? 'text-accentOrange' : 'hover:text-accentOrange transition whitespace-nowrap'}>Início</Link>
              <Link href="/nossa-historia" className={isActive('/nossa-historia') ? 'text-accentOrange' : 'hover:text-accentOrange transition whitespace-nowrap'}>Nossa História</Link>
              <Link href="/nossos-servicos" className={isActive('/nossos-servicos') ? 'text-accentOrange' : 'hover:text-accentOrange transition whitespace-nowrap'}>Nossos Serviços</Link>
              <Link href="/faq" className={isActive('/faq') ? 'text-accentOrange' : 'hover:text-accentOrange transition whitespace-nowrap'}>FAQ</Link>
              <Link href="/blog" className={isActive('/blog') ? 'text-accentOrange' : 'hover:text-accentOrange transition whitespace-nowrap'}>Blog</Link>
              <Link href="/contato" className={isActive('/contato') ? 'text-accentOrange' : 'hover:text-accentOrange transition whitespace-nowrap'}>Contato</Link>
            </nav>

            {/* Ícones de contato e CTA */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-6 text-offWhite">
                <a href="https://linkedin.com/in/solschi" target="_blank" rel="noopener noreferrer" className="hover:text-accentOrange transition"><Linkedin size={22} /></a>
                <a href="https://instagram.com/braviarh" target="_blank" rel="noopener noreferrer" className="hover:text-accentOrange transition"><Instagram size={22} /></a>
                <a href="tel:51989336922" className="hover:text-accentOrange transition"><Phone size={22} /></a>
                <a href="mailto:contato@braviarh.com.br" className="hover:text-accentOrange transition"><Mail size={22} /></a>
              </div>
              <Link
                href="https://wa.me/5551989336922?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accentOrange hover:bg-white hover:text-primaryBlue transition px-6 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 text-white whitespace-nowrap"
              >
                <MessageSquare size={18} />
                Solicite uma proposta
              </Link>
            </div>
          </div>
          
          {/* Botão Mobile (Hambúrguer) - VISÍVEL APENAS EM MOBILE */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-offWhite text-2xl">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile (Dropdown) */}
      <div className={`fixed top-32 left-0 w-full bg-primaryBlue shadow-lg md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} z-40`}>
          <nav className="flex flex-col items-center gap-6 text-offWhite text-lg uppercase py-8">
            <Link href="/" onClick={toggleMobileMenu} className={isActive('/') ? 'text-accentOrange' : 'hover:text-accentOrange transition'}>Início</Link>
            <Link href="/nossa-historia" onClick={toggleMobileMenu} className={isActive('/nossa-historia') ? 'text-accentOrange' : 'hover:text-accentOrange transition'}>Nossa História</Link>
            <Link href="/nossos-servicos" onClick={toggleMobileMenu} className={isActive('/nossos-servicos') ? 'text-accentOrange' : 'hover:text-accentOrange transition'}>Nossos Serviços</Link>
            <Link href="/faq" onClick={toggleMobileMenu} className={isActive('/faq') ? 'text-accentOrange' : 'hover:text-accentOrange transition'}>FAQ</Link>
            <Link href="/blog" onClick={toggleMobileMenu} className={isActive('/blog') ? 'text-accentOrange' : 'hover:text-accentOrange transition'}>Blog</Link>
            <Link href="/contato" onClick={toggleMobileMenu} className={isActive('/contato') ? 'text-accentOrange' : 'hover:text-accentOrange transition'}>Contato</Link>
          </nav>
        </div>
    </>
  );
}
