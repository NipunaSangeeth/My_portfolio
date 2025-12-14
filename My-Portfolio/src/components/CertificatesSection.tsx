// import { ExternalLink, Award, ChevronLeft, ChevronRight } from 'lucide-react';
// import { certificates } from '@/data/certificates';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from '@/components/ui/carousel';

// const CertificatesSection = () => {
//   const handleCertificateClick = (link: string) => {
//     if (link) {
//       window.open(link, '_blank', 'noopener,noreferrer');
//     }
//   };

//   return (
//     <section id="certificates" className="py-24 relative">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
//             My Achievements
//           </p>
//           <h2 className="section-title gradient-text">Certificates</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
//             Professional certifications that validate my expertise in various technologies and platforms.
//           </p>
//         </div>

//         {/* Certificates Carousel */}
//         <Carousel
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           className="w-full max-w-6xl mx-auto"
//         >
//           <CarouselContent className="-ml-4">
//             {certificates.map((cert) => (
//               <CarouselItem key={cert.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
//                 <div
//                   onClick={() => handleCertificateClick(cert.link)}
//                   className={`group glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:glow-effect ${
//                     cert.link ? 'cursor-pointer' : 'cursor-default'
//                   }`}
//                 >
//                   {/* Icon & Badge */}
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
//                       {cert.icon}
//                     </div>
//                     {cert.link && (
//                       <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
//                         <span className="text-sm">View</span>
//                         <ExternalLink size={14} />
//                       </div>
//                     )}
//                   </div>

//                   {/* Content */}
//                   <h3 className="text-lg font-semibold text-foreground mb-2 font-display group-hover:text-primary transition-colors">
//                     {cert.title}
//                   </h3>
                  
//                   <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
//                     <Award size={14} className="text-primary" />
//                     <span>{cert.issuer}</span>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
//                       {cert.date}
//                     </span>
//                   </div>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="hidden md:flex -left-12 bg-muted/50 border-border hover:bg-primary/20" />
//           <CarouselNext className="hidden md:flex -right-12 bg-muted/50 border-border hover:bg-primary/20" />
//         </Carousel>

//         {/* Mobile swipe hint */}
//         <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
//           ← Swipe to see more →
//         </p>
//       </div>
//     </section>
//   );
// };

// export default CertificatesSection;


import { ExternalLink, Award } from 'lucide-react';
import { certificates } from '@/data/certificates';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const CertificatesSection = () => {
  const handleCertificateClick = (link: string) => {
    // Only open if there is a valid link
    if (link && link !== "#" && link !== "") {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Optional: Background Glow for atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            My Achievements
          </p>
          <h2 className="section-title gradient-text">Certificates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Professional certifications that validate my expertise.
          </p>
        </div>

        {/* Certificates Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4 pb-4">
            {certificates.map((cert, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div
                  onClick={() => handleCertificateClick(cert.link)}
                  className={`group relative glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:glow-effect ${
                    cert.link ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  {/* --- 1. IMAGE AREA (Top) --- */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted/20 border-b border-white/5">
                    {/* The Certificate Image */}
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay - Only shows if there is a link */}
                    {cert.link && (
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-primary/20 backdrop-blur-md border border-primary/50 text-white px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-sm font-medium">View Credential</span>
                          <ExternalLink size={14} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* --- 2. TEXT CONTENT (Bottom) --- */}
                  <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/20">
                    <h3 className="text-lg font-semibold text-foreground font-display leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Award size={15} className="text-primary" />
                      <span className="truncate">{cert.issuer}</span>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border/30 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                        {cert.date}
                      </span>
                      
                      {cert.link ? (
                        <span className="text-xs text-primary flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                          Verify <ExternalLink size={10} />
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground opacity-50">Verified</span>
                      )}
                    </div>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="hidden md:flex -left-12 bg-muted/50 border-border hover:bg-primary/20 hover:text-primary" />
          <CarouselNext className="hidden md:flex -right-12 bg-muted/50 border-border hover:bg-primary/20 hover:text-primary" />
        </Carousel>

        {/* Mobile swipe hint */}
        <p className="text-center text-muted-foreground text-sm mt-8 md:hidden animate-pulse">
          ← Swipe to explore →
        </p>
      </div>
    </section>
  );
};

export default CertificatesSection;