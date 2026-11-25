import { ArrowRight } from 'lucide-react';

import type { NavigateToPage, Page } from '@/src/types';

const links: Array<{
  page: Page;
  title: string;
  copy: string;
  image: string;
}> = [
  {
    page: 'experience',
    title: 'Otel deneyimi',
    copy: 'Avlu, havuz, wellness, concierge ve bahçe restoranı hakkında detaylı bilgi.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    page: 'rooms',
    title: 'Odalar',
    copy: 'Courtyard Room, Garden Suite ve Pool House seçeneklerini karşılaştır.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
  },
  {
    page: 'availability',
    title: 'Boş gün kontrolü',
    copy: 'Statik takvimle seçtiğin tarih aralığı için ön müsaitlik sonucu al.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
  },
  {
    page: 'location',
    title: 'Konum ve iletişim',
    copy: 'Adres, çevre mesafeleri, telefon, e-posta ve sosyal medya bağlantıları.',
    image: 'https://images.unsplash.com/photo-1649271552252-05212de45596?q=80&w=1200&auto=format&fit=crop',
  },
];

export function HomeLinksSection({ onNavigate }: { onNavigate: NavigateToPage }) {
  return (
    <section className="bg-cream py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.86fr_1.14fr] lg:items-end">
          <div>
            <p className="section-kicker">Daha fazla detay</p>
            <h2 className="section-title">Kararını netleştirmek için derin sayfalara geç.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Ana sayfada otelin genel hikayesi, oda farkları, hizmetler ve konum öne çıkarıldı. Daha ayrıntılı karşılaştırma için ilgili sayfalara doğrudan geçebilirsin.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {links.map((item) => (
            <button
              key={item.page}
              type="button"
              onClick={() => onNavigate(item.page)}
              className="group overflow-hidden rounded-lg border border-ink/10 bg-white text-left shadow-[0_18px_60px_rgba(11,41,49,.08)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <strong className="absolute bottom-4 left-4 right-4 font-serif text-2xl text-white">{item.title}</strong>
              </div>
              <div className="p-5">
                <p className="min-h-20 leading-7 text-muted">{item.copy}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-sea">
                  Sayfaya git
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
