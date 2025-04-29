import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Básico",
      price: "$500 USD",
      description: "Ideal para pequeños negocios que necesitan presencia online",
      features: [
        "1 página web",
        "Diseño responsive",
        "Formulario de contacto",
        "Optimización SEO básica",
        "Entrega en 7 días",
      ],
      cta: "Cotizar Básico",
      highlighted: false,
    },
    {
      name: "Estándar",
      price: "$1,500 USD",
      description: "Perfecto para negocios en crecimiento que necesitan más funcionalidades",
      features: [
        "Hasta 5 páginas",
        "Diseño responsive premium",
        "Formularios avanzados",
        "Carga dinámica de contenido",
        "Optimización SEO completa",
        "Integración con redes sociales",
        "Entrega en 14 días",
      ],
      cta: "Cotizar Estándar",
      highlighted: true,
    },
    {
      name: "Avanzado",
      price: "$3,000+ USD",
      description: "Solución completa para negocios que requieren sistemas personalizados",
      features: [
        "WebApp o E-commerce completo",
        "Panel de administrador",
        "Sistema de usuarios",
        "Pasarela de pagos",
        "Gestión de inventario",
        "Reportes y analíticas",
        "Soporte técnico por 3 meses",
        "Entrega en 30 días",
      ],
      cta: "Cotizar Avanzado",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Planes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos diferentes planes para adaptarnos a tus necesidades y presupuesto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`flex flex-col h-full ${plan.highlighted ? "border-blue-500 shadow-lg" : ""}`}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.highlighted ? "bg-blue-700 hover:bg-blue-800" : ""}`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
