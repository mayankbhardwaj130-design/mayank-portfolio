import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import BlogPreview from "@/components/sections/BlogPreview";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main data-testid="home-page">
      <Hero />
      <Services />
      <CaseStudies />
      <About />
      <Testimonials />
      <Pricing />
      <FAQ />
      <BlogPreview />
      <CTABanner />
      <Contact />
    </main>
  );
}
