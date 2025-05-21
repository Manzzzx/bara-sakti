"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-orange-900 via-black to-black text-white">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Teks */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tentang <span className="text-green-500">Bara Sakti</span>
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Bara Sakti hadir sebagai solusi energi alternatif berbasis arang briket batok kelapa yang ramah lingkungan, efisien, dan berkualitas tinggi.
            </p>
            <p className="text-lg text-gray-400">
              Dengan mengedepankan inovasi dan proses produksi bersih, Bara Sakti menjadi pilihan tepat untuk kebutuhan rumah tangga, usaha kuliner, hingga industri.
            </p>
          </motion.div>

          {/* Gambar */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full h-auto rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10">
              <Image
                src="/images/aboutbriket.jpg"
                alt="Tentang Bara Sakti"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
