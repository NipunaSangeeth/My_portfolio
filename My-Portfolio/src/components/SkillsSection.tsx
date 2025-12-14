import { Monitor, Server, Database, Wrench, Star } from 'lucide-react';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava, FaPython, 
  FaGitAlt, FaGithub, FaDocker, FaAws, FaFigma, FaAndroid
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiMysql, SiFirebase, 
  SiPostman, SiFlutter
} from 'react-icons/si';
import { TbBrandReactNative, TbSql } from 'react-icons/tb';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Monitor,
    color: 'from-primary to-secondary',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-secondary to-accent',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-accent to-primary',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'SQL', icon: TbSql, color: '#CC2927' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    color: 'from-primary via-secondary to-accent',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
      { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Android Studio', icon: FaAndroid, color: '#3DDC84' },
    ],
  },
];

const expertiseHighlights = [
  'Full-stack MERN development',
  'Mobile cross-platform app development',
  'REST API development',
  'Debugging & resilient problem-solving',
  'Team collaboration and leadership',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            What I Work With
          </p>
          <h2 className="section-title gradient-text">Skills & Expertise</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card rounded-2xl p-8 hover:glow-effect transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} className="text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-display">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 hover:border-primary/50 hover:bg-muted transition-all duration-300 cursor-default group/skill"
                  >
                    <skill.icon 
                      size={22} 
                      style={{ color: skill.color }}
                      className="group-hover/skill:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Highlights */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <Star size={24} className="text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-display">Expertise Highlights</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseHighlights.map((highlight, index) => (
              <div 
                key={highlight}
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-150 transition-transform" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
