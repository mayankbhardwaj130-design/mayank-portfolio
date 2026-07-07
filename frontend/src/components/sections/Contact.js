import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, MessageCircle, Linkedin, CalendarDays, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent! I'll get back to you within 24 hours.");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/40" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">Contact</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight leading-snug mb-5">
            Let&apos;s build your growth engine
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
            Have a project in mind or just want to talk strategy? Reach out and I&apos;ll respond within 24 hours.
          </p>

          <div className="space-y-4">
            <a href="mailto:hello@mayankbhardwaj.com" data-testid="contact-email-link" className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Mail className="h-5 w-5" /></span>
              <div><p className="text-sm font-medium">Email</p><p className="text-sm text-muted-foreground">hello@mayankbhardwaj.com</p></div>
            </a>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp-btn" className="flex items-center gap-2 bg-card border border-border rounded-xl p-4 hover:border-accent/50 transition-colors">
                <MessageCircle className="h-5 w-5 text-accent" /><span className="text-sm font-medium">WhatsApp</span>
              </a>
              <a href="https://linkedin.com/in/mayankbhardwaj" target="_blank" rel="noopener noreferrer" data-testid="contact-linkedin-btn" className="flex items-center gap-2 bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" /><span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>

            {/* Calendly integration placeholder */}
            <a href="https://calendly.com/mayankbhardwaj/strategy-call" target="_blank" rel="noopener noreferrer" data-testid="calendly-placeholder" className="flex items-center gap-3 rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 p-4 hover:bg-primary/10 transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground"><CalendarDays className="h-5 w-5" /></span>
              <div><p className="text-sm font-medium">Book a Free Strategy Call</p><p className="text-xs text-muted-foreground">Schedule via Calendly</p></div>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-8 shadow-sm space-y-5"
          data-testid="contact-form"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" data-testid="contact-name-input" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" data-testid="contact-email-input" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Company name (optional)" data-testid="contact-company-input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your goals..." rows={5} data-testid="contact-message-input" />
          </div>
          <Button type="submit" disabled={loading} data-testid="contact-submit-btn" className="w-full rounded-full bg-primary hover:bg-primary/90 h-12 text-base">
            {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
