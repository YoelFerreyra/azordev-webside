"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-blue-700 text-xl font-bold">Azordev</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#about"
              className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-bold"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-bold"
            >
              Servicios
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-bold"
            >
              Precios
            </Link>
            <Link
              href="#team"
              className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-bold"
            >
              Equipo
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-bold"
            >
              Contacto
            </Link>
            <Link href="#contact">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold">
              Cotizar Proyecto
            </Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="#about"
              className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-bold"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-bold"
            >
              Servicios
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-bold"
            >
              Precios
            </Link>
            <Link
              href="#team"
              className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-bold"
            >
              Equipo
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-bold"
            >
              Contacto
            </Link>
            <Link href="#contact">
              <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white mt-3 font-bold">
                Cotizar Proyecto
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
