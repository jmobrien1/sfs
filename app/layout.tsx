import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sherwood Forest Shores — Where Paradise Awaits You",
    template: "%s · Sherwood Forest Shores",
  },
  description:
    "A community of 493 lots on the Little Wicomico River in Reedville, Virginia, with easy boat access to the Chesapeake Bay and Potomac River.",
  openGraph: {
    title: "Sherwood Forest Shores",
    description: "Where paradise awaits you.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
