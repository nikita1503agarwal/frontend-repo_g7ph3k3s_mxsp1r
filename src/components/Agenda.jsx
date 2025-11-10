import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Bell } from 'lucide-react';

const schedule = [
  {
    title: 'Kajian Fiqih Keluarga',
    preacher: 'Ust. Hasan Al-Faruqi',
    date: 'Sabtu, 16 Nov 2025',
    time: '19.30 WIB',
    location: 'Masjid Agung Sunda Kelapa, Jakarta',
  },
  {
    title: 'Ekonomi Syariah untuk UMKM',
    preacher: 'Ust. Fahri Naufal',
    date: 'Minggu, 17 Nov 2025',
    time: '09.00 WIB',
    location: 'Aula Masjid Jogokariyan, Yogyakarta',
  },
  {
    title: 'Akhlaq & Adab dalam Bermedia Sosial',
    preacher: 'Ustzh. Salma Zahra',
    date: 'Selasa, 19 Nov 2025',
    time: '20.00 WIB',
    location: 'Masjid Raya Bandung',
  },
];

export default function Agenda() {
  return (
    <section id="agenda" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Agenda Dakwah Nasional</h3>
            <p className="text-gray-600 mt-1">Filter berdasarkan lokasi dan tanggal, lalu ikuti untuk pengingat otomatis.</p>
          </div>
          <a href="#" className="text-emerald-700 hover:text-emerald-800 font-medium">Lihat kalender</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-lg shadow-emerald-100/60"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 text-emerald-700">
                  <CalendarDays className="h-5 w-5" />
                  <span className="font-medium">{item.date}</span>
                </div>
                <span className="text-sm text-gray-500">{item.time}</span>
              </div>
              <h4 className="mt-3 text-lg font-semibold text-gray-900">{item.title}</h4>
              <p className="text-gray-600 mt-1">Bersama {item.preacher}</p>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700">
                <MapPin className="h-4 w-4 text-emerald-600" />
                {item.location}
              </div>
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700 transition-colors">
                  Ikuti Kajian Ini
                </button>
                <button className="px-4 py-2 rounded-xl border border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                  <span className="inline-flex items-center gap-2"><Bell className="h-4 w-4"/> Pengingat</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
