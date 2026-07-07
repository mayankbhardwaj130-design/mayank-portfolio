import { motion } from "framer-motion";
import { MapPin, Globe2, LineChart, CheckCircle2 } from "lucide-react";

const POINTS = [
  { icon: LineChart, text: "4+ years of freelance experience" },
  { icon: MapPin, text: "Based in Delhi, India" },
  { icon: Globe2, text: "Serving clients in the USA & Canada" },
  { icon: CheckCircle2, text: "Focused on measurable business growth" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/40" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden border border-border shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Modern workspace"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight leading-snug mb-6">
            A consultant obsessed with growth you can measure
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            I&apos;m Mayank Bhardwaj, a digital marketing consultant helping ambitious businesses turn search into a predictable growth channel. Every strategy I build ties directly to revenue, not vanity metrics.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {POINTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4" data-testid={`about-point-${i}`}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">{p.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
