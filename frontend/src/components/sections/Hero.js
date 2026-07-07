import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingUp, Search, MousePointerClick, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/data/content";

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
const openCalendly = () => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");

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
              onClick={openCalendly}
              data-testid="hero-book-call-btn"
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 px-7 h-12 text-base group"
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollTo("#portfolio")}
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
          data-testid="hero-visual"
        >
          <div className="relative rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl shadow-blue-900/10 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-muted-foreground">Organic Traffic</p>
                <p className="font-heading text-2xl font-bold">48,920</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 text-accent text-xs font-semibold px-3 py-1">
                <TrendingUp className="h-3.5 w-3.5" /> +212%
              </span>
            </div>

            <div className="flex items-end justify-between gap-2 h-40 md:h-48">
              {[35, 48, 42, 60, 55, 72, 68, 88, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.07, ease: "easeOut" }}
                  className="flex-1 rounded-t-md"
                  style={{ background: "linear-gradient(to top, #2563EB, #14B8A6)" }}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-[10px] text-muted-foreground">
              <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl border border-border bg-secondary/40 p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1"><Search className="h-4 w-4" /><span className="text-xs">Keywords Ranked</span></div>
                <p className="font-heading text-xl font-bold">1,240</p>
              </div>
              <div className="rounded-xl border border-border bg-secondary/40 p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-1"><MousePointerClick className="h-4 w-4" /><span className="text-xs">Conversion Rate</span></div>
                <p className="font-heading text-xl font-bold text-accent">6.8%</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl p-4 shadow-xl"
            data-testid="hero-stat-card"
          >
            <p className="font-heading text-2xl font-bold text-primary">4+ yrs</p>
            <p className="text-xs text-muted-foreground">Freelance experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="absolute -top-5 -right-3 hidden sm:flex items-center gap-2 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent"><BarChart3 className="h-4 w-4" /></span>
            <div><p className="text-xs font-semibold leading-none">Page 1</p><p className="text-[10px] text-muted-foreground mt-1">Google Rankings</p></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
