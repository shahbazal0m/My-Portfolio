import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shahbaz Alam | Full Stack Developer",
  description: "Portfolio of Shahbaz Alam, a Full Stack Developer specializing in MERN Stack.",
  icons: {
    icon: "/tab-logo/favicon-32x32.png",
    shortcut: "/tab-logo/android-chrome-192x192.png",
    apple: "/tab-logo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030303] text-zinc-100 min-h-screen overflow-x-hidden`}
      >
        <Toaster 
          position="top-center" 
          reverseOrder={false} 
          containerStyle={{
            top: 40,
            left: 20,
            right: 20,
          }}
          toastOptions={{
            success: {
              iconTheme: {
                primary: '#6366f1',
                secondary: '#fff',
              },
            },
            style: {
              background: '#18181b',
              color: '#fff',
              border: '1px solid #6366f1', 
              maxWidth: '500px',
              width: 'fit-content',
              minWidth: '280px',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: '500',
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}