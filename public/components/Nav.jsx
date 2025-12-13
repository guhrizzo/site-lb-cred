"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // WhatsApp
  const phone = "5514998420710";
  const message =
    "Olá, vim pelo site da Liberty CRED e gostaria de uma análise gratuita.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  // Scroll helpers
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  const scrollToTestimonials = () => {
    const section = document.getElementById("depoimentos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav
      data-aos="fade-down"
      className={`
        fixed top-0 z-50 w-full
        transition-all duration-500 ease-out
        ${scrolled
          ? "bg-green-700 text-white shadow-md"
          : "bg-white/90 backdrop-blur text-green-700 border-b border-green-200"}
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <span
          onClick={scrollToTop}
          className="font-bold text-xl tracking-tight cursor-pointer"
        >
          Liberty Cred
        </span>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 font-medium items-center">
          <li onClick={scrollToTop} className="cursor-pointer hover:opacity-70">
            Home
          </li>

          <li>
            <a
              href="https://liberty-landing-page-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              Venda seu veículo com dívida
            </a>
          </li>

          <li
            onClick={scrollToTestimonials}
            className="cursor-pointer hover:opacity-70"
          >
            Depoimentos
          </li>

          <li>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              Contato
            </a>
          </li>
        </ul>

        {/* Botão Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-2"
          aria-label="Abrir menu"
        >
          <span className={`h-[3px] w-7 bg-current rounded transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`h-[3px] w-7 bg-current rounded transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}
          ${scrolled ? "bg-green-700 text-white" : "bg-white text-green-700"}
        `}
      >
        <ul className="flex flex-col gap-6 px-6 pb-6 font-medium">
          <li onClick={scrollToTop} className="cursor-pointer">
            Home
          </li>

          <li>
            <a
              href="https://liberty-landing-page-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Venda seu veículo com dívida
            </a>
          </li>

          <li onClick={scrollToTestimonials} className="cursor-pointer">
            Depoimentos
          </li>

          <li>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
