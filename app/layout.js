// configures global fonts and styles for app
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

// sets primary sans font for ui text
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// sets mono font for technical content
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// defines metadata for human detector app
export const metadata = {
  title: "Visora - Human Detection",
  description: "Real-time AI person detection with visual and audio alerts",
};

// renders root layout wrapper for every page
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col overflow-hidden`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 flex flex-col pt-16 relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
