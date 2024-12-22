import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "Retail Managment",
    description:
      "A Modern Retail Managment System built with React and Tailwind CSS. Features dark mode, smooth animations, and a clean design.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://farjaad-retail-app.netlify.app/",
    githubUrl: "https://github.com/Farjaadrizvi/Retial_Management.git",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with features like user authentication, product management, cart functionality, and secure payments.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["MERN Stack", "Redux", "Stripe"],
    liveUrl: "https://farjaad-e-commarce.netlify.app/",
    githubUrl: "https://github.com/syedfarjaad/ecommerce",
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application powered by AI for smart responses. Includes features like message history, file sharing, and voice messages.",
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800",
    tags: ["Node.js", "Socket.io", "TensorFlow"],
    liveUrl: "https://github.com/Farjaadrizvi/E-Commarce-Web-App.git",
    githubUrl: "https://github.com/Farjaadrizvi/E-Commarce-Web-App.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all shadow-lg hover:shadow-xl"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <Globe className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
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
