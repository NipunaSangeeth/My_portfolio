import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold font-display gradient-text">
              SB
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              © 2024 Nipuna Sangeeth Basnayake. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/nipuna-basnayake"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors group"
            >
              <Github size={18} className="text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/nipuna-basnayake"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors group"
            >
              <Linkedin size={18} className="text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="mailto:nipuna.basnayake@example.com"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors group"
            >
              <Mail size={18} className="text-muted-foreground group-hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-8 text-sm text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-destructive fill-destructive" /> using React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
