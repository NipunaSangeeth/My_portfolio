


import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { socialLinks } from '@/data/social-links';
import Photo from '../../assets/images/Photo.png';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Opens CV in new tab or downloads if direct file link
    window.open(socialLinks.cvDownload, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wider uppercase text-sm">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                <span className="text-foreground">Sangeeth</span>
         
                <span className="gradient-text"> Basnayake</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-display mt-4">
                Full-Stack Developer & Resilient Problem Solver
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Final-year Software Engineering undergraduate passionate about building
              secure, scalable, real-time applications. Specializing in MERN stack,
              React Native, and cutting-edge dashboard systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" onClick={scrollToProjects}>
                <span>View Projects</span>
                <ArrowDown className="ml-2" />
              </Button>
              <Button variant="heroOutline" size="xl" onClick={handleDownloadCV}>
                <Download className="mr-2" />
                <span>Download CV</span>
              </Button>
              <Button variant="glass" size="xl" onClick={scrollToContact}>
                <Mail className="mr-2" />
                <span>Contact Me</span>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-muted-foreground text-sm">Find me on:</span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all group"
                aria-label="GitHub Profile"
              >
                <Github size={20} className="text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all group"
                aria-label="Send Email"
              >
                <Mail size={20} className="text-muted-foreground group-hover:text-primary" />
              </a>
            </div>

          </div>

          {/* Right - Profile Image */}
          <div className="relative flex justify-center lg:justify-end" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-30 scale-110" />

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden glass-card p-2 glow-effect">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  {/* Profile image */}
                  <img
                    src={Photo}
                    alt="Nipuna Sangeeth"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full animate-float">
                <span className="text-sm font-medium">💻 MERN Stack</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full animate-float-delayed">
                <span className="text-sm font-medium">📱 React Native</span>
              </div>
              <div className="absolute top-1/2 -right-8 glass-card px-4 py-2 rounded-full animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-sm font-medium">🏉 Team Player</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
