import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/data/content";

const openCalendly = () => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20" data-testid="cta-banner">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-14 md:px-16 md:py-20 text-center"
          style={{ backgroundColor: "#111827" }}
        >
          <div className="absolute -top-24 -right-24 h-80 w-80 gradient-blob rounded-full pointer-events-none" />
          <div className="relative">
            <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl mx-auto leading-tight">
              Ready to dominate your market?
            </h2>
            <p className="mt-5 text-base md:text-lg text-gray-300 max-w-xl mx-auto">
              Book a free strategy call and let&apos;s map out a clear plan to grow your traffic, rankings, and revenue.
            </p>
            <Button
              onClick={openCalendly}
              data-testid="cta-banner-btn"
              size="lg"
              className="mt-8 rounded-full bg-primary hover:bg-primary/90 px-8 h-12 text-base group"
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
