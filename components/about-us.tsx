import { Users, Award, Clock } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un equipo de programadores apasionados con amplia experiencia en el desarrollo de soluciones
            digitales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-700 mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Equipo Experimentado</h3>
            <p className="text-gray-600">
              Nuestro equipo cuenta con más de 10 años de experiencia combinada en desarrollo de software y soluciones
              web.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-700 mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
            <p className="text-gray-600">
              Nos comprometemos a entregar productos de la más alta calidad, siguiendo las mejores prácticas de la
              industria.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-700 mb-4">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Entrega Puntual</h3>
            <p className="text-gray-600">
              Cumplimos con los plazos establecidos, asegurando que tu proyecto esté listo cuando lo necesites.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
