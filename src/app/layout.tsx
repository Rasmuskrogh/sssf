import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const fontBody = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stockholms Studentsångare",
  description: "Stockholms Studentsångare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        suppressHydrationWarning
        className={`${fontDisplay.variable} ${fontBody.variable}`}
      >
        <Header />
        <main className="appMain">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
