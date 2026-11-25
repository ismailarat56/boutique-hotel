import {
  Bath,
  Car,
  Coffee,
  ConciergeBell,
  DoorOpen,
  Dumbbell,
  Heart,
  MapPin,
  Moon,
  ShieldCheck,
  Sparkles,
  Trees,
  Utensils,
  Waves,
  Wifi,
  Wind,
} from 'lucide-react';

import type { Page, Room } from '@/src/types';

export const navItems: Array<{ label: string; page: Page }> = [
  { label: 'Deneyim', page: 'experience' },
  { label: 'Odalar', page: 'rooms' },
  { label: 'Müsaitlik', page: 'availability' },
  { label: 'Galeri', page: 'gallery' },
  { label: 'Konum', page: 'location' },
];

export const rooms: Room[] = [
  {
    slug: 'courtyard-room',
    name: 'Courtyard Room',
    tagline: 'Avluya açılan sakin oda',
    size: '28 m2',
    guests: '2 misafir',
    bed: 'Queen yatak',
    bath: 'Yağmur duş',
    price: 'EUR 185',
    accent: 'bg-aqua',
    hero: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Taş avluya bakan Fransız balkon, keten dokular ve gün ışığını yumuşatan doğal tonlar.',
    longDescription:
      'Courtyard Room, kısa kaçamaklar ve Alaçatı sokaklarını keşfetmek isteyen çiftler için tasarlandı. Odada özel üretim ahşap mobilyalar, sessiz klima, hızlı internet ve yerel seramik detayları bulunur. Sabahları avludan gelen kahve kokusu, akşamları ise bahçenin loş atmosferi odaya sakin bir ritim verir.',
    highlights: ['Avlu manzarası', 'Fransız balkon', 'Ses yalıtımlı pencere', 'Yerel seramik detaylar'],
    amenities: ['Fiber Wi-Fi', 'Minibar', 'Pamuk saten nevresim', 'Organik banyo seti', 'Akıllı TV', 'Kasa'],
  },
  {
    slug: 'garden-suite',
    name: 'Garden Suite',
    tagline: 'Bahçe teraslı ferah suit',
    size: '42 m2',
    guests: '2-3 misafir',
    bed: 'King yatak',
    bath: 'Mermer banyo',
    price: 'EUR 260',
    accent: 'bg-sea',
    hero: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Aromatik bahçeye açılan özel teras, geniş oturma alanı ve uzun konaklamalar için güçlü depolama.',
    longDescription:
      'Garden Suite, otelin bahçesiyle doğrudan ilişki kuran en dengeli oda tipidir. Ayrı oturma köşesi, çalışma nişi ve geniş gardırop uzun konaklamalarda düzenli bir yaşam alanı sunar. Terasta kahvaltı servisi, gün batımı kokteyli veya özel kutlama kurulumu talep edilebilir.',
    highlights: ['Özel bahçe terası', 'Ayrı oturma alanı', 'Çalışma nişi', 'Teras kahvaltısı seçeneği'],
    amenities: ['Nespresso', 'Bluetooth hoparlör', 'Çift lavabo', 'Bornoz ve terlik', 'Yoga matı', 'Turn-down servisi'],
  },
  {
    slug: 'pool-house',
    name: 'Pool House',
    tagline: 'Havuza direkt geçişli özel ev',
    size: '58 m2',
    guests: '2 misafir',
    bed: 'King yatak',
    bath: 'Küvet + duş',
    price: 'EUR 390',
    accent: 'bg-sky',
    hero: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=1900&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop',
    ],
    description: 'Havuz kenarında bağımsız giriş, özel güneşlenme alanı, ayrı salon ve akşam hazırlık servisi.',
    longDescription:
      'Pool House, Iresine Hotel’in en mahrem konaklama seçeneğidir. Havuza doğrudan erişim, güneşlenme platformu, ayrı salon ve büyük banyo ile balayı, özel kutlama veya tamamen yavaşlamak isteyen konuklar için hazırlandı. Concierge ekibi oda içi akşam yemeği, masaj ve koy transferini tek plan içinde organize eder.',
    highlights: ['Havuza direkt erişim', 'Bağımsız giriş', 'Özel güneşlenme alanı', 'Oda içi yemek kurulumu'],
    amenities: ['Şampanya soğutucu', 'Küvet', 'Güneşlenme havlusu', 'Premium minibar', 'Özel concierge', 'Gece hazırlığı'],
  },
];

