import { Badge } from './ui/badge';

export function Skills() {
const skillCategories = [
  {
    category: "Core Skills",
    skills: [
      "Python",
      "Object-Oriented Programming (OOP)",
      "Basic C++ Foundation",
      "RESTful API Concepts",
    ],
  },
  {
    category: "Learning & Building (AI & Backend)",
    skills: [
      "Large Language Models (LLM) Integration",
      "AI Application Development",
      "Spring Boot Backend",
      "React + TypeScript (Frontend Development)",
      "Database Fundamentals (SQL & NoSQL)",
    ],
  },
  {
    category: "Tools & Development Workflow",
    skills: [
      "Git & GitHub",
      "Swagger / OpenAPI",
      "Vercel Deployment",
      "Figma (UI Wireframing)",
      "VS Code & IntelliJ",
    ],
  },
];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground">
              Technologies and tools I work with regularly
            </p>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="px-4 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}