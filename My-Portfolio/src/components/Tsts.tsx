import { Button } from '@/components/ui/button';
import { Mail, MapPin, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'nipunbasnayake104@gmail.com',
        href: 'mailto:nipunbasnayake104@gmail.com',
    },
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
// Form validation schema
const contactSchema = z.object({
    name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
    email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
    subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject must be less than 200 characters'),
    message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

const ContactSection = () => {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);

        // validtae form

        const result = contactSchema.safeParse(formData);
        if (!result.success) {
            const firstError = result.error.errors[0];
            toast({
                title: 'Validation Error',
                description: firstError.message,
                variant: 'destructive',
            })
            return
        }
        setIsSubmitting(true);

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: result.data.name,
                    from_email: result.data.email,
                    subject: result.data.subject,
                    message: result.data.message,
                },
                EMAILJS_PUBLIC_KEY
            );

            toast({
                title: 'Message Sent!',
                description: "Thank you for reaching out. I'll get back to you soon!",
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to send message. Please try again later.',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
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
                    <div className="glass-card rounded-2xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-sm text-muted-foreground block mb-2">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        disabled={isSubmitting}
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
                                        disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
                                />
                            </div>

                            <Button variant="gradient" size="xl" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="mr-2 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} className="mr-2" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
