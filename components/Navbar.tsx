"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
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
      <div className="max-w-6xl mx-auto px-3 md:px-6">
        <div
        className={`flex items-center justify-between transition-all duration-300 ${
        scrolled ? "h-12 md:h-14" : "h-16 md:h-20"  }`}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className={`transition-all duration-300 ${
              scrolled
                ? "w-[60px] md:w-[90px]"
                : "w-[80px] md:w-[110px]"
            }`}/>

          <nav className="hidden md:flex gap-8">
            <a href="#inicio" className="text-slate-700 hover:text-blue-900 transition">
              Início
            </a>

            <a href="#servicos" className="text-slate-700 hover:text-blue-900 transition">
              Serviços
            </a>

            <a href="#como-funciona" className="text-slate-700 hover:text-blue-900 transition">
              Como Funciona
            </a>

            <a href="#contato" className="text-slate-700 hover:text-blue-900 transition">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/3299999999"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300 ${
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