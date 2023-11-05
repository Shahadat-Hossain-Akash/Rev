import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./Providers";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rev - car rental shop",
  description: "A car rental service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Providers>
          <main className="flex flex-col gap-8 p-3 md:p-6">
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
