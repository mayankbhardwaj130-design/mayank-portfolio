import { motion } from "framer-motion";
import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/40" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-14">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">What I Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight leading-snug">
            Full-stack digital marketing built around measurable growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08, ease: "easeOut" }}
                className="group bg-card border border-border rounded-2xl p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 hover:border-primary/40"
                data-testid={`service-card-${i}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
