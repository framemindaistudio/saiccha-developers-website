import type { Metadata } from "next";
import { Bodoni_Moda, Inter_Tight } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Chatbot } from "@/components/layout/chatbot";
import { chatbotConfig } from "@/lib/chatbot-data";

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
  metadataBase: new URL("https://saicchadevelopers.com"),
  title: "Saiccha Developers | Build Better. Live Better.",
  description:
    "Saiccha Developers is a Goa-based real estate developer crafting premium, sustainable residential and township communities, led by Rudra Valley.",
  openGraph: {
    title: "Saiccha Developers | Build Better. Live Better.",
    description:
      "Saiccha Developers is a Goa-based real estate developer crafting premium, sustainable residential and township communities, led by Rudra Valley.",
    url: "/",
    siteName: "Saiccha Developers",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saiccha Developers | Build Better. Live Better.",
    description:
      "Saiccha Developers is a Goa-based real estate developer crafting premium, sustainable residential and township communities, led by Rudra Valley.",
  },
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
        <Chatbot config={chatbotConfig} />
      </body>
      <GoogleAnalytics gaId="G-F3ZHLGB4E4" />
    </html>
  );
}
