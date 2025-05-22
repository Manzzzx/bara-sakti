"use client";

import { HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function ContactSection() {

  const contactInfo = [
    {
      icon: HiPhone,
      title: "Telepon",
      content: "+62 831-9244-3183",
      href: null
    },
    {
      icon: HiLocationMarker,
      title: "Alamat",
      content: "Jl. Imam Bonjol No.35, Canting, Klampok, Kec. Wanasari, Kab. Brebes, Jawa Tengah 52252",
      href: "https://maps.app.goo.gl/Zd44kH4ihemyFENdA?g_st=aw"
    },
    {
      icon: HiClock,
      title: "Jam Operasional",
      content: "Senin - Sabtu: 08:00 - 17:00",
      href: null
    }
  ];

  const socialMedia = [
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      href: "https://wa.me/6283192443183",
      color: "text-green-500 hover:text-green-600"
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      href: "https://www.instagram.com/bara.sakti.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      color: "text-pink-500 hover:text-pink-600"
    },
  ];

  return (
    <section id="kontak" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Charcoal texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-orange-800/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-500 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Siap melayani kebutuhan arang briket berkualitas Anda. Hubungi kami untuk konsultasi dan pemesanan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-green-500 mb-8">
                Informasi Kontak
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center shadow-lg">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                          target={info.href.startsWith('http') ? '_blank' : '_self'}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-300">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-green-500 mb-4">
                  Hubungi Langsung
                </h4>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-gray-700/70 hover:bg-gray-600/70 flex items-center justify-center transition-all duration-200 hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map Section - Moved from bottom */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="p-8 pb-0">
                <h3 className="text-2xl font-bold text-green-500 mb-4">
                  Lokasi Kami
                </h3>
                <p className="text-white mb-6">
                  Kunjungi toko kami untuk melihat langsung produk arang briket Bara Sakti.
                </p>
              </div>
              
              {/* Placeholder Map */}
              <div className="h-80 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                {/* Google Maps */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.257008763006!2d109.0096116!3d-6.8597700999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb1005310e7f3%3A0xa270d98bd9a0a0b3!2sJUAL%20ARANG%20BRIKET%20(BARA%20SAKTI)!5e0!3m2!1sid!2sid!4v1747912611378!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}