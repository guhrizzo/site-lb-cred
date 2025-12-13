"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <nav
            data-aos="fade-down"
            className={`
        fixed top-0 z-50 w-full
        transition-[background-color,backdrop-filter,border-color,box-shadow,color]
        duration-500 ease-out
        ${scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-md text-emerald-900 border-b border-emerald-200 "
                    : "bg-transparent text-white border-b border-white/40"
                }
      `}
        >
            <div className="flex items-center justify-center p-4">
                <ul className="flex gap-8 font-medium">
                    {["Home", "Venda seu veículo com dívida", "Depoimentos", "Contato"].map(
                        (item) => (
                            <li
                                key={item}
                                className=" cursor-pointer
                                transition-all delay-75 duration-150 hover:text-emerald-500"
                            >
                                {item}
                            </li>
                        )
                    )}
                </ul>

            </div>
        </nav>
    );
}
