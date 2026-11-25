import { MapPin } from 'lucide-react';

const HOTEL_LOCATION = {
  title: 'Iresine Hotel',
  address: 'Alaçatı Mah. 12000 Sk. No: 5, Çeşme / İzmir',
  position: {
    lat: 38.2829,
    lng: 26.3744,
  },
};

const createEmbedUrl = (position: typeof HOTEL_LOCATION.position) => {
  const coordinates = `${position.lat},${position.lng}`;

  return `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${coordinates}!6i13!3m1!1str!5m1!1str`;
};

export function HotelGoogleMap({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative min-h-[390px] w-full overflow-hidden rounded-lg border border-ink/10 bg-surface ${className}`}
      aria-label="Iresine Hotel Google Maps haritası"
    >
      <iframe
        title="Iresine Hotel haritası"
        src={createEmbedUrl(HOTEL_LOCATION.position)}
        className="h-full min-h-[390px] w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="pointer-events-none absolute left-3 top-3 z-10 max-w-[calc(100%-1.5rem)] rounded-lg bg-white/95 px-4 py-3 text-ink shadow-[0_18px_42px_rgba(11,41,49,.16)] backdrop-blur sm:left-4 sm:top-4 sm:max-w-sm sm:px-5 sm:py-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-aqua/10 text-aqua">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl leading-tight text-ink">{HOTEL_LOCATION.title}</h3>
            <p className="mt-1 text-xs font-semibold leading-relaxed text-muted sm:text-sm">
              {HOTEL_LOCATION.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
