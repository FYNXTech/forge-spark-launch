import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, CheckCircle2, Clock, Shield, Zap } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary">
                Professional LaTeX Conversion Service
              </span>
            </motion.div>

            <motion.h1
              className="text-[clamp(28px,5vw,72px)] font-heading font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Transform Your Handwritten Notes into{" "}
              <span className="text-gradient">Perfect LaTeX</span> in 24 Hours
            </motion.h1>

            <motion.p
              className="text-[clamp(14px,2.5vw,20px)] text-muted-foreground mb-4 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Professional document conversion service for students, researchers, and academics. From scribbles to publication-ready documents.
            </motion.p>

            <motion.p
              className="text-[clamp(13px,2.2vw,18px)] text-primary font-semibold mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Now with SciKit-Learn plots on EVERY order — loss curves, trees, PCA, confusion matrices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 min-h-[48px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("services")}
              >
                ORDER NOW – $30 Flat Rate
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 min-h-[48px] border-2 hover:bg-primary/5"
                onClick={() => scrollToSection("how-it-works")}
              >
                How It Works
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-2 text-sm text-muted-foreground justify-center lg:justify-start mb-12"
            >
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>
                <span className="font-semibold text-foreground">500+</span> researchers served
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Stats & Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="col-span-2 bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-gradient">24 Hours</div>
                  <div className="text-sm text-muted-foreground">Guaranteed Turnaround</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>
              <div className="text-2xl font-heading font-bold mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-heading font-bold mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Confidential</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="col-span-2 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">PAGES PROCESSED</div>
                  <div className="text-4xl font-heading font-bold text-gradient">50,000+</div>
                </div>
                <div className="w-16 h-16 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Trusted by students and researchers worldwide
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("why-texforge")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary cursor-pointer hover:text-accent transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
};
