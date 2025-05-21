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
  className="min-h-screen py-24 px-6 bg-gradient-to-br from-black via-zinc-900 to-gray-950 text-white relative overflow-hidden"
>
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold text-center mb-20 drop-shadow-lg"
    >
      Keunggulan <span className="text-orange-400">Arang Briket</span>
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-10">
      {keunggulanList.map((feature, idx) => (
        <motion.div
          key={idx}
          className="bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-white/10 p-6 rounded-2xl shadow-xl relative hover:scale-[1.03] transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
        >
          {/* Icon Bulat di Atas */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-500 text-black rounded-full p-3 shadow-lg ring-4 ring-black">
            <span className="text-xl">
              {idx === 0 ? "🌱" : idx === 1 ? "🔥" : "⚡"}
            </span>
          </div>

          {/* Gambar */}
          <div className="w-full h-48 relative mb-4 mt-6 rounded-md overflow-hidden group-hover:shadow-xl">
            <Image
              src={feature.img}
              alt={feature.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Judul */}
          <h3 className="text-xl font-bold mb-1 text-green-400 text-center">
            {feature.title}
          </h3>
          {/* Tagline */}
          <p className="text-sm text-orange-400 text-center italic mb-2">
            {idx === 0
              ? "Bumi tetap lestari"
              : idx === 1
              ? "Bakar lebih lama"
              : "Efisien tanpa kompromi"}
          </p>

          {/* Deskripsi */}
          <p className="text-sm text-gray-300 text-center">
            {feature.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}
