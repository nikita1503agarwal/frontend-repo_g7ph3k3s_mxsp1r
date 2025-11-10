import { motion } from 'framer-motion';
import { Shield, Star, BookOpenCheck, MapPin } from 'lucide-react';

const samplePreachers = [
  {
    id: 'ust-hasan',
    name: 'Ust. Hasan Al-Faruqi',
    location: 'Jakarta',
    focus: ['Fiqih', 'Keluarga'],
    verified: true,
    score: 92,
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'ust-salma',
    name: 'Ustzh. Salma Zahra',
    location: 'Bandung',
    focus: ['Akhlak', 'Sosial'],
    verified: true,
    score: 88,
    avatar:
      'https://images.unsplash.com/photo-1524156868115-b0c5f855368e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'ust-fahri',
    name: 'Ust. Fahri Naufal',
    location: 'Yogyakarta',
    focus: ['Ekonomi Islam', 'Sosial'],
    verified: true,
    score: 85,
    avatar:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'ust-nadia',
    name: 'Ustzh. Nadia Karim',
    location: 'Surabaya',
    focus: ['Tarbiyah', 'Keluarga'],
    verified: true,
    score: 90,
    avatar:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
  },
];

function CredBadge({ score }) {
  const level = score >= 90 ? 'Emas' : score >= 80 ? 'Perak' : 'Perunggu';
  const color = score >= 90 ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : score >= 80 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-gray-50 text-gray-700 border-gray-200';
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border ${color}`}>
      <Shield className="h-3.5 w-3.5" /> Kredibilitas {level}
    </span>
  );
}

export default function PopularGrid() {
  return (
    <section id="pendakwah" className="py-16 sm:py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Pendakwah Populer & Terverifikasi</h3>
            <p className="text-gray-600 mt-1">Menampilkan profil yang baru diverifikasi dan banyak direkomendasikan jamaah.</p>
          </div>
          <a href="#" className="text-emerald-700 hover:text-emerald-800 font-medium">Lihat semua</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {samplePreachers.map((p, idx) => (
            <motion.a
              key={p.id}
              href={`#/profil/${p.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-3xl overflow-hidden bg-white border border-emerald-100 shadow-lg shadow-emerald-100/60 hover:shadow-emerald-200/80 transition-shadow"
            >
              <div className="relative">
                <img src={p.avatar} alt={p.name} className="h-44 w-full object-cover" />
                <div className="absolute top-3 left-3">
                  <CredBadge score={p.score} />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">{p.name}</h4>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-emerald-600" /> {p.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-600">
                    <Star className="h-4 w-4 fill-yellow-400" />
                    <span className="text-sm font-medium">{p.score}</span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.focus.map((f) => (
                    <span key={f} className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <BookOpenCheck className="h-3.5 w-3.5" /> {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