export const amenityGroups = [
  {
    icon: Waves,
    title: 'Taş avlu havuzu',
    copy: 'Gölgelikli şezlonglar, soğuk havlu servisi ve sakin saat planlamasıyla kalabalık hissini azaltan havuz alanı.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Trees,
    title: 'Bahçe ve avlu',
    copy: 'Begonvil, lavanta ve zeytin ağaçları arasında kahvaltı, kitap okuma ve akşam kokteyli için ayrılmış köşeler.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Sparkles,
    title: 'Wellness stüdyosu',
    copy: 'Aromaterapi masajları, buhar odası, sabah pilatesi ve odada bakım seçenekleri tek bir concierge akışında.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: ConciergeBell,
    title: 'Kişisel concierge',
    copy: 'Koy rotası, restoran rezervasyonu, transfer, özel kutlama ve sörf dersi planlaması için tek temas noktası.',
    image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1200&auto=format&fit=crop',
  },
];

export const locationItems = [
  { place: 'Alaçatı çarşı', time: '7 dk', note: 'Yürüyüş' },
  { place: 'Ilıca Plajı', time: '9 dk', note: 'Araçla' },
  { place: 'Sörf okulları', time: '12 dk', note: 'Transfer' },
  { place: 'Çeşme Marina', time: '18 dk', note: 'Araçla' },
];

export const experienceMoments = [
  {
    time: '08:00',
    title: 'Avluda kahvaltı',
    copy: 'Kahvaltı masaları güneşe göre kurulur; taş fırın ekmekleri, Ege otları ve küçük üretici peynirleri servis edilir.',
    icon: Coffee,
  },
  {
    time: '11:30',
    title: 'Havuz ve koy planı',
    copy: 'Sessiz havuz saatleri, soğuk havlu servisi ve isteyen konuklar için Ilıca veya Delikli Koy transferi hazırlanır.',
    icon: Waves,
  },
  {
    time: '17:00',
    title: 'Wellness molası',
    copy: 'Aromaterapi masajı, buhar odası veya odada bakım seçeneği concierge ekibiyle tek akışta organize edilir.',
    icon: Sparkles,
  },
  {
    time: '20:30',
    title: 'Bahçe akşamı',
    copy: 'Narenciye kokteylleri, günlük balık ve hafif Ege tabaklarıyla avlu akşamları sakin bir restoran ritmine döner.',
    icon: Moon,
  },
];

export const signatureServices = [
  { icon: ConciergeBell, title: 'Kişisel planlama', copy: 'Restoran, plaj, transfer ve kutlama detayları tek danışman üzerinden netleşir.' },
  { icon: Wind, title: 'Sessiz konfor', copy: 'Taş duvarlar, gölgeli avlu ve odalarda kontrollü iklimlendirme yaz sıcağını yumuşatır.' },
  { icon: ShieldCheck, title: 'Yetişkin dostu düzen', copy: 'Havuz, restoran ve ortak alanlar daha sakin bir konaklama temposu için planlanır.' },
  { icon: Dumbbell, title: 'Hafif hareket', copy: 'Sabah pilatesi, yoga matı ve sörf okulu yönlendirmesi konaklamaya eklenebilir.' },
];

export const roomComforts = [
  { icon: Wifi, title: 'Çalışmaya uygun', copy: 'Fiber internet, priz erişimi ve sessiz oda düzeni kısa çalışma blokları için hazır.' },
  { icon: Bath, title: 'Banyo konforu', copy: 'Organik banyo seti, pamuklu havlu, bornoz ve seçili odalarda küvet alternatifi.' },
  { icon: Coffee, title: 'Oda içi servis', copy: 'Nespresso, minibar ve akşam hazırlık servisi oda tipine göre farklılaşır.' },
  { icon: DoorOpen, title: 'Açık alan ilişkisi', copy: 'Avlu balkonu, bahçe terası veya havuz geçişiyle her odanın dış mekan bağı net.' },
];

