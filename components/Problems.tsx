"use client";

import {
  ClipboardList,
  TrendingDown,
  Hourglass,
  TrendingUp,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function Problems() {
  const { ref, isInView } = useInView();
  
  const problems = [
    {
      title: "Falta de organização",
      icon: ClipboardList,
    },
    {
      title: "Custos fora de controle",
      icon: TrendingDown,
    },
    {
      title: "Equipe improdutiva",
      icon: Hourglass,
    },
    {
      title: "Crescimento sem planejamento",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
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

        .problems-title {
          opacity: 0;
          transform: translateY(50px);
          animation: ${isInView ? 'fadeInUp 1.2s ease-out 0.1s forwards' : 'none'};
        }

        .problems-description {
          opacity: 0;
          transform: translateY(50px);
          animation: ${isInView ? 'fadeInUp 1.2s ease-out 0.2s forwards' : 'none'};
        }

        .problem-card {
          opacity: 0;
          transform: translateY(50px);
          animation: ${isInView ? 'fadeInUp 1.2s ease-out forwards' : 'none'};
        }

        .problem-card:nth-child(1) { animation-delay: ${isInView ? '0.3s' : '0s'}; }
        .problem-card:nth-child(2) { animation-delay: ${isInView ? '0.4s' : '0s'}; }
        .problem-card:nth-child(3) { animation-delay: ${isInView ? '0.5s' : '0s'}; }
        .problem-card:nth-child(4) { animation-delay: ${isInView ? '0.6s' : '0s'}; }
      `}</style>
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <h2 className="problems-title text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4" style={{ fontFamily: 'var(--font-roboto)' }}>
          Sua empresa enfrenta algum destes desafios?
        </h2>

        <p className="problems-description text-center text-slate-600 max-w-2xl mx-auto mb-10">
          Identificamos os principais gargalos e ajudamos sua empresa a tomar
          decisões com mais segurança.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <div
                key={problem.title}
                className="problem-card bg-white p-4 rounded-xl shadow border text-center transition-all duration-300 md:hover:-translate-y-2 md:hover:shadow-xl"
              >
                <div className="relative inline-flex mb-4">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                    <Icon className="text-red-500" size={32} />
                  </div>

                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ×
                  </div>
                </div>

                <p className="font-semibold text-slate-800">
                  {problem.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}