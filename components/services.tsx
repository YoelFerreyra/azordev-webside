import { Globe, ShoppingCart, LayoutDashboard, Code, Database, Smartphone } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-blue-700" />,
      title: "Desarrollo de Páginas Web",
      description:
        "Creamos sitios web atractivos, responsivos y optimizados para SEO que representan perfectamente tu marca.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-blue-700" />,
      title: "E-commerce",
      description: "Desarrollamos tiendas online completas con gestión de productos, pagos y envíos integrados.",
    },
    {
      icon: <LayoutDashboard className="h-10 w-10 text-blue-700" />,
      title: "Sistemas Web",
      description: "Creamos aplicaciones web personalizadas para optimizar los procesos de tu negocio.",
    },
    {
      icon: <Code className="h-10 w-10 text-blue-700" />,
      title: "Desarrollo Frontend",
      description: "Diseñamos interfaces de usuario modernas y atractivas utilizando las últimas tecnologías.",
    },
    {
      icon: <Database className="h-10 w-10 text-blue-700" />,
      title: "Desarrollo Backend",
      description: "Construimos APIs robustas y sistemas de bases de datos escalables para tus aplicaciones.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-blue-700" />,
      title: "Aplicaciones Móviles",
      description: "Desarrollamos aplicaciones nativas y multiplataforma para iOS y Android.",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios de desarrollo para satisfacer todas tus necesidades digitales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
