import { Award, BookOpen, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in modern web technologies. 
            With a strong foundation in both frontend and backend development, I specialize in creating 
            scalable, user-centric applications that deliver exceptional experiences.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></span>
                  <div>
                    <p className="font-medium">Bachelor's Degree in E-Commerce</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Virtual University</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></span>
                  <div>
                    <p className="font-medium">Mern Stack Certified Developer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">M Tech Solution , 2024</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></span>
                  <div>
                    <p className="font-medium">Front-end,Meta Coursera</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Meta , 2024</p>
                  </div>
                </li>

                  <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></span>
                  <div>
                    <p className="font-medium">Digital Marketing, Coursera</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Digital Marketing SEO , 2024</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></span>
                  <div>
                    <p className="font-medium"> Front End Development </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Rayyanco Busniess System</p>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}