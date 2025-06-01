import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StakeKid - Smart Betting Tools & Tips",
  description: "Get expert betting tips, smart tools, and real-time alerts for Stake casino games. Maximize your wins with our advanced betting strategies and VIP community.",
  keywords: "stake betting, casino tips, betting tools, gambling strategy, stake originals",
  openGraph: {
    title: "StakeKid - Smart Betting Tools & Tips",
    description: "Get expert betting tips, smart tools, and real-time alerts for Stake casino games.",
    images: [{ url: "/images/dashboard.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "StakeKid - Smart Betting Tools & Tips",
    description: "Get expert betting tips, smart tools, and real-time alerts for Stake casino games.",
    images: ["/images/dashboard.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
