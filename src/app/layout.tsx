"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Krish Thakar | Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfolio of Krish Thakar, a Full-Stack Developer specializing in React, Next.js, and Tailwind CSS."
        />
        <meta name="keywords" content="Krish Thakar, Portfolio, Full-Stack Developer, React, Next.js, Tailwind CSS" />
        <meta name="author" content="Krish Thakar" />
        <meta property="og:title" content="Krish Thakar | Portfolio" />
        <meta property="og:description" content="Full-Stack Developer specializing in React, Next.js, and Tailwind CSS." />
        <meta property="og:type" content="website" />
      </head>
      <body className="bg-gray-900 text-white">
        
        <Navbar/>
        <main className="pt-4">{children}</main> {/* Reduced padding to move content up */}

        <Footer />
      </body>
    </html>
  );
}
