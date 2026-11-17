"use client";

import { useState } from "react";
import db from "@/data/db.json";
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export function Contact() {
  const { profile } = db;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    url: "",
    service: "Meta Ads (Facebook & Instagram)",
    budget: "$1,000 - $3,000 / month",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hi Faria! My name is ${formData.name || "a client"}.\n` +
      `Email: ${formData.email}\n` +
      `Website/Page: ${formData.url || "N/A"}\n` +
      `Service Needed: ${formData.service}\n` +
      `Estimated Budget: ${formData.budget}\n` +
      `Message: ${formData.message || "I'd like to discuss scaling our marketing."}`
    );
    window.open(`https://wa.me/8801700000000?text=${text}`, "_blank");
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Marketing Inquiry: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nWebsite/Page: ${formData.url}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#757d6f]/30 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Scaling Today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-page)]">
            Ready to Turn Your Ad Spend Into Predictable Profit?
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)]">
            Book a free audit of your Facebook page or existing ad account. Get in touch directly via WhatsApp or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Direct Channels Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-8 border border-[var(--card-border)] space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6d0808] dark:text-[#f0a8a8]">
                  Fastest Response
                </span>
                <h3 className="text-2xl font-bold text-[var(--text-page)]">
                  Chat Directly with Faria
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Have a quick question or need an urgent campaign review? I usually respond within a few hours.
                </p>
              </div>

              {/* 1-Click WhatsApp Button */}
              <a
                href={profile.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full text-xs font-bold bg-[#6d0808] text-[#eeead7] hover:bg-[#8f0e0e] shadow-xl glow-crimson transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${profile.contact.email}`}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full text-xs font-bold glass-card border border-[var(--card-border)] text-[var(--text-page)] hover:border-[#6d0808] transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#6d0808] dark:text-[#f0a8a8]" />
                <span>{profile.contact.email}</span>
              </a>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[var(--card-border)] space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-page)]">
                  Connect on Social Media:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Facebook", href: profile.contact.facebook },
                    { name: "LinkedIn", href: profile.contact.linkedin },
                    { name: "Instagram", href: profile.contact.instagram },
                  ].map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold glass-card border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[#eeead7] hover:bg-[#6d0808] transition-all"
                    >
                      {soc.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-[var(--card-border)] shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[var(--text-page)]">
                    Inquiry Details Prepared!
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">
                    Thank you, {formData.name || "there"}! Choose how you would like to deliver your project specs to Faria:
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#6d0808] text-[#eeead7] hover:bg-[#8f0e0e] shadow-lg glow-crimson cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold glass-card border border-[var(--card-border)] text-[var(--text-page)] hover:border-[#6d0808] cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email App</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[var(--text-muted)] hover:underline pt-4 block mx-auto cursor-pointer"
                >
                  Edit information or submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--text-page)] mb-4">
                  Request a Free Audit & Strategy Call
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-page)]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-page)] border border-[var(--card-border)] text-sm text-[var(--text-page)] focus:outline-none focus:border-[#6d0808]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-page)]">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@boutique.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-page)] border border-[var(--card-border)] text-sm text-[var(--text-page)] focus:outline-none focus:border-[#6d0808]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-page)]">
                    Website or Facebook Page URL
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. https://facebook.com/yourbrand or yourwebsite.com"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-page)] border border-[var(--card-border)] text-sm text-[var(--text-page)] focus:outline-none focus:border-[#6d0808]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-page)]">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-page)] border border-[var(--card-border)] text-sm text-[var(--text-page)] focus:outline-none focus:border-[#6d0808]"
                    >
                      <option>Meta Ads (Facebook & Instagram)</option>
                      <option>Facebook Page Optimization</option>
                      <option>Google Ads & PPC Marketing</option>
                      <option>Search Engine Optimization (SEO)</option>
                      <option>Canva Creative Design</option>
                      <option>Social Media Management</option>
                      <option>Full Marketing Strategy Bundle</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-page)]">
                      Estimated Monthly Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-page)] border border-[var(--card-border)] text-sm text-[var(--text-page)] focus:outline-none focus:border-[#6d0808]"
                    >
                      <option>$300 - $1,000 / month</option>
                      <option>$1,000 - $3,000 / month</option>
                      <option>$3,000 - $5,000 / month</option>
                      <option>$5,000+ / month</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-page)]">
                    Project Details / Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your product, current ad spend, or what challenges you want to solve..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-page)] border border-[var(--card-border)] text-sm text-[var(--text-page)] focus:outline-none focus:border-[#6d0808]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-bold bg-[#6d0808] text-[#eeead7] hover:bg-[#8f0e0e] shadow-xl glow-crimson transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry & Get Free Audit</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
