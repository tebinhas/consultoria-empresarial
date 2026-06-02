"use client";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header
          className={`fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b z-50 transition-all duration-300 ${
          scrolled ? "shadow-xl bg-white/95" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div
        className={`flex items-center justify-between transition-all duration-300 ${
        scrolled ? "h-12 md:h-14" : "h-16 md:h-20"  }`}>
          <h1
            className={`font-bold text-slate-900 transition-all duration-300 ${
            scrolled ? "text-sm md:text-base" : "text-lg md:text-xl"  }`}>
            Consultoria Empresarial
          </h1>

          <nav className="hidden md:flex gap-8">
            <a href="#inicio" className="text-slate-700 hover:text-green-600 transition">
              Início
            </a>

            <a href="#servicos" className="text-slate-700 hover:text-green-600 transition">
              Serviços
            </a>

            <a href="#como-funciona" className="text-slate-700 hover:text-green-600 transition">
              Como Funciona
            </a>

            <a href="#contato" className="text-slate-700 hover:text-green-600 transition">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/3299999999"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block bg-green-600 hover:bg-green-700 rounded-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300 ${
              scrolled
              ? "px-3 py-1.5 md:px-5 md:py-2"
              : "px-4 py-2 md:px-8 md:py-4"  }`}>

              <span className="md:hidden">WhatsApp</span>
              <span className="hidden md:inline">
                Falar no WhatsApp
              </span>
            </a>

        </div>
      </div>
    </header>
  );
}