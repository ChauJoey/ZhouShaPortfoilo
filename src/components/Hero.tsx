import { ArrowDown, Github, Linkedin } from "lucide-react";
import SphereAnimation from "./SphereAnimation";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-80">
        <SphereAnimation />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <div className="space-y-6">
            <p className="uppercase text-3xl text-primary">
              Hello, I'm
            </p>
              <h1 className="text-3xl md:text-7xl font-semibold text-white">
                Zhou Sha
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                AI Application Engineer & Backend Development
              </p>
            </div>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                I am developing hands-on experience in AI application
                development and Spring Boot backend engineering, focusing on
                learning by building real projects that solve practical
                problems.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 justify-center pt-2">
              <Button onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-6 text-white/70">
              <a
                href="https://github.com/ChauJoey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/zhousha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70 hover:text-white transition-colors"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
}
