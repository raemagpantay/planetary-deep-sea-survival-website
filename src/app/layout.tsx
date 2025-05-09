import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomNavbar from "@/components/ui/navbar";
import "./globals.css";
import AuthProvider from '@/app/context/auth-context'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Planetary Deep-Sea Survival',
  description: 'Dive into an epic underwater adventure with Planetary Deep-Sea Survival. Explore, survive, and conquer the depths!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <link 
    rel="stylesheet" 
    href="/planetary-deep-sea-survival-website/globals.css" 
  />
          <CustomNavbar />
        </header>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}