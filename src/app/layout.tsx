import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "@/styles/globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-barlow-semi-condensed",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Testimonials grid section",
  description: "Testimonials gird section of Frontend Mentor Solution",
  icons: "assets/favicon-32x32.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlowSemiCondensed.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
