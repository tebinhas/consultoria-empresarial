export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          <h1 className="font-bold text-xl text-slate-900">
            Consultoria Empresarial
          </h1>

          <nav className="hidden md:flex gap-8 text-slate-700">
            <a href="#" className="hover:text-green-600 transition">
              Início
            </a>

            <a href="#" className="hover:text-green-600 transition">
              Serviços
            </a>

            <a href="#" className="hover:text-green-600 transition">
              Como Funciona
            </a>

            <a href="#" className="hover:text-green-600 transition">
              Contato
            </a>
          </nav>

          <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            WhatsApp
          </button>

        </div>
      </div>
    </header>
  );
}