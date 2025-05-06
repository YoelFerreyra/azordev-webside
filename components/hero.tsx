import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Transformamos ideas en soluciones digitales</h1>
            <p className="text-xl mb-8">
              Somos un equipo de programadores expertos que desarrolla sitios web, aplicaciones y sistemas e-commerce de
              alta calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="border-white text-blue-700 hover:bg-blue-800 hover:text-white">
                <Link href="#contact">Contáctanos</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-blue-700 hover:bg-blue-800 hover:text-white">
                <Link href="#services">Nuestros Servicios</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="logo-azordev.svg?height=300&width=400"
              alt="Desarrollo web profesional"
              className="w-50 h-auto filter invert brightness-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
