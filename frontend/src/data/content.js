import {
  Search, Sparkles, Target, Code2, PaintBucket, Settings2, MapPin, FileSearch,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  { icon: Search, title: "Search Engine Optimization", desc: "Data-driven SEO strategies that grow organic traffic and sustainable rankings." },
  { icon: Sparkles, title: "AI Search Optimization (AEO/GEO)", desc: "Get cited by ChatGPT, Google AI Overviews & Perplexity with AEO/GEO." },
  { icon: Target, title: "Google Ads Management", desc: "Profitable, ROAS-focused paid search campaigns that scale predictably." },
  { icon: Code2, title: "Website Development", desc: "Fast, modern, conversion-optimized websites built to perform." },
  { icon: PaintBucket, title: "Website Redesign", desc: "Refresh outdated sites into premium experiences that convert visitors." },
  { icon: Settings2, title: "Technical SEO", desc: "Core Web Vitals, crawlability & structured data done right." },
  { icon: MapPin, title: "Local SEO", desc: "Dominate local map packs and drive nearby, high-intent customers." },
  { icon: FileSearch, title: "SEO Audits", desc: "Deep, actionable audits that uncover exactly what's holding you back." },
];

export const CASE_STUDIES = [
  {
    metric: "+212%",
    label: "Organic Traffic Growth",
    title: "SaaS platform scales inbound pipeline",
    desc: "A North American SaaS company more than tripled organic sessions in 8 months through technical SEO and content clusters.",
    image: "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg",
  },
  {
    metric: "#1",
    label: "Google Rankings Improvement",
    title: "Local service business owns page one",
    desc: "Moved 40+ high-intent keywords to the first page, capturing the map pack across three metro areas.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
  },
  {
    metric: "+68%",
    label: "Website Conversion Increase",
    title: "E-commerce redesign lifts revenue",
    desc: "A full redesign with CRO principles increased conversion rate by 68% and average order value by 22%.",
    image: "https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg",
  },
];

export const TESTIMONIALS = [
  { name: "Sarah Mitchell", role: "Founder, BrightPath SaaS (USA)", quote: "Mayank rebuilt our SEO foundation and traffic more than doubled. He's the rare consultant who ties everything back to revenue." },
  { name: "David Chen", role: "Marketing Director, Toronto (Canada)", quote: "Our Google Ads were bleeding budget. Within weeks Mayank made them profitable and scalable. Truly exceptional work." },
  { name: "Emily Rodriguez", role: "CEO, Wellness Co. (USA)", quote: "The AI search optimization work put us in front of customers using ChatGPT. We're getting leads we never expected." },
  { name: "James Thompson", role: "Owner, HomePro Services (Canada)", quote: "Local SEO transformed our business. We now dominate the map pack in three cities. Highly recommend Mayank." },
  { name: "Priya Sharma", role: "Product Lead, FinEdge (USA)", quote: "Professional, responsive, and genuinely knowledgeable. The technical SEO audit alone paid for itself many times over." },
  { name: "Michael Brooks", role: "Founder, Studio North (Canada)", quote: "Our new website is fast, beautiful, and converts. Mayank delivered beyond expectations and on time." },
];

export const PRICING = [
  { name: "SEO Starter", price: "$99", period: "/month", featured: false, features: ["Keyword research & strategy", "On-page SEO optimization", "Technical SEO basics", "Monthly performance report", "Email support"], cta: "Get Started" },
  { name: "SEO Growth", price: "$199", period: "/month", featured: true, features: ["Everything in Starter", "Content strategy & clusters", "Link building outreach", "Local SEO optimization", "Bi-weekly reporting", "Priority support"], cta: "Get Started" },
  { name: "SEO Advanced", price: "$299", period: "/month", featured: false, features: ["Everything in Growth", "AI Search optimization (AEO/GEO)", "Advanced technical SEO", "CRO & conversion tracking", "Dedicated strategy calls", "24/7 priority support"], cta: "Get Started" },
];

export const CALENDLY_URL = "https://calendly.com/mayankbhardwaj130/30min";
export const WHATSAPP_URL = "https://wa.me/919557817966";

export const SEO_PROJECTS = [
  {
    title: "B2B SaaS Organic Growth",
    result: "+212% Traffic",
    desc: "Technical SEO overhaul and content clusters that tripled organic sessions in 8 months.",
    tags: ["Technical SEO", "Content"],
    image: "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg",
  },
  {
    title: "Local Service Domination",
    result: "40+ #1 Keywords",
    desc: "Local SEO campaign that captured the Google map pack across three metro areas.",
    tags: ["Local SEO", "GBP"],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
  },
  {
    title: "E-commerce Revenue Lift",
    result: "+68% Conversions",
    desc: "Combined SEO and CRO program that grew qualified traffic and conversion rate together.",
    tags: ["E-commerce", "CRO"],
    image: "https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg",
  },
];

export const WEB_PROJECTS = [
  {
    name: "Landfair Electric & Paint",
    type: "Website Development",
    url: "https://landfairelectricandpaint.com/",
    desc: "A clean, conversion-focused website for an electrical & painting services company.",
    image: "https://s.wp.com/mshots/v1/https%3A%2F%2Flandfairelectricandpaint.com%2F?w=1200&h=900",
  },
  {
    name: "TintXperts",
    type: "Website Development",
    url: "https://tintxxperts.com/",
    desc: "A bold, modern site for an automotive & architectural window tinting business.",
    image: "https://s.wp.com/mshots/v1/https%3A%2F%2Ftintxxperts.com%2F?w=1200&h=900",
  },
  {
    name: "Susan Quinn",
    type: "Website Redesign",
    url: "https://susanquinn.net/",
    desc: "A refined redesign delivering a professional, trustworthy personal brand presence.",
    image: "https://s.wp.com/mshots/v1/https%3A%2F%2Fsusanquinn.net%2F?w=1200&h=900",
  },
];

export const FAQS = [
  { q: "How long until I see SEO results?", a: "SEO is a compounding investment. Most clients see meaningful movement in 3-4 months, with significant growth by 6-9 months depending on competition." },
  { q: "Do you work with clients outside India?", a: "Yes. I work primarily with businesses across the USA and Canada, and I'm comfortable collaborating across time zones asynchronously and on calls." },
  { q: "What is AI Search Optimization (AEO/GEO)?", a: "It's optimizing your brand and content so AI engines like ChatGPT, Google AI Overviews, and Perplexity cite you as the answer. It's the next frontier of search visibility." },
  { q: "How do we get started?", a: "Book a free strategy call. We'll review your goals, audit your current situation, and map out a clear plan before you commit to anything." },
  { q: "Do you offer custom packages?", a: "Absolutely. Every business is different. The listed pricing is a starting point, and I tailor scope to your specific goals and budget." },
];
