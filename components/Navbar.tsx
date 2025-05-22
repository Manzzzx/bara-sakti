"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { cn } from "@/lib/utils";
// import { DarkMode } from "./DarkMode";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Tentang", href: "#tentang" },
  { name: "Keunggulan", href: "#keunggulan" },
  { name: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Backdrop overlay untuk mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-black/90 backdrop-blur-md shadow-lg" 
          : "bg-black/70 backdrop-blur-sm",
        // Fallback untuk browser yang tidak support backdrop-filter
        "supports-[backdrop-filter]:bg-black/70"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="#home" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo lek"
              width={70}
              height={70}
              priority
            />
          <span className="text-xl font-bold text-orange-600">Bara Sakti</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-white hover:text-orange-600 transition-colors duration-300",
                  "relative px-3 py-2 font-medium",
                  "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-orange-600 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* <DarkMode/> */}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-white focus:outline-none relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile menu - sekarang jadi absolute positioning */}
        <div
          className={cn(
            "absolute top-full left-0 w-full md:hidden transition-all duration-300 ease-in-out",
            "bg-black/95 backdrop-blur-md shadow-2xl border-t border-white/10",
            // Fallback tanpa backdrop-filter
            "supports-[backdrop-filter]:bg-black/90",
            isOpen 
              ? "opacity-100 visible translate-y-0" 
              : "opacity-0 invisible -translate-y-2"
          )}
        >
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-medium text-white transition-all duration-200",
                  "hover:bg-white/10 hover:text-orange-600 active:bg-white/20",
                  "relative overflow-hidden",
                  "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-orange-600 after:scale-x-0 after:origin-right after:transition-transform after:duration-300",
                  "hover:after:scale-x-100 hover:after:origin-left"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}