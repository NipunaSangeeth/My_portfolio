// import { Globe, Smartphone, Palette, BarChart3 } from 'lucide-react';

// const services = [
//   {
//     icon: Globe,
//     title: 'Full-Stack Web Development',
//     description: 'Building complete web applications using the MERN stack with focus on scalability, security, and performance.',
//     features: ['React.js Frontend', 'Node.js Backend', 'MongoDB Database', 'REST APIs'],
//   },
//   {
//     icon: Smartphone,
//     title: 'Mobile App Development',
//     description: 'Creating cross-platform mobile applications using React Native for seamless iOS and Android experiences.',
//     features: ['React Native', 'Cross-Platform', 'Native Performance', 'App Store Ready'],
//   },
//   {
//     icon: Palette,
//     title: 'UI/UX Prototyping',
//     description: 'Designing intuitive and visually appealing user interfaces using modern design tools and principles.',
//     features: ['Figma Design', 'User Research', 'Wireframing', 'Interactive Prototypes'],
//   },
//   {
//     icon: BarChart3,
//     title: 'Dashboard Development',
//     description: 'Building real-time data visualization dashboards with interactive charts and live data updates.',
//     features: ['Real-time Data', 'Interactive Charts', 'WebSocket Integration', 'Analytics'],
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="py-24 relative">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
//             What I Offer
//           </p>
//           <h2 className="section-title gradient-text">Services</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
//             Leveraging my skills and expertise to deliver high-quality solutions 
//             for academic projects, personal ventures, and collaborative work.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {services.map((service, index) => (
//             <div 
//               key={service.title}
//               className="glass-card rounded-2xl p-8 group hover:glow-effect transition-all duration-500 relative overflow-hidden"
//             >
//               {/* Background gradient on hover */}
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
//               <div className="relative z-10">
//                 {/* Icon */}
//                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <service.icon size={32} className="text-foreground" />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-2xl font-bold text-foreground font-display mb-4">
//                   {service.title}
//                 </h3>
//                 <p className="text-muted-foreground mb-6">
//                   {service.description}
//                 </p>

//                 {/* Features */}
//                 <div className="grid grid-cols-2 gap-3">
//                   {service.features.map((feature) => (
//                     <div 
//                       key={feature}
//                       className="flex items-center gap-2 text-sm"
//                     >
//                       <div className="w-1.5 h-1.5 rounded-full bg-primary" />
//                       <span className="text-muted-foreground">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
