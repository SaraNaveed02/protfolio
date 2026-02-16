import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sara Naveed- Frontend Developer & Creative Developer",
  description:
    "Premium personal portfolio showcasing modern web development, animations, and creative design solutions.",
  keywords:
    "frontend developer, web development, react, next.js, animations, portfolio",
  authors: [{ name: "Sara Naveed" }],
  openGraph: {
    title: "Sara Naveed - Frontend Developer",
    description:
      "Creative frontend developer specializing in modern web experiences",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
