import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { MiniMetric } from '@/src/components/ui';
import type { NavigateToPage } from '@/src/types';

export function StayPreviewPanel({ onNavigate }: { onNavigate: NavigateToPage }) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18, duration: 0.65 }}
      className="self-end rounded-lg border border-white/18 bg-white/92 p-5 shadow-[0_28px_100px_rgba(11,41,49,.28)] backdrop-blur-xl"
    >
      <p className="text-sm font-bold uppercase tracking-[.18em] text-aqua">Konaklama</p>
      <h2 className="mt-3 font-serif text-3xl leading-tight text-ink">Oda, avlu ve Alaçatı planını tek akışta keşfet.</h2>
      <p className="mt-4 leading-7 text-muted">
        Üç oda tipini karşılaştır, günlük otel ritmini gör, konum avantajını incele ve uygun tarih için hızlı ön kontrol yap.
      </p>
      <div className="mt-6 grid grid-cols-3 gap-2 text-center">
        <MiniMetric value="3" label="oda tipi" />
        <MiniMetric value="18" label="oda" />
        <MiniMetric value="7 dk" label="çarşı" />
      </div>
      <button type="button" onClick={() => onNavigate('availability')} className="mt-6 btn-primary w-full justify-center bg-sea text-white hover:bg-aqua">
        Boş günleri kontrol et
        <ArrowRight className="h-4 w-4" />
      </button>
    </motion.aside>
  );
}
