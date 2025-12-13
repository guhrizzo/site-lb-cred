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
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "Venda seu veículo com dívida",
    "Depoimentos",
    "Contato",
  ];

  return (
    <nav
      data-aos="fade-down"
      className={`
        fixed top-0 z-50 w-full isolate
        transition-[background-color,backdrop-filter,border-color,box-shadow,color]
        duration-500 ease-out
        ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md text-emerald-900 border-b border-emerald-200"
          : "bg-transparent text-white border-b border-white/40"
        }
      `}
    >
      <div className="flex items-center lg:justify-around px-6 py-4 ">

        {/* Logo */}
        <span className="font-bold text-lg">
          SuaLogo
        </span>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 font-medium">
          {menuItems.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer transition-colors duration-200 hover:text-emerald-500"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Botão Hambúrguer */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden  z-999 w-[30px] h-8 flex flex-col absolute right-[380px] justify-center gap-2 pointer-events-auto"
          aria-label="Abrir menu"
        >
          <span
            className={`
              h-[3px] w-full rounded-full  bg-current transition-all duration-300
              ${open ? "rotate-45 translate-y-[5px]" : ""}
            `}
          />
          <span
            className={`
              h-[3px] rounded-full  w-full bg-current transition-all duration-300
              ${open ? "-rotate-45 -translate-y-[5px]" : ""}
            `}
          />
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-out
          ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-6 px-6 pb-6 font-medium">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setOpen(false)}
              className="cursor-pointer transition-colors duration-200 hover:text-emerald-500"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
