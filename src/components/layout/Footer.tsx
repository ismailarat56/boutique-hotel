export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-[1.15fr_.85fr_.8fr] lg:px-8">
        <div>
          <h2 className="font-serif text-4xl">Iresine Hotel</h2>
          <p className="mt-4 max-w-md leading-7 text-white/65">Alaçatı’da avlu, havuz, kahvaltı ve kişisel concierge odağında butik tatil deneyimi.</p>
        </div>
        <div>
          <h3 className="mb-4 font-serif text-2xl">İletişim</h3>
          <div className="grid gap-3 text-white/72">
            <span>+90 232 712 34 56</span>
            <span>stay@iresinehotel.com</span>
            <span>Alaçatı Mah. 12000 Sk. No: 5, Çeşme</span>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-serif text-2xl">Bilgi</h3>
          <div className="grid gap-3 text-white/72">
            <span>Check-in 15:00</span>
            <span>Check-out 12:00</span>
            <span>Yetişkin dostu otel</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm text-white/45 sm:px-6 lg:px-8">© 2026 Iresine Hotel.</div>
    </footer>
  );
}
