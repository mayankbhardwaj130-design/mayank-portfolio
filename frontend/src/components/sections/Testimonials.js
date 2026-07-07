import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const perView = 3;
  const maxStart = TESTIMONIALS.length - perView;

  const prev = () => setIndex((i) => (i <= 0 ? maxStart : i - 1));
  const next = () => setIndex((i) => (i >= maxStart ? 0 : i + 1));

  const visible = TESTIMONIALS.slice(index, index + perView);

  return (
    <section id="testimonials" className="py-24 md:py-32" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight leading-snug">
              What clients say about working together
            </h2>
          </div>
          <div className="flex gap-3">
            <button onClick={prev} data-testid="testimonial-prev" aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} data-testid="testimonial-next" aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((t) => (
              <motion.blockquote
                key={t.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border rounded-2xl p-7 shadow-sm flex flex-col"
                data-testid="testimonial-card"
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-sm text-foreground/90 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 pt-5 border-t border-border">
                  <p className="font-heading font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
