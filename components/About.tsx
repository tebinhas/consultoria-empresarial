import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <Image
              src="/consultor.png"
              alt="Consultor"
              width={280}
              height={280}
              className="rounded-2xl shadow-xl md:w-[400px] md:h-[400px]"
            />
          </div>

          <div>
            <span className="text-green-600 font-semibold uppercase">
              Sobre o Consultor
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-4">
              Experiência prática para ajudar sua empresa a crescer
            </h2>

            <p className="text-slate-600 mb-6">
              Atuamos auxiliando empresas e profissionais na organização
              de processos, controle financeiro e planejamento estratégico,
              sempre com foco em resultados reais.
            </p>

            <div className="space-y-2">

              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-slate-700">
                  Organização e Processos
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-slate-700">
                  Gestão Financeira
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-slate-700">
                  Planejamento Estratégico
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
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