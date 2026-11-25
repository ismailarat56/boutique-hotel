import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { fadeUp } from '@/src/lib/motion';
import type { NavigateToPage } from '@/src/types';

export function RoomsHeroSection({ onNavigate }: { onNavigate: NavigateToPage }) {
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden pt-36 sm:pt-40 lg:pt-44">
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2200&auto=format&fit=crop"
        alt="Iresine Hotel oda içi doğal taş ve ahşap detaylar"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,41,49,.66),rgba(11,41,49,.16)_45%,rgba(11,41,49,.86))]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 text-white sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-sky">Odalar ve suitler</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.04] sm:text-7xl">Avlu balkonu, bahçe terası veya havuza direkt geçiş.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
            Üç oda tipi aynı sakin tasarım dilini taşır; farkı açık alan ilişkisi, metrekare, servis seviyesi ve mahremiyet ihtiyacı belirler.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => onNavigate('availability')} className="btn-primary justify-center bg-sky text-ink hover:bg-white">
              Müsaitlik kontrol et
              <ArrowRight className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => onNavigate('gallery')} className="btn-outline justify-center border-white/40 text-white hover:bg-white hover:text-ink">
              Galeriyi aç
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
