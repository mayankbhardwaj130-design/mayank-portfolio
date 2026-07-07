import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Globe } from "lucide-react";
import { SEO_PROJECTS, WEB_PROJECTS } from "@/data/content";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-14">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight leading-snug">
            Selected work that moved the needle
          </h2>
        </div>

        {/* SEO Projects */}
        <div className="mb-20">
          <h3 className="font-heading text-xl font-semibold mb-8 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" /> SEO Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SEO_PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
                data-testid={`seo-project-${i}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{p.result}</span>
                </div>
                <div className="p-6">
                  <h4 className="font-heading text-lg font-semibold mb-2">{p.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Website Development & Redesign */}
        <div>
          <h3 className="font-heading text-xl font-semibold mb-8 flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" /> Website Development & Redesign
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {WEB_PROJECTS.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group block bg-card border border-border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 hover:border-primary/40"
                data-testid={`web-project-${i}`}
              >
                <div className="relative h-52 overflow-hidden bg-secondary">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-primary font-semibold">{p.type}</span>
                  <h4 className="font-heading text-lg font-semibold mt-1 mb-2 flex items-start gap-1">
                    {p.name}
                    <ArrowUpRight className="h-4 w-4 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">Visit site <ArrowUpRight className="h-3.5 w-3.5" /></span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
