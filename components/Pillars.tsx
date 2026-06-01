import { Briefcase, BarChart3, TrendingUp } from "lucide-react";
export default function Pillars() {

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-slate-900">
          Como podemos ajudar sua empresa
        </h2>

        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          <div className="p-6 rounded-xl shadow-lg border md:hover:shadow-2xl md:hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4"><Briefcase size={40} className="text-green-600" />
            </div>

            <h3 className="text-xl font-bold mb-4 text-slate-900">
              Organize
            </h3>

            <p className="text-slate-600">
              Estruture processos, rotinas e responsabilidades
              para tornar sua empresa mais eficiente.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg border md:hover:shadow-2xl md:hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4"><BarChart3 size={40} className="text-green-600" />
            </div>

            <h3 className="text-xl font-bold mb-4 text-slate-900">
              Controle
            </h3>

            <p className="text-slate-600">
              Tenha maior domínio sobre custos, finanças e
              indicadores do seu negócio.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg border md:hover:shadow-2xl md:hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4"><TrendingUp size={40} className="text-green-600" />
            </div>

            <h3 className="text-xl font-bold mb-4 text-slate-900">
              Cresça
            </h3>

            <p className="text-slate-600">
              Planeje o crescimento da empresa com segurança
              e foco em resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}