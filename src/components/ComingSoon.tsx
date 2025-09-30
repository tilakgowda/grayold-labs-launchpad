import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ComingSoon = () => {
  const [email, setEmail] = useState("");

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! We'll notify you when we launch!");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary shadow-glow mb-6">
            <span className="text-3xl font-bold text-white">GL</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight">
            Grayold Labs
          </h1>
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
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
          We're crafting something extraordinary. Be the first to know when we launch our cutting-edge solutions 
          that will transform the way you work.
        </p>

        {/* Email Subscription */}
        <form onSubmit={handleNotify} className="max-w-md mx-auto animate-fade-in-delay-2">
          <div className="flex gap-3 flex-col sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-6 text-base bg-card border-border focus:border-accent focus:ring-accent"
            />
            <Button 
              type="submit" 
              className="h-12 px-8 bg-gradient-primary text-white font-medium hover:shadow-glow transition-all duration-300"
            >
              Notify Me
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Join the waitlist and get exclusive early access
          </p>
        </form>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border animate-fade-in-delay-2">
          <p className="text-sm text-muted-foreground">
            © 2025 Grayold Labs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
