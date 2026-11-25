import { motion } from 'motion/react';

import { amenityGroups } from '@/src/data/hotel';

export function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-sea py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.22em] text-sky">Otel özellikleri</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Güzel görünen değil, gerçekten kullanılan alanlar.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/72">
            Özellikleri ikon listesi gibi bırakmadık; her servis için görsel, net fayda ve konaklama akışındaki yerini gösteren profesyonel bloklar kullandık.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {amenityGroups.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="grid overflow-hidden rounded-[1.5rem] bg-white/8 shadow-[0_25px_80px_rgba(0,0,0,.18)] sm:grid-cols-[.92fr_1.08fr]"
            >
              <div className="relative min-h-60">
                <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <span className="mb-7 grid h-12 w-12 place-items-center rounded-full bg-sky text-ink">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="font-serif text-3xl">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/70">{item.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
