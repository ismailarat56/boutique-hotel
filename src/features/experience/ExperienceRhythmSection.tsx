import { experienceMoments } from '@/src/data/hotel';

export function ExperienceRhythmSection() {
  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker">Günün akışı</p>
            <h2 className="section-title">Program katı değil, iyi hazırlanmış.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Konuklar güne avluda başlar, öğleden sonra havuz veya koy rotasına geçer, akşamı bahçe restoranında tamamlar. Concierge ekibi aradaki tüm detayları sadeleştirir.
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
