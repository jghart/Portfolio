import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { resumeData } from "@/data/resumeData";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${resumeData.basics.name} | ${resumeData.basics.title}`,
  description: resumeData.basics.summary,
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Laravel",
    "Java",
    "Spring Boot",
    "SQL",
    "Toronto Developer",
    "Portfolio",
  ],
  authors: [{ name: resumeData.basics.name }],
  metadataBase: new URL(resumeData.basics.website),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: resumeData.basics.website,
    title: `${resumeData.basics.name} | ${resumeData.basics.title}`,
    description: resumeData.basics.summary,
    siteName: `${resumeData.basics.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${resumeData.basics.name} | ${resumeData.basics.title}`,
    description: resumeData.basics.summary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
            <CustomCursor />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}