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
  title: "AgriSense - Revolutionizing Agriculture",
  description:
    "AgriSense leverages technology to enhance agricultural efficiency, improve productivity, and support farmers with innovative solutions.",
  metadataBase: new URL("https://www.agrisensetech.com"),
  alternates: {
    canonical: "https://www.agrisensetech.com/",
  },
  openGraph: {
    title: "AgriSense - Revolutionizing Agriculture",
    description:
      "AgriSense leverages technology to enhance agricultural efficiency, improve productivity, and support farmers with innovative solutions.",
    url: "https://www.agrisensetech.com",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "AgriSense - Revolutionizing Agriculture",
      },
    ],
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}