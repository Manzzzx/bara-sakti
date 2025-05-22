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
          style={{ objectFit: "cover", filter: "brightness(0.65)" }}
          priority
          className="scale-105 transform transition-transform duration-[20000ms] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-4xl px-6 mx-auto text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:max-w-2xl"
        >
          <div className="space-y-6">            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Solusi Briket{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Bara Sakti
              </span>
              <br />
              untuk Energi Berkelanjutan
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-200 max-w-xl"
            >
              Arang briket berbahan dasar batok kelapa dengan proses ramah lingkungan, efisiensi tinggi, dan kualitas unggulan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center space-x-4 pt-4"
            >
              <Link href="#kontak">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                  Pesan Sekarang
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="absolute top-[-150px] right-[-150px] w-[300px] h-[300px] bg-green-500/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[200px] h-[200px] bg-green-600/20 rounded-full blur-2xl z-0" />

      {/* SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-300 mb-2">Scroll untuk melihat lebih</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
