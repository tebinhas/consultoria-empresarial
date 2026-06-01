import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transforme a gestão da sua empresa com mais
             <span className="text-green-500"> organização</span>,
             <span className="text-blue-400"> controle</span> e
             <span className="text-green-500"> crescimento</span>.
        </h1>

            <p className="text-xl text-slate-300 mb-8">
              Consultoria especializada em gestão para empresas e profissionais
              que desejam melhorar seus resultados e tomar decisões com mais
              segurança.
            </p>

            <button className="bg-green-600 hover:bg-green-700 transition-all duration-300 px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105">
              Falar no WhatsApp
            </button>
          </div>

          <div className="flex justify-center">
          <Image
             src="/consultor.png"
             alt="Consultor"
              width={500}
             height={500}
             loading="eager"
             className="rounded-2xl shadow-2xl"
/>
          </div>

        </div>

      </div>
    </section>
  );
}