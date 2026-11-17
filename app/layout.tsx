import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faria Bristi | Digital Marketer & Paid Ads Strategist",
  description:
    "Official portfolio of Faria Bristi — Expert in Meta Ads, Facebook Page Optimization, Google Ads, SEO, and Canva Creative Design. Scaling brands with high-ROAS marketing.",
  keywords: [
    "Faria Bristi",
    "Digital Marketer",
    "Meta Ads Specialist",
    "Facebook Page Optimization",
    "Google Ads Expert",
    "SEO Specialist",
    "Canva Designer",
    "Social Media Manager",
  ],
  authors: [{ name: "Faria Bristi" }],
  openGraph: {
    title: "Faria Bristi | Digital Marketer & Growth Strategist",
    description:
      "Transforming ad spend into revenue through Meta Ads, Google Ads, SEO, and high-converting Canva creatives.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#6d0808] selection:text-[#eeead7]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
