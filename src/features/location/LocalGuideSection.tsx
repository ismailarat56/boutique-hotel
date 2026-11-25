import { localGuide, transferOptions } from '@/src/data/hotel';

export function LocalGuideSection() {
  return (
    <section className="bg-surface py-18 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
        <div>
          <p className="section-kicker">Çevre rehberi</p>
          <h2 className="section-title">Otel çevresi kısa planlarla daha rahat gezilir.</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Çarşı, plaj, sörf okulları ve marina rotaları aynı güne sıkıştırılmadan; sabah, öğlen ve akşam için sade bir planla önerilir.
          </p>
          <div className="mt-8 grid gap-3">
            {localGuide.map((item) => (
              <div key={item.title} className="rounded-lg border border-ink/10 bg-white p-4">
                <strong className="font-serif text-xl text-sea">{item.title}</strong>
                <p className="mt-1 leading-7 text-muted">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {transferOptions.map((item) => (
            <article key={item.title} className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
              <item.icon className="mb-5 h-6 w-6 text-aqua" />
              <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
