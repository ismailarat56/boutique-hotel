import { CalendarDays, ConciergeBell, Mail, ShieldCheck } from 'lucide-react';

import { Badge } from '@/src/components/ui';

import { BookingCard } from './BookingCard';

export function AvailabilitySection({
  guests,
  nights,
  estimate,
  checkIn,
  roomSlug,
  setGuests,
  setNights,
  setCheckIn,
  setRoomSlug,
}: {
  guests: number;
  nights: number;
  estimate: string;
  checkIn: string;
  roomSlug: string;
  setGuests: (value: number) => void;
  setNights: (value: number) => void;
  setCheckIn: (value: string) => void;
  setRoomSlug: (value: string) => void;
}) {
  return (
    <section id="availability" className="bg-white py-18 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
        <div>
          <p className="section-kicker">Boş gün kontrolü</p>
          <h2 className="section-title">Oda müsaitliğini veritabanı olmadan kontrol et.</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Örnek doluluk takvimi site kodu içinde tutulur. Tarih ve oda seçildiğinde sonuç tarayıcıda hesaplanır; ödeme almadan önce konuk hızlıca yön bulur, ekip de talebi genel iletişim bilgileriyle takip eder.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Badge icon={CalendarDays} text="Statik doluluk takvimi" />
            <Badge icon={ConciergeBell} text="Danışman takibi" />
            <Badge icon={ShieldCheck} text="Ödeme entegrasyonu yok" />
            <Badge icon={Mail} text="E-posta ile takip" />
          </div>
        </div>
        <BookingCard
          guests={guests}
          nights={nights}
          estimate={estimate}
          checkIn={checkIn}
          roomSlug={roomSlug}
          setGuests={setGuests}
          setNights={setNights}
          setCheckIn={setCheckIn}
          setRoomSlug={setRoomSlug}
        />
      </div>
    </section>
  );
}
