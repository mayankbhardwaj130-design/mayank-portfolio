import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/data/content";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32" data-testid="case-studies-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-14">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">Case Studies</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight leading-snug">
            Real results for real businesses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CASE_STUDIES.map((c, i) => (
            <motion.article
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
              data-testid={`case-study-${i}`}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <p className="font-heading text-4xl font-bold text-white">{c.metric}</p>
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold">{c.label}</p>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-heading text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
