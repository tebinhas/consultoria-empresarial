"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden text-white bg-cover bg-center bg-no-repeat"
      style={{
      backgroundImage: "url('/fundohero.jpg')",  }}>

      <div className="absolute inset-0 bg-blue-950/80"></div>
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

        .hero-badge {
          animation: ${isInView ? 'fadeInUp 0.8s ease-out 0.1s both' : 'none'};
        }

        .hero-title {
          animation: ${isInView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none'};
        }

        .hero-description {
          animation: ${isInView ? 'fadeInUp 0.8s ease-out 0.3s both' : 'none'};
        }

        .hero-button {
          animation: ${isInView ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none'};
        }
      `}</style>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 md:pt-40 md:pb-24" ref={ref}>

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#9A92521a', borderColor: '#9A925233', color: '#9A9252' }}>
              ✓ Atendimento em Muriaé e Região
            </div>
        <h1 className="hero-title text-3xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-roboto)' }}>
            Transforme a gestão da sua empresa com mais
             <span style={{ color: '#9A9252' }}> organização</span>,
             <span className="text-slate-200"> controle</span> e
             <span style={{ color: '#9A9252' }}> crescimento</span>.
        </h1>

            <p className="hero-description text-xl text-slate-300 mb-8">
              Consultoria especializada em gestão para empresas e profissionais
              que desejam melhorar seus resultados e tomar decisões com mais
              segurança.
            </p>

          <a
            href="https://wa.me/3299999999"
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-button inline-block transition-all duration-300 px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105"
            style={{
              backgroundColor: '#9A9252',
              color: 'white'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6F7139'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9A9252'}
          >
            Falar no WhatsApp
          </a>
          </div>

        </div>

      </div>
    </section>
  );
}