export const reservationSteps = [
  { title: 'Tarihi seç', copy: 'Giriş günü, gece sayısı ve misafir adedi tarayıcıda hesaplanır.' },
  { title: 'Odayı karşılaştır', copy: 'Seçilen oda tipi için örnek doluluk takvimi kontrol edilir.' },
  { title: 'Danışmanla netleştir', copy: 'Uygun görünen tarih genel iletişim bilgileri üzerinden kesin rezervasyona çevrilir.' },
];

export const galleryCollections = [
  {
    title: 'Avlu ve havuz',
    copy: 'Taş yapıların arasında korunaklı, gölgeli ve gün boyu sakin kalacak şekilde planlanan ana yaşam alanı.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1300&auto=format&fit=crop',
    ],
  },
  {
    title: 'Odalar',
    copy: 'Keten dokular, doğal taş, ahşap mobilya ve sade depolama çözümleriyle yazlık ama düzenli oda hissi.',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1300&auto=format&fit=crop',
    ],
  },
  {
    title: 'Kahvaltı ve restoran',
    copy: 'Avlu kahvaltısı, hafif Ege tabakları ve akşam servisi için günün ritmine göre hazırlanan yeme içme alanları.',
    images: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1300&auto=format&fit=crop',
    ],
  },
  {
    title: 'Alaçatı sokakları',
    copy: 'Taş evler, kafe önleri ve begonvilli dar sokaklar otelden yürüyerek çıkılan sakin keşif rotasını tamamlar.',
    images: [
      'https://images.unsplash.com/photo-1649271552252-05212de45596?q=80&w=1300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1714572523288-b7f3030f7972?q=80&w=1300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1687677952407-67e811dc401f?q=80&w=1300&auto=format&fit=crop',
    ],
  },
  {
    title: 'Sahil ve koy rotaları',
    copy: 'Ilıca, Delikli Koy ve Çeşme kıyısı için kısa araç mesafeleri, günün deniz planını esnek tutar.',
    images: [
      'https://images.unsplash.com/photo-1564403526882-db54feee2d09?q=80&w=1300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1663666237579-2a8d3e54825c?q=80&w=1300&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1640696487828-7843927dfc31?q=80&w=1300&auto=format&fit=crop',
    ],
  },
];

export const transferOptions = [
  { icon: Car, title: 'Havalimanı transferi', copy: 'İzmir Adnan Menderes Havalimanı için özel araç ve karşılama planlanır.' },
  { icon: MapPin, title: 'Yürüyüş rotası', copy: 'Alaçatı çarşıya araçsız gidilir; akşam dönüşleri kısa ve rahattır.' },
  { icon: Waves, title: 'Koy programı', copy: 'Ilıca, sörf okulları ve seçili koylar için saatli transfer önerilir.' },
];

export const localGuide = [
  { title: 'Sabah', copy: 'Çarşı kalabalıklaşmadan kahve, antikacı ve taş sokak rotası.' },
  { title: 'Öğlen', copy: 'Ilıca plajı veya sörf okullarına kısa araç transferi.' },
  { title: 'Akşam', copy: 'Bahçe restoranı sonrası Alaçatı barları ve kısa yürüyüşle otele dönüş.' },
];

export const unavailableDates: Record<string, string[]> = {
  'courtyard-room': ['2026-06-20', '2026-06-21', '2026-06-29', '2026-07-04', '2026-07-05'],
  'garden-suite': ['2026-06-18', '2026-06-19', '2026-07-01', '2026-07-02', '2026-07-11'],
  'pool-house': ['2026-06-24', '2026-06-25', '2026-06-26', '2026-07-07', '2026-07-08'],
};

export const todayIso = '2026-05-20';
