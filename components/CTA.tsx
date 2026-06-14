"use client";

import { useInView } from "@/hooks/useInView";

export default function CTA() {
  const { ref, isInView } = useInView();
  
  return (
    <section
      id="contato"
      className="bg-gradient-to-r from-blue-900 to-blue-950 py-16 md:py-24"
    >
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

        .cta-title {
          animation: ${isInView ? 'fadeInUp 0.8s ease-out 0.1s both' : 'none'};
        }

        .cta-description {
          animation: ${isInView ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none'};
        }

        .cta-button {
          animation: ${isInView ? 'fadeInUp 0.8s ease-out 0.3s both' : 'none'};
        }
      `}</style>
      <div className="max-w-4xl mx-auto text-center px-6" ref={ref}>

        <h2 className="cta-title text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-roboto)' }}>
          Pronto para melhorar sua gestão?
        </h2>

        <p className="cta-description text-slate-200 text-base md:text-xl mb-8">
          Fale conosco e descubra como alcançar resultados melhores.
        </p>

        <a
          href="https://wa.me/3299999999"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-block font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl hover:scale-105 transition-all shadow-lg"
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
    </section>
  );
}