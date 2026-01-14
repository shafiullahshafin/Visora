// configures global fonts and styles for app
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Human Detector Application",
  description: "Real-time person detection with visual and audio alerts",
};

// renders root layout wrapper for every page
export default function RootLayout({ children }) {
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
