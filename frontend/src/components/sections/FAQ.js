import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/data/content";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32" data-testid="faq-section">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">FAQ</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight leading-snug">
            Frequently asked questions
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} data-testid={`faq-item-${i}`}>
                <AccordionTrigger className="text-left font-heading font-medium text-base hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
