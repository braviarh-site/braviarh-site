// app/contato/page.tsx
'use client';

import { useState, FormEvent } from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Instagram, Linkedin, Facebook, Loader, CheckCircle, AlertTriangle } from 'lucide-react';

// --- Tipo para o estado do formulário ---
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContatoPage() {
  const whatsappNumber = '5551989336922';
  const whatsappMessage = encodeURIComponent('Olá, gostaria de saber mais sobre os serviços da Bravia RH.');

  // --- Estados para gerenciar o formulário ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  
  // Sua chave de acesso do Web3Forms já está configurada.
  const accessKey = "1759923a-d221-46f6-948e-98ac184d370b";

  // --- Função para lidar com a submissão do formulário ---
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    const data = {
        ...formData,
        access_key: accessKey,
        subject: `Nova Mensagem de Contato de ${formData.name}`, // Assunto do email
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Limpa o formulário
      } else {
        throw new Error(result.message || "Ocorreu um erro ao enviar.");
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-primaryBlue text-offWhite min-h-screen">
      {/* ===========================================
        Seção Hero "Fale Conosco"
        =========================================== */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-offWhite overflow-hidden py-16">
        <Image
          src="/images/contato-hero.png"
          alt="Bravia RH - Fale Conosco"
          fill
          style={{ objectFit: 'cover' }}
          className="z-0 absolute inset-0"
          priority
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/1920x1080/003049/FFFFFF?text=Fale+Conosco';
          }}
        />
        <div className="absolute inset-0 bg-primaryBlue opacity-70 z-10"></div>

        <div className="relative z-20 p-4 max-w-5xl mx-auto pt-32 flex flex-col items-center">
          <AnimateOnScroll animation="fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-accentOrange text-center mb-6">Fale Conosco</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <p className="text-xl md:text-2xl text-offWhite text-center max-w-4xl mx-auto mb-12">
              Tem alguma pergunta, sugestão ou quer solicitar uma proposta? Preencha o formulário abaixo ou entre em contato pelos nossos canais diretos.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-12 w-full">
            <AnimateOnScroll animation="fade-in-up" delay={300} className="h-full">
              <div className="flex flex-col gap-8 h-full">
                {/* Balão 1: Emails e WhatsApp */}
                <div className="bg-white p-8 rounded-lg shadow-subtle-light text-primaryBlue hover:scale-105 transition-transform duration-300 flex-grow">
                  <h2 className="text-3xl font-semibold text-secondaryBlue mb-6 text-center md:text-left">Emails e WhatsApp</h2>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-center justify-center md:justify-start gap-3">
                      <Phone size={24} className="text-accentOrange" />
                      <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        (51) 98933-6922 (WhatsApp)
                      </Link>
                    </li>
                    <li className="flex items-center justify-center md:justify-start gap-3">
                      <Mail size={24} className="text-accentOrange" />
                      <Link href="mailto:contato@braviarh.com.br" className="hover:underline">contato@braviarh.com.br</Link>
                    </li>
                    <li className="flex items-center justify-center md:justify-start gap-3">
                      <Mail size={24} className="text-accentOrange" />
                      <Link href="mailto:vagas@braviarh.com.br" className="hover:underline">vagas@braviarh.com.br</Link>
                    </li>
                  </ul>
                </div>

                {/* Balão 2: Redes Sociais */}
                <div className="bg-white p-8 rounded-lg shadow-subtle-light text-primaryBlue hover:scale-105 transition-transform duration-300 flex-grow">
                  <h2 className="text-3xl font-semibold text-secondaryBlue mb-6 text-center md:text-left">Redes Sociais</h2>
                  <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
                    <Link href="https://linkedin.com/in/solschi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={32} className="text-accentOrange hover:text-secondaryBlue transition-colors" /></Link>
                    <Link href="https://instagram.com/sol.schi" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={32} className="text-accentOrange hover:text-secondaryBlue transition-colors" /></Link>
                    <Link href="https://www.facebook.com/braviarh" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={32} className="text-accentOrange hover:text-secondaryBlue transition-colors" /></Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Formulário de Contato Funcional */}
            <AnimateOnScroll animation="fade-in-up" delay={400} className="h-full">
              <div className="bg-white p-8 rounded-lg shadow-subtle-light h-full text-primaryBlue hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-semibold text-secondaryBlue mb-6 text-center md:text-left">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome Completo</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-accentOrange bg-offWhite" placeholder="Seu nome" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Seu Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-accentOrange bg-offWhite" placeholder="seuemail@exemplo.com" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Telefone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-accentOrange bg-offWhite" placeholder="(XX) XXXXX-XXXX" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensagem</label>
                    <textarea id="message" name="message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-accentOrange bg-offWhite" placeholder="Sua mensagem aqui..." required></textarea>
                  </div>
                  
                  <button type="submit" disabled={formStatus === 'loading'} className="w-full flex items-center justify-center bg-accentOrange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primaryBlue hover:text-offWhite transition-all duration-300 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed">
                    {formStatus === 'loading' && <Loader className="animate-spin mr-2" />}
                    {formStatus === 'idle' && 'Enviar Mensagem'}
                    {formStatus === 'loading' && 'Enviando...'}
                    {formStatus === 'success' && 'Enviado com Sucesso!'}
                    {formStatus === 'error' && 'Tente Novamente'}
                  </button>

                  {formStatus === 'success' && <p className="text-center text-green-600 flex items-center justify-center"><CheckCircle className="mr-2" />Obrigado pelo seu contato!</p>}
                  {formStatus === 'error' && <p className="text-center text-red-600 flex items-center justify-center"><AlertTriangle className="mr-2" />Ocorreu um erro. Por favor, tente novamente.</p>}
                </form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}

