"use client";

import { useState } from "react";
import db from "@/data/db.json";
import { ArrowUpRight, BarChart3, ChevronRight, X } from "lucide-react";

export function CaseStudies() {
  const { caseStudies } = db;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalStudy, setActiveModalStudy] = useState<(typeof caseStudies)[0] | null>(null);

  const categories = ["All", "Meta Ads", "Google Ads", "Social Media", "Canva Design"];

  const filteredStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

  return (
    <section id="case-studies" className="py-24 relative bg-[var(--card-bg)]/40 border-y border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#757d6f]/30 uppercase tracking-widest">
            Proven Performance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-page)]">
            Real Campaigns. Real ROAS.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)]">
            Explore how data-backed targeting, persuasive copy, and aesthetic Canva creatives translated into actual revenue.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#6d0808] text-[#eeead7] shadow-md glow-crimson"
                    : "glass-card text-[var(--text-muted)] hover:text-[var(--text-page)] border border-[var(--card-border)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setActiveModalStudy(study)}
              className="glass-card glass-card-hover rounded-2xl p-7 border border-[var(--card-border)] flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#757d6f]/30">
                    {study.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-[#6d0808] dark:text-[#f0a8a8] bg-[#6d0808]/10 px-2.5 py-1 rounded-md">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>{study.highlight}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--text-page)] group-hover:text-[#6d0808] dark:group-hover:text-[#f0a8a8] transition-colors">
                    {study.title}
                  </h3>
                  <div className="text-xs text-[var(--text-muted)] mt-1">
                    Client: <strong className="text-[var(--text-page)]">{study.client}</strong>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-3">
                  {study.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[var(--bg-page)]/60 border border-[var(--card-border)] text-center"
                    >
                      <div className="text-lg font-bold text-[#6d0808] dark:text-[#f0a8a8]">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--card-border)] flex items-center justify-between text-xs font-semibold text-[var(--text-page)]">
                <span className="text-[var(--text-muted)]">Click to view full strategy & breakdown</span>
                <span className="inline-flex items-center gap-1 text-[#6d0808] dark:text-[#f0a8a8] group-hover:translate-x-1 transition-transform">
                  <span>Read Breakdown</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup for Case Study Details */}
        {activeModalStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card p-6 sm:p-8 border border-[var(--card-border)] shadow-2xl bg-[var(--card-bg)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-[var(--card-border)] hover:bg-[#6d0808] hover:text-[#eeead7] text-[var(--text-page)] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)]">
                    {activeModalStudy.category} • {activeModalStudy.client}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[var(--text-page)] mt-2">
                    {activeModalStudy.title}
                  </h3>
                  <div className="text-sm font-semibold text-[#6d0808] dark:text-[#f0a8a8] mt-1">
                    Key Result: {activeModalStudy.highlight}
                  </div>
                </div>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeModalStudy.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[var(--bg-page)] border border-[var(--card-border)] text-center"
                    >
                      <div className="text-base font-extrabold text-[#6d0808] dark:text-[#f0a8a8]">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Challenge */}
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-page)]">
                    The Challenge
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {activeModalStudy.challenge}
                  </p>
                </div>

                {/* Strategy */}
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-page)]">
                    The Strategy & Execution
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {activeModalStudy.strategy}
                  </p>
                </div>

                {/* Results */}
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-page)]">
                    The Outcome
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {activeModalStudy.results}
                  </p>
                </div>

                {/* CTA inside modal */}
                <div className="pt-4 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[var(--text-muted)]">
                    Want similar results for your business?
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setActiveModalStudy(null)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#6d0808] text-[#eeead7] hover:bg-[#8f0e0e] shadow-md transition-all glow-crimson"
                  >
                    <span>Discuss Your Campaign</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
