import { motion } from 'motion/react';
import { ArrowRight, BedDouble, CalendarCheck, Coffee, DoorOpen, MapPin, Sparkles, Utensils, Waves } from 'lucide-react';

import { InfoPill } from '@/src/components/ui';
import { amenityGroups, experienceMoments, locationItems, rooms, signatureServices } from '@/src/data/hotel';
import { fadeUp } from '@/src/lib/motion';
import type { NavigateToPage } from '@/src/types';

const storyPoints = [
  {
    title: 'Korunaklı avlu',
    copy: 'Taş duvarlar, gölgeli oturma köşeleri ve havuz çevresi gün boyunca sakin bir ortak alan hissi verir.',
  },
  {
    title: 'Hazırlıklı servis',
    copy: 'Kahvaltı, transfer, restoran ve koy planı konaklama öncesinde netleştirilebilir.',
  },
  {
    title: 'Az odalı düzen',
    copy: '18 oda ve suit, kalabalık otel hissi yerine daha kişisel ve sessiz bir tempo oluşturur.',
  },
];

export function HomeStorySection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <p className="section-kicker">Iresine Hotel</p>
          <h2 className="section-title">Alaçatı merkezine yakın, kendi ritmini koruyan bir avlu oteli.</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Iresine Hotel, restore edilmiş taş yapıların içinde konumlanan küçük ölçekli bir konaklama deneyimi sunar. Güne avluda kahvaltıyla başlanır, öğleden sonra havuz veya koy planı yapılır, akşam ise bahçe restoranı ve Alaçatı sokakları aynı program içinde birleşir.
          </p>
          <div className="mt-8 grid gap-4">
            {storyPoints.map((point) => (
              <article key={point.title} className="border-l-2 border-aqua bg-cream px-5 py-4">
                <h3 className="font-serif text-2xl text-ink">{point.title}</h3>
                <p className="mt-2 leading-7 text-muted">{point.copy}</p>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65 }} className="grid gap-4 sm:grid-cols-[1.15fr_.85fr]">
          <div className="relative min-h-[34rem] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop"
              alt="Iresine Hotel havuzlu taş avlu"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/62 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-sm font-bold uppercase tracking-[.18em] text-sky">Avlu yaşamı</span>
              <p className="mt-2 font-serif text-3xl">Günün çoğu açık havada, gölgeli ve sakin alanlarda geçer.</p>
            </div>
          </div>
          <div className="grid gap-4">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop"
              alt="Bahçe restoranında Ege kahvaltısı"
              className="h-64 w-full rounded-lg object-cover sm:h-full"
            />
            <div className="rounded-lg bg-ink p-5 text-white">
              <Coffee className="h-6 w-6 text-sky" />
              <strong className="mt-5 block font-serif text-3xl">Kahvaltı dahil</strong>
              <p className="mt-3 leading-7 text-white/72">Yerel üreticilerden peynir, zeytin, ot ve reçellerle hazırlanan sakin avlu servisi.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function HomeRoomsPreviewSection({ onNavigate }: { onNavigate: NavigateToPage }) {
  return (
    <section className="bg-surface py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.86fr_1.14fr] lg:items-end">
          <div>
            <p className="section-kicker">Konaklama</p>
            <h2 className="section-title">Üç oda tipi, üç farklı konaklama temposu.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Oda seçenekleri sadece metrekareye göre değil, dış mekan ilişkisine göre de ayrılır. Avlu balkonu, bahçe terası veya havuz geçişi arasından seyahat tarzına uygun alan seçilebilir.
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
              className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-[0_18px_60px_rgba(11,41,49,.08)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={room.hero} alt={room.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/68 via-ink/10 to-transparent" />
                <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${room.accent}`}>
                  {room.tagline}
                </span>
                <h3 className="absolute bottom-4 left-4 right-4 font-serif text-3xl text-white">{room.name}</h3>
              </div>
              <div className="p-5">
                <p className="leading-7 text-muted">{room.description}</p>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <InfoPill icon={DoorOpen} text={room.size} />
                  <InfoPill icon={BedDouble} text={room.guests} />
                </div>
                <div className="mt-5 border-t border-ink/10 pt-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-muted">Öne çıkanlar</span>
                  <ul className="mt-3 grid gap-2 text-sm font-semibold text-ink">
                    {room.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-aqua" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl leading-7 text-muted">Daha fazla fotoğraf, banyo detayları ve oda içi servis farkları oda sayfasında karşılaştırılabilir.</p>
          <button type="button" onClick={() => onNavigate('rooms')} className="btn-primary justify-center bg-ink text-white hover:bg-aqua">
            Odaları detaylı incele
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function HomeRhythmSection() {
  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker">Günün akışı</p>
            <h2 className="section-title">Konaklama katı bir programa değil, iyi hazırlanmış seçeneklere dayanır.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Ana fikir basit: sabahı ağırdan almak, öğleden sonrayı suya veya koylara ayırmak, akşamı ise bahçe restoranı ve Alaçatı merkez arasında rahatça planlamak.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {experienceMoments.map((item) => (
            <article key={item.title} className="rounded-lg border border-ink/10 bg-cream p-5 shadow-sm">
              <div className="mb-7 flex items-center justify-between">
                <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-sea">{item.time}</span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-sky/55 text-ink">
                  <item.icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeServicesSection({ onNavigate }: { onNavigate: NavigateToPage }) {
  return (
    <section className="bg-ink py-18 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-kicker text-sky">Hizmetler</p>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">Küçük otel ölçeğinde daha görünür servis.</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Iresine Hotel’de servis listesi kalabalık görünmek için değil, konukların gerçek ihtiyaçlarını önden çözmek için tasarlanır.
            </p>
            <button type="button" onClick={() => onNavigate('experience')} className="mt-8 btn-primary bg-sky text-ink hover:bg-white">
              Deneyimi keşfet
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {signatureServices.map((service) => (
              <article key={service.title} className="rounded-lg border border-white/12 bg-white/8 p-5">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-aqua">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-serif text-2xl">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeAmenitiesGallerySection({ onNavigate }: { onNavigate: NavigateToPage }) {
  const featuredAmenities = amenityGroups.slice(0, 3);

  return (
    <section className="bg-cream py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker">Alanlar</p>
            <h2 className="section-title">Havuz, bahçe ve restoran aynı avlu kurgusunda birleşir.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Otelin ortak alanları uzun açıklamalara ihtiyaç bırakmayacak kadar okunaklıdır: su, gölge, iyi kahve, hafif yemek ve sakin oturma alanları aynı merkezde toplanır.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredAmenities.map((amenity) => (
            <article key={amenity.title} className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-[0_18px_60px_rgba(11,41,49,.08)]">
              <div className="relative aspect-[4/3]">
                <img src={amenity.image} alt={amenity.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-sky/55 text-ink">
                  <amenity.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-ink">{amenity.title}</h3>
                <p className="mt-3 leading-7 text-muted">{amenity.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <InfoPill icon={Waves} text="Havuz alanı" />
            <InfoPill icon={Utensils} text="Bahçe restoranı" />
            <InfoPill icon={Sparkles} text="Wellness" />
          </div>
          <button type="button" onClick={() => onNavigate('gallery')} className="btn-outline justify-center border-sea/25 bg-white text-ink hover:bg-sky">
            Galeriyi aç
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function HomeLocationPreviewSection({ onNavigate }: { onNavigate: NavigateToPage }) {
  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
        <div className="relative min-h-[34rem] overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1649271552252-05212de45596?q=80&w=1800&auto=format&fit=crop"
            alt="Alaçatı taş sokakları"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-ink/12 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <MapPin className="mb-4 h-7 w-7 text-sky" />
            <h2 className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Alaçatı sokaklarına yakın, otel içinde sakin.</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/76">Çarşıya yürüyerek ulaşılır; plaj, sörf okulları ve marina için kısa araç planları yapılır.</p>
          </div>
        </div>

        <div>
          <p className="section-kicker">Konum</p>
          <h2 className="section-title">Gündüz denize, akşam merkeze kolay geçiş.</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Konaklamanın güçlü tarafı sadece otel içi sakinlik değil. Iresine Hotel, Alaçatı’nın restoran, kahve ve sokak rotalarına yakın kalırken plaj ve koy planlarını da kolaylaştırır.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {locationItems.map((item) => (
              <article key={item.place} className="rounded-lg border border-ink/10 bg-cream p-5">
                <span className="text-sm font-bold uppercase tracking-wide text-muted">{item.note}</span>
                <strong className="mt-4 block font-serif text-4xl text-sea">{item.time}</strong>
                <p className="mt-2 text-muted">{item.place}</p>
              </article>
            ))}
          </div>
          <button type="button" onClick={() => onNavigate('location')} className="mt-8 btn-primary bg-sea text-white hover:bg-aqua">
            Konum ve iletişim
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function HomeReservationCtaSection({ onNavigate }: { onNavigate: NavigateToPage }) {
  return (
    <section className="bg-surface py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg bg-sea px-5 py-12 text-white sm:px-8 lg:px-12">
          <img
            src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=1800&auto=format&fit=crop"
            alt="Iresine Hotel havuz kenarı"
            className="absolute inset-0 h-full w-full object-cover opacity-28"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-sky">Rezervasyon</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">Tarih, oda tipi ve konaklama planını birkaç adımda netleştir.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
                Önce oda tiplerini karşılaştırabilir, ardından örnek müsaitlik ekranından tarih aralığını kontrol edip otelle iletişime geçebilirsin.
              </p>
            </div>
            <div className="grid gap-3 lg:w-72">
              <button type="button" onClick={() => onNavigate('availability')} className="btn-primary justify-center bg-sky text-ink hover:bg-white">
                Müsaitlik kontrol et
                <CalendarCheck className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
