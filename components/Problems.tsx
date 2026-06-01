export default function Problems() {
  const problems = [
    "Falta de organização interna",
    "Dificuldade para controlar custos",
    "Processos desorganizados",
    "Falta de indicadores para decisões",
    "Equipe improdutiva",
    "Crescimento sem planejamento",
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-6">
          Sua empresa enfrenta algum destes desafios?
        </h2>

        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
          Muitos negócios possuem potencial para crescer, mas enfrentam
          obstáculos que dificultam a organização e a tomada de decisões.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem) => (
            <div
              key={problem}
              className="bg-white p-6 rounded-xl shadow border"
            >
              <p className="font-medium text-slate-800">
                ✓ {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}