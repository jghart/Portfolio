import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { resumeData } from "@/data/resumeData";

// Using Inter font for a clean, modern, highly readable UI
const inter = Inter({ subsets: ["latin"] });

// SEO Metadata optimized for your local market
export const metadata: Metadata = {
  title: `${resumeData.basics.name} | ${resumeData.basics.label}`,
  description: resumeData.basics.summary,
  keywords: ["Full Stack Developer", "React", "Next.js", "Toronto", "AI Integrations", "Software Engineer"],
  authors: [{ name: resumeData.basics.name }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: resumeData.basics.website,
    title: `${resumeData.basics.name} | ${resumeData.basics.label}`,
    description: resumeData.basics.summary,
    siteName: `${resumeData.basics.name} Portfolio`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}