const ComingSoon = () => {

  return (
    <div className="min-h-screen bg-gradient-desert flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Desert Stars/Night Sky */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full animate-shimmer"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      {/* Desert Dune Shapes - Left side */}
      <div className="absolute -bottom-32 -left-32 w-[800px] h-[500px] bg-accent/20 rounded-[50%] blur-[120px] animate-dune" />
      <div className="absolute top-1/4 left-10 w-[600px] h-[400px] bg-gradient-gold opacity-15 rounded-[60%] animate-drift" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 left-32 w-80 h-80 border-2 border-accent/40 rounded-3xl rotate-12 animate-float backdrop-blur-sm" style={{ animationDelay: "4s" }} />

      {/* Desert Dune Shapes - Right side */}
      <div className="absolute -bottom-20 -right-40 w-[900px] h-[600px] bg-accent/25 rounded-[55%] blur-[140px] animate-dune" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/3 -right-20 w-[700px] h-[450px] bg-gradient-gold opacity-20 rounded-[65%] animate-drift" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-20 w-96 h-96 border-2 border-accent/50 rounded-[3rem] -rotate-12 animate-float" style={{ animationDelay: "5s" }} />

      {/* Crescent Moon */}
      <div className="absolute top-20 right-20 w-24 h-24 opacity-30">
        <div className="absolute inset-0 bg-accent rounded-full blur-md"></div>
        <div className="absolute inset-2 bg-background rounded-full translate-x-3"></div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto text-center relative z-10 p-8 md:p-12 lg:p-16">
          {/* Logo/Brand with Islamic Pattern */}
          <div className="mb-12 animate-fade-in relative">
            {/* Geometric Islamic Pattern Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <pattern id="islamic-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M25 0 L50 25 L25 50 L0 25 Z" fill="currentColor" className="text-accent"/>
                  <circle cx="25" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent"/>
                </pattern>
                <rect width="100" height="100" fill="url(#islamic-pattern)"/>
              </svg>
            </div>

            <div className="inline-flex items-center justify-center w-32 h-32 rounded-[1.5rem] bg-gradient-gold shadow-glow mb-10 animate-pulse-slow relative border-2 border-accent/30">
              <span className="text-5xl font-bold text-background">G</span>
              {/* Corner decorations - Arabian style */}
              <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-accent"></div>
              <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-accent"></div>
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-accent"></div>
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-accent"></div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-3 tracking-tight">
              <span className="text-accent drop-shadow-[0_0_40px_rgba(234,179,8,0.8)] [text-shadow:_0_2px_20px_rgb(234_179_8_/_50%)]" style={{ fontWeight: 900 }}>GRAY</span>
              <span className="text-foreground drop-shadow-[0_0_25px_rgba(234,179,8,0.4)] [text-shadow:_0_2px_15px_rgb(234_179_8_/_30%)]">OLD</span>
              <span className="text-accent/80 font-light ml-4 text-4xl md:text-5xl lg:text-6xl">LABS</span>
            </h1>
          </div>

          {/* Decorative divider - Desert Rose Compass */}
          <div className="flex items-center justify-center gap-3 mb-10 animate-fade-in-delay">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="relative w-4 h-4">
              {/* 8-pointed star (Islamic star) */}
              <div className="absolute inset-0 rotate-0 bg-accent rounded-sm"></div>
              <div className="absolute inset-0 rotate-45 bg-accent rounded-sm"></div>
              <div className="absolute inset-1 bg-background rounded-full"></div>
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 animate-fade-in-delay font-light leading-relaxed">
            Where innovation meets excellence
          </p>

          {/* Coming Soon Badge - Enhanced with Arabian styling */}
          <div className="relative inline-flex items-center gap-3 px-12 py-6 rounded-full bg-gradient-to-r from-background/60 via-card/60 to-background/60 border-2 border-accent shadow-glow mb-16 animate-fade-in-delay backdrop-blur-md">
            {/* Corner ornaments */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent rounded-tl-lg"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-accent rounded-tr-lg"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent rounded-bl-lg"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent rounded-br-lg"></div>

            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-[0_0_20px_rgba(234,179,8,0.8)]" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent animate-ping" />
            </div>
            <span className="text-lg font-bold text-accent tracking-wide drop-shadow-[0_2px_10px_rgba(234,179,8,0.5)]">Coming Soon</span>
          </div>

          {/* Description - Enhanced */}
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto mb-20 animate-fade-in-delay-2 leading-relaxed">
            Blending ancient wisdom with modern innovation. Our cutting-edge solutions
            will transform the way you work and create.
          </p>

          {/* Feature Pills - Enhanced with Arabian styling */}
          <div className="flex flex-wrap gap-6 justify-center max-w-3xl mx-auto mb-16 animate-fade-in-delay-2">
            <div className="group relative px-12 py-6 rounded-full bg-gradient-to-r from-accent/10 via-accent/15 to-accent/10 border-2 border-accent/50 shadow-soft hover:shadow-glow hover:border-accent transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-sm">
              {/* Small corner decorations */}
              <div className="absolute top-0 left-2 w-2 h-2 border-t border-l border-accent/70 rounded-tl"></div>
              <div className="absolute top-0 right-2 w-2 h-2 border-t border-r border-accent/70 rounded-tr"></div>
              <span className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Heritage & Innovation</span>
            </div>
            <div className="group relative px-12 py-6 rounded-full bg-gradient-to-r from-accent/10 via-accent/15 to-accent/10 border-2 border-accent/50 shadow-soft hover:shadow-glow hover:border-accent transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-sm">
              <div className="absolute top-0 left-2 w-2 h-2 border-t border-l border-accent/70 rounded-tl"></div>
              <div className="absolute top-0 right-2 w-2 h-2 border-t border-r border-accent/70 rounded-tr"></div>
              <span className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Desert to Digital</span>
            </div>
            <div className="group relative px-12 py-6 rounded-full bg-gradient-to-r from-accent/10 via-accent/15 to-accent/10 border-2 border-accent/50 shadow-soft hover:shadow-glow hover:border-accent transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-sm">
              <div className="absolute top-0 left-2 w-2 h-2 border-t border-l border-accent/70 rounded-tl"></div>
              <div className="absolute top-0 right-2 w-2 h-2 border-t border-r border-accent/70 rounded-tr"></div>
              <span className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Timeless Excellence</span>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-10 border-t border-border/30 animate-fade-in-delay-2">
            <p className="text-base text-muted-foreground/70">
              © 2025 Grayold Labs. All rights reserved.
            </p>
          </div>
      </div>
    </div>
  );
};

export default ComingSoon;
