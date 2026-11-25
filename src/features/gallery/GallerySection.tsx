import { galleryCollections } from '@/src/data/hotel';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1500&auto=format&fit=crop',
    alt: 'Taş avluda havuza açılan butik otel yaşam alanı',
    className: 'md:col-span-2 lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000&auto=format&fit=crop',
    alt: 'Bahçe suite ait aydınlık oturma köşesi',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop',
    alt: 'Bahçe restoranında akşam yemeği masaları',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1649271552252-05212de45596?q=80&w=1000&auto=format&fit=crop',
    alt: 'Alaçatı taş sokaklarında begonvilli yürüyüş rotası',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop',
    alt: 'Wellness stüdyosunda sakin bakım alanı',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1000&auto=format&fit=crop',
    alt: 'Zeytin ağaçları ve taş duvarlarla çevrili otel avlusu',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000&auto=format&fit=crop',
    alt: 'Keten dokularla hazırlanmış ferah misafir odası',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1000&auto=format&fit=crop',
    alt: 'Ege kahvaltısı için hazırlanmış restoran masası',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1564403526882-db54feee2d09?q=80&w=1000&auto=format&fit=crop',
    alt: 'Çeşme kıyısında sakin plaj ve koy rotası',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1687677929096-e55dd0bb17f6?q=80&w=1000&auto=format&fit=crop',
    alt: 'Alaçatı sokaklarında taş yapı ve bahçe kapısı',
    className: '',
  },
];

const collectionImageAlts: Record<string, string[]> = {
  'Avlu ve havuz': [
    'Gölgelikli taş avluda butik otel havuzu',
    'Havuz kenarında şezlonglar ve sakin bahçe düzeni',
    'Taş duvarlı avluda yeşil dinlenme köşesi',
  ],
  Odalar: [
    'Doğal ışık alan yatak odası',
    'Bahçe suite ait geniş yatak ve oturma alanı',
    'Ahşap detaylı sade butik otel odası',
  ],
  'Kahvaltı ve restoran': [
    'Bahçe restoranında akşam servisi',
    'Ege kahvaltısı için hazırlanmış masa',
    'Açık mutfakta restoran servis hazırlığı',
  ],
  'Alaçatı sokakları': [
    'Begonvilli Alaçatı taş sokağı',
    'Alaçatı sokaklarında masa ve sandalyeli kafe önü',
    'Alaçatı taş sokaklarında yürüyüş rotası',
  ],
  'Sahil ve koy rotaları': [
    'Delikli Koy kıyısında deniz manzarası',
    'Çeşme sahilinde denize yakın oturma alanı',
    'Çeşme kıyısında kum ve berrak su detayı',
  ],
};

export function GallerySection() {
  return (
    <section id="gallery" className="bg-[#f7f3ec] py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="section-kicker">Galeri</p>
            <h2 className="section-title">Mekan hissi tek bakışta okunur.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted">
            Galeri alanı oda, havuz, restoran ve çevre hissini birlikte verir. Görseller aynı tasarım dilinde kırpılır; yoğun bir fotoğraf duvarı yerine karar vermeyi kolaylaştıran gruplar kullanılır.
          </p>
        </div>
        <div className="grid auto-rows-[220px] gap-3 md:grid-cols-2 lg:grid-cols-5">
          {galleryImages.map((image) => (
            <figure key={image.src} className={`relative overflow-hidden rounded-lg bg-white shadow-sm ${image.className}`}>
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/75 to-transparent px-4 pb-4 pt-12 text-sm font-semibold text-white">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid gap-6">
          {galleryCollections.map((collection, index) => (
            <article key={collection.title} className="grid gap-5 rounded-lg border border-ink/10 bg-white p-4 shadow-[0_18px_60px_rgba(11,41,49,.08)] lg:grid-cols-[.86fr_1.14fr]">
              <div className={`flex flex-col justify-center p-2 sm:p-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="mb-4 inline-flex w-fit rounded-full bg-sky/45 px-3 py-1 text-sm font-bold text-sea">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-3xl text-ink sm:text-4xl">{collection.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-muted">{collection.copy}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {collection.images.map((image, imageIndex) => {
                  const imageAlt = collectionImageAlts[collection.title]?.[imageIndex] ?? `${collection.title} galeri fotoğrafı`;

                  return (
                    <img key={image} src={image} alt={imageAlt} className="h-64 w-full rounded-lg object-cover sm:h-80 xl:h-72" />
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
