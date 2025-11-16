import { Code, Palette, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating intuitive and beautiful user interfaces',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast and optimized web applications',
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer with a love for creating elegant solutions
              to complex problems. With expertise in modern web technologies, I help
              bring ideas to life through code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index}>
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
        </div>
      </div>
    </section>
  );
}