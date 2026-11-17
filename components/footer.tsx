"use client";

import db from "@/data/db.json";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[var(--card-border)] bg-[var(--bg-page)] text-[var(--text-muted)] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info with Text Logo */}
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#6d0808] to-[#2d0000] border border-[#757d6f]/30 flex items-center justify-center text-[#eeead7] font-black text-xs tracking-tighter shadow-md shrink-0">
              FB
            </span>
            <div className="flex flex-col">
              <div className="font-black text-base tracking-tight text-[var(--text-page)] leading-tight">
                FARIA <span className="text-[#6d0808] dark:text-[#f0a8a8]">BRISTI</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)]">
                {db.profile.title}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <a href="#services" className="hover:text-[#6d0808] transition-colors">Services</a>
            <a href="#case-studies" className="hover:text-[#6d0808] transition-colors">Case Studies</a>
            <a href="#creatives" className="hover:text-[#6d0808] transition-colors">Canva Designs</a>
            <a href="#roi-calculator" className="hover:text-[#6d0808] transition-colors">ROI Calculator</a>
            <a href="#about" className="hover:text-[#6d0808] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#6d0808] transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full glass-card border border-[var(--card-border)] text-[var(--text-page)] hover:bg-[#6d0808] hover:text-[#eeead7] transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © 2026 {db.profile.name}. All rights reserved.
          </div>
    
        </div>
      </div>
    </footer>
  );
}
