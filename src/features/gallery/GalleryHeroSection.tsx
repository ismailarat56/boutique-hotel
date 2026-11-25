import { motion } from 'motion/react';

import { fadeUp } from '@/src/lib/motion';

export function GalleryHeroSection() {
  return (
    <section className="relative flex min-h-[76svh] items-end overflow-hidden pt-36 sm:pt-40 lg:pt-44">
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2200&auto=format&fit=crop"
        alt="Iresine Hotel avlu havuzu"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,41,49,.66),rgba(11,41,49,.14)_42%,rgba(11,41,49,.86))]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 text-white sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-sky">Galeri</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.04] sm:text-7xl">Avlu, oda, bahçe restoranı ve Alaçatı çevresi aynı hikayede.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
            Fotoğraflar mekanın yalnızca dekorunu değil, gün içindeki kullanımını ve konaklama ritmini gösterecek şekilde gruplandı.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
