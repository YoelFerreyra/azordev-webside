"use client";
import React, { useEffect, useRef } from "react";
import ParticleBackground from "./ParticleBackground";
import logoSrc from "/public/logo-azordev.svg";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!iconRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate rotation based on mouse position
      const rotateY = (clientX / innerWidth - 0.5) * 20;
      const rotateX = (clientY / innerHeight - 0.5) * -20;

      // Apply the transformation
      iconRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        scale3d(1.1, 1.1, 1.1)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <ParticleBackground />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
        <div
          ref={iconRef}
          className="icon-3d mb-8 transition-transform duration-300 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src={logoSrc}
            alt="Azordev logo"
            className="w-40 h-auto filter invert brightness-0"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-pink-200">
            Soluciones Innovadoras
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl text-center mb-8">
          Transformamos ideas en soluciones digitales de alta calidad
        </p>

        <Link href="#contact">
          <button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold 
        hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl 
        transform hover:-translate-y-1"
          >
            Get Started
          </button>
        </Link>
      </div>
      <a
        href="https://wa.me/5491156149888"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat en WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2.004C6.514 2.004 2.007 6.512 2.005 12.039c0 2.12.554 4.126 1.604 5.918L2 22l4.184-1.093c1.734.946 3.686 1.443 5.859 1.443h.003c5.527 0 10.034-4.507 10.035-10.035.001-5.527-4.507-10.034-10.04-10.034h-.001Zm.004 18.081h-.003a8.002 8.002 0 0 1-4.087-1.124l-.292-.173-2.483.65.664-2.424-.183-.297a7.973 7.973 0 0 1-1.224-4.207c.002-4.419 3.598-8.014 8.018-8.014 2.144 0 4.158.836 5.672 2.351a7.957 7.957 0 0 1 2.35 5.672c-.002 4.42-3.597 8.016-8.014 8.016Zm4.388-5.857c-.24-.12-1.419-.699-1.64-.779-.22-.08-.38-.12-.54.12s-.62.779-.76.94c-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.22-.718-.64-1.203-1.427-1.344-1.667-.14-.24-.015-.37.105-.49.108-.108.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.28-.74-1.76-.2-.48-.4-.41-.54-.42l-.46-.01c-.16 0-.42.06-.64.3s-.84.82-.84 2c0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.14 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>
    </div>
  );
};

export default Hero;
