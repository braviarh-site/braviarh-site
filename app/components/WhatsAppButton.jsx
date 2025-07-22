'use client'; // Indica que este é um componente client-side para usar interatividade

import Link from 'next/link'; // Mantemos a importação do Link, mas usaremos <a> para o botão wa.me
import { MessageSquare } from 'lucide-react'; // Usamos MessageSquare para evitar o problema de compilação com Whatsapp

export default function WhatsAppButton() {
  // Número de telefone para o WhatsApp (substitua pelo seu!)
  // Formato: 55<DDD><NÚMERO> - Ex: 5551989336922
  const phoneNumber = '5551989336922'; // Use o número da Bravia RH
  // Mensagem pré-definida que aparecerá no WhatsApp
  const prefilledMessage = encodeURIComponent('Olá, gostaria de solicitar uma proposta de consultoria RH!');

  return (
    <div className="fixed bottom-6 right-6 z-50"> {/* Posição fixa no canto inferior direito */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${prefilledMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-500 hover:bg-green-600 active:bg-green-700
          text-white
          w-12 h-12 /* Define largura e altura para o botão ser redondo */
          rounded-full
          flex items-center justify-center
          shadow-lg hover:shadow-xl
          transition-all duration-300 transform hover:scale-110 /* Efeito de zoom ao passar o mouse */
          animate-bounce-whatsapp  /* Classe para a animação de 'pulo' contínuo */
          focus:outline-none focus:ring-4 focus:ring-green-300
        "
        aria-label="Fale conosco pelo WhatsApp"
      >
        {/* O ícone MessageSquare é o que funcionou anteriormente */}
        <MessageSquare size={32} />
      </a>
    </div>
  );
}

