"use client";

import db from "@/data/db.json";
import { ArrowDown, ArrowUpRight, CheckCircle2, Flame, Sparkles } from "lucide-react";

export function Hero() {
  const { profile } = db;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#6d0808]/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[280px] h-[280px] bg-[#757d6f]/15 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-[var(--card-border)] text-xs font-medium text-[var(--text-page)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{profile.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-page)] leading-[1.15]">
            Turn Ad Spend Into Predictable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d0808] via-[#a81b1b] to-[#757d6f] dark:from-[#f0a8a8] dark:via-[#e23838] dark:to-[#eeead7]">
              Profitable Revenue
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            I’m <strong className="text-[var(--text-page)] font-semibold">{profile.name}</strong>, a Digital Marketer & Growth Strategist. I engineer high-ROAS <span className="underline decoration-[#6d0808]/60 underline-offset-4">Meta & Google Ads</span>, optimize <span className="underline decoration-[#6d0808]/60 underline-offset-4">Facebook Pages</span>, and design thumb-stopping <span className="underline decoration-[#6d0808]/60 underline-offset-4">Canva Creatives</span> that convert.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
            {["Meta Ads", "Google Ads", "Facebook Page SEO", "Canva Pro", "Content Strategy", "GA4 & CAPI"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#757d6f]/30 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[#6d0808] text-[#eeead7] hover:bg-[#8f0e0e] shadow-xl glow-crimson transition-all duration-200 cursor-pointer"
            >
              <Flame className="w-4 h-4" />
              <span>View Proven Results</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold glass-card border border-[var(--card-border)] text-[var(--text-page)] hover:border-[#6d0808] hover:bg-[#6d0808]/10 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#6d0808] dark:text-[#f0a8a8]" />
              <span>Get Free Marketing Audit</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
          </div>

          {/* Social Proof statement */}
          <div className="pt-2 flex items-center justify-center gap-3 text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Data-Driven Execution</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Transparent Reporting</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>No Wasted Ad Spend</span>
            </div>
          </div>
        </div>

        {/* Live Performance Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {profile.stats.map((stat) => (
            <div
              key={stat.id}
              className="glass-card glass-card-hover rounded-2xl p-6 text-center border border-[var(--card-border)]"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#6d0808] dark:text-[#f0a8a8] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[var(--text-page)] mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
