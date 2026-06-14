export default function CTA() {
  return (
    <section
      id="contato"
      className="bg-gradient-to-r from-blue-900 to-blue-950 py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Pronto para melhorar sua gestão?
        </h2>

        <p className="text-slate-200 text-base md:text-xl mb-8">
          Fale conosco e descubra como alcançar resultados melhores.
        </p>

        <a
          href="https://wa.me/3299999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-400 text-blue-900 font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl hover:scale-105 transition-all shadow-lg hover:bg-amber-500"
        >
          Falar no WhatsApp
        </a>

      </div>
    </section>
  );
}