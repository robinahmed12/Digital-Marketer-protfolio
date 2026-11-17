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
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#6d0808] flex items-center justify-center text-[#eeead7] font-bold text-sm shadow-md">
              FB
            </div>
            <div>
              <div className="font-bold text-sm text-[var(--text-page)]">
                {db.profile.name}
              </div>
              <div className="text-[11px] text-[var(--text-muted)]">
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
            © 2026 {db.profile.name}. All rights reserved. Powered by Next.js & Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span>Color Palette:</span>
            <span className="font-mono text-[#6d0808] font-bold">#6D0808</span>
            <span className="font-mono text-[#2D0000] font-bold">#2D0000</span>
            <span className="font-mono text-[#757D6F] font-bold">#757D6F</span>
            <span className="font-mono text-[var(--text-page)] font-bold">#EEEAD7</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
