import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { HeroMetric } from '@/src/components/ui';
import { fadeUp } from '@/src/lib/motion';
import type { NavigateToPage } from '@/src/types';

export function ExperienceHeroSection({ onNavigate }: { onNavigate: NavigateToPage }) {
  return (
    <section className="relative flex min-h-[82svh] items-end overflow-hidden pt-36 sm:pt-40 lg:pt-44">
      <img
        src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2200&auto=format&fit=crop"
        alt="Iresine Hotel taş avlu ve bahçe"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,41,49,.7),rgba(11,41,49,.2)_42%,rgba(11,41,49,.84))]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 text-white sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-sky">Otel deneyimi</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.04] sm:text-7xl">Taş avluda başlayan, koylara ve bahçe akşamlarına uzanan sakin bir gün.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
            Iresine Hotel’de ritim gösterişli servislerden değil; iyi planlanmış kahvaltı, sessiz havuz saatleri, kişisel concierge ve yerel lezzetlerden gelir.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => onNavigate('rooms')} className="btn-primary justify-center bg-sky text-ink hover:bg-white">
              Odaları gör
              <ArrowRight className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => onNavigate('availability')} className="btn-outline justify-center border-white/40 text-white hover:bg-white hover:text-ink">
              Tarih kontrol et
            </button>
          </div>
        </motion.div>
        <div className="mt-9 grid gap-3 sm:grid-cols-3">
          <HeroMetric value="08:00-12:00" label="Ege kahvaltısı" />
          <HeroMetric value="34" label="kişilik bahçe restoranı" />
          <HeroMetric value="24/7" label="concierge planlama" />
        </div>
      </div>
    </section>
  );
}
