const ComingSoon = () => {

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Geometric decorative elements - Left side */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-3xl rotate-45 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 left-20 w-48 h-48 border-4 border-accent/20 rounded-2xl rotate-12 animate-float" style={{ animationDelay: "4s" }} />
      
      {/* Geometric decorative elements - Right side */}
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-primary opacity-10 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-32 w-56 h-56 border-4 border-accent/30 rounded-3xl -rotate-12 animate-float" style={{ animationDelay: "5s" }} />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/5 rounded-2xl rotate-45 animate-float" style={{ animationDelay: "6s" }} />
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary shadow-glow mb-6">
            <span className="text-3xl font-bold text-white">G</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-2 tracking-tight">
            Grayold
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide">
            Labs
          </p>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-in-delay font-light">
          Where innovation meets excellence
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border shadow-soft mb-12 animate-fade-in-delay">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-foreground">Coming Soon</span>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 animate-fade-in-delay-2">
          We're crafting something extraordinary. Our cutting-edge solutions 
          will transform the way you work and innovate.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-4 justify-center max-w-2xl mx-auto animate-fade-in-delay-2">
          <div className="px-6 py-3 rounded-full bg-card border border-border shadow-soft">
            <span className="text-sm font-medium text-foreground">Innovation First</span>
          </div>
          <div className="px-6 py-3 rounded-full bg-card border border-border shadow-soft">
            <span className="text-sm font-medium text-foreground">Future Ready</span>
          </div>
          <div className="px-6 py-3 rounded-full bg-card border border-border shadow-soft">
            <span className="text-sm font-medium text-foreground">Excellence Driven</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border animate-fade-in-delay-2">
          <p className="text-sm text-muted-foreground">
            © 2025 Grayold Labs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
