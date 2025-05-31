import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <img src="/images/logo.png" alt="Logo da ProativeRH" className="w-40 mb-6" />

      <h1 className="text-5xl font-bold text-orange-600 mb-4">ProativeRH</h1>
      <p className="text-xl mb-6">
        Consultoria Estratégica de RH especializada em Recrutamento e Seleção por Competências.
      </p>

      <section className="bg-orange-100 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-orange-800">O que fazemos</h2>
        <p>
          Ajudamos pequenas empresas a contratar melhor, com processos personalizados, foco em cultura organizacional e escolha dos candidatos ideais.
        </p>
      </section>
    </Layout>
  );
}

