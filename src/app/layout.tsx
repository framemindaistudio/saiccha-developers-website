import type { Metadata } from "next";
import { Bodoni_Moda, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ChatbotButton } from "@/components/layout/chatbot-button";
import { FloatingDock } from "@/components/layout/floating-dock";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saiccha Developers | Build Better. Live Better.",
  description:
    "Saiccha Developers is a Goa-based real estate developer crafting premium, sustainable residential and township communities, led by Rudra Valley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${interTight.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingDock />
        <ChatbotButton />
      </body>
    </html>
  );
}
