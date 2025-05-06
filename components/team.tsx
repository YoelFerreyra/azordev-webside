import { Github, Linkedin, Twitter } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Israel Laguan",
      role: "Full Stack Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Especialista en React y Node.js con 8 años de experiencia en desarrollo web.",
      social: {
        github: "https://github.com/Israel-Laguan",
        linkedin: "https://www.linkedin.com/in/israellaguan/",
      },
    },
    {
      name: "Jose Martínez",
      role: "Frontend Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Experta en UI/UX y desarrollo frontend con React, Next.js y TailwindCSS.",
      social: {
        github: "https://github.com/joset98",
        linkedin: "#",
      },
    },
    {
      name: "Yoel Ferreyra",
      role: "Backend Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Especialista en arquitectura de sistemas y bases de datos con experiencia en Node.js y Python.",
      social: {
        github: "https://github.com/YoelFerreyra",
        linkedin: "https://www.linkedin.com/in/eric-yoel-ferreyra-ab5b981bb/",
      },
    },
    {
      name: "Albeto Renz",
      role: "Full Stack Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Desarrollador de aplicaciones complejas con React.",
      social: {
        github: "#",
        linkedin: "#",
      },
    },
  ]

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los profesionales detrás de nuestros proyectos exitosos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-700 mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={member.social.github} className="text-gray-600 hover:text-blue-700">
                    <Github size={20} />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-700">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
