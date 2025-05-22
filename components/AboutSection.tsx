"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-900 via-black to-black text-white relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Tentang <span className="text-green-500">Bara Sakti</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-gray-200">
                  Bara Sakti hadir sebagai solusi energi alternatif premium berbasis arang briket batok kelapa yang ramah lingkungan, efisien, dan berkualitas tinggi.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  Dengan mengedepankan inovasi dan proses produksi bersih, Arang Briket menjadi pilihan tepat untuk kebutuhan rumah tangga, usaha kuliner, hingga industri.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/images/aboutbriket.jpg"
                  alt="Tentang Bara Sakti"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
