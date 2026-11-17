"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] opacity-50" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-page)] hover:text-[#eeead7] hover:bg-[#6d0808] transition-all duration-200 cursor-pointer"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#eeead7]" />
      ) : (
        <Moon className="w-4 h-4 text-[#2d0000]" />
      )}
    </button>
  );
}
