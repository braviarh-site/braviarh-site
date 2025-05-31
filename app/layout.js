export const metadata = {
  title: 'ProativeRH',
  description: 'Consultoria Estratégica de RH',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
