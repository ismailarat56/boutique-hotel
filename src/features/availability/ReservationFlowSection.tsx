import { reservationSteps } from '@/src/data/hotel';

export function ReservationFlowSection() {
  return (
    <section className="bg-surface py-18 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="section-kicker">Rezervasyon akışı</p>
          <h2 className="section-title">Ön kontrol hızlı, kesinleşme kişisel.</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Statik takvim ziyaretçiye anında yön verir. Özel talepler, transfer, kutlama kurulumu ve oda içi servisler ise danışman görüşmesinde planlanır.
          </p>
        </div>
        <div className="grid gap-4">
          {reservationSteps.map((step, index) => (
            <article key={step.title} className="grid gap-4 rounded-lg border border-ink/10 bg-white p-5 shadow-sm sm:grid-cols-[auto_1fr] sm:items-start">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-sea font-serif text-2xl text-white">{index + 1}</span>
              <div>
                <h3 className="font-serif text-2xl text-ink">{step.title}</h3>
                <p className="mt-2 leading-7 text-muted">{step.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
