import { Menu, ShieldCheck, Home, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/20">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-sm text-emerald-700 tracking-wide">Direktori Pendakwah</span>
              <h1 className="text-xl font-semibold text-gray-900">Aminah</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-gray-700">
            <a href="#beranda" className="flex items-center gap-2 hover:text-emerald-700 transition-colors">
              <Home className="h-4 w-4" /> Beranda
            </a>
            <a href="#agenda" className="flex items-center gap-2 hover:text-emerald-700 transition-colors">
              <Calendar className="h-4 w-4" /> Agenda
            </a>
            <a href="#pendakwah" className="flex items-center gap-2 hover:text-emerald-700 transition-colors">
              <Users className="h-4 w-4" /> Pendakwah
            </a>
            <a href="#tentang" className="hover:text-emerald-700 transition-colors">Tentang</a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#"
              className="px-4 py-2 rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700 transition-colors"
            >
              Masuk Admin
            </motion.a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-emerald-200 text-emerald-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
