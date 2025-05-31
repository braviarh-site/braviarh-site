export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#003049] text-[#F2F2F2]">
        <header className="bg-[#F77F00] text-white p-6 text-center text-2xl font-bold">
          ProativeRH
        </header>
        <main className="p-6">
          {children}
        </main>
        <footer className="bg-[#F2F2F2] text-[#003049] text-center p-4 mt-10 text-sm">
          © {new Date().getFullYear()} ProativeRH - Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}