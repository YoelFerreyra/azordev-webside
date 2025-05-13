import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "Raffle Pro",
      description: "Plataforma de rifas en tiempo real con integración de pagos y panel de administración.",
      image: "https://d2ms8rpfqc4h24.cloudfront.net/hellow_radixweb2_aa1363656f.jpg",
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
      github: "https://github.com/tuusuario/raffle-pro",
      demo: "https://rafflepro.app",
    },
    {
      name: "TaskSync",
      description: "App de productividad para equipos remotos con tableros colaborativos y notificaciones.",
      image: "https://d2ms8rpfqc4h24.cloudfront.net/hellow_radixweb2_aa1363656f.jpg",
      technologies: ["React", "Firebase", "TailwindCSS"],
      github: "https://github.com/tuusuario/tasksync",
      demo: "https://tasksync.app",
    },
    {
      name: "AzorLanding",
      description: "Sitio institucional responsivo y optimizado para SEO.",
      image: "https://d2ms8rpfqc4h24.cloudfront.net/hellow_radixweb2_aa1363656f.jpg",
      technologies: ["Next.js", "Vercel", "TailwindCSS"],
      github: "https://github.com/tuusuario/azor-landing",
      demo: "https://azor.dev",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una muestra de los productos que hemos desarrollado con pasión y tecnología de punta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
