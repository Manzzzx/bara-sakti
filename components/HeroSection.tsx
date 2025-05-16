"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-1/2 transform -translate-x-1/2"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 800 800"
        >
          <circle cx="400" cy="400" r="400" fill="url(#grad)" fillOpacity="0.2" />
          <defs>
            <radialGradient id="grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) rotate(90) scale(400)">
              <stop stopColor="#16a34a" />
              <stop offset="1" stopColor="#16a34a" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 py-20 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
            ♻️Ramah Lingkungan
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            Solusi Briket <span className="text-green-600 dark:text-green-400">Bara Sakti</span> <br /> untuk Energi Berkelanjutan
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Arang briket ber bahan dasar batok kelapa dengan proses ramah lingkungan, efisiensi tinggi, dan kualitas unggulan.
          </p>
          <Button className="text-white bg-green-600 hover:bg-green-700">
            Pelajari Lebih Lanjut
          </Button>
        </motion.div>

        <motion.div
          className="lg:w-1/2 w-full max-w-xs mx-auto flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/brikethero.png"
            alt="Briket Bara Sakti"
            width={800}
            height={800}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
