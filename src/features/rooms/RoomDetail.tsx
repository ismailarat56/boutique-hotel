import { ArrowLeft, Bath, BedDouble, DoorOpen, Moon } from 'lucide-react';

import { DetailList, InfoPanel } from '@/src/components/ui';
import type { Room } from '@/src/types';

export function RoomDetail({ room, onBack }: { room: Room; onBack: () => void }) {
  return (
    <>
      <section className="relative min-h-[82svh] overflow-hidden pt-36 sm:pt-40 lg:pt-44">
        <img src={room.hero} alt={room.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/18 to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(82svh-9rem)] max-w-7xl flex-col justify-between px-4 pb-10 text-white sm:min-h-[calc(82svh-10rem)] sm:px-6 lg:min-h-[calc(82svh-11rem)] lg:px-8">
          <button type="button" onClick={onBack} className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-white/92 px-4 font-semibold text-ink shadow-sm backdrop-blur-xl transition-colors hover:bg-sky">
            <ArrowLeft className="h-4 w-4" />
            Odalara dön
          </button>
          <div className="max-w-3xl pt-12">
            <span className={`inline-flex rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide ${room.accent}`}>{room.tagline}</span>
            <h1 className="mt-5 font-serif text-5xl leading-tight sm:text-7xl">{room.name}</h1>
            <p className="mt-5 text-lg leading-8 text-white/82">{room.description}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          <InfoPanel icon={DoorOpen} title={room.size} subtitle="Oda alanı" />
          <InfoPanel icon={BedDouble} title={room.bed} subtitle={room.guests} />
          <InfoPanel icon={Bath} title={room.bath} subtitle="Banyo tipi" />
          <InfoPanel icon={Moon} title={room.price} subtitle="Gecelik başlangıç" />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
          <div>
            <p className="section-kicker">Oda detayları</p>
            <h2 className="section-title">{room.name} içinde nasıl bir gün geçer?</h2>
            <p className="mt-6 text-lg leading-8 text-muted">{room.longDescription}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={onBack} className="btn-outline justify-center border-sea/20 text-sea hover:bg-sea hover:text-white">
                Diğer odaları gör
              </button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <DetailList title="Öne çıkanlar" items={room.highlights} />
            <DetailList title="Oda imkanları" items={room.amenities} />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="section-kicker">Galeri</p>
              <h2 className="font-serif text-4xl text-ink">Odanın atmosferi</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {room.gallery.map((image, index) => (
              <img key={image} src={image} alt={`${room.name} galeri ${index + 1}`} className="h-72 w-full rounded-[1.2rem] object-cover shadow-sm md:h-96" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
