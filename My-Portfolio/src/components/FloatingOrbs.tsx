const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Primary blue orb */}
      <div 
        className="floating-orb w-[600px] h-[600px] bg-primary/30 top-[-200px] left-[-200px]"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Secondary purple orb */}
      <div 
        className="floating-orb w-[500px] h-[500px] bg-secondary/25 top-[30%] right-[-150px] animate-float-delayed"
      />
      
      {/* Accent cyan orb */}
      <div 
        className="floating-orb w-[400px] h-[400px] bg-accent/20 bottom-[-100px] left-[20%]"
        style={{ animationDelay: '10s' }}
      />
      
      {/* Small accent orbs */}
      <div 
        className="floating-orb w-[200px] h-[200px] bg-gradient-purple/30 top-[60%] left-[10%]"
        style={{ animationDelay: '15s' }}
      />
      
      <div 
        className="floating-orb w-[250px] h-[250px] bg-primary/20 top-[20%] left-[50%]"
        style={{ animationDelay: '8s' }}
      />
    </div>
  );
};

export default FloatingOrbs;
