"use client";

import db from "@/data/db.json";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Flame,
  Sparkles,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";
import Image from "next/image";

export function Hero() {
  const { profile } = db;

  return (
    <section
      className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-[var(--hero-border)] shadow-xl transition-colors duration-300 text-[var(--hero-text)]"
      style={{
        background: "linear-gradient(to bottom, var(--hero-bg-from), var(--hero-bg-via), var(--hero-bg-to))",
      }}
    >
      {/* Light/Dark mode top crimson subtle aura */}
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(109,8,8,0.18),transparent)] pointer-events-none" />

      {/* Full-width geometric grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#757d6f18_1px,transparent_1px),linear-gradient(to_bottom,#757d6f18_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none opacity-40 dark:opacity-60" />

      {/* Ambient glowing radial orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#6d0808]/15 dark:bg-[#6d0808]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-[#757d6f]/15 dark:bg-[#757d6f]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-[#6d0808]/15 dark:bg-[#6d0808]/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid: Left Text | Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--hero-border)] text-xs font-semibold text-[var(--hero-text)] shadow-sm backdrop-blur-md"
              style={{ backgroundColor: "var(--hero-card-bg)" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profile.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--hero-text)] leading-[1.12]">
              Turn Ad Spend Into Predictable{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to right, var(--hero-heading-from), var(--hero-heading-via), var(--hero-heading-to))",
                }}
              >
                Profitable Revenue
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[var(--hero-text-muted)] max-w-xl leading-relaxed">
              Hi, I’m <strong className="text-[var(--hero-text)] font-semibold">{profile.name}</strong> — Digital Marketer & Growth Strategist. I engineer high-ROAS <span className="underline decoration-[#6d0808] underline-offset-4 font-semibold text-[var(--hero-text)]">Meta & Google Ads</span>, optimize <span className="underline decoration-[#6d0808] underline-offset-4 font-semibold text-[var(--hero-text)]">Facebook Pages</span>, and design scroll-stopping <span className="underline decoration-[#6d0808] underline-offset-4 font-semibold text-[var(--hero-text)]">Canva Creatives</span>.
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              {[
                "Meta Ads",
                "Google Ads",
                "Facebook Page SEO",
                "Canva Pro Design",
                "Content Strategy",
                "GA4 & CAPI",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1 rounded-full border border-[var(--hero-border)] font-medium text-xs shadow-sm backdrop-blur-sm"
                  style={{ backgroundColor: "var(--hero-card-bg)", color: "var(--hero-text)" }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[#6d0808] text-[#eeead7] hover:bg-[#8f0e0e] shadow-xl glow-crimson transition-all duration-200 cursor-pointer"
              >
                <Flame className="w-4 h-4" />
                <span>View Proven Results</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold border border-[var(--hero-border)] text-[var(--hero-text)] hover:border-[#6d0808] hover:bg-[#6d0808]/20 transition-all duration-200 cursor-pointer shadow-md backdrop-blur-md"
                style={{ backgroundColor: "var(--hero-card-bg)" }}
              >
                <Sparkles className="w-4 h-4 text-[#e23838]" />
                <span>Get Free Marketing Audit</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>
            </div>

            {/* Trust Proof Points */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[var(--hero-text-muted)]">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Data-Driven Execution</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Transparent Reporting</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero Wasted Ad Budget</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Image & Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient glow behind image container */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6d0808]/30 via-[#2d0000]/40 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Main Portrait Frame */}
            <div
              className="relative w-full max-w-[420px] rounded-3xl overflow-hidden border-2 border-[var(--hero-border)] shadow-2xl p-3 backdrop-blur-md transition-colors"
              style={{ backgroundColor: "var(--hero-card-bg)" }}
            >
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#2d0000]">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle vignette gradient over bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#170000] via-[#170000]/60 to-transparent pointer-events-none" />

                {/* In-image caption tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#eeead7] font-semibold">
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <Award className="w-3.5 h-3.5 text-[#f0a8a8]" />
                    <span>{profile.name}</span>
                  </div>
                  <div className="bg-[#6d0808]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[11px] font-bold">
                    Marketing Pro
                  </div>
                </div>
              </div>

              {/* Floating Chip 1: Top-Left ROAS Badge */}
              <div
                className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl border border-[var(--hero-border)] shadow-2xl flex items-center gap-2.5 backdrop-blur-md animate-bounce [animation-duration:4s]"
                style={{ backgroundColor: "var(--hero-card-bg)", color: "var(--hero-text)" }}
              >
                <div className="w-8 h-8 rounded-xl bg-[#6d0808] flex items-center justify-center text-[#eeead7] shadow-md">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[var(--hero-text-muted)] tracking-wider">
                    Target ROAS
                  </div>
                  <div className="text-sm font-extrabold text-[#e23838]">
                    4.8x+ Average
                  </div>
                </div>
              </div>

              {/* Floating Chip 2: Bottom-Right Ad Spend Badge */}
              <div
                className="absolute -bottom-4 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl border border-[var(--hero-border)] shadow-2xl flex items-center gap-2.5 backdrop-blur-md"
                style={{ backgroundColor: "var(--hero-card-bg)", color: "var(--hero-text)" }}
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[var(--hero-text-muted)] tracking-wider">
                    Managed Budget
                  </div>
                  <div className="text-sm font-extrabold text-[var(--hero-text)]">
                    $85K+ Profitable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Performance Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {profile.stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl p-6 text-center border border-[var(--hero-border)] shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "var(--hero-card-bg)", color: "var(--hero-text)" }}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#e23838] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[var(--hero-text)] mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-[var(--hero-text-muted)] mt-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
