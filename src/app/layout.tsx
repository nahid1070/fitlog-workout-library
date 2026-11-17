import type { Metadata } from "next";
import {Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "FitLog - Workout Library",
  description: "A Next Application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body>
        <Header />
        
        <main className="w-full max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        
      </body>
    </html>
  );
}
