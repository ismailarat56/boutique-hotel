import { signatureServices } from '@/src/data/hotel';

export function ServicePromiseSection() {
  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
        <div>
          <p className="section-kicker">Servis dili</p>
          <h2 className="section-title">Küçük otel ölçeğinde, büyük otel düzeni.</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Otelde amaç kalabalık bir tesis hissi yaratmak değil; az odalı yapının avantajını görünür, hızlı ve kişisel servisle hissettirmek.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {signatureServices.map((item) => (
            <article key={item.title} className="rounded-lg border border-ink/10 bg-surface p-5">
              <item.icon className="mb-6 h-6 w-6 text-aqua" />
              <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
