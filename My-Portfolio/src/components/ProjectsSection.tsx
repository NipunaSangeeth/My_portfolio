import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

const ProjectsSection = () => {
  const handleProjectClick = (github?: string, demo?: string) => {
    if (demo) {
      window.open(demo, '_blank', 'noopener,noreferrer');
    } else if (github) {
      window.open(github, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            My Recent Work
          </p>
          <h2 className="section-title gradient-text">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A showcase of my recent projects demonstrating expertise in full-stack development, 
            mobile applications, and real-time systems.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project) => (
            <div 
              key={project.title}
              className="project-card group"
            >
              {/* Project Image */}
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-accent/20 text-accent border border-accent/30' 
                      : 'bg-secondary/20 text-secondary border border-secondary/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground font-display group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="gradient" 
                    size="sm"
                    onClick={() => handleProjectClick(project.github, project.demo)}
                    disabled={!project.demo && !project.github}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="glass" 
                    size="sm"
                    onClick={() => project.github && window.open(project.github, '_blank', 'noopener,noreferrer')}
                    disabled={!project.github}
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <div 
              key={project.title}
              className="glass-card rounded-xl overflow-hidden group hover:scale-105 hover:glow-effect transition-all duration-300 cursor-pointer"
              onClick={() => handleProjectClick(project.github, project.demo)}
            >
              {/* Mini Image */}
              <div className="h-32 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-display">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  <span>View Project</span>
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
