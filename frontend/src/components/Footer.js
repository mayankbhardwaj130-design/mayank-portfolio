import { Link } from "react-router-dom";
import { TrendingUp, MessageCircle, CalendarDays } from "lucide-react";
import { CALENDLY_URL, WHATSAPP_URL } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <TrendingUp className="h-5 w-5" />
              </span>
              <span className="font-heading text-lg font-bold">Mayank Bhardwaj</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Digital Marketing Consultant helping businesses across the USA & Canada grow with SEO, AI Search & high-converting websites.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>SEO & Technical SEO</li>
              <li>AI Search Optimization (AEO/GEO)</li>
              <li>Google Ads Management</li>
              <li>Website Development & Redesign</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Get in touch</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors" data-testid="footer-whatsapp">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" data-testid="footer-calendly">
                <CalendarDays className="h-4 w-4" /> Book a Strategy Call
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">Copyright &copy; 2026 Mayank Bhardwaj. All rights reserved.</p>
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="footer-blog-link">Read the Blog</Link>
        </div>
      </div>
    </footer>
  );
}
