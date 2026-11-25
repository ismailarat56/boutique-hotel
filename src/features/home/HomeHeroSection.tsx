import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

import { Stat } from '@/src/components/ui';
import { fadeUp } from '@/src/lib/motion';
import type { NavigateToPage } from '@/src/types';

import { StayPreviewPanel } from './StayPreviewPanel';

export function HomeHeroSection({ onNavigate }: { onNavigate: NavigateToPage }) {
  return (
    <>
      <section className="relative flex min-h-[94svh] items-end overflow-hidden pb-4 pt-28 sm:pb-8 lg:min-h-screen">
        <picture>
          <source media="(max-width: 640px)" srcSet="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1100&auto=format&fit=crop" />
          <img
            src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=2400&auto=format&fit=crop"
            alt="Iresine Hotel butik otel havuzlu avlu"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,41,49,.55),rgba(11,41,49,.18)_42%,rgba(11,41,49,.82))]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_410px] lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl self-end pb-4 text-white">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/13 px-4 py-2 text-sm backdrop-blur-xl">
              <Star className="h-4 w-4 fill-sky text-sky" />
              <span className="truncate">Alaçatı merkezde 18 odalı avlu oteli</span>
            </div>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.01] sm:text-7xl lg:text-8xl">
              Iresine Hotel
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
              Begonvilli taş avlu, turkuaz havuz, Ege kahvaltısı ve Alaçatı merkezine yakın sakin bir butik otel deneyimi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => onNavigate('availability')} className="btn-primary bg-sky text-ink hover:bg-white">
                Müsaitlik kontrol et
                <ArrowRight className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => onNavigate('experience')} className="btn-outline border-white/45 text-white hover:bg-white hover:text-ink">
                Oteli tanı
              </button>
            </div>
          </motion.div>

          <StayPreviewPanel onNavigate={onNavigate} />
        </div>
      </section>

      <section className="border-y border-sea/10 bg-white py-4">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 text-sm text-muted sm:grid-cols-4 sm:px-6 lg:px-8">
          <Stat value="18" label="oda ve suit" />
          <Stat value="7 dk" label="çarşı yürüyüş" />
          <Stat value="24/7" label="concierge" />
          <Stat value="12+" label="yerel üretici" />
        </div>
      </section>
    </>
  );
}
