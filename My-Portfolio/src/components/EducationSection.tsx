import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Academic Background
          </p>
          <h2 className="section-title gradient-text">Education</h2>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:glow-effect transition-all duration-500">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-secondary to-accent" />
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center shrink-0">
                <GraduationCap size={32} className="text-foreground" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground font-display">
                    BSc (Hons) in Software Engineering
                  </h3>
                  <p className="text-primary text-lg font-medium mt-1">
                    Sri Lanka Technological Campus (SLTC)
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-secondary" />
                    <span>2022 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-secondary" />
                    <span>Padukka, Sri Lanka</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-foreground font-medium">Final Year Student</span>
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Pursuing a comprehensive software engineering degree with focus on 
                  full-stack development, mobile applications, and real-time systems. 
                  Currently working on a blockchain-based secure voting system as the 
                  final year project.
                </p>

                {/* Key Courses
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Key Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Data Structures & Algorithms',
                      'Web Development',
                      'Mobile App Development',
                      'Database Systems',
                      'Software Architecture',
                      'Blockchain Technology',
                    ].map((course) => (
                      <span 
                        key={course}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm hover:text-foreground hover:bg-muted/80 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
