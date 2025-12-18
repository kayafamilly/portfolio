
// Add missing React import to fix 'Cannot find namespace React' error for React.ReactNode
import React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Chris-Loic Kaya-Kaya | AI Engineer & Entrepreneur",
  description: "Portfolio de Chris-Loic Kaya-Kaya, Développeur IA et ancien financier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
