"use client";

import { useState } from "react";
import { Calculator, ArrowUpRight, Sparkles } from "lucide-react";

export function RoiCalculator() {
  const [budget, setBudget] = useState(1500);
  const [campaignType, setCampaignType] = useState<"ecommerce" | "leads">("ecommerce");
  const [targetRoas, setTargetRoas] = useState(4.2);

  // Projections
  const estimatedRevenue = Math.round(budget * targetRoas);
  const estimatedProfit = Math.round(estimatedRevenue - budget);
  const estimatedLeads = Math.round(budget / 14); // Average $14/lead
  const estimatedImpressions = Math.round(budget * 120);

  return (
    <section id="roi-calculator" className="py-24 relative bg-[var(--card-bg)]/40 border-y border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#757d6f]/30 uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-page)]">
            Estimate Your Marketing ROI
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)]">
            Slide your estimated monthly ad budget below to see projected revenue, lead volume, and return on ad spend.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border border-[var(--card-border)] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Campaign Objective Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-page)]">
                Campaign Objective
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setCampaignType("ecommerce");
                    setTargetRoas(4.2);
                  }}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-left ${
                    campaignType === "ecommerce"
                      ? "bg-[#6d0808] text-[#eeead7] border-[#6d0808] shadow-md"
                      : "bg-[var(--bg-page)] text-[var(--text-page)] border-[var(--card-border)] hover:border-[#6d0808]/50"
                  }`}
                >
                  <div className="font-bold">E-Commerce & Sales</div>
                  <div className="text-[11px] opacity-80 mt-0.5">Targeting 4x+ ROAS</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setCampaignType("leads");
                    setTargetRoas(3.5);
                  }}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-left ${
                    campaignType === "leads"
                      ? "bg-[#6d0808] text-[#eeead7] border-[#6d0808] shadow-md"
                      : "bg-[var(--bg-page)] text-[var(--text-page)] border-[var(--card-border)] hover:border-[#6d0808]/50"
                  }`}
                >
                  <div className="font-bold">Lead Gen & Services</div>
                  <div className="text-[11px] opacity-80 mt-0.5">High-intent inquiries</div>
                </button>
              </div>
            </div>

            {/* Ad Budget Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-page)]">
                  Monthly Ad Spend Budget
                </span>
                <span className="text-xl font-extrabold text-[#6d0808] dark:text-[#f0a8a8]">
                  ${budget.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min="300"
                max="10000"
                step="100"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-[#757d6f]/30 rounded-lg appearance-none cursor-pointer accent-[#6d0808]"
              />

              <div className="flex justify-between text-[11px] text-[var(--text-muted)] font-medium">
                <span>$300 (Starter)</span>
                <span>$2,500 (Growth)</span>
                <span>$5,000+ (Scale)</span>
                <span>$10,000 (Domination)</span>
              </div>
            </div>

            {/* Target ROAS Adjuster */}
            {campaignType === "ecommerce" && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-page)]">
                    Target Return on Ad Spend (ROAS)
                  </span>
                  <span className="text-sm font-bold text-[#6d0808] dark:text-[#f0a8a8]">
                    {targetRoas.toFixed(1)}x ROAS
                  </span>
                </div>
                <div className="flex gap-2">
                  {[3.0, 3.8, 4.2, 5.0].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setTargetRoas(rate)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        targetRoas === rate
                          ? "bg-[#6d0808] text-[#eeead7] border-[#6d0808]"
                          : "bg-[var(--bg-page)] text-[var(--text-muted)] border-[var(--card-border)] hover:text-[var(--text-page)]"
                      }`}
                    >
                      {rate.toFixed(1)}x
                    </button>
                  ))}
                </div>
              </div>
            )}

            <p className="text-xs text-[var(--text-muted)] leading-relaxed italic">
              *Projections are based on historical client benchmark metrics, active audience retargeting, and optimized Canva ad creatives.
            </p>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[var(--bg-page)] border border-[var(--card-border)] space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#6d0808] dark:text-[#f0a8a8] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Projected Monthly Yield</span>
            </div>

            <div className="space-y-4">
              {campaignType === "ecommerce" ? (
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-medium uppercase">
                    Est. Tracked Gross Revenue
                  </div>
                  <div className="text-3xl font-extrabold text-[#6d0808] dark:text-[#f0a8a8]">
                    ${estimatedRevenue.toLocaleString()}
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    +${estimatedProfit.toLocaleString()} Net Gain over ad spend
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-medium uppercase">
                    Est. High-Intent Inquiries
                  </div>
                  <div className="text-3xl font-extrabold text-[#6d0808] dark:text-[#f0a8a8]">
                    ~{estimatedLeads} Qualified Leads
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    Est. Cost Per Lead: ~$14.00
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[var(--card-border)] text-xs">
                <div>
                  <div className="text-[var(--text-muted)]">Est. Reach</div>
                  <div className="font-bold text-[var(--text-page)] mt-0.5">
                    ~{estimatedImpressions.toLocaleString()} views
                  </div>
                </div>
                <div>
                  <div className="text-[var(--text-muted)]">Tracking</div>
                  <div className="font-bold text-[var(--text-page)] mt-0.5">
                    CAPI + GA4 Verified
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`#contact`}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold bg-[#6d0808] text-[#eeead7] hover:bg-[#8f0e0e] shadow-md transition-all glow-crimson cursor-pointer"
            >
              <span>Unlock This Blueprint</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
