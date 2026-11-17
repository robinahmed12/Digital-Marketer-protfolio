"use client";

import db from "@/data/db.json";
import { Eye, Layers, Palette, Sparkles } from "lucide-react";

export function CreativeShowcase() {
  const { creatives } = db;

  // Visual template accents matching the Color Hunt palette
  const mockGradients = [
    "from-[#2d0000] via-[#4d0404] to-[#6d0808]",
    "from-[#1f0000] via-[#350202] to-[#757d6f]",
    "from-[#6d0808] via-[#850b0b] to-[#2d0000]",
    "from-[#230202] via-[#5c0707] to-[#801010]",
    "from-[#380404] via-[#2d0000] to-[#6d0808]",
    "from-[#1c0202] via-[#400505] to-[#757d6f]",
  ];

  return (
    <section id="creatives" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#757d6f]/30 uppercase tracking-widest">
            Visual Storytelling
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-page)]">
            Canva Creative Design & Ad Visuals
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)]">
            In digital marketing, creative is the primary targeting lever. Here are high-converting visual concepts, carousels, and promotional kits built to stop the scroll.
          </p>
        </div>

        {/* Creatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creatives.map((item, index) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-[var(--card-border)] flex flex-col group"
            >
              {/* Visual Mockup Card */}
              <div
                className={`relative h-56 bg-gradient-to-br ${
                  mockGradients[index % mockGradients.length]
                } p-6 flex flex-col justify-between overflow-hidden`}
              >
                {/* Decorative background grid and shapes */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#eeead7_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-[#eeead7]/10 blur-xl" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/40 text-[#eeead7] backdrop-blur-md border border-[#eeead7]/20">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-[#eeead7]">
                    <Palette className="w-4 h-4" />
                  </div>
                </div>

                {/* Mock Creative Headline */}
                <div className="relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#f0c4c4] tracking-widest uppercase">
                    <Sparkles className="w-3 h-3 text-[#f0c4c4]" />
                    <span>High-CTR Canva Asset</span>
                  </div>
                  <h4 className="text-lg font-extrabold text-[#eeead7] leading-tight drop-shadow-sm">
                    {item.title}
                  </h4>
                </div>

                {/* Bottom preview bar */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-[#eeead7]/80 pt-2 border-t border-[#eeead7]/20">
                  <span className="flex items-center gap-1">
                    <Layers className="w-3 h-3" />
                    <span>Canva Pro Master</span>
                  </span>
                  <span className="font-semibold text-[#f0c4c4]">1080 × 1080 HD</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-xs font-semibold text-[#6d0808] dark:text-[#f0a8a8]">
                    {item.category}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--card-border)] flex items-center justify-between text-xs">
                  <span className="text-[var(--text-muted)] font-medium">Ready-to-Deploy Template</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[#6d0808] dark:text-[#f0a8a8] font-bold hover:underline"
                  >
                    <span>Request Kit</span>
                    <Eye className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Canva Advantage Callout */}
        <div className="mt-12 glass-card rounded-2xl p-6 sm:p-8 border border-[var(--card-border)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-[var(--text-page)]">
              Need Fresh, Scroll-Stopping Creatives Every Month?
            </h3>
            <p className="text-sm text-[var(--text-muted)] max-w-xl">
              I deliver custom Canva creative packs (feed posts, carousels, ad banners & story sets) aligned with your brand palette and direct-response formulas.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold bg-[#6d0808] text-[#eeead7] hover:bg-[#8f0e0e] shadow-md glow-crimson transition-all cursor-pointer"
          >
            Order Custom Creative Pack
          </a>
        </div>
      </div>
    </section>
  );
}
