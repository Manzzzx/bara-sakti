import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bara Sakti - Solusi Kebutuhan Bahan Bakar",
  description: "Bara Sakti yang menyediakan solusi kebutuhan bahan bakar berkualitas tinggi untuk industri dan bisnis Anda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        {children}
      </body>
    </html>
  );
}
