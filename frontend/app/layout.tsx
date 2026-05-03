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
  title: "Shahbaz Alam | Full Stack Developer",
  description: "Portfolio of Shahbaz Alam, a Full Stack Developer specializing in MERN and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'scroll-smooth' add kiya hai anchor navigation ke liye
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030303] text-zinc-100 min-h-screen`}
      >
        {/* Yahan aapka Navbar aayega baad mein */}
        <main className="relative flex flex-col items-center overflow-hidden mx-auto">
          {children}
        </main>
        {/* Yahan aapka Footer aayega */}
      </body>
    </html>
  );
}