"use client";

import db from "@/data/db.json";
import {
  Megaphone,
  Share2,
  Target,
  Search,
  TrendingUp,
  Palette,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const { services } = db;

  // Map icon strings from db.json to Lucide React components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Megaphone":
        return <Megaphone className="w-6 h-6 text-[#6d0808] dark:text-[#f0a8a8]" />;
      case "Share2":
        return <Share2 className="w-6 h-6 text-[#6d0808] dark:text-[#f0a8a8]" />;
      case "Target":
        return <Target className="w-6 h-6 text-[#6d0808] dark:text-[#f0a8a8]" />;
      case "Search":
        return <Search className="w-6 h-6 text-[#6d0808] dark:text-[#f0a8a8]" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-[#6d0808] dark:text-[#f0a8a8]" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-[#6d0808] dark:text-[#f0a8a8]" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-[#6d0808] dark:text-[#f0a8a8]" />;
      default:
        return <Megaphone className="w-6 h-6 text-[#6d0808] dark:text-[#f0a8a8]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#757d6f]/30 uppercase tracking-widest">
            What I Deliver
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-page)]">
            High-Impact Marketing Services Built for Growth
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)]">
            Every service is tailored to deliver measurable return on investment — from cold audience acquisition to organic community retention.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between border border-[var(--card-border)] relative overflow-hidden group ${
                index === 0 ? "lg:col-span-2 lg:flex-row lg:items-center lg:gap-8" : ""
              }`}
            >
              {/* Subtle crimson accent line on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6d0808] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#6d0808]/15 border border-[#6d0808]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#757d6f]/20">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--text-page)] group-hover:text-[#6d0808] dark:group-hover:text-[#f0a8a8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-page)] opacity-80">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[var(--text-muted)]">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#6d0808] dark:text-[#f0a8a8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[var(--card-border)]">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6d0808] dark:text-[#f0a8a8] hover:gap-2.5 transition-all group-hover:underline"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
