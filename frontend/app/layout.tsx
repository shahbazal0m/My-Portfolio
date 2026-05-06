import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahbaz Alam | Web Developer",
  description: "Portfolio of Shahbaz Alam, a Full Stack Developer specializing in MERN and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030303] text-zinc-100 min-h-screen overflow-x-hidden`}
      >
        {/* Main tag yahan se hata diya hai taaki page.tsx se conflict na ho */}
        {children}
      </body>
    </html>
  );
}