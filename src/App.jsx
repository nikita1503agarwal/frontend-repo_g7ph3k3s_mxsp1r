import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularGrid from './components/PopularGrid';
import Agenda from './components/Agenda';
import Footer from './components/Footer';

function App() {
  const [query, setQuery] = useState('');

  // Demo: simple search state that would later call backend API
  const searchHandler = (q) => setQuery(q);
  const hint = useMemo(() => (query ? `Menampilkan hasil untuk: "${query}"` : ''), [query]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero onSearch={searchHandler} />

        {hint && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-4 mb-2 inline-flex items-center text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
              {hint}
            </div>
          </div>
        )}

        <PopularGrid />
        <Agenda />

        <section id="tentang" className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-yellow-50 border border-emerald-100 p-8 shadow-xl shadow-emerald-100/60">
              <h3 className="text-2xl font-bold text-gray-900">Tentang Platform</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Kami membangun ekosistem kredibel untuk dakwah yang berwibawa, menenangkan, dan modern. Setiap profil
                diverifikasi, aktivitas terdokumentasi, dan penilaian jamaah terkurasi. Visi kami: menjadi "LinkedIn-nya Pendakwah".
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
