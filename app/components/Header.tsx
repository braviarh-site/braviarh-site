// /app/components/Header.tsx (Revisado e Otimizado)
'use client';
import { useState } from 'react'; // Importação adicionada
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Phone, Mail, MessageSquare, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

// SUGESTÃO 1: Centralizar os links de navegação em um único local.
// Isso evita a repetição de código e torna muito mais fácil adicionar ou remover um link no futuro.
const navLinks = [
  { href: "/", label: "Início" },
  { href: "/nossa-historia", label: "Nossa História" },
  { href: "/nossos-servicos", label: "Nossos Serviços" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

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
    return pathname === path;
  };

  return (
    <>
      {/* SUGESTÃO 2: Ajuste de z-index para garantir que o menu mobile fique sempre por cima. */}
      <header className="fixed top-0 left-0 w-full z-40 bg-primaryBlue/90 shadow-md h-32 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-8 h-full">
          {/* Logo (Esquerda) */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo-bravia-azul.png"
                alt="Logo da Bravia RH"
                width={380}
                height={180}
                className="w-auto h-auto"
              />
            </Link>
          </div>

          {/* GRUPO DA DIREITA (Navegação + Contato/CTA) - VISÍVEL APENAS EM DESKTOP */}
          <div className="hidden md:flex items-center gap-12">
            {/* Menu de Navegação (Agora renderizado a partir do array navLinks) */}
            <nav className="flex items-center gap-8 text-offWhite text-base uppercase font-semibold">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={isActive(link.href) ? 'text-accentOrange' : 'hover:text-accentOrange transition whitespace-nowrap'}>
                  {link.label}
                </Link>
              ))}
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
          
          {/* Botão Mobile (Hambúrguer) */}
          <div className="md:hidden">
            {/* SUGESTÃO 3: Melhoria de acessibilidade com aria-label */}
            <button onClick={toggleMobileMenu} className="text-offWhite text-2xl" aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile (Dropdown) */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-primaryBlue md:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
          <div className="flex justify-end p-8">
            <button onClick={toggleMobileMenu} className="text-offWhite text-2xl" aria-label="Fechar menu">
              <X size={32} />
            </button>
          </div>
          {/* Menu mobile também renderizado a partir do array navLinks */}
          <nav className="flex flex-col items-center justify-center h-full -mt-16 gap-8 text-offWhite text-xl uppercase">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={toggleMobileMenu} className={isActive(link.href) ? 'text-accentOrange' : 'hover:text-accentOrange transition'}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
    </>
  );
}