import { useEffect, useMemo, useState } from 'react';

import { Footer, PageCta, SiteHeader } from '@/src/components/layout';
import { rooms } from '@/src/data/hotel';
import {
  AvailabilityHeroSection,
  AvailabilitySection,
  ReservationFlowSection,
} from '@/src/features/availability';
import {
  AmenitiesSection,
  DiningSection,
  ExperienceHeroSection,
  ExperienceIntroSection,
  ExperienceRhythmSection,
  ServicePromiseSection,
} from '@/src/features/experience';
import { GalleryHeroSection, GallerySection } from '@/src/features/gallery';
import {
  HomeAmenitiesGallerySection,
  HomeHeroSection,
  HomeLinksSection,
  HomeLocationPreviewSection,
  HomeReservationCtaSection,
  HomeRhythmSection,
  HomeRoomsPreviewSection,
  HomeServicesSection,
  HomeStorySection,
} from '@/src/features/home';
import { LocalGuideSection, LocationContactSection, LocationHeroSection } from '@/src/features/location';
import { RoomComfortSection, RoomDetail, RoomShowcaseSection, RoomsHeroSection } from '@/src/features/rooms';
import { getPageFromPath, pagePaths } from '@/src/lib/navigation';
import type { Page, Room } from '@/src/types';

export default function App() {
  const [activePage, setActivePage] = useState<Page>(() => getPageFromPath(window.location.pathname));
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(3);
  const [checkIn, setCheckIn] = useState('2026-06-18');
  const [roomSlug, setRoomSlug] = useState(rooms[0].slug);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setSelectedRoom(null);
      setMobileMenuOpen(false);
      setActivePage(getPageFromPath(window.location.pathname));
      window.scrollTo({ top: 0 });
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (selectedRoom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedRoom]);

  const estimate = useMemo(() => {
    const baseNight = guests > 2 ? 245 : 210;
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(baseNight * nights);
  }, [guests, nights]);

  const navigateTo = (page: Page) => {
    setSelectedRoom(null);
    setActivePage(page);
    setMobileMenuOpen(false);
    if (window.location.pathname !== pagePaths[page]) {
      window.history.pushState({}, '', pagePaths[page]);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream text-ink selection:bg-aqua selection:text-white">
      <SiteHeader
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activePage={selectedRoom ? 'rooms' : activePage}
        onNavigate={navigateTo}
      />

      <main>
        {selectedRoom ? (
          <RoomDetail room={selectedRoom} onBack={() => navigateTo('rooms')} />
        ) : (
          <>
            {activePage === 'home' && (
              <>
                <HomeHeroSection onNavigate={navigateTo} />
                <HomeStorySection />
                <HomeRoomsPreviewSection onNavigate={navigateTo} />
                <HomeRhythmSection />
                <HomeServicesSection onNavigate={navigateTo} />
                <HomeAmenitiesGallerySection onNavigate={navigateTo} />
                <HomeLocationPreviewSection onNavigate={navigateTo} />
                <HomeReservationCtaSection onNavigate={navigateTo} />
                <HomeLinksSection onNavigate={navigateTo} />
              </>
            )}

            {activePage === 'experience' && (
              <>
                <ExperienceHeroSection onNavigate={navigateTo} />
                <ExperienceIntroSection />
                <ExperienceRhythmSection />
                <AmenitiesSection />
                <DiningSection />
                <ServicePromiseSection />
                <PageCta
                  title="Otel deneyimini oda seçimiyle tamamla."
                  copy="Avlu, havuz ve restoran akışını gördükten sonra sana uygun oda tipini karşılaştırabilirsin."
                  primaryLabel="Odaları gör"
                  primaryPage="rooms"
                  secondaryLabel="Boş gün kontrolü"
                  secondaryPage="availability"
                  onNavigate={navigateTo}
                />
              </>
            )}

            {activePage === 'availability' && (
              <>
                <AvailabilityHeroSection />
                <AvailabilitySection
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
                <ReservationFlowSection />
                <PageCta
                  title="Tarih uygunsa oda detaylarını da incele."
                  copy="Müsaitlik sonucu ön kontroldür; oda özelliklerini karşılaştırıp otelle iletişime geçebilirsin."
                  primaryLabel="Odaları karşılaştır"
                  primaryPage="rooms"
                  secondaryLabel="Konum ve iletişim"
                  secondaryPage="location"
                  onNavigate={navigateTo}
                />
              </>
            )}

            {activePage === 'rooms' && (
              <>
                <RoomsHeroSection onNavigate={navigateTo} />
                <RoomShowcaseSection onSelectRoom={setSelectedRoom} />
                <RoomComfortSection />
                <PageCta
                  title="Odanı seçtiysen boş günleri kontrol et."
                  copy="Seçtiğin oda tipi için statik takvim üzerinden hızlı ön müsaitlik alabilirsin."
                  primaryLabel="Müsaitlik kontrol et"
                  primaryPage="availability"
                  secondaryLabel="Galeriyi aç"
                  secondaryPage="gallery"
                  onNavigate={navigateTo}
                />
              </>
            )}

            {activePage === 'gallery' && (
              <>
                <GalleryHeroSection />
                <GallerySection />
                <PageCta
                  title="Fotoğraflardan sonra planı netleştir."
                  copy="Mekan hissini gördükten sonra oda tiplerine veya otelin konum bilgilerine geçebilirsin."
                  primaryLabel="Odaları gör"
                  primaryPage="rooms"
                  secondaryLabel="Konumu aç"
                  secondaryPage="location"
                  onNavigate={navigateTo}
                />
              </>
            )}

            {activePage === 'location' && (
              <>
                <LocationHeroSection />
                <LocationContactSection />
                <LocalGuideSection />
                <PageCta
                  title="Konum uygunsa tarih kontrolü yap."
                  copy="Alaçatı merkez ve çevre mesafelerini gördükten sonra seyahat tarihini kontrol edebilirsin."
                  primaryLabel="Boş gün kontrolü"
                  primaryPage="availability"
                  secondaryLabel="Otel deneyimi"
                  secondaryPage="experience"
                  onNavigate={navigateTo}
                />
              </>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
