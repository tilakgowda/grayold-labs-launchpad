const ComingSoon = () => {

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Enhanced gradient orbs - Left side */}
      <div className="absolute top-20 -left-20 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[150px] animate-float" />
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-primary opacity-20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 left-32 w-80 h-80 border-2 border-accent/50 rounded-3xl rotate-12 animate-float" style={{ animationDelay: "4s" }} />

      {/* Enhanced gradient orbs - Right side */}
      <div className="absolute bottom-10 -right-32 w-[700px] h-[700px] bg-accent/25 rounded-full blur-[160px] animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-gradient-primary opacity-25 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-20 w-96 h-96 border-2 border-accent/60 rounded-[3rem] -rotate-12 animate-float" style={{ animationDelay: "5s" }} />
      <div className="absolute bottom-1/4 right-48 w-64 h-64 bg-accent/20 rounded-3xl rotate-45 animate-float" style={{ animationDelay: "6s" }} />

      {/* Main content */}
      <div className="max-w-5xl mx-auto text-center relative z-10 p-8 md:p-12 lg:p-16">
          {/* Logo/Brand */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-28 h-28 rounded-[1.5rem] bg-gradient-primary shadow-glow mb-10 animate-pulse-slow">
              <span className="text-5xl font-bold text-white">G</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-3 tracking-tight">
              <span className="bg-gradient-to-r from-accent via-[#ff6ec7] to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,211,0.5)]">GRAY</span>
              <span className="text-foreground drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">OLD</span>
              <span className="text-muted-foreground/80 font-light ml-4 text-4xl md:text-5xl lg:text-6xl">LABS</span>
            </h1>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-10 animate-fade-in-delay">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 animate-fade-in-delay font-light leading-relaxed">
            Where innovation meets excellence
          </p>

          {/* Coming Soon Badge - Enhanced */}
          <div className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-accent/20 border-2 border-accent shadow-glow mb-16 animate-fade-in-delay backdrop-blur-md">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-[0_0_15px_rgba(220,38,211,0.8)]" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent animate-ping" />
            </div>
            <span className="text-lg font-bold text-foreground tracking-wide">Coming Soon</span>
          </div>

          {/* Description - Enhanced */}
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto mb-20 animate-fade-in-delay-2 leading-relaxed">
            We're crafting something extraordinary. Our cutting-edge solutions
            will transform the way you work and innovate.
          </p>

          {/* Feature Pills - Enhanced */}
          <div className="flex flex-wrap gap-6 justify-center max-w-3xl mx-auto mb-16 animate-fade-in-delay-2">
            <div className="group px-10 py-5 rounded-full bg-accent/10 border-2 border-accent/50 shadow-soft hover:shadow-glow hover:bg-accent/20 hover:border-accent transition-all duration-300 hover:scale-110 cursor-pointer">
              <span className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Innovation First</span>
            </div>
            <div className="group px-10 py-5 rounded-full bg-accent/10 border-2 border-accent/50 shadow-soft hover:shadow-glow hover:bg-accent/20 hover:border-accent transition-all duration-300 hover:scale-110 cursor-pointer">
              <span className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Future Ready</span>
            </div>
            <div className="group px-10 py-5 rounded-full bg-accent/10 border-2 border-accent/50 shadow-soft hover:shadow-glow hover:bg-accent/20 hover:border-accent transition-all duration-300 hover:scale-110 cursor-pointer">
              <span className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">Excellence Driven</span>
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
