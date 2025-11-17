import { Notebook, BrainCircuit, Wrench } from 'lucide-react';
import NeuralBackground from './NeuralBackground';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { FileBadge } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Notebook,
      title: "Continuous Learning",
      description: "Building skills through hands-on projects, experimentation, and self-directed study.",
    },
    {
      icon: BrainCircuit,
      title: "AI-Driven Development",
      description: "Exploring AI tools, model integration, and intelligent application features.",
    },
    {
      icon: Wrench,
      title: "Practical Engineering",
      description: "Focusing on real, useful solutions rather than theoretical examples.",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-muted/50">
      <div className="inset-0">
        <NeuralBackground />
        <div className="absolute inset-0 bg-muted/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aspiring AI application and backend developer with hands-on learning through real project building.
              I hold a Master's degree in IT (AI) from UNSW and a Bachelor's degree in CS (AI) from the University of Adelaide.
              I am currently developing skills in AI-enhanced applications, system integration, and backend development using Spring Boot.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pb-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border border-neon-cyan hover:border border-neon-cyan/10 backdrop-blur hover:text-primary">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
          <Button type="submit" className="w-full gap-2">
            <FileBadge className="h-4 w-4" />
            <a href="/Achieve.zip" download>
              Get My Achieve
            </a>
          </Button>
          </Card>

        </div>
      </div>
    </section>
  );
}
