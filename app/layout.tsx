import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bara Sakti - Solusi Kebutuhan Bahan Bakar Anda",
  description: "Bara Sakti adalah perusahaan terpercaya yang menyediakan solusi kebutuhan bahan bakar berkualitas tinggi untuk industri dan bisnis Anda.",
  keywords: ["bahan bakar", "industri", "energi", "bara sakti", "solar", "batubara"],
  authors: [{ name: "Bara Sakti" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://barasakti.com",
    title: "Bara Sakti - Solusi Kebutuhan Bahan Bakar Anda",
    description: "Bara Sakti adalah perusahaan terpercaya yang menyediakan solusi kebutuhan bahan bakar berkualitas tinggi untuk industri dan bisnis Anda.",
    siteName: "Bara Sakti",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bara Sakti Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bara Sakti - Solusi Kebutuhan Bahan Bakar Anda",
    description: "Bara Sakti adalah perusahaan terpercaya yang menyediakan solusi kebutuhan bahan bakar berkualitas tinggi untuk industri dan bisnis Anda.",
    images: ["/og-image.jpg"],
  },
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
