import { Github, Linkedin, Twitter } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Israel Laguan",
      role: "Full Stack Developer",
      image: "https://media.licdn.com/dms/image/v2/C5603AQE2yp2P3gXdDg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1586879922473?e=1752710400&v=beta&t=ItsDOVYwI0AiCLnkeynpGq6D91E9QxljQHacpKgWUWI",
      bio: "Especialista en React y Node.js con 8 años de experiencia en desarrollo web.",
      social: {
        github: "https://github.com/Israel-Laguan",
        linkedin: "https://www.linkedin.com/in/israellaguan/",
      },
    },
    {
      name: "Jose Miguel Tovar Rodriguez",
      role: "Frontend Developer",
      image: "/jose-avatar.jpg",
      bio: "Experta en UI/UX y desarrollo frontend con React, Next.js y TailwindCSS.",
      social: {
        github: "https://github.com/joset98",
        linkedin: "https://www.linkedin.com/in/jose-miguel-tovar/",
      },
    },
    {
      name: "Yoel Ferreyra",
      role: "Backend Developer",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQHiV6tKBXHe2g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1655254800968?e=1752710400&v=beta&t=e57SKa3xmb30jI2JA4AQJd_ScD7FURluz-LfbdygiJs",
      bio: "Especialista en arquitectura de sistemas y bases de datos con experiencia en Node.js y Python.",
      social: {
        github: "https://github.com/YoelFerreyra",
        linkedin: "https://www.linkedin.com/in/eric-yoel-ferreyra-ab5b981bb/",
      },
    },
    {
      name: "Alberto José Rey",
      role: "Full Stack Developer",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFZoY9l7wnlPw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704638200879?e=1752710400&v=beta&t=9MvzvNWmu5NMWvJFKSUFmbwSzrTiKcTcXwu_gRtC7bQ",
      bio: "Desarrollador de aplicaciones complejas con React.",
      social: {
        github: "https://github.com/ARenzDev",
        linkedin: "https://www.linkedin.com/in/renz17/",
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
