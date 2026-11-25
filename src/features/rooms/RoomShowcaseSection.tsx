import { motion } from 'motion/react';
import { ArrowRight, BedDouble, DoorOpen } from 'lucide-react';

import { InfoPill } from '@/src/components/ui';
import { rooms } from '@/src/data/hotel';
import type { Room } from '@/src/types';

export function RoomShowcaseSection({ onSelectRoom }: { onSelectRoom: (room: Room) => void }) {
  return (
    <section id="rooms" className="bg-surface py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.88fr_1.12fr] lg:items-end">
          <div>
            <p className="section-kicker">Oda tanıtımı</p>
            <h2 className="section-title">Her oda net farklarla karşılaştırılır.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Kartlar aynı yükseklikte, okunaklı fiyat alanı ve belirgin detay aksiyonuyla düzenlendi. Görseller daha sakin bir çerçevede, metinler karar vermeye yarayan bilgiyle sınırlı.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <motion.article
              key={room.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group flex overflow-hidden rounded-lg border border-ink/10 bg-white shadow-[0_18px_60px_rgba(11,41,49,.08)]"
            >
              <button type="button" onClick={() => onSelectRoom(room)} className="flex w-full flex-col text-left">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={room.hero} alt={room.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-ink/10 to-transparent" />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${room.accent}`}>
                    {room.tagline}
                  </span>
                  <strong className="absolute bottom-4 left-4 font-serif text-3xl text-white">{room.name}</strong>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="leading-7 text-muted">{room.description}</p>
                  <div className="mt-5 grid grid-cols-2 gap-2 text-sm text-ink">
                    <InfoPill icon={DoorOpen} text={room.size} />
                    <InfoPill icon={BedDouble} text={room.guests} />
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-ink/10 pt-5">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wide text-muted">Gecelik</span>
                      <strong className="font-serif text-2xl text-sea">{room.price}</strong>
                    </div>
                    <span className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-semibold text-white transition-colors group-hover:bg-aqua">
                      Detay
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
