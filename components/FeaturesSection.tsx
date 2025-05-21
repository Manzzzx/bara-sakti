// components/Keunggulan.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const keunggulanList = [
  {
    img: "/images/features1.jpg",
    title: "Ramah Lingkungan",
    desc: "Diproduksi dari batok kelapa, tanpa merusak hutan dan bebas bahan kimia.",
  },
  {
    img: "/images/features2.jpg",
    title: "Tahan Lama",
    desc: "Waktu pembakaran lebih panjang dan panas lebih stabil.",
  },
  {
    img: "/images/features3.jpg",
    title: "Efisiensi Tinggi",
    desc: "Hemat biaya dan memberikan performa maksimal.",
  },
];

export default function Keunggulan() {
  return (
    <section
      id="keunggulan"
      className="min-h-screen py-20 px-6 bg-gradient-to-tl from-green-950 via-black to-orange-950 text-white
"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 drop-shadow-md"
        >
          Keunggulan <span className="text-orange-400">Arang Briket</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 mt-40">
          {keunggulanList.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">{feature.title}</h3>
              <p className="text-sm text-gray-200">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
