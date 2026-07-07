import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/data/content";

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary/40" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-14 mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">Pricing</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight leading-snug">
            Transparent plans built to scale with you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {PRICING.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className={`relative bg-card rounded-2xl p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                p.featured ? "border-2 border-primary shadow-lg shadow-primary/10" : "border border-border"
              }`}
              data-testid={`pricing-card-${i}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </span>
              )}
              <h3 className="font-heading text-lg font-semibold">{p.name}</h3>
              <div className="mt-4 mb-6 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-bold text-foreground">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-7">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => scrollTo("#contact")}
                data-testid={`pricing-cta-${i}`}
                className={`w-full rounded-full ${p.featured ? "bg-primary hover:bg-primary/90" : "bg-secondary text-foreground hover:bg-secondary/70 border border-border"}`}
              >
                {p.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
