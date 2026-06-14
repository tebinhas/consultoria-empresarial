"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="sobre" className="py-16 md:py-24 bg-slate-50">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-image {
          animation: ${isInView ? 'fadeInUp 0.8s ease-out 0.1s both' : 'none'};
        }

        .about-label {
          animation: ${isInView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none'};
        }

        .about-title {
          animation: ${isInView ? 'fadeInUp 0.8s ease-out 0.3s both' : 'none'};
        }

        .about-description {
          animation: ${isInView ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none'};
        }

        .about-item {
          animation: ${isInView ? 'fadeInUp 0.8s ease-out both' : 'none'};
        }

        .about-item:nth-child(1) { animation-delay: 0.5s; }
        .about-item:nth-child(2) { animation-delay: 0.6s; }
        .about-item:nth-child(3) { animation-delay: 0.7s; }
        .about-item:nth-child(4) { animation-delay: 0.8s; }
      `}</style>
      <div className="max-w-6xl mx-auto px-6" ref={ref}>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <Image
              src="/consultor.png"
              alt="Consultor"
              width={280}
              height={280}
              className="about-image rounded-2xl shadow-xl md:w-[400px] md:h-[400px]"
            />
          </div>

          <div>
            <span className="about-label text-blue-900 font-semibold uppercase">
              Sobre o Consultor
            </span>

            <h2 className="about-title text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-4" style={{ fontFamily: 'var(--font-roboto)' }}>
              Experiência prática para ajudar sua empresa a crescer
            </h2>

            <p className="about-description text-slate-600 mb-6">
              Atuamos auxiliando empresas e profissionais na organização
              de processos, controle financeiro e planejamento estratégico,
              sempre com foco em resultados reais.
            </p>

            <div className="space-y-2">

              <div className="about-item flex items-center gap-2">
                <span style={{ color: '#9A9252' }} className="font-bold">✓</span>
                <span className="text-slate-700">
                  Organização e Processos
                </span>
              </div>

              <div className="about-item flex items-center gap-2">
                <span style={{ color: '#9A9252' }} className="font-bold">✓</span>
                <span className="text-slate-700">
                  Gestão Financeira
                </span>
              </div>

              <div className="about-item flex items-center gap-2">
                <span style={{ color: '#9A9252' }} className="font-bold">✓</span>
                <span className="text-slate-700">
                  Planejamento Estratégico
                </span>
              </div>

              <div className="about-item flex items-center gap-2">
                <span style={{ color: '#9A9252' }} className="font-bold">✓</span>
                <span className="text-slate-700">
                  Acompanhamento de Resultados
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}