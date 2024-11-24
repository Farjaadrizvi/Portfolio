import { Award, BookOpen, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in modern web technologies and cloud architecture. 
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
                    <p className="font-medium">Computer Science</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">University of Engineering & Technology, 2020</p>
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
                    <p className="font-medium">AWS Certified Developer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Amazon Web Services, 2023</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></span>
                  <div>
                    <p className="font-medium">MERN Stack Expert</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">MongoDB University, 2022</p>
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
                    <p className="font-medium">Senior Full Stack Developer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tech Solutions Inc., 2020-Present</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></span>
                  <div>
                    <p className="font-medium">Web Developer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Digital Innovations, 2018-2020</p>
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