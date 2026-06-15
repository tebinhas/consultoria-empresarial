"use client";

import { useInView } from "@/hooks/useInView";

export default function Process() {
  const { ref, isInView } = useInView();
  
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .process-title {
          opacity: 0;
          transform: translateY(50px);
          animation: ${isInView ? 'fadeInUp 1.2s ease-out 0.1s forwards' : 'none'};
        }

        .process-description {
          opacity: 0;
          transform: translateY(50px);
          animation: ${isInView ? 'fadeInUp 1.2s ease-out 0.2s forwards' : 'none'};
        }

        .process-step {
          opacity: 0;
          transform: translateY(50px);
          animation: ${isInView ? 'fadeInUp 1.2s ease-out forwards' : 'none'};
        }

        .process-step:nth-child(1) { animation-delay: ${isInView ? '0.3s' : '0s'}; }
        .process-step:nth-child(2) { animation-delay: ${isInView ? '0.4s' : '0s'}; }
        .process-step:nth-child(3) { animation-delay: ${isInView ? '0.5s' : '0s'}; }
      `}</style>
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <h2 className="process-title text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4" style={{ fontFamily: 'var(--font-roboto)' }}>
          Como funciona a consultoria
        </h2>

        <p className="process-description text-center text-slate-600 max-w-2xl mx-auto mb-10">
          Um processo simples, objetivo e focado em resultados.
        </p>

        {/* MOBILE */}
        <div className="md:hidden space-y-6">

          <div className="process-step flex gap-4">
            <div className="w-10 h-10 bg-blue-900 rounded-full text-white flex items-center justify-center font-bold shrink-0">
              1
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900">
                Diagnóstico
              </h3>

              <p className="text-slate-600 text-sm mt-1">
                Entendemos a realidade da empresa e identificamos os principais desafios.
              </p>
            </div>
          </div>

          <div className="border-l-2 border-blue-200 ml-5 h-4"></div>

          <div className="process-step flex gap-4">
            <div className="w-10 h-10 bg-blue-900 rounded-full text-white flex items-center justify-center font-bold shrink-0">
              2
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900">
                Plano de Ação
              </h3>

              <p className="text-slate-600 text-sm mt-1">
                Definimos prioridades, metas e estratégias para melhorar os resultados.
              </p>
            </div>
          </div>

          <div className="border-l-2 border-blue-200 ml-5 h-4"></div>

          <div className="process-step flex gap-4">
            <div className="w-10 h-10 bg-blue-900 rounded-full text-white flex items-center justify-center font-bold shrink-0">
              3
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900">
                Acompanhamento
              </h3>

              <p className="text-slate-600 text-sm mt-1">
                Monitoramos a execução e ajustamos o que for necessário.
              </p>
            </div>
          </div>

        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">

          <div className="process-step text-center p-5 md:p-8 rounded-xl border shadow">
            <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Diagnóstico
            </h3>

            <p className="text-slate-600">
              Entendemos a realidade da empresa e identificamos os principais desafios.
            </p>
          </div>

          <div className="process-step text-center p-5 md:p-8 rounded-xl border shadow">
            <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Plano de Ação
            </h3>

            <p className="text-slate-600">
              Definimos prioridades, metas e estratégias para melhorar os resultados.
            </p>
          </div>

          <div className="process-step text-center p-5 md:p-8 rounded-xl border shadow">
            <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
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