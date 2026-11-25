import { Mail, MapPin, Phone } from 'lucide-react';

import { ContactLink } from '@/src/components/ui';
import { locationItems } from '@/src/data/hotel';
import { HotelGoogleMap } from './HotelGoogleMap';

export function LocationContactSection() {
  return (
    <section id="location" className="bg-white py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker">Konum ve iletişim</p>
            <h2 className="section-title">Adres, mesafe ve temas bilgisi aynı düzende.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Alaçatı çarşısının kenarında, sessiz bir taş mahalledeyiz. Konaklama öncesi transfer, restoran ve koy planı için iletişim kanalları açık ve görünür tutuldu.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
          <div className="rounded-lg border border-ink/10 bg-surface p-5 sm:p-6">
            <h3 className="font-serif text-3xl text-ink">Iresine Hotel</h3>
            <p className="mt-3 leading-7 text-muted">Alaçatı Mah. 12000 Sk. No: 5, Çeşme / İzmir</p>
            <div className="mt-6 grid gap-3">
              <div className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-4 font-semibold text-ink">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-aqua">
                  <Phone className="h-4 w-4" />
                </span>
                <span>+90 232 712 34 56</span>
              </div>
              <ContactLink icon={Mail} label="stay@iresinehotel.com" href="mailto:stay@iresinehotel.com" />
              <ContactLink icon={MapPin} label="Google Haritalar'da aç" href="https://maps.google.com/?q=38.2829,26.3744" />
            </div>
            <div className="mt-6 border-t border-ink/10 pt-5 text-sm leading-7 text-muted">
              <p><strong className="text-ink">Check-in:</strong> 15:00</p>
              <p><strong className="text-ink">Check-out:</strong> 12:00</p>
              <p><strong className="text-ink">Transfer:</strong> İzmir Adnan Menderes Havalimanı için özel araç planlanır.</p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-lg border border-ink/10 bg-white p-3 shadow-[0_18px_60px_rgba(11,41,49,.08)]">
              <HotelGoogleMap />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {locationItems.map((item) => (
                <div key={item.place} className="rounded-lg border border-ink/10 bg-surface p-5 shadow-sm">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-muted">{item.note}</span>
                    <MapPin className="h-5 w-5 text-aqua" />
                  </div>
                  <strong className="font-serif text-4xl text-sea">{item.time}</strong>
                  <p className="mt-2 text-muted">{item.place}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
