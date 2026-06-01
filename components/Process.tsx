export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-6">
          Como funciona a consultoria
        </h2>

        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
          Um processo simples, objetivo e focado em resultados.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl border shadow">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Diagnóstico
            </h3>

            <p className="text-slate-600">
              Entendemos a realidade da empresa e identificamos os principais desafios.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl border shadow">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Plano de Ação
            </h3>

            <p className="text-slate-600">
              Definimos prioridades, metas e estratégias para melhorar os resultados.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl border shadow">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Acompanhamento
            </h3>

            <p className="text-slate-600">
              Monitoramos a execução e ajustamos o que for necessário.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}