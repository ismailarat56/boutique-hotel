import { RoomFact } from '@/src/components/ui';
import { roomComforts, rooms } from '@/src/data/hotel';

export function RoomComfortSection() {
  return (
    <section className="bg-white py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.88fr_1.12fr] lg:items-end">
          <div>
            <p className="section-kicker">Oda karar rehberi</p>
            <h2 className="section-title">Seçim oda adından değil, tatil ritminden başlar.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Kısa kaçamak için avlu odası, uzun konaklama için bahçe suit, özel kutlama veya tam mahremiyet için Pool House daha doğru başlangıç noktasıdır.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {rooms.map((room) => (
            <article key={room.slug} className="rounded-lg border border-ink/10 bg-surface p-5">
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${room.accent}`}>{room.tagline}</span>
              <h3 className="mt-5 font-serif text-3xl text-ink">{room.name}</h3>
              <dl className="mt-6 grid gap-3 text-sm">
                <RoomFact label="Alan" value={room.size} />
                <RoomFact label="Misafir" value={room.guests} />
                <RoomFact label="Yatak" value={room.bed} />
                <RoomFact label="Banyo" value={room.bath} />
              </dl>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roomComforts.map((item) => (
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
