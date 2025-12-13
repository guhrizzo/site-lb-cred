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
    fixed top-0 z-50 w-full
    transition-all duration-500 ease-out
    transform
    ${scrolled
                    ? "bg-green-700 text-white shadow-md opacity-100 translate-y-0"
                    : "bg-white/90 backdrop-blur text-green-700 border-b border-green-200 opacity-95 -translate-y-1"
                }
  `}
        >

            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <span className="font-bold text-xl tracking-tight">
                    Liberty Cred
                </span>

                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-8 font-medium">
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className="
                relative cursor-pointer transition-opacity
                hover:opacity-80
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-full after:bg-current
                after:scale-x-0 hover:after:scale-x-100
                after:transition-transform after:duration-300
              "
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Botão Hambúrguer */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex flex-col justify-center gap-2"
                    aria-label="Abrir menu"
                >
                    <span
                        className={`h-[3px] w-7 rounded-full bg-current transition-all
              ${open ? "rotate-45 translate-y-[6px]" : ""}
            `}
                    />
                    <span
                        className={`h-[3px] w-7 rounded-full bg-current transition-all
              ${open ? "-rotate-45 -translate-y-[6px]" : ""}
            `}
                    />
                </button>
            </div>

            {/* Menu Mobile */}
            <div
                className={`
          md:hidden overflow-hidden transition-all duration-300 ease-out
          ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
          ${scrolled ? "bg-green-700 text-white" : "bg-white text-green-700"}
        `}
            >
                <ul className="flex flex-col gap-6 px-6 pb-6 font-medium">
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            onClick={() => setOpen(false)}
                            className="cursor-pointer hover:opacity-80"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
