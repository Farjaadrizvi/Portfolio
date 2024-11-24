import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Globe, Layout } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React.js", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 80 }
    ]
  },
  {
    category: "Backend Development",
    icon: Code2,
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 65 },
      { name: "REST APIs", level: 75 }
    ]
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 65 }
    ]
  },
  {
    category: "Digital Marketing",
    icon: Globe,
    skills: [
      { name: "SEO", level: 80 },
      { name: "Content Strategy", level: 75 },
      { name: "Analytics", level: 70 }
    ]
  }
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.category} className="skill-card">
                <div className="flex items-center mb-6">
                  <Icon className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full skill-progress"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}