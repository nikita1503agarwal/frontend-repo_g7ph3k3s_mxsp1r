import { motion } from 'framer-motion';
import { Search, Star, MapPin, CheckCircle2 } from 'lucide-react';

export default function Hero({ onSearch }) {
  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Temukan Pendakwah Terpercaya di Indonesia
            </motion.h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Direktori kredibel dengan verifikasi lembaga, rekam jejak kegiatan, dan penilaian jamaah. Cerdas, modern, dan menenangkan.
            </p>

            <div className="mt-8 bg-white/80 backdrop-blur rounded-2xl p-3 shadow-xl shadow-emerald-100/60 border border-emerald-100">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-600" />
                  <input
                    type="text"
                    placeholder="Cari nama, tema dakwah, atau lokasi"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-gray-900"
                    onChange={(e) => onSearch?.(e.target.value)}
                  />
                </div>
                <button className="shrink-0 px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow-md shadow-emerald-600/30 hover:bg-emerald-700 transition-colors">
                  Telusuri
                </button>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="h-4 w-4" /> Terverifikasi Lembaga
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-200">
                  <Star className="h-4 w-4" /> Rekomendasi Jamaah
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <MapPin className="h-4 w-4" /> Filter Lokasi
                </div>
              </div>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-6">
              {[
                { label: 'Pendakwah', value: '3.241+' },
                { label: 'Lembaga Terverifikasi', value: '128+' },
                { label: 'Kajian Pekan Ini', value: '562' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white shadow-lg shadow-emerald-100/60 border border-emerald-100 p-5">
                  <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </dl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:pl-8"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-100 bg-white">
              <img
                src="https://images.unsplash.com/photo-1581583000301-52b7c9082d79?q=80&w=1200&auto=format&fit=crop"
                alt="Ilustrasi dakwah modern"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
