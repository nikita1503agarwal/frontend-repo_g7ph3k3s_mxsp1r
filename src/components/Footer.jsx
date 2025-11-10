import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 bg-emerald-900 text-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-lg font-semibold">Aminah — Direktori Pendakwah</h5>
            <p className="mt-3 text-emerald-100/80 leading-relaxed">
              Platform kredibel untuk menemukan pendakwah terpercaya di Indonesia. Terverifikasi, terstruktur, dan modern.
            </p>
          </div>
          <div>
            <h6 className="font-semibold mb-3">Navigasi</h6>
            <ul className="space-y-2 text-emerald-100/80">
              <li><a href="#beranda" className="hover:text-white">Beranda</a></li>
              <li><a href="#pendakwah" className="hover:text-white">Pendakwah</a></li>
              <li><a href="#agenda" className="hover:text-white">Agenda</a></li>
              <li><a href="#tentang" className="hover:text-white">Tentang</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-3">Ikuti Kami</h6>
            <div className="flex gap-3">
              <a href="#" aria-label="YouTube" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Youtube className="h-5 w-5"/></a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Instagram className="h-5 w-5"/></a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Facebook className="h-5 w-5"/></a>
              <a href="#" aria-label="Email" className="p-2 rounded-lg bg-white/10 hover:bg-white/20"><Mail className="h-5 w-5"/></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-emerald-100/70">
          <p>© {new Date().getFullYear()} Aminah. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
