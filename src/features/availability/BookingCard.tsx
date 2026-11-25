import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  AlertTriangle,
  BedDouble,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Mail,
  Moon,
  Users,
} from 'lucide-react';

import { Counter } from '@/src/components/ui';
import { rooms, todayIso, unavailableDates } from '@/src/data/hotel';
import {
  addDaysIso,
  addMonthsIso,
  formatDisplayDate,
  formatMonthTitle,
  getAvailability,
  getCalendarMonthDays,
  getMonthStartIso,
  getStayDates,
  isBeforeIso,
  isSameMonthIso,
} from '@/src/lib/availability';
import type { IconComponent } from '@/src/types';

const weekDays = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

export function BookingCard({
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
  const [calendarMonth, setCalendarMonth] = useState(() => getMonthStartIso(checkIn));
  const selectedRoom = rooms.find((room) => room.slug === roomSlug) ?? rooms[0];
  const availability = useMemo(() => getAvailability(roomSlug, checkIn, nights), [roomSlug, checkIn, nights]);
  const checkout = useMemo(() => addDaysIso(checkIn, nights), [checkIn, nights]);
  const calendarDays = useMemo(() => getCalendarMonthDays(calendarMonth), [calendarMonth]);
  const currentMonthStart = useMemo(() => getMonthStartIso(todayIso), []);
  const blockedDates = useMemo(() => new Set(unavailableDates[roomSlug] ?? []), [roomSlug]);
  const stayDateSet = useMemo(() => new Set(getStayDates(checkIn, nights)), [checkIn, nights]);
  const conflictSet = useMemo(() => new Set(availability.conflicts), [availability.conflicts]);
  const canShowPreviousMonth = calendarMonth > currentMonthStart;

  const handleSelectDate = (date: string) => {
    if (isBeforeIso(date, todayIso)) {
      return;
    }

    setCheckIn(date);
    setCalendarMonth(getMonthStartIso(date));
  };

  return (
    <motion.div
      id="booking"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18, duration: 0.65 }}
      className="self-start rounded-lg border border-ink/10 bg-white p-4 shadow-[0_24px_80px_rgba(11,41,49,.12)] sm:p-5 lg:p-6"
    >
      <div className="flex items-center justify-between gap-4 border-b border-sea/10 pb-4">
        <div>
          <p className="text-sm font-semibold text-aqua">Direkt rezervasyon</p>
          <h2 className="font-serif text-2xl text-ink">Tatilini planla</h2>
        </div>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sky/35 text-ink">
          <CalendarDays className="h-6 w-6" />
        </span>
      </div>

      <div className="mt-5 rounded-lg bg-cream p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase text-muted">Seçilen oda</p>
            <h3 className="mt-1 font-serif text-2xl text-ink">{selectedRoom.name}</h3>
            <p className="mt-1 text-sm leading-6 text-muted">{selectedRoom.tagline}</p>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-sea">{selectedRoom.price}</span>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          <SummaryPill icon={CalendarDays} label="Giriş" value={formatDisplayDate(checkIn)} />
          <SummaryPill icon={Moon} label="Çıkış" value={formatDisplayDate(checkout)} />
          <SummaryPill icon={Users} label="Konaklama" value={`${nights} gece / ${guests} misafir`} />
        </div>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="min-w-0 rounded-lg border border-sea/10 p-3 sm:p-4">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-sea/15 text-ink transition-colors hover:border-aqua hover:bg-sky/35 disabled:cursor-not-allowed disabled:opacity-35"
              onClick={() => setCalendarMonth((month) => addMonthsIso(month, -1))}
              disabled={!canShowPreviousMonth}
              aria-label="Önceki ay"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <strong className="text-center font-serif text-xl capitalize text-ink">{formatMonthTitle(calendarMonth)}</strong>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-sea/15 text-ink transition-colors hover:border-aqua hover:bg-sky/35"
              onClick={() => setCalendarMonth((month) => addMonthsIso(month, 1))}
              aria-label="Sonraki ay"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-[0.68rem] font-bold uppercase text-muted">
            {weekDays.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-7 gap-1.5">
            {calendarDays.map((date) => {
              const dayNumber = Number(date.slice(8, 10));
              const isPast = isBeforeIso(date, todayIso);
              const isCurrentMonth = isSameMonthIso(date, calendarMonth);
              const isSelectedStart = date === checkIn;
              const isInStay = stayDateSet.has(date);
              const isBlocked = blockedDates.has(date);
              const hasConflict = conflictSet.has(date);

              return (
                <button
                  key={date}
                  type="button"
                  className={calendarDayClassName({
                    isBlocked,
                    isCurrentMonth,
                    isInStay,
                    isPast,
                    isSelectedStart,
                    hasConflict,
                  })}
                  onClick={() => handleSelectDate(date)}
                  disabled={isPast}
                  aria-pressed={isSelectedStart}
                  aria-label={`${formatDisplayDate(date)} ${isBlocked ? 'dolu' : 'müsait'}`}
                >
                  {dayNumber}
                  {isBlocked && !isPast && (
                    <span className={classNames('absolute bottom-1.5 h-1.5 w-1.5 rounded-full', isSelectedStart ? 'bg-white' : 'bg-rose-500')} />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-muted">
            <LegendSwatch className="bg-sea" label="Giriş" />
            <LegendSwatch className="bg-mint ring-1 ring-aqua/25" label="Konaklama" />
            <LegendSwatch className="bg-rose-100 ring-1 ring-rose-200" label="Dolu" />
            <LegendSwatch className="bg-cream line-through ring-1 ring-sea/10" label="Geçmiş" />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-lg border border-sea/10 p-3">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-ink">
              <BedDouble className="h-4 w-4 text-aqua" />
              Oda tercihi
            </div>
            <div role="radiogroup" aria-label="Oda tercihi" className="grid gap-2">
              {rooms.map((room) => {
                const isSelected = room.slug === roomSlug;

                return (
                  <button
                    key={room.slug}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    className={classNames(
                      'rounded-lg border px-3 py-3 text-left transition-colors',
                      isSelected ? 'border-aqua bg-mint text-ink' : 'border-sea/10 bg-white text-ink hover:border-aqua/60 hover:bg-sky/20',
                    )}
                    onClick={() => setRoomSlug(room.slug)}
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span>
                        <span className="block text-sm font-bold">{room.name}</span>
                        <span className="mt-1 block text-xs leading-5 text-muted">{room.guests}</span>
                      </span>
                      <span className="whitespace-nowrap text-xs font-bold text-sea">{room.price}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Counter label="Gece" value={nights} min={1} max={14} onChange={setNights} />
            <Counter label="Misafir" value={guests} min={1} max={4} onChange={setGuests} />
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-lg bg-sea px-4 py-3 text-white">
        <span className="text-sm text-white/78">Tahmini toplam</span>
        <strong className="font-serif text-2xl">{estimate}</strong>
      </div>

      <div className={classNames('mt-4 rounded-lg border p-4', availability.available ? 'border-aqua/30 bg-mint text-ink' : 'border-rose-200 bg-rose-50 text-ink')}>
        <div className="flex gap-3">
          <span className={classNames('grid h-10 w-10 shrink-0 place-items-center rounded-full', availability.available ? 'bg-white text-sea' : 'bg-white text-rose-600')}>
            {availability.available ? <CheckCircle2 className="h-5 w-5" /> : <AlertTriangle className="h-5 w-5" />}
          </span>
          <div>
            <p className="font-serif text-2xl">{availability.available ? 'Bu tarih aralığı müsait görünüyor.' : 'Seçilen aralıkta dolu gün var.'}</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              {availability.available
                ? `${selectedRoom.name} için ${formatDisplayDate(checkIn)} girişli ${nights} gecelik konaklama ön uygunluk verdi. Kesin rezervasyon için otelle iletişime geçin.`
                : `${selectedRoom.name} için çakışan tarihler: ${availability.conflicts.map(formatDisplayDate).join(', ')}.`}
            </p>
            {!availability.available && (
              <div className="mt-3 flex flex-wrap gap-2">
                {availability.conflicts.map((date) => (
                  <span key={date} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-rose-700">
                    {formatDisplayDate(date)}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        <a href="mailto:stay@iresinehotel.com" className="btn-outline justify-center border-sea/20 text-sea hover:bg-sea hover:text-white">
          <Mail className="h-4 w-4" />
          E-posta gönder
        </a>
      </div>
    </motion.div>
  );
}

function SummaryPill({ icon: Icon, label, value }: { icon: IconComponent; label: string; value: string }) {
  return (
    <div className="flex min-h-14 items-center gap-3 rounded-lg bg-white px-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky/35 text-sea">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.68rem] font-bold uppercase text-muted">{label}</span>
        <strong className="block truncate text-sm text-ink">{value}</strong>
      </span>
    </div>
  );
}

function LegendSwatch({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={classNames('h-3 w-3 rounded-full', className)} />
      {label}
    </span>
  );
}

function calendarDayClassName({
  isBlocked,
  isCurrentMonth,
  isInStay,
  isPast,
  isSelectedStart,
  hasConflict,
}: {
  isBlocked: boolean;
  isCurrentMonth: boolean;
  isInStay: boolean;
  isPast: boolean;
  isSelectedStart: boolean;
  hasConflict: boolean;
}) {
  return classNames(
    'relative flex aspect-square min-h-9 items-center justify-center rounded-lg border text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua disabled:cursor-not-allowed sm:min-h-10',
    isPast && 'border-transparent bg-cream/60 text-muted/35 line-through',
    !isPast && !isCurrentMonth && 'border-sea/5 bg-white text-muted/45 hover:border-aqua/40 hover:text-ink',
    !isPast && isCurrentMonth && !isInStay && !isBlocked && 'border-sea/10 bg-white text-ink hover:border-aqua hover:bg-sky/25',
    !isPast && isBlocked && !hasConflict && 'border-rose-200 bg-rose-50 text-rose-700 hover:border-rose-300',
    !isPast && isInStay && !isSelectedStart && !hasConflict && 'border-aqua/30 bg-mint text-sea',
    !isPast && hasConflict && !isSelectedStart && 'border-rose-300 bg-rose-100 text-rose-800',
    !isPast && isSelectedStart && 'border-sea bg-sea text-white shadow-[0_10px_24px_rgba(11,111,120,.24)]',
  );
}

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}
