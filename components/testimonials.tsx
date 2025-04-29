import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "María López",
      company: "Tienda Online MX",
      image: "/placeholder.svg?height=100&width=100",
      stars: 5,
      text: "Excelente trabajo en nuestro e-commerce. El equipo entendió perfectamente nuestras necesidades y entregó un producto que superó nuestras expectativas.",
    },
    {
      name: "Juan Pérez",
      company: "Consultora Digital",
      image: "/placeholder.svg?height=100&width=100",
      stars: 5,
      text: "Contratamos el plan estándar para nuestra web corporativa y quedamos muy satisfechos. El diseño es moderno y la funcionalidad impecable.",
    },
    {
      name: "Roberto Fernández",
      company: "Restaurante El Sabor",
      image: "/placeholder.svg?height=100&width=100",
      stars: 4,
      text: "Desarrollaron nuestra aplicación de pedidos online en tiempo récord. La interfaz es intuitiva y nuestros clientes están encantados.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos enorgullece el feedback positivo de quienes han confiado en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Empresas que confían en nosotros</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`/placeholder.svg?height=60&width=180&text=LOGO ${i}`}
                alt={`Cliente ${i}`}
                className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
