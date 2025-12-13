"use client";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const phone = "5514998420710";
  const message =
    "Olá, vim pelo site da Liberty CRED e gostaria de uma análise gratuita.";

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    const footer = document.getElementById("footer");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footer) observer.observe(footer);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-3 px-5 py-4 rounded-full
        transition-all duration-500 ease-out
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
        ${
          scrolled
            ? "bg-green-600 text-white shadow-xl"
            : "bg-white text-green-600 border-2 border-green-600 shadow-lg"
        }
        hover:scale-105
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326z" />
      </svg>

      <span className="hidden md:inline font-semibold">
        Fale conosco
      </span>
    </a>
  );
}
