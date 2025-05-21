"use client";

import Image from "next/image";
import { useState } from "react";
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-md">
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
          className="md:hidden p-2 rounded-md text-gray-700 "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden bg-white shadow-md overflow-hidden transition-max-height duration-500 ease-in-out",
          isOpen ? "max-h-60" : "max-h-0"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
