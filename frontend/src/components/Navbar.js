import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV_LINKS, CALENDLY_URL } from "@/data/content";

const openCalendly = () => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 border-b border-border shadow-sm"
          : "bg-white/40 dark:bg-gray-950/40 border-b border-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <button onClick={() => handleNav("/")} data-testid="logo-btn" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <TrendingUp className="h-5 w-5" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight">Mayank<span className="text-primary">.</span></span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            onClick={openCalendly}
            data-testid="nav-book-call-btn"
            className="hidden sm:inline-flex rounded-full bg-primary hover:bg-primary/90 px-5"
          >
            Book a Call
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden flex h-9 w-9 items-center justify-center rounded-md border border-border" data-testid="mobile-menu-btn" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-1 mt-10">
                {NAV_LINKS.map((l) => (
                  <SheetClose asChild key={l.label}>
                    <button
                      onClick={() => handleNav(l.href)}
                      data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                      className="text-left px-4 py-3 text-base font-medium hover:text-primary transition-colors"
                    >
                      {l.label}
                    </button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button onClick={openCalendly} className="mt-4 rounded-full bg-primary" data-testid="mobile-book-call-btn">
                    Book a Free Strategy Call
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
