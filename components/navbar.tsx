"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import db from "@/data/db.json";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Canva Designs", href: "#creatives" },
    { name: "ROI Calculator", href: "#roi-calculator" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[var(--header-bg)] backdrop-blur-md shadow-lg border-b border-[var(--card-border)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6d0808] to-[#2d0000] border border-[#757d6f]/40 flex items-center justify-center text-[#eeead7] font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              FB
            </div>
            <div>
              <span className="block font-bold text-lg tracking-tight text-[var(--text-page)] group-hover:text-[#6d0808] transition-colors">
                {db.profile.name}
              </span>
              <span className="block text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium">
                Digital Marketer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--text-muted)] hover:text-[#6d0808] dark:hover:text-[#eeead7] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={db.profile.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#6d0808] text-[#eeead7] hover:bg-[#8f0e0e] shadow-md transition-all glow-crimson-hover cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[var(--text-page)] hover:bg-[var(--card-bg)] border border-[var(--card-border)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 rounded-2xl glass-card border border-[var(--card-border)] shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-page)] hover:bg-[#6d0808]/20 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[var(--card-border)]">
              <a
                href={db.profile.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-[#6d0808] text-[#eeead7] hover:bg-[#8f0e0e] shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
