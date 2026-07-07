import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      data-testid="theme-toggle"
      aria-label="Toggle theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary/60 text-foreground transition-colors hover:bg-secondary"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </motion.span>
    </button>
  );
}
