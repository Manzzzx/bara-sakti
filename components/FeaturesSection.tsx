export default function FeaturesSection() {
  const features = [
    {
      title: 'Bahan Baku Terbarukan',
      description:
        'Menggunakan limbah batok kelapa yang melimpah, mengurangi limbah dan menjaga lingkungan.',
    },
    {
      title: 'Proses Ramah Lingkungan',
      description:
        'Menggunakan teknologi pirolisis modern untuk meminimalkan emisi karbon dan polusi udara.',
    },
    {
      title: 'Efisiensi Tinggi',
      description:
        'Menghasilkan panas yang tahan lama dan merata, lebih efisien dibanding arang biasa.',
    },
  ];

  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-10 text-center text-stone-800">
        Keunggulan Bara Sakti
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {features.map(({ title, description }) => (
          <div key={title} className="p-6 border rounded-lg border-stone-300 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-stone-700">{title}</h3>
            <p className="text-stone-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
