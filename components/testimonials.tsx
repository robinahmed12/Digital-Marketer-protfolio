"use client";

import db from "@/data/db.json";
import { Star, Quote, Award } from "lucide-react";

export function Testimonials() {
  const { testimonials } = db;

  return (
    <section className="py-24 relative bg-[var(--card-bg)]/40 border-y border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#757d6f]/30 uppercase tracking-widest">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-page)]">
            Trusted by Brands to Deliver ROI
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)]">
            Here is what founders, marketing directors, and business owners say after partnering with Faria.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card glass-card-hover rounded-2xl p-7 border border-[var(--card-border)] flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Top Row: Stars and Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#6d0808]/40 dark:text-[#f0a8a8]/40" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[var(--text-muted)] leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Client Info and Key Metric Result */}
              <div className="pt-6 mt-6 border-t border-[var(--card-border)] space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#6d0808]/15 text-[#6d0808] dark:text-[#f0a8a8] border border-[#6d0808]/30">
                  <Award className="w-3 h-3" />
                  <span>{t.result}</span>
                </div>
                <div>
                  <div className="font-bold text-sm text-[var(--text-page)]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
