import { Coffee, Heart, Moon, Utensils } from 'lucide-react';

import { Badge } from '@/src/components/ui';

export function DiningSection() {
  return (
    <section id="dining" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div className="relative min-h-[430px] overflow-hidden rounded-[1.7rem] shadow-[0_28px_90px_rgba(11,41,49,.12)]">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1700&auto=format&fit=crop" alt="Bahçe restoranında akşam yemeği" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/88 p-4 backdrop-blur-xl sm:left-auto sm:w-72">
            <p className="text-sm font-semibold text-aqua">Liora Kitchen</p>
            <p className="mt-1 text-sm leading-6 text-muted">Kahvaltı 08:00-12:00, akşam menüsü 19:00-23:00.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="section-kicker">Lezzet</p>
          <h2 className="section-title">Kahvaltı uzun, akşamlar hafif ve yerel.</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Ege otları, taş fırın ekmekleri, günlük balıklar, küçük üretici peynirleri ve narenciye kokteylleri. Tatil hissini abartmadan taşıyan, sade ama karakterli bir bahçe restoranı.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Badge icon={Coffee} text="Serpme Ege kahvaltısı" />
            <Badge icon={Utensils} text="34 kişilik bahçe restoranı" />
            <Badge icon={Moon} text="Gün batımı kokteylleri" />
            <Badge icon={Heart} text="Yerel üretici menüsü" />
          </div>
        </div>
      </div>
    </section>
  );
}
