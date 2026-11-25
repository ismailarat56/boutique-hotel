import { motion } from 'motion/react';

import { HeroMetric } from '@/src/components/ui';
import { fadeUp } from '@/src/lib/motion';

export function AvailabilityHeroSection() {
  return (
    <section className="relative flex min-h-[76svh] items-end overflow-hidden pt-36 sm:pt-40 lg:pt-44">
      <img
        src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2200&auto=format&fit=crop"
        alt="Iresine Hotel suit oturma alanı"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,41,49,.64),rgba(11,41,49,.16)_45%,rgba(11,41,49,.84))]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 text-white sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-sky">Müsaitlik</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.04] sm:text-7xl">Tarih aralığını seç, oda uygunluğunu anında gör.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
            Bu sayfa canlı ödeme sistemi değildir; seçili oda ve tarih için hızlı ön kontrol verir, kesin rezervasyon danışmanla tamamlanır.
          </p>
        </motion.div>
        <div className="mt-9 grid gap-3 sm:grid-cols-3">
          <HeroMetric value="3" label="oda tipi" />
          <HeroMetric value="1-14" label="gece kontrolü" />
          <HeroMetric value="0" label="üyelik zorunluluğu" />
        </div>
      </div>
    </section>
  );
}
