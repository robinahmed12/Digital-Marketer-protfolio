import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { CreativeShowcase } from "@/components/creative-showcase";
import { RoiCalculator } from "@/components/roi-calculator";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { Faqs } from "@/components/faqs";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-page)]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <CaseStudies />
        <CreativeShowcase />
        <RoiCalculator />
        <Process />
        <Testimonials />
        <About />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
