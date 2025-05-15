"use client";

import { Button } from "./ui/button";


export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-16">
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-6 text-stone-800">Bara Sakti</h1>
        <p className="text-lg mb-6 text-stone-600 max-w-lg">
          Arang briket ber bahan dasar batok kelapa, ramah lingkungan dan efisien untuk kebutuhan rumah tangga dan usaha Anda.
        </p>
        <Button onClick={() => alert('Terima kasih sudah berminat pada Bara Sakti!')}>
          Pesan Sekarang
        </Button>
      </div>
      <div className="flex-1 max-w-md">
      </div>
    </section>
  );
}
