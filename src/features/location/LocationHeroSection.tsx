import { motion } from 'motion/react';

import { HeroMetric } from '@/src/components/ui';
import { fadeUp } from '@/src/lib/motion';

export function LocationHeroSection() {
  return (
    <section className="relative flex min-h-[76svh] items-end overflow-hidden pt-36 sm:pt-40 lg:pt-44">
      <img
        src="https://images.unsplash.com/photo-1649271552252-05212de45596?q=80&w=2200&auto=format&fit=crop"
        alt="Alaçatı taş sokakları"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,41,49,.72),rgba(11,41,49,.2)_45%,rgba(11,41,49,.88))]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 text-white sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-sky">Konum</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.04] sm:text-7xl">Çarşıya yürüyerek, koylara planlı transferle.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
            Iresine Hotel, Alaçatı merkezinin kenarında kalır: akşam dönüşleri kolay, gündüz sahil ve sörf rotaları kısa mesafededir.
          </p>
        </motion.div>
        <div className="mt-9 grid gap-3 sm:grid-cols-3">
          <HeroMetric value="7 dk" label="çarşı yürüyüş" />
          <HeroMetric value="9 dk" label="Ilıca Plajı" />
          <HeroMetric value="18 dk" label="Çeşme Marina" />
        </div>
      </div>
    </section>
  );
}
