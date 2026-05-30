import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediCare Elite — World-Class Healthcare",
  description:
    "Experience world-class healthcare at MediCare Elite. Expert physicians, cutting-edge technology, and compassionate care tailored for you.",
  keywords: "hospital, healthcare, doctors, medical, clinic, emergency, surgery",
  openGraph: {
    title: "MediCare Elite — World-Class Healthcare",
    description: "Expert physicians, cutting-edge technology, and compassionate care.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
