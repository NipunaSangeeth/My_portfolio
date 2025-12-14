import { Code, Rocket, Brain, Users } from 'lucide-react';

const quickViewItems = [
  {
    icon: Code,
    title: 'Tech Stack',
    items: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Docker', 'AWS', 'Git', 'Figma'],
  },
  {
    icon: Rocket,
    title: 'Active Projects',
    items: ['Secure E-Voting System', 'Smart Solar Monitor'],
  },
  {
    icon: Brain,
    title: 'Future Learning',
    items: ['Cloud Computing', 'Native iOS Development'],
  },
  {
    icon: Users,
    title: 'Soft Skills',
    items: ['Teamwork', 'Discipline', 'Resilience', 'Leadership'],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Get To Know Me
          </p>
          <h2 className="section-title gradient-text">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a final-year BSc (Hons) Software Engineering student at Sri Lanka 
                Technological Campus (SLTC), deeply passionate about building robust, 
                scalable applications. My expertise lies in full-stack development using 
                the MERN stack, complemented by hands-on experience in mobile app 
                development with React Native and Flutter.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Currently, I'm working on two major projects: a <span className="text-primary font-medium">Blockchain-based 
                Secure Voting System</span> where I'm responsible for the real-time dashboard, 
                and a <span className="text-secondary font-medium">Real-Time Solar Energy Monitor</span> for 
                homeowners using the MERN stack.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Looking ahead, I'm excited to dive deeper into cloud computing and native 
                iOS development, continuously expanding my skill set to stay at the 
                forefront of technology.
              </p>
            </div>
            {/* Stats Cards (balanced with sidebar) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-6 text-center flex flex-col items-center justify-center gap-2">
                <Code size={28} className="text-primary mb-1" />
                <p className="text-3xl font-bold gradient-text">6+</p>
                <p className="text-muted-foreground">Projects</p>
              </div>
              <div className="glass-card rounded-xl p-6 text-center flex flex-col items-center justify-center gap-2">
                <Rocket size={28} className="text-primary mb-1" />
                <p className="text-3xl font-bold gradient-text">3+</p>
                <p className="text-muted-foreground">Years</p>
              </div>
              <div className="glass-card rounded-xl p-6 text-center flex flex-col items-center justify-center gap-2">
                <Users size={28} className="text-primary mb-1" />
                <p className="text-3xl font-bold gradient-text">10+</p>
                <p className="text-muted-foreground">Technologies</p>
              </div>
            </div>
       
          </div>

          {/* Quick View Sidebar */}
          <div className="space-y-6">
            {quickViewItems.map((item, index) => (
              <div 
                key={item.title}
                className="glass-card rounded-xl p-6 hover:glow-effect transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <item.icon size={20} className="text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.items.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
