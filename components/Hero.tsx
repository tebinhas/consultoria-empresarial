import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden text-white bg-cover bg-center bg-no-repeat"
      style={{
      backgroundImage: "url('/fundohero.jpg')",  }}>

      <div className="absolute inset-0 bg-blue-950/80"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 md:pt-40 md:pb-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/20 text-amber-400 px-4 py-2 rounded-full mb-6">
              ✓ Atendimento em Muriaé e Região
            </div>
        <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
            Transforme a gestão da sua empresa com mais
             <span className="text-amber-400"> organização</span>,
             <span className="text-slate-200"> controle</span> e
             <span className="text-amber-400"> crescimento</span>.
        </h1>

            <p className="text-xl text-slate-300 mb-8">
              Consultoria especializada em gestão para empresas e profissionais
              que desejam melhorar seus resultados e tomar decisões com mais
              segurança.
            </p>

          <a
            href="https://wa.me/3299999999"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 hover:bg-amber-700 transition-all duration-300 px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105"
          >
            Falar no WhatsApp
          </a>
          </div>

          {/* <div className="flex justify-center">
          <Image
             src="/consultor.png"
             alt="Consultor"
              width={280}
             height={280}
             loading="eager"
             className="rounded-2xl shadow-2xl border border-slate-700"/>
          </div> */}

        </div>

      </div>
    </section>
  );
}