import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nipunbasnayake104@gmail.com',
    href: 'mailto:nipunbasnayake104@gmail.com',
  },
  // {
  //   icon: Phone,
  //   label: 'Phone',
  //   value: '+94 77 123 4567',
  //   href: 'tel:+94771234567',
  // },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sri Lanka',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nipuna-basnayake-606160261',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/NipunaSangeeth',
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Get In Touch
          </p>
          <h2 className="section-title gradient-text">Let's Work Together!</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            I'm currently looking for internship opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="glass-card rounded-xl p-6 flex items-center gap-4 group hover:glow-effect transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon size={24} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 font-display">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 group"
                  >
                    <social.icon size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8 hover:glow-effect">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground "
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">Message</label>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button variant="gradient" size="xl" className="w-full">
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
