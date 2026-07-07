import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28" data-testid="hero-section">
      <div className="absolute top-20 right-0 h-[500px] w-[500px] gradient-blob rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-5">
            Digital Marketing Consultant
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.05] text-foreground">
            Helping Businesses Grow with <span className="text-primary">SEO</span>, <span className="text-accent">AI Search</span> & High-Converting Websites
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            I help businesses across the USA and Canada increase organic traffic, improve Google rankings, optimize for AI Search (AEO/GEO), run profitable Google Ads campaigns, and build websites that convert.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollTo("#contact")}
              data-testid="hero-book-call-btn"
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 px-7 h-12 text-base group"
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollTo("#case-studies")}
              data-testid="hero-view-work-btn"
              size="lg"
              variant="outline"
              className="rounded-full px-7 h-12 text-base border-2"
            >
              View My Work
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Trusted by clients across the <span className="font-semibold text-foreground">USA & Canada</span></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl shadow-blue-900/10">
            <img
              src="https://images.unsplash.com/photo-1729157661483-ed21901ed892?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MHx8fHwxNzgzNDQ1Mzk1fDA&ixlib=rb-4.1.0&q=85"
              alt="Mayank Bhardwaj, Digital Marketing Consultant"
              className="w-full h-[420px] md:h-[540px] object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl p-4 shadow-xl"
            data-testid="hero-stat-card"
          >
            <p className="font-heading text-2xl font-bold text-primary">4+ yrs</p>
            <p className="text-xs text-muted-foreground">Freelance experience</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
