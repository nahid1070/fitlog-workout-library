import type { Metadata } from "next";
import {Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/Footer";
import FitLibraryProvider from "@/contexts/FitLibraryContext";
import { Toaster } from "react-hot-toast";

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
      <body className="min-h-screen">
        <FitLibraryProvider>
          {/* Header */}
          <Header />
          {/* Main Content */}
          <main className="w-full min-h-[80vh] max-w-6xl mx-auto px-4 py-8 space-y-12">

            {children}

          </main>
          {/* Footer */}
          <Footer />

          <Toaster position="top-right" />
        </FitLibraryProvider>
      </body>
    </html>
  );
}
