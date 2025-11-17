import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <ImageWithFallback
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, index: number) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {/* <Button size="sm" variant="outline" className="gap-2">
            <Github className="h-4 w-4" />
            Code
          </Button>
          <Button size="sm" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Button> */}
        </div>
      </CardContent>
    </Card>
  );
}

export function Projects() {
const projects = [
  {
    title: "Reinforcement Learning — Flappy Bird Agent",
    description:
      "Developed and optimized a Deep Q-learning agent capable of autonomously surviving over 10 minutes by tuning hyperparameters, image preprocessing, and training stability control.",
    tags: ["Python", "Deep Q-Learning", "OpenAI Gym", "NumPy", "Computer Vision"],
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1080&auto=format",
  },
  {
    title: "GP Appointment Web Platform",
    description:
      "Built a web-based system for managing GP appointments including real-time data retrieval, SQL-driven backend logic, and improved user experience through optimized data flow.",
    tags: ["Python", "SQL", "Web App", "Backend", "Data Modeling"],
    imageUrl:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1080&auto=format",
  },
  {
    title: "Solar Panel Image Classifier",
    description:
      "Implemented and expanded a convolutional neural network based on LeNet for solar panel usability detection using data preprocessing, augmentation, and layer enhancement.",
    tags: ["Python", "CNN", "TensorFlow/PyTorch", "Image Classification", "Data Preprocessing"],
    imageUrl:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1080&auto=format",
  },
  {
    title: "Machine Learning Competition Framework",
    description:
      "Collaborated on feature extraction, hyperparameter tuning, and model refinement with an emphasis on maintainability, readability, and reproducible experiment tracking.",
    tags: ["Python", "ML Pipeline", "Model Tuning", "Feature Engineering", "Clean Code"],
    imageUrl:
      "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?q=80&w=1080&auto=format",
  },
  {
  title: "Interactive Personal Portfolio",
  description:
    "A responsive and animated portfolio website featuring custom components, sci-fi themed UI, and motion-focused user experience. Built to strengthen front-end engineering skills and modern development workflow.",
  tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Anime.js"],
  imageUrl:
    "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1080&auto=format",
  }
];

  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              Some of my recent work and side projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}