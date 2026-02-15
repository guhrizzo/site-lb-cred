"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phone = "5514998420710";
  const message = "Olá, vim pelo site da Liberty CRED e gostaria de uma análise gratuita.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // Compensação da altura da navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 z-100 w-full transition-all duration-500
        ${scrolled 
          ? "py-3 bg-slate-900/80 backdrop-blur-lg border-b border-white/10 shadow-xl" 
          : "py-5 bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative z-10 cursor-pointer transition-transform hover:scale-105"
        >
          <Image 
            src="/Logo-LibertyCred.png" 
            width={120} 
            height={40} 
            alt="Liberty Cred Logo"
            className={`${!scrolled && "brightness-0 invert"}`} 
          />
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-bold uppercase tracking-widest">
            <li>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`transition-colors ${scrolled ? "text-slate-300 hover:text-emerald-400" : "text-white/80 hover:text-white"}`}
              >
                Home
              </button>
            </li>
            <li>
              <a 
                href="https://libertcar.net.br" 
                target="_blank"
                className={`flex capitalize items-center gap-1 transition-colors ${scrolled ? "text-slate-300  hover:text-emerald-400" : "text-white/80 hover:text-white"}`}
              >
                Venda seu veículo com dívida
              </a>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("depoimentos")}
                className={`transition-colors ${scrolled ? "text-slate-300 hover:text-emerald-400" : "text-white/80 hover:text-white"}`}
              >
                Depoimentos
              </button>
            </li>
          </ul>

          {/* CTA Button na Navbar */}
          <a
            href={whatsappLink}
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-emerald-50 text-xs font-black uppercase rounded-xl transition-all shadow-lg shadow-emerald-900/20"
          >
            <MessageCircle size={16} />
            Contato
          </a>
        </div>

        {/* Botão Mobile Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-10 p-2 text-white bg-emerald-600 rounded-lg"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay Menu Mobile */}
      <div
        className={`
          absolute top-0 left-0 w-full bg-slate-900 transition-all duration-500 ease-in-out overflow-hidden
          ${open ? "max-h-screen opacity-100 py-24" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-8 text-xl font-black text-white uppercase tracking-tighter">
          <li onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setOpen(false); }}>
            Home
          </li>
          <li>
            <a href="https://libertycar.net.br" target="_blank" className="text-emerald-400">
              Venda seu Veículo
            </a>
          </li>
          <li onClick={() => scrollToSection("depoimentos")}>
            Depoimentos
          </li>
          <li className="w-full px-10">
            <a
              href={whatsappLink}
              className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-600 rounded-2xl"
            >
              <MessageCircle size={24} />
              CONTATO WHATSAPP
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}