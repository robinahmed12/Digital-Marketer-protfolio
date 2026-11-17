"use client";

import db from "@/data/db.json";
import { Check, Globe, MapPin, ShieldCheck, Sparkles } from "lucide-react";

export function About() {
  const { profile, skillsList } = db;

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative glass-card rounded-3xl p-8 border border-[var(--card-border)] overflow-hidden">
              {/* Subtle crimson gradient glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#6d0808]/25 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Monogram / Avatar badge */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6d0808] to-[#2d0000] border-2 border-[#eeead7]/30 flex items-center justify-center text-[#eeead7] text-3xl font-extrabold shadow-2xl">
                  FB
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-[var(--text-page)]">
                    {profile.name}
                  </h3>
                  <div className="text-sm font-semibold text-[#6d0808] dark:text-[#f0a8a8] mt-0.5">
                    {profile.title}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#6d0808]" />
                    <span>{profile.location}</span>
                  </div>
                </div>

                {/* Core Strengths */}
                <div className="space-y-2.5 pt-4 border-t border-[var(--card-border)]">
                  {[
                    "Proven Track Record in Meta & Google Ads",
                    "Aesthetic Canva Visuals Engineered to Convert",
                    "Deep Understanding of Facebook Algorithm & SEO",
                    "Clear, Transparent Bi-Weekly Client Reporting",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[var(--text-page)]">
                      <div className="w-4 h-4 rounded-full bg-[#6d0808]/20 flex items-center justify-center text-[#6d0808] dark:text-[#f0a8a8] shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Action */}
                <div className="pt-2">
                  <a
                    href={profile.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold bg-[#6d0808] text-[#eeead7] hover:bg-[#8f0e0e] shadow-md glow-crimson transition-all"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Hire Faria on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Tools */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#757d6f]/30 uppercase tracking-widest">
              About Faria Bristi
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-page)]">
              Bridging the Gap Between Analytical Precision and Creative Storytelling
            </h2>

            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              {profile.bio}
            </p>

            <blockquote className="p-4 rounded-xl border-l-4 border-[#6d0808] bg-[var(--card-bg)] text-sm italic text-[var(--text-page)] leading-relaxed">
              &ldquo;Great digital marketing is not about guessing who might buy. It&apos;s about combining psychological copy, eye-catching Canva visuals, and algorithmic audience targeting so the right offer reaches the exact person ready to purchase.&rdquo;
            </blockquote>

            {/* Tools and Skills Pills */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-page)] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#6d0808]" />
                <span>Verified Core Skill Stack:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium glass-card border border-[var(--card-border)] text-[var(--text-page)] flex items-center gap-1.5 hover:border-[#6d0808] transition-colors"
                  >
                    <ShieldCheck className="w-3 h-3 text-[#6d0808] dark:text-[#f0a8a8]" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
