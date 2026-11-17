"use client";

import db from "@/data/db.json";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Process() {
  const { process } = db;

  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#757d6f]/30 uppercase tracking-widest">
            The Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-page)]">
            How We Work Together
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)]">
            A tested 4-phase methodology designed to eliminate ad spend guesswork and deliver sustained profit.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, idx) => (
            <div
              key={step.step}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-[var(--card-border)] relative flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#6d0808] dark:text-[#f0a8a8]">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#6d0808]/15 border border-[#6d0808]/30 flex items-center justify-center text-[#6d0808] dark:text-[#f0a8a8]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-page)] group-hover:text-[#6d0808] dark:group-hover:text-[#f0a8a8] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < process.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-[var(--bg-page)] border border-[var(--card-border)] flex items-center justify-center text-[#6d0808] dark:text-[#f0a8a8]">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
