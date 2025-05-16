"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* BACKGROUND IMAGE + OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brikethero.jpg"
          alt="Briket Background"
          fill
          style={{ objectFit: "cover", filter: "brightness(0.75)" }}
          priority
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/60" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-2xl px-6 mx-auto text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg"
        >
          <span className="inline-block text-sm text-green-500 font-semibold mb-2">Ramah Lingkungan</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white">
            Solusi Briket <span className="text-green-500">Bara Sakti</span>
            <br />
            untuk Energi Berkelanjutan
          </h1>
          <p className="mt-4 text-gray-700 dark:text-white">
            Arang briket ber bahan dasar batok kelapa dengan proses ramah lingkungan, efisiensi tinggi, dan kualitas unggulan.
          </p>
          <Link href="#keunggulan">
            <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white shadow-md">
              Pelajari Lebih Lanjut
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* DECORATIVE BLOB */}
      <div className="absolute top-[-100px] right-[-100px] w-[200px] h-[200px] bg-green-400/30 dark:bg-green-600/30 rounded-full blur-2xl z-0" />

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
