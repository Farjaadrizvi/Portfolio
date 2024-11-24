import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="relative inline-block mb-8">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Syed Farjaad"
            className="w-40 h-40 mx-auto rounded-full object-cover ring-4 ring-blue-500/50 shadow-xl"
          />
          <div className="absolute -bottom-3 -right-3 bg-blue-600 p-3 rounded-full shadow-lg">
            <Terminal className="w-5 h-5 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
          Syed Farjaad Raza Rizvi
        </h1>

        <div className="flex flex-col items-center space-y-4 mb-8">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            Full Stack Developer & Web Architect
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Available for new opportunities</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          <a
            href="https://github.com/syedfarjaad"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group"
          >
            <Github
              className="w-6 h-6 group-hover:text-blue-500 transition-colors"
              src="https://github.com/Farjaadrizvi"
            />
          </a>
          <a
            href="https://linkedin.com/in/syedfarjaad"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group"
          >
            <Linkedin className="w-6 h-6 group-hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="mailto:syed.farjaad@example.com"
            className="social-link group"
          >
            <Mail className="w-6 h-6 group-hover:text-blue-500 transition-colors" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="inline-block bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
          >
            View Projects
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
